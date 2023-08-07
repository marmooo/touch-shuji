const CACHE_NAME = "2023-08-07 13:30";
const urlsToCache = [
  "/touch-shuji/",
  "/touch-shuji/index.js",
  "/touch-shuji/drill.js",
  "/touch-shuji/drill/",
  "/touch-shuji/mp3/correct1.mp3",
  "/touch-shuji/mp3/correct3.mp3",
  "/touch-shuji/mp3/incorrect1.mp3",
  "/touch-shuji/mp3/stupid5.mp3",
  "/touch-shuji/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/signature_pad@4.1.6/dist/signature_pad.umd.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
