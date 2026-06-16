// ═══════════════════════════════════════════
// NAVIGASI TERPUSAT — Auto Mitra Utama
// Tambah halaman baru di sini saja!
// ═══════════════════════════════════════════

const AMU_PAGES = {
  'dashboard':    '/automitrautama/admin/dashboard.html',
  'kendaraan':    '/automitrautama/admin/kendaraan.html',
  'servis':       '/automitrautama/admin/servis.html',
  'sparepart':    '/automitrautama/admin/sparepart.html',
  'keuangan':     '/automitrautama/admin/keuangan.html',
  'laporan':      '/automitrautama/admin/laporan.html',
  'pelanggan':    '/automitrautama/admin/pelanggan.html',
  'staff':        '/automitrautama/admin/staff.html',
  'master-data':  '/automitrautama/admin/master-data.html',
  'pengaturan':   '/automitrautama/admin/pengaturan.html',
  'login':        '/automitrautama/index.html',
};

function goTo(page) {
  if (AMU_PAGES[page]) {
    window.location.href = AMU_PAGES[page];
  } else {
    alert(`Halaman "${page}" akan segera dibuat! 🚀`);
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sOverlay').classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sOverlay').classList.remove('show');
}
