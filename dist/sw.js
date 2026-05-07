// Kocky sveta — service worker (cache-first pre statické assety)

const CACHE_NAME = 'kocky-sveta-v1.2.0';
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

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Bypass: Google Fonts requesty necháme prehliadač spracovať natívne
  const url = new URL(req.url);
  if (url.host.includes('fonts.googleapis.com') ||
      url.host.includes('fonts.gstatic.com')) {
    return;
  }

  // Iba GET requesty cache-ujeme
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Cache JS/CSS/HTML/images keď sú úspešné
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
          }
          return res;
        })
        .catch(() => {
          // Fallback na cached index.html pri navigation requestoch
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
