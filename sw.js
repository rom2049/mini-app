
// register service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

// sw.js

// install event
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('nom_du_cache')
        .then((cache) => {
          return cache.addAll([
            './',
            'service_worker.html',
            'style.css',
            'img/a.jpg',
            'img/b.jpg',
            'img/c.jpg',
            'img/d.jpg',
         ]);
        })
        .then(() => {
          return self.skipWaiting();
        })
    );
  });
  
  // fetch event
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  