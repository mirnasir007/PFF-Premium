const CACHE_NAME = "pff-app-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png"
];

// Install Service Worker
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
