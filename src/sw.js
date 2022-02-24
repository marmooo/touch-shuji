var CACHE_NAME = '2022-02-25 00:10';
var urlsToCache = [
  "/touch-shuji/",
  "/touch-shuji/index.js",
  "/touch-shuji/drill.js",
  "/touch-shuji/drill/",
  "/touch-shuji/svg/eraser.svg",
  "/touch-shuji/svg/dict.svg",
  "/touch-shuji/mp3/correct1.mp3",
  "/touch-shuji/mp3/correct3.mp3",
  "/touch-shuji/mp3/incorrect1.mp3",
  "/touch-shuji/mp3/stupid5.mp3",
  "/touch-shuji/favicon/original.svg",
  "https://cdn.jsdelivr.net/npm/signature_pad@4.0.2/dist/signature_pad.umd.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
