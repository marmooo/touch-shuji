const CACHE_NAME="2024-03-05 0:30",urlsToCache=["/touch-shuji/","/touch-shuji/index.js","/touch-shuji/drill.js","/touch-shuji/drill/","/touch-shuji/mp3/correct1.mp3","/touch-shuji/mp3/correct3.mp3","/touch-shuji/mp3/incorrect1.mp3","/touch-shuji/mp3/stupid5.mp3","/touch-shuji/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/signature_pad@4.1.7/dist/signature_pad.umd.min.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})