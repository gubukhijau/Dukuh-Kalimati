import {
  NewsItem,
  Official,
  ServiceRequirement,
  ServiceRequest,
  AgendaItem,
  LocalBusiness,
  GalleryItem,
  VillageProfile,
  WebsiteSettings,
} from '../types';

export const initialSettings: WebsiteSettings = {
  dukuhName: 'Dukuh Kalimati',
  tagline: 'Portal Informasi dan Pelayanan Masyarakat',
  address: 'Jl. Utama Kalimati RT 02 / RW 01, Wilayah Kalimati',
  postalCode: '55xxx (Placeholder Kode Pos)',
  officialPhone: '0812-3456-7890 (Placeholder Kontak)',
  whatsappNumber: '6281234567890', // Format internasional tanpa +, mudah diganti
  email: 'dukuh.kalimati@example.desa.id (Placeholder)',
  officeHours: 'Senin - Jumat: 08.00 - 15.00 WIB | Sabtu: 08.00 - 12.00 WIB',
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=110.3600%2C-7.7500%2C110.4200%2C-7.7000&layer=mapnik',
  mapLatitude: -7.7250,
  mapLongitude: 110.3900,
};

export const initialProfile: VillageProfile = {
  name: 'Dukuh Kalimati',
  dukuhName: 'Dukuh Kalimati',
  motto: 'Rukun, Mandiri, Berbudaya, dan Sejahtera',
  historyText:
    '[Placeholder Data Resmi Sejarah] Berdasarkan penuturan para sesepuh wilayah, penamaan Dukuh Kalimati berakar dari aliran sungai kecil atau sodetan alami yang mengalir melintasi lembah pedukuhan pada masa lampau. Seiring berkembangnya tata ruang pedukuhan, masyarakat secara turun-temurun mempertahankan tradisi gotong royong, pertanian sawah tadah hujan dan kebun pekarangan, serta kehidupan sosial yang guyub rukun. Ringkasan sejarah resmi yang telah disepakati sesepuh dan arsip desa dapat diperbarui secara mandiri melalui menu Pengaturan Admin.',
  vision:
    'Terwujudnya masyarakat Dukuh Kalimati yang rukun, amanah, mandiri, sejahtera, serta adaptif terhadap kemajuan teknologi berlandaskan kearifan lokal.',
  missions: [
    'Meningkatkan mutu pelayanan administrasi warga yang transparan, ramah, dan tepat waktu.',
    'Menghidupkan kembali semangat gotong royong dan kesadaran lingkungan bersih dan sehat.',
    'Mendukung pemberdayaan ekonomi warga melalui pendampingan UMKM dan optimalisasi potensi agrikultur lokal.',
    'Memperkuat sarana prasarana pedukuhan melalui partisipasi aktif masyarakat dan pemuda.',
    'Menjaga nilai-nilai kebersamaan, toleransi, serta kelestarian budaya lokal.',
  ],
  geographicDescription:
    '[Placeholder Kondisi Geografis] Dukuh Kalimati berada di wilayah dataran rendah agraris dengan kontur tanah relatif datar, dikelilingi lahan persawahan hijau, pekarangan warga yang rindang, dan saluran irigasi primer. Iklim tropis dengan dua musim mendukung aktivitas agrikultur dan pemukiman yang asri.',
  boundaries: {
    north: '[Placeholder] Berbatasan dengan Wilayah RT Tetangga / Area Persawahan Utara',
    south: '[Placeholder] Berbatasan dengan Jalan Poros Desa / Saluran Irigasi',
    east: '[Placeholder] Berbatasan dengan Lahan Pekarangan Dukuh Sebelah',
    west: '[Placeholder] Berbatasan dengan Batas Alur Sungai Alamiah',
  },
  facilities: [
    {
      name: 'Balai Pertemuan Warga (Pendopo Kalimati)',
      category: 'Fasilitas Pemerintahan & Sosial',
      description: 'Pusat musyawarah warga, kegiatan posyandu lansia, dan latihan kesenian.',
    },
    {
      name: 'Posyandu Terpadu & Balai Kesehatan',
      category: 'Kesehatan Warga',
      description: 'Pelayanan rutin penimbangan balita, gizi ibu menyusui, dan cek kesehatan lansia mingguan.',
    },
    {
      name: 'Masjid & Mushola Lingkungan',
      category: 'Tempat Ibadah',
      description: 'Pusat peribadatan dan pembinaan rohani warga di masing-masing rukun tetangga.',
    },
    {
      name: 'Lapangan Serbaguna Dukuh',
      category: 'Olahraga & Ruang Publik',
      description: 'Sarana olahraga bulutangkis, bola voli, senam pagi ibu-ibu, dan peringatan 17 Agustus.',
    },
    {
      name: 'Gardu Ronda & Pos Keamanan Terpadu',
      category: 'Keamanan Lingkungan',
      description: 'Titik kumpul ronda malam bergiliran demi menjaga ketertiban dan ketenteraman warga.',
    },
  ],
  demographics: {
    totalPopulation: 1420,
    totalHouseholds: 385,
    rtCount: 4,
    rwCount: 2,
    maleCount: 712,
    femaleCount: 708,
    updateDate: '10 Oktober 2026',
    isDummyNotice: 'Angka demografi di atas merupakan data perkiraan (dummy) untuk demonstrasi tata letak portal, dan siap diganti dengan sensus resmi dukuh.',
  },
  speech: {
    chiefName: '[Nama Kepala Dukuh]',
    chiefTitle: 'Kepala Dukuh Kalimati',
    chiefPeriod: 'Periode Jabatan Berjalan',
    speechText: [
      'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi Kita Semua, Om Swastiastu, Namo Buddhaya, Salam Kebajikan.',
      'Puji dan syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas karunia kesehatan, kerukunan, dan kebersamaan yang terus terjaga di lingkungan Dukuh Kalimati yang kita cintai ini.',
      'Kehadiran Website Resmi Dukuh Kalimati ini merupakan ikhtiar nyata kita bersama dalam mewujudkan keterbukaan informasi publik, kemudahan akses layanan administrasi warga, serta sarana promosi potensi dan kerajinan lokal. Kami ingin memastikan setiap warga, baik pemuda maupun sesepuh, dapat dengan mudah mengetahui agenda kegiatan, pengumuman penting, serta menyampaikan aspirasi konstruktif demi kemajuan pedukuhan.',
      'Mari terus kita rawat semangat gotong royong, kebersihan lingkungan, serta persaudaraan antarwarga. Semoga portal ini memberikan kemanfaatan yang seluas-luasnya bagi seluruh warga Dukuh Kalimati.',
      'Wassalamu’alaikum Warahmatullahi Wabarakatuh.',
    ],
  },
};

