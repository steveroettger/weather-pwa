const CACHE_NAME = 'weather-cache-v1';

var urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/styles.css',
  '/assets/images/nemours-reverse.png',
  '/assets/images/nemours-reverse@2x.png',
  '/assets/images/nemours-reverse@3x.png',
  '/assets/images/ring-alt@3x.gif',
  '/assets/images/about-hero.jpg',
  '/assets/images/contact-hero.jpg',
  '/assets/images/offline-hero.gif',
  'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900',
  '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  '//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'
];

if ('serviceWorker' in navigator) {
  /*
    google best practice recommends registering after page load
    https://developers.google.com/web/fundamentals/primers/service-workers/registration
  */
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

self.addEventListener('install', function(event) {
  console.log('Service worker install in progress');
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log(`Opened cache ${CACHE_NAME}`);
        return cache.addAll(urlsToCache).then(function() {
          console.log('URLs cached, install complete');
        }).catch(function(error) {
          console.log('Failed to cache urls', error);
        });
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log(`Checking cache for ${event.request.url}`);
        // Cache hit - return response
        if (response) {
          console.log(`Cache hit for ${event.request.url}`);
          return response;
        }
        console.log(`Cache miss for ${event.request.url}`);
        return fetch(event.request);
      }
    )
  );
});
