const CACHE_NAME = 'ara-spotter-v23';
const ASSETS = [
    './index.html',
    './icon.png',
    './manifest.json'
];

// Install: cache assets and immediately take over
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Don't wait for old SW to die
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(ASSETS);
            })
    );
});

// Fetch: Network-first for HTML, cache-first for static assets
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // For the main page (HTML), always try network first
    if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Got fresh copy — update cache and serve it
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => {
                    // Offline — fall back to cache
                    return caches.match(event.request);
                })
        );
        return;
    }

    // For everything else (icons, manifest), cache-first is fine
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

// Activate: purge old caches and take control immediately
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Purging old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of all tabs immediately
    );
});
