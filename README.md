# Website Resmi Dukuh Kalimati
**Portal Informasi dan Pelayanan Masyarakat Pedukuhan Kalimati**

Website profil wilayah modern, profesional, informatif, dan responsif untuk Dukuh Kalimati. Dirancang khusus untuk mempermudah warga memperoleh informasi pengumuman, agenda gotong royong, pelayanan surat pengantar, pelacakan permohonan, serta potensi UMKM lokal.

---

## Fitur Utama

1. **Beranda Interaktif**:
   - Hero banner bertema pedesaan Indonesia dengan badge resmi dan statistik demografi wilayah.
   - Sambutan resmi Kepala Dukuh dengan layout editorial dua kolom.
   - Layanan Cepat Warga (6 layanan terpadu: Surat Pengantar, Domisili, SKTM, SKU, Pendaftaran Warga Baru, Pengaduan Lingkungan).
   - Berita & Pengumuman terkini dengan unboxed metadata dan pemisah tipografi bersih.
   - Ringkasan Profil Wilayah, batas administratif, dan sarana publik.
   - Etalase Potensi & UMKM Lokal dengan label penanda "Contoh Data".
   - Kalender & Agenda kegiatan warga dengan filter kategori.
   - Galeri Dokumentasi foto dengan modal Lightbox responsif.
   - Integrasi Peta Lokasi wilayah OpenStreetMap.
   - Call-to-Action partisipasi dan aspirasi warga.

2. **Halaman Khusus**:
   - `/profil`: Sejarah resmi, visi & misi, tabel demografi terperinci, batas wilayah, fasilitas umum, dan nilai kearifan lokal.
   - `/pemerintahan`: Struktur pamong dukuh, ketua RW/RT, PKK, Karang Taruna, serta uraian tugas pokok dan fungsi (tupoksi).
   - `/berita`: Arsip lengkap berita dengan fitur pencarian real-time, filter kategori, dan halaman baca artikel slug ramah SEO.
   - `/layanan`: Persyaratan surat, formulir pengajuan surat & pengaduan mandiri, komitmen perlindungan data, pelacak status tiket permohonan (misal `KLM-2026-001`), dan integrasi pesan WhatsApp.
   - `/potensi`: Katalog lengkap UMKM, pertanian pekarangan, dan produk lokal warga.
   - `/galeri`: Arsip album foto dokumentasi kegiatan gotong royong dengan filter kategori dan penampil resolusi tinggi.
   - `/kontak`: Alamat balai pertemuan, jam pelayanan kantor, kontak WhatsApp, email resmi, dan formulir hubungi pengurus.

3. **Dashboard Admin Pengurus (`/admin`)**:
   - Ringkasan statistik (total permohonan, berita, agenda, UMKM).
   - Kelola status permohonan warga (Menunggu, Diproses, Selesai, Ditolak) beserta catatan petugas.
   - Tambah, edit, dan hapus artikel berita & pengumuman (mendukung draft/publish).
   - Tambah dan kelola agenda kegiatan warga.
   - Kelola data pamong & struktur pengurus.
   - Tambah dokumentasi galeri foto.
   - Perbarui kontak WhatsApp resmi, alamat kantor, dan jam pelayanan secara langsung.
   - Penyimpanan lokal persisten (*localStorage*), perubahan langsung tercermin pada halaman publik.
   - Tombol *Reset ke Default* untuk mengembalikan data awal peragaan.

4. **Integrasi WhatsApp**:
   - Tombol melayang (*floating button*) di sudut kanan bawah dengan nomor telepon terpusat yang mudah dikonfigurasi.
   - Pesan otomatis dengan sopan santun untuk keperluan pelayanan dan pengaduan.

---

## Teknologi yang Digunakan

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Plus Jakarta Sans Typography
- **Ikon**: Lucide React
- **Peta**: OpenStreetMap Embed
- **Database (Siap Pakai)**: Supabase / PostgreSQL (`supabase/schema.sql`) dengan Row Level Security (RLS)

---

## Panduan Menjalankan Proyek Secara Lokal

### 1. Kloning Repositori
```bash
git clone https://github.com/username/website-resmi-dukuh-kalimati.git
cd website-resmi-dukuh-kalimati
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Akses aplikasi melalui peramban di `http://localhost:3000` atau port yang ditampilkan di terminal.

### 4. Build untuk Produksi
```bash
npm run build
```

---

## Konfigurasi Nomor WhatsApp & Kontak Resmi

Semua kontak dan identitas pedukuhan dapat disesuaikan melalui:
1. **Panel Admin Langsung**: Buka URL `/admin` (kata sandi demo: `adminkalimati`), lalu buka tab **Pengaturan Kontak**.
2. **File Kode**: Edit nilai default di `src/data/mockData.ts` pada objek `initialSettings`.

Format nomor WhatsApp pengurus:
```typescript
whatsappNumber: '6281234567890' // Awali dengan 62 tanpa simbol plus (+) atau spasi
```

---

## Konfigurasi Database Supabase (Opsi Backend Produksi)

Skema database lengkap telah disediakan di file `supabase/schema.sql`.

Langkah aktivasi Supabase:
1. Buat proyek baru di [Supabase Console](https://supabase.com).
2. Masuk ke menu **SQL Editor**.
3. Buka file `supabase/schema.sql`, salin seluruh kodenya, dan klik **Run**.
4. Skema akan membuat tabel:
   - `website_settings`
   - `village_profiles`
   - `officials`
   - `news`
   - `agendas`
   - `services`
   - `service_requests`
   - `local_businesses`
   - `gallery`
5. Kebijakan Row Level Security (RLS) sudah aktif secara default:
   - Pengunjung publik hanya dapat membaca data yang diterbitkan dan mengirim permohonan.
   - Hanya admin terautentikasi yang dapat mengubah data dan meninjau berkas warga.

---

## Panduan Deployment ke Vercel

1. Unggah kode ke repositori GitHub Anda.
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **Add New Project**.
3. Impor repositori GitHub tersebut.
4. Framework preset akan otomatis terdeteksi sebagai **Vite**.
5. Klik tombol **Deploy**. Proyek akan tayang secara langsung dengan sertifikat SSL gratis!

---

## Kebijakan Perlindungan Privasi & Keamanan Warga

Sesuai pedoman etika pelayanan publik:
- Portal tidak mempublikasikan data kependudukan privat seperti NIK atau dokumen pribadi ke ruang publik.
- Pengaduan dan formulir surat hanya ditujukan untuk verifikasi internal pengurus Dukuh Kalimati.
- Seluruh data contoh diberi penanda transparan **"Contoh Data"** sampai data sensus faktual diserahkan oleh pamong pedukuhan.