export const initialOfficials: Official[] = [
  {
    id: 'off-1',
    name: 'Bapak Sugiyanto, S.Sos.',
    role: 'Kepala Dukuh Kalimati',
    department: 'Pamong Wilayah',
    order: 1,
    phone: '0812-3456-7890 (Placeholder)',
    bio: 'Menjalankan tugas kepemimpinan wilayah pedukuhan, mengkoordinasikan ketertiban, pelayanan masyarakat, dan pembinaan kerukunan warga.',
    tupoksi: [
      'Memimpin dan mengkoordinasikan penyelenggaraan ketenteraman dan ketertiban pedukuhan.',
      'Menjadi jembatan komunikasi antara pemerintah kalurahan/desa dengan warga dukuh.',
      'Mengawasi pelaksanaan kegiatan kemasyarakatan, pembangunan sarana fisik, dan kegiatan sosial.',
    ],
  },
  {
    id: 'off-2',
    name: 'Ibu Rahayu Kusuma, S.Pd.',
    role: 'Sekretaris & Administrasi Dukuh',
    department: 'Tata Usaha & Pelayanan Warga',
    order: 2,
    phone: '0813-4567-8901 (Placeholder)',
    bio: 'Mengelola tata persuratan, buku register kependudukan, pengarsipan permohonan surat pengantar, dan administrasi umum dukuh.',
    tupoksi: [
      'Mencatat dan memverifikasi berkas permohonan surat pengantar RT/RW.',
      'Mengelola buku administrasi kependudukan dan inventarisasi aset balai pertemuan.',
      'Menyusun laporan berkala kegiatan pedukuhan.',
    ],
  },
  {
    id: 'off-3',
    name: 'Bapak H. Marsono',
    role: 'Ketua RW 01',
    department: 'Rukun Warga',
    order: 3,
    phone: '0814-5678-9012 (Placeholder)',
    bio: 'Mengkoordinir RT 01 dan RT 02 di sisi barat dan utara dukuh dalam program kebersihan dan kegiatan sosial.',
    tupoksi: [
      'Mengkoordinasikan musyawarah tingkat RT 01 dan RT 02.',
      'Menyampaikan masukan warga kepada Kepala Dukuh.',
      'Membantu penyelesaian perselisihan warga secara kekeluargaan.',
    ],
  },
  {
    id: 'off-4',
    name: 'Bapak Bambang Wijaya',
    role: 'Ketua RW 02',
    department: 'Rukun Warga',
    order: 4,
    phone: '0815-6789-0123 (Placeholder)',
    bio: 'Mengkoordinir RT 03 dan RT 04 di sisi timur dan selatan dukuh, membina kegiatan pemuda dan pos ronda.',
    tupoksi: [
      'Mengkoordinasikan musyawarah tingkat RT 03 dan RT 04.',
      'Mendorong keikutsertaan warga dalam ronda siskamling.',
      'Membantu pelaksanaan penyaluran bantuan sosial tepat sasaran.',
    ],
  },
  {
    id: 'off-5',
    name: 'Ibu Hj. Sri Lestari',
    role: 'Ketua Tim Penggerak PKK Dukuh',
    department: 'Pemberdayaan Kesejahteraan Keluarga',
    order: 5,
    bio: 'Menggerakkan program posyandu, ketahanan pangan pekarangan (KWT), dan pemberdayaan ekonomi perempuan.',
    tupoksi: [
      'Menyelenggarakan posyandu balita dan lansia teratur.',
      'Mengelola kebun bibit gizi keluarga.',
      'Pelatihan pengolahan pangan lokal untuk ibu-ibu rumah tangga.',
    ],
  },
  {
    id: 'off-6',
    name: 'Sdr. Aditya Pratama',
    role: 'Ketua Karang Taruna "Muda Mandiri"',
    department: 'Kepemudaan & Olahraga',
    order: 6,
    bio: 'Menggerakkan potensi kepemudaan dalam kegiatan olahraga, kepanitiaan hari besar nasional, dan bakti sosial lingkungan.',
    tupoksi: [
      'Mengorganisir partisipasi pemuda dalam gotong royong dan peringatan kemerdekaan.',
      'Membina klub olahraga bulutangkis dan voli pemuda dukuh.',
      'Mendampingi pengelolaan media informasi digital pedukuhan.',
    ],
  },
];

