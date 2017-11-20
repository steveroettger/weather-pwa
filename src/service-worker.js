const version = 'v2';

var cacheName = 'shell-content';
var filesToCache = [
	'/assets/images/*',
	'/styles.css',
	'/index.html',
	'/'
];

if ('serviceWorker' in navigator && 'PushManager' in window) {
	console.log('Service Worker and Push is supported');

	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
	  console.log('New Service Worker registered: ' + version);
	}).catch(function(err) {
	  console.log('Service Worker registration failed: ', err);
	});
}

// Cache App Shell Manually
self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install' + version);
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell' + version);
      return cache.addAll(filesToCache);
    })
  );
});

// Service Worker Usage
self.addEventListener('fetch', function(event){
	// check to see if app is offline
	if (!navigator.onLine) {
		event.respondWith(new Response('<h1 style="text-align:center;"> Offline :( </h1>', { headers: { 'Content-Type': 'text/html' } }));
	} else {
		console.log(event.request.url);

		// essentially a pass through of original request
		event.respondWith(fetch(event.request));
	}
});
