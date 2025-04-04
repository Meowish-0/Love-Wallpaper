const CACHE_NAME = 'pwa-cache-v2';

const urlsToCache = [
  './',
  './love-wallpaper.html',
  './manifest.json',
  'service-worker.js',
  './video-and-icon/arrow-more-icon.png',
  './video-and-icon/gif-question1.mp4',
  './video-and-icon/gif-question2.mp4',
  './video-and-icon/gif-question3.mp4',
  './video-and-icon/gif-question4.mp4',
  './video-and-icon/gif-result1.mp4',
  './video-and-icon/gif-result2.mp4',
  './video-and-icon/gif-result3.mp4',
  './video-and-icon/gif-result4.mp4'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