export const initialNews: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'jadwal-kerja-bakti-saluran-irigasi-persiapan-musim-tanam',
    title: 'Kerja Bakti Massal Pembersihan Saluran Irigasi dan Jalan Lingkungan Dukuh',
    category: 'Gotong Royong',
    summary:
      'Pengurus Dukuh Kalimati mengundang seluruh warga perwakilan tiap KK untuk mengikuti kerja bakti pembersihan selokan dan perapian pohon.',
    content: `Dalam rangka menyambut musim penghujan sekaligus persiapan musim tanam baru, Pengurus Dukuh Kalimati bersama seluruh jajaran Ketua RT 01 s/d RT 04 akan menyelenggarakan Kerja Bakti Massal pada hari Minggu pagi.

Fokus kegiatan meliputi:
1. Normalisasi saluran air primer di sepanjang jalan utama agar tidak terjadi genangan.
2. Pemangkasan ranting pohon yang menjorok ke kabel listrik dan badan jalan umum.
3. Pembersihan lingkungan di sekitar Balai Pertemuan dan Lapangan Olahraga.

Diharapkan setiap kepala keluarga mengirimkan sekurang-kurangnya satu orang perwakilan dengan membawa alat kerja kebersihan masing-masing seperti cangkul, sabit, atau sapu lidi. Konsumsi ringan dan minuman teh hangat akan disediakan di masing-masing pos RT. Mari kita rawat kebersihan dan kenyamanan dukuh kita secara bersama-sama.`,
    author: 'Sekretariat Dukuh',
    date: '15 Oktober 2026',
    readTime: '3 menit baca',
    isFeatured: true,
    status: 'published',
  },
  {
    id: 'news-2',
    slug: 'pengumuman-jadwal-layanan-posyandu-balita-dan-lansia',
    title: 'Pengumuman Jadwal Penimbangan Balita & Pemeriksaan Kesehatan Lansia Bulan Ini',
    category: 'Pengumuman',
    summary:
      'Layanan Posyandu Balita "Ceria" dan Posbindu Lansia akan dilaksanakan di Balai Pertemuan Dukuh dengan pemeriksaan tensi dan gula darah gratis.',
    content: `Diberitahukan kepada seluruh ibu-ibu yang memiliki balita usia 0-5 tahun serta warga lanjut usia di lingkungan Dukuh Kalimati, bahwa jadwal pelayanan Posyandu terpadu bulan ini akan dilaksanakan pada:

Hari/Tanggal: Rabu, 21 Oktober 2026
Waktu: Pukul 08.30 - 11.30 WIB
Tempat: Balai Pertemuan Dukuh Kalimati (Pendopo)

Fasilitas Pelayanan yang Disediakan:
- Penimbangan berat badan dan pengukuran tinggi/panjang badan balita.
- Pemberian Makanan Tambahan (PMT) bergizi berbahan dasar pangan lokal.
- Konsultasi tumbuh kembang anak oleh kader kesehatan desa.
- Pemeriksaan tekanan darah, kadar gula darah sewaktu, dan asam urat bagi lansia secara cuma-cuma.

Bagi warga yang membutuhkan pendampingan mobilitas untuk lansia, dipersilakan menghubungi kader posyandu di RT masing-masing.`,
    author: 'Kader Posyandu Kalimati',
    date: '12 Oktober 2026',
    readTime: '2 menit baca',
    isFeatured: true,
    status: 'published',
  },
  {
    id: 'news-3',
    slug: 'sosialisasi-pemutakhiran-data-warga-dan-bansos-tepat-sasaran',
    title: 'Sosialisasi Pemutakhiran Data Kependudukan dan Verifikasi Bantuan Sosial',
    category: 'Sosial & Kemasyarakatan',
    summary:
      'Pengurus dukuh bersama petugas pendata kalurahan membuka posko verifikasi data kependudukan dan usulan bantuan sosial agar tepat sasaran.',
    content: `Guna memastikan validitas data kependudukan dan penyaluran program bantuan sosial pemerintah pusat maupun kalurahan tepat sasaran, Pengurus Dukuh Kalimati mengadakan pemutakhiran data secara terbuka.

Warga yang mengalami perubahan status kependudukan (kelahiran, kepindahan, perkawinan, atau perubahan status pekerjaan) dimohon untuk melapor kepada Ketua RT setempat dengan membawa fotokopi Kartu Keluarga terbaru.

Bagi warga yang ingin mengecek status kepesertaan jaminan kesehatan PBI maupun bansos pangan, dapat berkonsultasi di Posko Pelayanan Sekretariat Dukuh setiap hari kerja. Keterbukaan informasi ini bertujuan menghindarkan salah sasaran dan memastikan warga yang berhak mendapatkan perhatian selayaknya.`,
    author: 'Seksi Sosial Masyarakat',
    date: '08 Oktober 2026',
    readTime: '3 menit baca',
    isFeatured: false,
    status: 'published',
  },
  {
    id: 'news-4',
    slug: 'musyawarah-pembangunan-paving-jalan-lingkungan-rt-03',
    title: 'Hasil Musyawarah Warga: Perbaikan Konblok Jalan Lingkungan RT 03 Dimulai Pekan Depan',
    category: 'Pembangunan Wilayah',
    summary:
      'Pemerintah kalurahan telah menyetujui alokasi material paving block untuk jalan lingkungan RT 03, pengerjaan dilakukan swadaya warga.',
    content: `Musyawarah warga pedukuhan yang diselenggarakan di Balai Pertemuan telah menyepakati bahwa proyek pembenahan jalan lingkungan gang RT 03 akan segera dimulai. Bantuan material paving block dari program swadaya desa telah tiba di lokasi.

Ketua RT 03 mengapresiasi kerelaan warga yang telah menyumbangkan tenaga dan swadaya pendamping. Pengerjaan dilakukan secara bertahap pada hari Sabtu dan Minggu agar tidak mengganggu aktivitas keseharian warga. Selama pengerjaan berlangsung, akses kendaraan roda empat dialihkan sementara melalui jalur barat pedukuhan.`,
    author: 'Tim Pelaksana Pembangunan',
    date: '03 Oktober 2026',
    readTime: '2 menit baca',
    isFeatured: false,
    status: 'published',
  },
  {
    id: 'news-5',
    slug: 'pelatihan-pembuatan-kompos-organik-kelompok-wanita-tani',
    title: 'Pelatihan Pembuatan Kompos Organik Skala Rumah Tangga bagi Kelompok Wanita Tani',
    category: 'Kegiatan Warga',
    summary:
      'Kelompok Wanita Tani (KWT) Dukuh Kalimati menggelar praktik mandiri pengolahan sampah organik dapur menjadi pupuk tanaman pekarangan bernilai guna.',
    content: `Sebagai langkah konkret mewujudkan dukuh yang asri dan berwawasan lingkungan, KWT Dukuh Kalimati mengadakan lokakarya praktis pembuatan pupuk kompos dengan ember tumpuk dan biopori.

Kegiatan ini diikuti oleh 30 peserta perwakilan perumahan warga. Sampah sisa sayuran dan daun kering yang sebelumnya dibakar kini dapat diolah menjadi pupuk cair dan padat yang menyuburkan tanaman cabai dan sayur di pekarangan rumah masing-masing, sekaligus menekan volume sampah yang dibuang ke tempat penampungan akhir.`,
    author: 'KWT Kalimati',
    date: '28 September 2026',
    readTime: '3 menit baca',
    isFeatured: false,
    status: 'published',
  },
];

