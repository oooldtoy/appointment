self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwa-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'static/css/app.2e6bfe34408fba4194ca550c2bd769dd.css',
        'static/js/manifest.06a1ffbb70a28d4ba8ef.js',
        'static/js/vendor.4a1f448b533bb11cede5.js',
        'static/js/app.ed57ec4f925421679b80.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
