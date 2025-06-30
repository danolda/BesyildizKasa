// Service Worker'ın temel kurulumu için minimum kod
// Bu, uygulamanın "kurulabilir" olmasını sağlar.
// Şimdilik herhangi bir çevrimdışı önbellekleme yapmıyor.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Yüklendi');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Aktifleşti');
});

self.addEventListener('fetch', (event) => {
  // Şimdilik ağ isteklerine müdahale etmiyoruz.
  // Bu, sitenin normal şekilde çalışmaya devam etmesini sağlar.
});
