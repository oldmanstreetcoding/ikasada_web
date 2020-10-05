const CACHE_NAME = 'appikasada_v1';
const urlsToCache = [
    '/',
    '/manifest.json',
    '/icon.png',
    '/favicon.ico',
    '/index.html',
    '/pages/component/boxlogin.html',
    '/pages/component/nav.html',
    '/pages/profil/pengurus.html',
    '/pages/profil/sambutan.html',
    '/pages/profil/sejarah.html',
    '/pages/profil/visimisi.html',
    '/pages/beranda.html',
    '/pages/kontak.html',
    '/pages/layanan.html',
    '/pages/profil.html',
    '/css/materialize.min.css',
    '/css/styles.css',
    '/js/jquery-3.5.1.min.js',
    '/js/materialize.min.js',
    '/js/script.js',
    '/aset/images/beasiswa.jpg',
    '/aset/images/ijazah.jpg',
    '/aset/images/job.jpg',
    '/aset/images/ketua.jpg',
    '/aset/images/kta.jpg',
    '/aset/images/map2.png',
    '/aset/images/slide01.jpg',
    '/aset/images/slide02.jpg',
    '/aset/images/slide03.jpg',
    '/aset/images/slide04.jpg',
    '/aset/images/struktur.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then((response) => {
                if (response) {
                    console.log('ServiceWorker: Gunakan aset dari cache: ', response.url);
                    return response;
                }

                console.log(
                    'ServiceWorker: Memuat aset dari server: ',
                    event.request.url,
                );
                return fetch(event.request);
            }),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (cacheName != CACHE_NAME) {
                    console.log(`ServiceWorker: cache ${cacheName} dihapus`);
                    return caches.delete(cacheName);
                }
            }),
        )),
    );
});
