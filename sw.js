var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/assets/css/bootstrap.min.css',
    '/assets/css/style.css',
    '/assets/js/jquery-3.5.1.min.js',
    '/assets/js/bootstrap.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();
  });
  
  /* Serve cached content when offline */
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
