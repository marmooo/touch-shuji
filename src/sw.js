const CACHE_NAME = "2024-11-11 09:00";
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
