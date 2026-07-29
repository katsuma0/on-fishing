#!/usr/bin/env node
/* Zero-dependency CI check for on-fishing (no browser, no npm install).
 *
 *   1. Every JS file passes `node --check` (syntax).
 *   2. The share module (share.js) loads, exposes its API, and its
 *      encode/decode round-trips unicode safely into a #/shared/ deep link.
 *   3. Every local file referenced by index.html (<script src>, <link href>)
 *      exists on disk, and share.js is loaded before app.js.
 *   4. Every local file precached by the service worker (sw.js SHELL) exists,
 *      and the cache version is declared.
 *   5. The catch-log storage key is present (guards an accidental rename).
 *
 * Regulation accuracy is checked separately by tools/check_regs.js.
 * Exit code is non-zero if anything fails.
 */
'use strict';
var cp = require('child_process');
var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var fails = [], passes = 0;
function ok(n) { passes++; console.log('  ✓ ' + n); }
function bad(n, d) { fails.push(n + (d ? ', ' + d : '')); console.log('  ✗ ' + n + (d ? ', ' + d : '')); }
function rel(p) { return path.join(ROOT, p); }

// ---- 1. syntax ----
console.log('\n[1] Syntax (node --check)');
['app.js', 'share.js', 'sw.js', 'data/regulations.js', 'data/fish.js', 'data/ecosystem.js',
 'tools/check.js', 'tools/check_regs.js'].forEach(function (f) {
  try { cp.execFileSync(process.execPath, ['--check', rel(f)], { stdio: 'pipe' }); ok(f); }
  catch (e) { bad(f, 'syntax error'); }
});

// ---- 2. share module ----
console.log('\n[2] Share module');
try {
  global.window = global.window || {};
  require(rel('share.js'));
  var OS = global.window.OnShare;
  if (!OS) bad('OnShare defined', 'window.OnShare missing');
  else {
    var need = ['config', 'encode', 'decode', 'link', 'makeCard', 'share'];
    var miss = need.filter(function (m) { return typeof OS[m] !== 'function'; });
    if (miss.length) bad('OnShare API', 'missing ' + miss.join(', ')); else ok('OnShare exposes ' + need.join('/'));
    var round = OS.decode(OS.encode({ t: 'fish-catch', sp: 'Walleye', x: 'ábc/+=' }));
    if (round && round.sp === 'Walleye' && round.x === 'ábc/+=') ok('encode/decode round-trips (unicode-safe)'); else bad('encode/decode', JSON.stringify(round));
    OS.config({ app: 'on-fishing', base: 'https://katsuma0.github.io/on-fishing/' });
    if (/on-fishing\/#\/shared\//.test(OS.link({ t: 'fish-catch' }))) ok('link builds a #/shared/ deep link'); else bad('link format', OS.link({ t: 'fish-catch' }));
  }
} catch (e) { bad('share module load', e.message); }

// ---- 3. index.html references ----
console.log('\n[3] index.html references');
try {
  var idx = fs.readFileSync(rel('index.html'), 'utf8');
  var refs = [];
  (idx.match(/(?:src|href)="([^"]+)"/g) || []).forEach(function (m) {
    var u = m.replace(/^(?:src|href)="/, '').replace(/"$/, '');
    if (/^(https?:|data:|mailto:|#|\/\/)/.test(u)) return;      // external / anchors
    refs.push(u.split('#')[0].split('?')[0]);
  });
  var idxMissing = refs.filter(function (u) { return u && !fs.existsSync(rel(u)); });
  if (idxMissing.length) bad('index.html references a missing file', idxMissing.join(', ')); else ok('all ' + refs.length + ' local references exist');
  if (/share\.js/.test(idx) && idx.indexOf('share.js') < idx.indexOf('app.js')) ok('share.js loads before app.js'); else bad('share.js order', 'missing or after app.js');
} catch (e) { bad('index.html', e.message); }

// ---- 4. service worker ----
console.log('\n[4] Service worker');
try {
  var sw = fs.readFileSync(rel('sw.js'), 'utf8');
  var cm = sw.match(/const CACHE = '([^']+)'/);
  if (cm) ok('cache version declared (' + cm[1] + ')'); else bad('cache version', 'no CACHE constant');
  var shell = (sw.match(/const SHELL = \[([\s\S]*?)\];/) || [])[1] || '';
  var locals = (shell.match(/'\.\/[^']*'/g) || []).map(function (s) { return s.replace(/'/g, '').replace(/^\.\//, ''); }).filter(Boolean);
  var swMissing = locals.filter(function (p) { return p && !fs.existsSync(rel(p)); });
  if (swMissing.length) bad('precached shell file missing', swMissing.join(', ')); else ok('all ' + locals.length + ' precached shell files exist');
  if (/'\.\/share\.js'/.test(sw)) ok('share.js is precached'); else bad('share.js precache', 'not in SHELL');
} catch (e) { bad('service worker', e.message); }

// ---- 5. catch-log storage key ----
console.log('\n[5] Catch log');
try {
  var appjs = fs.readFileSync(rel('app.js'), 'utf8');
  if (/onfish-catchlog/.test(appjs)) ok("catch-log storage key present ('onfish-catchlog')"); else bad('catch-log key', "expected 'onfish-catchlog'");
  if (/function catchlogBody\b/.test(appjs) && /function shareCatch\b/.test(appjs) && /function shareDay\b/.test(appjs)) ok('catch-log + share functions present'); else bad('catch-log functions', 'missing catchlogBody/shareCatch/shareDay');
} catch (e) { bad('catch log', e.message); }

// ---- report ----
console.log('\n' + (fails.length ? ('FAILED: ' + fails.length + ' check(s)\n - ' + fails.join('\n - ')) : ('ALL ' + passes + ' CHECKS PASSED')));
process.exit(fails.length ? 1 : 0);
