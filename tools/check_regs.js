#!/usr/bin/env node
/* Fishing regulation consistency checker.
 *
 * Audits data/regulations.js (what the app shows) against the scraped source
 * (fishing_zones_clean.json, the parsed 2026 PDF) and the hand-verified
 * corrections (corrections.json), and flags parse artefacts that hurt accuracy:
 * season/limit field contamination, a season hidden in the limits text,
 * truncated values, malformed limits, and empty fields. It also audits the
 * species the summary regulates as a combined group.
 *
 * Run: node tools/check_regs.js         (exit 1 if any ERROR-level issue)
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
function loadREG() {
  let REG;
  const src = fs.readFileSync(path.join(ROOT, 'data/regulations.js'), 'utf8');
  eval(src.replace(/^\/\*[\s\S]*?\*\/\s*/, '').replace('const REG', 'REG'));
  return REG;
}
function loadJSON(f) { return JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8')); }

const REG = loadREG();
const CLEAN = loadJSON('fishing_zones_clean.json');
const CORR = loadJSON('corrections.json');

// Entries the dense multi-column PDF truncates beyond what the repo data can
// recover. They are reported as "known, pending official-summary verification"
// so the tool stays green for CI while still surfacing them for a human to fill
// in from the official 2026 summary. Clear an entry once its value is verified.
const KNOWN = {
  // (all previously-pending entries have been verified against the official
  //  2026 summary and corrected; add an entry here only if a value genuinely
  //  cannot be recovered and is waiting on the source.)
};
const known = [];
const isKnown = (z, sp) => Object.prototype.hasOwnProperty.call(KNOWN, z + '|' + sp);

const errors = [];
const warns = [];
const info = [];
const E = (z, sp, msg) => (isKnown(z, sp) ? known : errors).push(`Zone ${z} [${sp}] ${msg}`);
const W = (z, sp, msg) => warns.push(`Zone ${z} [${sp}] ${msg}`);

const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
const WEEKDAYS = 'Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday';
// A season is well-formed if it is a fixed phrase, or it names months/weekdays
// (Ontario uses forms like "third Saturday in June to November 30" and
// "Friday before fourth Saturday in April to September 30").
const seasonLooksValid = (s) =>
  /^(open all year|closed all year|not specified)$/i.test(s) ||
  (new RegExp('(' + MONTHS + '|' + WEEKDAYS + ')', 'i').test(s) && !/\bS-\d|\bC-\d/.test(s));
const DATE_RANGE = new RegExp('(?:' + MONTHS + ')\\s+\\d{1,2}\\s+to\\s+', 'i');

// ---- 1. app matches its authority: the scraped source, overlaid with any
//         hand-verified correction. Drift from that is an error. ----
let rows = 0;
Object.keys(REG).forEach((z) => {
  const src = CLEAN[z];
  const corr = (CORR[z] && typeof CORR[z] === 'object') ? CORR[z] : {};
  (REG[z].species_regulations || []).forEach((s) => {
    rows++;
    if (!src) { E(z, s.species, 'zone missing from scraped source'); return; }
    const b = (src.species_regulations || []).find((x) => x.species === s.species);
    const c = corr[s.species] || {};
    if (!b && !c.season && !c.limits) { W(z, s.species, 'in app but not in scraped source or corrections'); return; }
    const wantSeason = c.season != null ? c.season : (b && b.season);
    const wantLimits = c.limits != null ? c.limits : (b && b.limits);
    if (wantSeason != null && s.season !== wantSeason) E(z, s.species, `season drifted: app=${JSON.stringify(s.season)} expected=${JSON.stringify(wantSeason)}`);
    if (wantLimits != null && s.limits !== wantLimits) E(z, s.species, 'limits drifted from the corrected source');
  });
});

// ---- 2. every hand-verified correction is applied ----
Object.keys(CORR).forEach((z) => {
  if (z === '_note' || !REG[z]) return;
  Object.keys(CORR[z]).forEach((sp) => {
    if (sp === '_full') return;
    const c = CORR[z][sp];
    const row = (REG[z].species_regulations || []).find((s) => s.species === sp);
    if (!row) { E(z, sp, 'has a hand-verified correction but no matching app row'); return; }
    if (c.season != null && row.season !== c.season) E(z, sp, 'correction season not applied');
    if (c.limits != null && row.limits !== c.limits) E(z, sp, 'correction limits not applied');
  });
});

// ---- 3. per-row field-quality checks ----
Object.keys(REG).forEach((z) => {
  (REG[z].species_regulations || []).forEach((s) => {
    const season = (s.season || '').trim();
    const limits = (s.limits || '').trim();
    const isAggregateLimitRow = /^Aggregate Limits/i.test(s.species);

    // a. a season leaked into the limits field
    if (/\bseason:/i.test(limits)) E(z, s.species, `limits field contains a season clause: ${JSON.stringify(limits)}`);
    // b. season is missing but recoverable from the limits text
    if (/not specified/i.test(season) && !isAggregateLimitRow) {
      if (/\bseason:/i.test(limits) || DATE_RANGE.test(limits)) E(z, s.species, 'season is "Not specified" but a date range/season is present in the limits text');
      else W(z, s.species, 'season is "Not specified" (confirm the species is genuinely unregulated/absent here)');
    }
    // c. limit syntax leaked into the season field
    if (/\bS-\d|\bC-\d/.test(season)) E(z, s.species, 'season field contains catch-limit syntax');
    // d. truncation: dangling connector or partial trailing token
    if (limits && /(?:,|\band|\bthe|\bto|\bof|\bor|\bnot|\bfrom|\bgreater|\bthan|-)$/i.test(limits)) E(z, s.species, `limits look truncated (dangling end): ${JSON.stringify(limits.slice(-40))}`);
    if (season && /(?:,|\band|\bto|\bin|\bof|\bthe)$/i.test(season)) E(z, s.species, `season looks truncated: ${JSON.stringify(season)}`);
    // e. malformed limits (no catch code and not a recognised note)
    if (limits && !/S-\d|C-\d|not specified|closed|no limit|catch[- ]and[- ]release|barbless|slot/i.test(limits)) W(z, s.species, `limits have no S-/C- code: ${JSON.stringify(limits.slice(0, 60))}`);
    // f. an aggregate-limit phrase on a single-species row (contamination)
    if (!isAggregateLimitRow && /total daily catch|aggregate/i.test(limits)) W(z, s.species, 'limits carry aggregate-limit phrasing; confirm this is the species-specific limit');
    // g. empty
    if (!season) E(z, s.species, 'empty season');
    if (!limits) E(z, s.species, 'empty limits');
    // h. season grammar
    if (season && !seasonLooksValid(season)) W(z, s.species, `season does not look well-formed: ${JSON.stringify(season.slice(0, 60))}`);
  });
});

// ---- 4. aggregate audit: which species are regulated as a combined group ----
const aggregates = {};
Object.keys(REG).forEach((z) => {
  (REG[z].species_regulations || []).forEach((s) => {
    if (/ and | & |combined|\//i.test(s.species) && !/^Aggregate Limits/i.test(s.species)) {
      (aggregates[s.species] = aggregates[s.species] || []).push(z);
    }
  });
});
Object.keys(aggregates).forEach((name) => {
  info.push(`combined "${name}" in zones ${aggregates[name].join(',')} (season shared; the catch limit is a shared pool, not per-species)`);
});

// ---- report ----
const line = '─'.repeat(64);
console.log(line + `\nFishing regulation check — ${rows} species rows across ${Object.keys(REG).length} zones\n` + line);
console.log(`\nERRORS: ${errors.length}`);
errors.forEach((e) => console.log('  ✗ ' + e));
console.log(`\nKNOWN (pending official-summary verification): ${known.length}`);
known.forEach((k) => console.log('  ~ ' + k));
Object.keys(KNOWN).forEach((k) => { const [z, sp] = k.split('|'); console.log(`      Zone ${z} [${sp}]: ${KNOWN[k]}`); });
console.log(`\nWARNINGS: ${warns.length}`);
warns.forEach((w) => console.log('  ! ' + w));
console.log(`\nAGGREGATE AUDIT: ${info.length}`);
info.forEach((i) => console.log('  • ' + i));
console.log('\n' + line);
console.log(errors.length ? `FAIL: ${errors.length} error(s)` : 'PASS: no errors');
process.exit(errors.length ? 1 : 0);
