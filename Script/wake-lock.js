let wakeLock = null;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    console.log("Wake Lock aktif");
  } catch (err) {
    console.warn("Wake Lock gagal saat auto:", err.message);
  }
}

// Coba aktif otomatis saat halaman dibuka
requestWakeLock();

// Aktifkan ulang saat balik ke tab
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && wakeLock == null) {
    requestWakeLock();
  }
});

// Kalau auto gagal, aktifkan lewat klik satu kali
document.addEventListener("click", () => {
  if (wakeLock == null) {
    requestWakeLock();
  }
}, { once: true });
