/* Service worker: serves the app shell offline after the first visit.
   - App shell (same-origin, including the vendored Leaflet, and the FMZ
     boundary geojson if same-origin) is precached on install and refreshed
     in the background with a stale-while-revalidate strategy.
   - Cross-origin requests (CARTO basemap tiles) are left to the browser and
     never cached here: caching opaque responses padded the cache by
     megabytes per tile and risked a storage-quota blowout on a map pan.
   Note: service workers only run over http(s) (e.g. GitHub Pages), not from a
   file:// path. */
const CACHE = 'onfish-v0.99';
const SHELL = ['./', './index.html', './assets/ios.css', './assets/icons.svg',
  './assets/fonts/lato-400.woff2', './assets/fonts/lato-700.woff2',
  './assets/fonts/noto-400.woff2', './assets/fonts/noto-400i.woff2',
  './assets/fonts/noto-700.woff2',
  './share.js', './app.js',
  './data/regulations.js', './data/fish.js', './data/ecosystem.js',
  './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  './vendor/leaflet/leaflet.js',
  './vendor/leaflet/images/marker-icon.png', './vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png', './vendor/leaflet/images/layers.png',
  './vendor/leaflet/images/layers-2x.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // same-origin only: caching opaque cross-origin CARTO tiles padded the
  // versioned cache by megabytes per tile and risked a storage-quota blowout
  // on a map pan. Tiles go straight to the browser.
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request);
    // the refresh bypasses the HTTP cache so a changed app.js reaches users
    const network = fetch(e.request, { cache: 'no-store' })
      .then(resp => {
        if (resp && resp.ok) cache.put(e.request, resp.clone());
        return resp;
      })
      .catch(() => cached);
    return cached || network;   // serve cache first, refresh in background
  }));
});