export const initialServices: ServiceRequirement[] = [
  {
    id: 'srv-1',
    title: 'Surat Pengantar RT / Dukuh',
    category: 'Surat Pengantar',
    description:
      'Dokumen pengantar resmi untuk pengurusan KTP, KK, SKCK Kepolisian, Surat Pindah, atau keperluan administrasi di Kalurahan dan Kecamatan.',
    requirements: [
      'Fotokopi KTP Pemohon (atau KTP Kepala Keluarga)',
      'Fotokopi Kartu Keluarga (KK) terbaru',
      'Tanda lunas PBB tahun berjalan (jika disyaratkan kalurahan)',
      'Keterangan tujuan keperluan pembuatan surat',
    ],
    procedure: [
      'Pemohon mengisi formulir online di portal atau melapor langsung ke Ketua RT setempat.',
      'Ketua RT memeriksa kelengkapan berkas dan menandatangani formulir pengantar RT.',
      'Berkas dibawa atau diteruskan ke Sekretariat Dukuh untuk pengesahan tanda tangan Kepala Dukuh.',
      'Surat pengantar siap diambil untuk diajukan ke kantor Kalurahan / Kantor Kapanewon.',
    ],
    processingTime: '1 Hari Kerja (Setelah verifikasi berkas lengkap)',
    cost: 'Gratis (Rp 0,- / Bebas Pungutan)',
    contactPerson: 'Petugas Pelayanan: Ibu Rahayu (Sekretaris Dukuh)',
    isOnlineAvailable: true,
  },
  {
    id: 'srv-2',
    title: 'Surat Keterangan Domisili Warga',
    category: 'Kependudukan',
    description:
      'Surat keterangan yang menerangkan bahwa warga berdomisili atau tinggal di wilayah Dukuh Kalimati untuk keperluan perbankan, pekerjaan, atau sekolah.',
    requirements: [
      'Fotokopi KTP Elektronik',
      'Fotokopi Kartu Keluarga',
      'Surat izin tinggal dari pemilik tempat tinggal (khusus warga kos/kontrak)',
    ],
    procedure: [
      'Warga mengajukan permohonan melalui formulir web atau datang ke pengurus RT.',
      'Pengurus memverifikasi keberadaan fisik warga di lingkungan setempat.',
      'Diterbitkan surat keterangan domisili dengan nomor registrasi dukuh.',
    ],
    processingTime: '1 Hari Kerja',
    cost: 'Gratis (Rp 0,-)',
    contactPerson: 'Bapak Sugiyanto / Ibu Rahayu',
    isOnlineAvailable: true,
  },
  {
    id: 'srv-3',
    title: 'Surat Keterangan Tidak Mampu (SKTM Pengantar)',
    category: 'Bantuan Sosial',
    description:
      'Pengantar verifikasi faktual kondisi perekonomian keluarga untuk keperluan beasiswa pendidikan siswa, keringanan biaya rumah sakit, atau usulan bansos.',
    requirements: [
      'Fotokopi KK dan KTP orang tua / pemohon',
      'Surat keterangan penghasilan atau surat pernyataan tidak mampu bermaterai',
      'Foto rumah tampak depan (jika diminta verifikasi lanjutan)',
    ],
    procedure: [
      'Pengurus RT dan seksi sosial dukuh melakukan peninjauan kondisi lapangan secara bijak.',
      'Setelah diverifikasi memenuhi kriteria, dibuatkan surat pengantar SKTM.',
      'Pemohon membawa surat ke bagian sosial kantor kalurahan.',
    ],
    processingTime: '1 - 2 Hari Kerja',
    cost: 'Gratis (Rp 0,-)',
    contactPerson: 'Seksi Sosial Kemasyarakatan',
    isOnlineAvailable: false,
  },
  {
    id: 'srv-4',
    title: 'Surat Keterangan Usaha (SKU Pengantar)',
    category: 'Administrasi',
    description:
      'Pengantar keterangan kepemilikan usaha mikro atau rumahan di wilayah Dukuh Kalimati untuk pengajuan kredit usaha rakyat (KUR) atau izin usaha.',
    requirements: [
      'Fotokopi KTP dan KK Pelaku Usaha',
      'Alamat tempat usaha di lingkungan Dukuh Kalimati',
      'Foto kegiatan usaha atau tempat jualan',
    ],
    procedure: [
      'Pelaku usaha mengisi formulir data usaha.',
      'Pengurus RT memverifikasi operasional usaha.',
      'Pengurus dukuh menandatangani surat pengantar keterangan usaha.',
    ],
    processingTime: '1 Hari Kerja',
    cost: 'Gratis (Rp 0,-)',
    contactPerson: 'Sekretariat Dukuh',
    isOnlineAvailable: true,
  },
  {
    id: 'srv-5',
    title: 'Pendaftaran Pendataan Warga Baru',
    category: 'Kependudukan',
    description:
      'Layanan pendataan bagi warga yang baru pindah, mengontrak, atau berdomisili di lingkungan Dukuh Kalimati agar tercatat dalam buku induk warga.',
    requirements: [
      'Fotokopi Surat Pindah dari daerah asal (jika ada)',
      'Fotokopi KTP seluruh anggota keluarga yang tinggal',
      'Fotokopi KK terbaru',
      'Nomor telepon yang dapat dihubungi untuk koordinasi keamanan RT',
    ],
    procedure: [
      'Warga baru melapor ke Ketua RT setempat dalam waktu 3x24 jam sejak kedatangan.',
      'Ketua RT mencatat dan memberikan data ke sekretariat dukuh.',
      'Data dimasukkan dalam buku inventaris kependudukan dukuh.',
    ],
    processingTime: 'Langsung saat melapor',
    cost: 'Gratis (Rp 0,-)',
    contactPerson: 'Ketua RT setempat & Sekretaris Dukuh',
    isOnlineAvailable: true,
  },
  {
    id: 'srv-6',
    title: 'Layanan Pengaduan & Aspirasi Masyarakat',
    category: 'Pengaduan',
    description:
      'Kanal penyampaian saran, pengaduan fasilitas umum rusak (lampu jalan mati, sampah liar, saluran mampet), serta usulan kemajuan lingkungan.',
    requirements: [
      'Identitas pelapor (Nama & Nomor WA aktif)',
      'Lokasi detail kejadian/masalah di lingkungan dukuh',
      'Uraian masalah yang santun dan objektif',
      'Foto pendukung jika tersedia',
    ],
    procedure: [
      'Warga mengirimkan aduan via formulir web atau pesan langsung ke WhatsApp Pengurus.',
      'Aduan diverifikasi oleh petugas pedukuhan.',
      'Aduan diteruskan ke seksi terkait (pembangunan, keamanan, atau RT setempat) untuk tindak lanjut.',
      'Status aduan dapat dipantau langsung dengan kode tiket pengaduan.',
    ],
    processingTime: 'Respon awal dalam 1x24 jam',
    cost: 'Gratis (Rp 0,-)',
    contactPerson: 'Kepala Dukuh & Tim Pelayanan Warga',
    isOnlineAvailable: true,
  },
];

