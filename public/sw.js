// Kocky sveta — service worker
//
// Stratégia:
// - navigácie a index.html: network-first (nová verzia hneď po deployi),
//   offline sa použije posledná uložená verzia
// - /assets/* (súbory s hashom v názve sa nikdy nemenia): cache-first
// - ostatné GET: network-first so záložnou cache
// Verziu cache (__BUILD_ID__) dosadí pri builde plugin vo vite.config.js,
// takže každý deploy nainštaluje nový service worker a zmaže staré cache.

const CACHE_NAME = 'kocky-sveta-__BUILD_ID__';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Uložiť iba odpovede, ktoré zodpovedajú požiadavke. SPA fallback servera
// vracia pre chýbajúci JS chunk index.html (200 text/html) – ten sa nesmie
// uložiť pod URL .js súboru.
function isCacheable(req, res) {
  if (!res || res.status !== 200 || res.type !== 'basic') return false;
  const type = res.headers.get('content-type') || '';
  const path = new URL(req.url).pathname;
  if (/\.(m?js)$/.test(path)) return type.includes('javascript');
  if (/\.css$/.test(path)) return type.includes('css');
  return true;
}

function putInCache(req, res) {
  if (!isCacheable(req, res)) return;
  const clone = res.clone();
  caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
}

async function networkFirst(req, fallbackUrl) {
  try {
    const res = await fetch(req);
    putInCache(req, res);
    return res;
  } catch {
    const cached = (await caches.match(req)) || (fallbackUrl ? await caches.match(fallbackUrl) : undefined);
    return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Iné domény (Google Fonts, Firebase, /api) nechávame prehliadaču.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    event.respondWith(networkFirst(req, './index.html'));
    return;
  }

  if (url.pathname.includes('/assets/')) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => { putInCache(req, res); return res; }))
    );
    return;
  }

  event.respondWith(networkFirst(req));
});
