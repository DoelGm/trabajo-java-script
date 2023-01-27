const STATIC_CACHE = "static";
// se decalara un vector co la ubicacion y el nombre de los links
const APP_SHELL =[
    "index.html",
    "funtions.js",
    "manifest.json",
    "estilo.css",
    "script1.js",
    "main.js", 
    "script1.js",
    "script2.js",
    "Images/beerjs-logo.png"
];
// el evento install se agrega los archivos a las cache

self.addEventListener("install", (e) => {
    const cacheStatic = caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL));
    e.waitUntil(cacheStatic);
});
//en el evento fetch 
self.addEventListener("fetch", (e) => {
    console.log("fectch!", e.request);
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request)).catch(console.log));
});