export const initialRequests: ServiceRequest[] = [
  {
    id: 'req-1',
    ticketCode: 'KLM-2026-001',
    applicantName: 'Siti Nurjanah',
    applicantPhone: '081298765432',
    address: 'RT 01, Dukuh Kalimati',
    serviceType: 'Surat Pengantar RT / Dukuh',
    notes: 'Keperluan perpanjangan KTP elektronik dan pengurusan kartu BPJS kesehatan keluarga.',
    status: 'Selesai',
    createdAt: '14 Oktober 2026, 09.30 WIB',
    adminNotes: 'Surat pengantar telah ditandatangani dan diambil oleh pemohon di sekretariat.',
  },
  {
    id: 'req-2',
    ticketCode: 'KLM-2026-002',
    applicantName: 'Eko Purnomo',
    applicantPhone: '082155443322',
    address: 'RT 03 Gang Melati, Dukuh Kalimati',
    serviceType: 'Layanan Pengaduan & Aspirasi Masyarakat',
    notes: 'Lampu penerangan jalan umum (PJU) dekat jembatan kecil padam sejak dua malam lalu, rawan saat malam gelap.',
    status: 'Diproses',
    createdAt: '16 Oktober 2026, 19.45 WIB',
    adminNotes: 'Sudah dikoordinasikan dengan petugas PLN dan seksi keamanan untuk penggantian bohlam hari ini.',
  },
  {
    id: 'req-3',
    ticketCode: 'KLM-2026-003',
    applicantName: 'Dewi Handayani',
    applicantPhone: '081377889900',
    address: 'RT 02, Dukuh Kalimati',
    serviceType: 'Surat Keterangan Usaha (SKU Pengantar)',
    notes: 'Pengantar permohonan modal usaha mikro keripik pisang olahan rumahan di bank.',
    status: 'Menunggu',
    createdAt: '17 Oktober 2026, 14.15 WIB',
    adminNotes: 'Menunggu tanda tangan pengantar Ketua RT 02.',
  },
];

