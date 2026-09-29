// 서비스 워커: 앱 파일을 캐시에 저장해 오프라인에서도 열리게 한다
// 캐시 이름. 파일을 고쳐 배포할 때 이 값을 올려야 이미 설치된 기기도 새 파일을 받는다
const CACHE = "shukatsu-dash-v1";
// 오프라인용으로 미리 캐시해 둘 파일 목록
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).then(r => {
      const cp = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