export const initialAgenda: AgendaItem[] = [
  {
    id: 'agd-1',
    title: 'Kerja Bakti Massal Kebersihan Saluran & Lingkungan',
    category: 'Gotong Royong',
    date: 'Minggu, 25 Oktober 2026',
    time: '06.30 - 10.00 WIB',
    location: 'Sepanjang Jalan Utama & Balai Dukuh Kalimati',
    organizer: 'Pengurus Dukuh & Ketua RT 01-04',
    status: 'Akan Datang',
    description: 'Pembersihan saluran irigasi, pemangkasan ranting pohon, dan pembersihan sampah lingkungan.',
  },
  {
    id: 'agd-2',
    title: 'Pelayanan Posyandu Balita Ceria & Posbindu Lansia',
    category: 'Kegiatan Sosial',
    date: 'Rabu, 28 Oktober 2026',
    time: '08.30 - 11.30 WIB',
    location: 'Balai Pertemuan Dukuh (Pendopo)',
    organizer: 'Kader Kesehatan PKK Dukuh',
    status: 'Akan Datang',
    description: 'Penimbangan balita, PMT sehat, cek tensi darah, dan pemeriksaan gula darah berkala bagi lansia.',
  },
  {
    id: 'agd-3',
    title: 'Rapat Koordinasi Rencana Pembangunan Swadaya RT/RW',
    category: 'Rapat Warga',
    date: 'Jumat, 30 Oktober 2026',
    time: '19.30 - 21.30 WIB',
    location: 'Ruang Rapat Balai Pertemuan Dukuh',
    organizer: 'Kepala Dukuh & BPD Perwakilan Kalimati',
    status: 'Akan Datang',
    description: 'Evaluasi usulan fisik jalan konblok RT 03 dan rencana penerangan jalan lingkungan pedukuhan.',
  },
  {
    id: 'agd-4',
    title: 'Latihan Bersama Kesenian Karawitan Warga',
    category: 'Hari Besar',
    date: 'Sabtu, 17 Oktober 2026',
    time: '20.00 - 22.00 WIB',
    location: 'Pendopo Balai Pertemuan Dukuh',
    organizer: 'Paguyuban Seni Budaya Kalimati',
    status: 'Selesai',
    description: 'Pelestarian gending Jawa dan latihan instrumen gamelan oleh paguyuban warga pedukuhan.',
  },
];

export const initialBusinesses: LocalBusiness[] = [
  {
    id: 'biz-1',
    name: 'Keripik Pisang & Singkong Bu Sri',
    category: 'Kuliner',
    owner: 'Ibu Sri Wahyuni (Contoh Data)',
    description: 'Olahan keripik pisang renyah aneka rasa (manis karamel, gurih original, dan pedas manis) dari hasil kebun lokal.',
    phone: '0812-9988-7766 (Contoh Data)',
    address: 'RT 02, Dukuh Kalimati',
    priceRange: 'Rp 10.000 - Rp 25.000 / bungkus',
    isExample: true,
  },
  {
    id: 'biz-2',
    name: 'Sayur Segar & Beras Organik Kelompok Tani Makmur',
    category: 'Pertanian & Perkebunan',
    owner: 'Kelompok Tani Dukuh Kalimati (Contoh Data)',
    description: 'Beras menthik wangi hasil sawah lokal dan sayuran hijau bebas pestisida kimia berlebih yang dipetik segar setiap pagi.',
    phone: '0813-2233-4455 (Contoh Data)',
    address: 'Area Persawahan RT 01, Dukuh Kalimati',
    priceRange: 'Mulai Rp 14.000 / kg',
    isExample: true,
  },
  {
    id: 'biz-3',
    name: 'Anyaman Bambu & Besek Tradisional Mbah Kromo',
    category: 'Kerajinan',
    owner: 'Mbah Kromo Wiryo (Contoh Data)',
    description: 'Kerajinan wadah besek bambu ramah lingkungan, kukusan tradisional, dan tampah beras hasil anyaman tangan teliti.',
    phone: '0815-4433-2211 (Contoh Data)',
    address: 'RT 04, Dukuh Kalimati',
    priceRange: 'Rp 5.000 - Rp 35.000 / pcs',
    isExample: true,
  },
  {
    id: 'biz-4',
    name: 'Warung Makan & Jamu Tradisional Mbak Endang',
    category: 'Kuliner',
    owner: 'Mbak Endang (Contoh Data)',
    description: 'Menyajikan sayur lodeh ndeso, tempe garit goreng hangat, serta racikan jamu kunyit asam dan beras kencur segar.',
    phone: '0812-5566-7788 (Contoh Data)',
    address: 'Jalan Utama Kalimati RT 03',
    priceRange: 'Rp 3.000 - Rp 15.000',
    isExample: true,
  },
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Gotong Royong Pengecoran Jalan Lingkungan RT 02',
    category: 'Pembangunan',
    date: '10 September 2026',
    caption: 'Warga bahu-membahu meratakan cor semen jalan gang demi mempermudah akses kendaraan dan anak sekolah.',
  },
  {
    id: 'gal-2',
    title: 'Posyandu Terpadu & Senam Sehat Lansia di Balai Pertemuan',
    category: 'Sosial',
    date: '24 September 2026',
    caption: 'Kader posyandu dan ibu-ibu melaksanakan senam kebugaran dilanjutkan pemeriksaan kesehatan rutin.',
  },
  {
    id: 'gal-3',
    title: 'Pentas Seni Musik Tradisional Karang Taruna',
    category: 'Budaya',
    date: '18 Agustus 2026',
    caption: 'Semarak panggung hiburan kemerdekaan yang menampilkan kreativitas pemuda pemudi Dukuh Kalimati.',
  },
  {
    id: 'gal-4',
    title: 'Musyawarah Warga Penetapan Program Kerja Tahunan',
    category: 'Pemuda',
    date: '02 September 2026',
    caption: 'Suasana rembuk warga yang penuh keakraban di pendopo balai pertemuan dukuh bersama seluruh pamong.',
  },
  {
    id: 'gal-5',
    title: 'Kerja Bakti Bersih Selokan & Penanaman Pohon Peneduh',
    category: 'Gotong Royong',
    date: '15 Juli 2026',
    caption: 'Gerakan peduli lingkungan hijau menanam 50 bibit pohon buah di sepanjang jalan masuk pedukuhan.',
  },
  {
    id: 'gal-6',
    title: 'Kunjungan Edukasi Pertanian Organik KWT Kalimati',
    category: 'Sosial',
    date: '05 Agustus 2026',
    caption: 'Anggota KWT memanen cabai dan terong segar hasil pemanfaatan pekarangan rumah ramah lingkungan.',
  },
];
