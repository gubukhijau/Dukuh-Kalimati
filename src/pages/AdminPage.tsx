import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  NewsItem,
  AgendaItem,
  Official,
  GalleryItem,
  NewsCategory,
  ServiceRequest,
} from '../types';
import {
  Shield,
  LayoutDashboard,
  Newspaper,
  Calendar,
  FileCheck,
  Users,
  Image as ImageIcon,
  Settings,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Eye,
  Info,
} from 'lucide-react';

type AdminTab =
  | 'overview'
  | 'news'
  | 'agenda'
  | 'requests'
  | 'officials'
  | 'gallery'
  | 'profile'
  | 'settings';

export const AdminPage: React.FC = () => {
  const {
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    resetToDefaults,
    news,
    agenda,
    requests,
    officials,
    gallery,
    businesses,
    profile,
    settings,
    addNews,
    updateNews,
    deleteNews,
    addAgenda,
    updateAgenda,
    deleteAgenda,
    updateRequestStatus,
    deleteRequest,
    addOfficial,
    updateOfficial,
    deleteOfficial,
    addGalleryItem,
    deleteGalleryItem,
    updateSettings,
    updateProfile,
    navigate,
    showToast,
  } = useApp();

  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // News Modal / Form State
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState<NewsCategory>('Pengumuman');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('Sekretariat Dukuh');
  const [newsStatus, setNewsStatus] = useState<'published' | 'draft'>('published');

  // Agenda Modal / Form State
  const [agendaModalOpen, setAgendaModalOpen] = useState(false);
  const [agendaTitle, setAgendaTitle] = useState('');
  const [agendaCategory, setAgendaCategory] = useState<AgendaItem['category']>('Gotong Royong');
  const [agendaDate, setAgendaDate] = useState('');
  const [agendaTime, setAgendaTime] = useState('');
  const [agendaLocation, setAgendaLocation] = useState('Balai Pertemuan Dukuh Kalimati');
  const [agendaOrganizer, setAgendaOrganizer] = useState('Pengurus Dukuh');
  const [agendaDesc, setAgendaDesc] = useState('');

  // Gallery Modal
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryCategory, setGalleryCategory] = useState<GalleryItem['category']>('Gotong Royong');
  const [galleryDate, setGalleryDate] = useState('');
  const [galleryCaption, setGalleryCaption] = useState('');

  // Official Modal State
  const [officialModalOpen, setOfficialModalOpen] = useState(false);
  const [editingOfficialId, setEditingOfficialId] = useState<string | null>(null);
  const [officialName, setOfficialName] = useState('');
  const [officialRole, setOfficialRole] = useState('');
  const [officialDepartment, setOfficialDepartment] = useState('Pamong Wilayah');
  const [officialOrder, setOfficialOrder] = useState<number>(1);
  const [officialPhone, setOfficialPhone] = useState('');
  const [officialBio, setOfficialBio] = useState('');
  const [officialTupoksiText, setOfficialTupoksiText] = useState('');

  // Settings State
  const [formWaNumber, setFormWaNumber] = useState(settings.whatsappNumber);
  const [formPhone, setFormPhone] = useState(settings.officialPhone);
  const [formAddress, setFormAddress] = useState(settings.address);
  const [formHours, setFormHours] = useState(settings.officeHours);

  // Profile Speech State
  const [formChiefName, setFormChiefName] = useState(profile.speech.chiefName);
  const [formChiefTitle, setFormChiefTitle] = useState(profile.speech.chiefTitle);
  const [formChiefPeriod, setFormChiefPeriod] = useState(profile.speech.chiefPeriod);
  const [formVision, setFormVision] = useState(profile.vision);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginAdmin(passwordInput);
    setPasswordInput('');
  };

  // Open News Edit
  const handleOpenEditNews = (item: NewsItem) => {
    setEditingNewsId(item.id);
    setNewsTitle(item.title);
    setNewsCategory(item.category);
    setNewsSummary(item.summary);
    setNewsContent(item.content);
    setNewsAuthor(item.author);
    setNewsStatus(item.status);
    setNewsModalOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim()) {
      showToast('Judul berita tidak boleh kosong', 'error');
      return;
    }
    const slug = newsTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const dateStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    if (editingNewsId) {
      updateNews(editingNewsId, {
        title: newsTitle,
        category: newsCategory,
        summary: newsSummary,
        content: newsContent,
        author: newsAuthor,
        status: newsStatus,
      });
    } else {
      addNews({
        title: newsTitle,
        slug,
        category: newsCategory,
        summary: newsSummary,
        content: newsContent,
        author: newsAuthor,
        date: dateStr,
        readTime: '3 menit baca',
        status: newsStatus,
      });
    }

    setNewsModalOpen(false);
    setEditingNewsId(null);
  };

  const handleSaveAgenda = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agendaTitle.trim()) {
      showToast('Nama agenda tidak boleh kosong', 'error');
      return;
    }
    addAgenda({
      title: agendaTitle,
      category: agendaCategory,
      date: agendaDate || 'Minggu Depan',
      time: agendaTime || '08.00 WIB - Selesai',
      location: agendaLocation,
      organizer: agendaOrganizer,
      status: 'Akan Datang',
      description: agendaDesc,
    });
    setAgendaModalOpen(false);
    setAgendaTitle('');
    setAgendaDesc('');
  };

  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryTitle.trim()) {
      showToast('Judul dokumentasi tidak boleh kosong', 'error');
      return;
    }
    addGalleryItem({
      title: galleryTitle,
      category: galleryCategory,
      date: galleryDate || 'Bulan Ini',
      caption: galleryCaption,
    });
    setGalleryModalOpen(false);
    setGalleryTitle('');
    setGalleryCaption('');
  };

  // Official CRUD Handlers
  const handleOpenAddOfficial = () => {
    setEditingOfficialId(null);
    setOfficialName('');
    setOfficialRole('');
    setOfficialDepartment('Pamong Wilayah');
    setOfficialOrder(officials.length + 1);
    setOfficialPhone('');
    setOfficialBio('');
    setOfficialTupoksiText('');
    setOfficialModalOpen(true);
  };

  const handleOpenEditOfficial = (off: Official) => {
    setEditingOfficialId(off.id);
    setOfficialName(off.name);
    setOfficialRole(off.role);
    setOfficialDepartment(off.department);
    setOfficialOrder(off.order);
    setOfficialPhone(off.phone || '');
    setOfficialBio(off.bio || '');
    setOfficialTupoksiText(off.tupoksi ? off.tupoksi.join('\n') : '');
    setOfficialModalOpen(true);
  };

  const handleSaveOfficial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!officialName.trim()) {
      showToast('Nama pengurus tidak boleh kosong', 'error');
      return;
    }
    if (!officialRole.trim()) {
      showToast('Jabatan pengurus tidak boleh kosong', 'error');
      return;
    }

    const tupoksiList = officialTupoksiText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const defaultTupoksi = ['Menjalankan fungsi pelayanan dan ketertiban warga pedukuhan.'];

    if (editingOfficialId) {
      updateOfficial(editingOfficialId, {
        name: officialName.trim(),
        role: officialRole.trim(),
        department: officialDepartment.trim(),
        order: Number(officialOrder) || 1,
        phone: officialPhone.trim() || undefined,
        bio: officialBio.trim(),
        tupoksi: tupoksiList.length > 0 ? tupoksiList : defaultTupoksi,
      });
      showToast(`Data pengurus "${officialName}" berhasil diperbarui`, 'success');
    } else {
      addOfficial({
        name: officialName.trim(),
        role: officialRole.trim(),
        department: officialDepartment.trim(),
        order: Number(officialOrder) || (officials.length + 1),
        phone: officialPhone.trim() || undefined,
        bio: officialBio.trim(),
        tupoksi: tupoksiList.length > 0 ? tupoksiList : defaultTupoksi,
      });
      showToast(`Pengurus baru "${officialName}" berhasil ditambahkan`, 'success');
    }
    setOfficialModalOpen(false);
  };

  const handleDeleteOfficial = (id: string, name: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus pengurus "${name}" dari data wilayah?`)) {
      deleteOfficial(id);
      showToast(`Pengurus "${name}" berhasil dihapus`, 'info');
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      whatsappNumber: formWaNumber,
      officialPhone: formPhone,
      address: formAddress,
      officeHours: formHours,
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      vision: formVision,
      speech: {
        ...profile.speech,
        chiefName: formChiefName,
        chiefTitle: formChiefTitle,
        chiefPeriod: formChiefPeriod,
      },
    });
  };

  // If not logged in, render Secure Login UI with demo disclosure
  if (!isAdminLoggedIn) {
    return (
      <div className="bg-[#FBFDFB] min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-emerald-900/15 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-emerald-800" />
            </div>
            <h1 className="text-xl font-extrabold text-slate-900">
              Dashboard Pengurus Dukuh
            </h1>
            <p className="text-xs text-slate-600">
              Pusat kelola informasi resmi, permohonan warga, pengumuman, dan pengaturan website Dukuh Kalimati.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Kata Sandi Akses Pengurus
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-emerald-800 focus:border-emerald-800 font-mono"
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              Masuk ke Panel Pengurus
            </button>
          </form>

          {/* Educational notice regarding demo authentication */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Petunjuk Akses Mode Demonstrasi:</span>
            </div>
            <p className="text-[11px] text-amber-900/80 leading-relaxed">
              Kata sandi pengurus demo: <code className="bg-white px-1.5 py-0.5 rounded border border-amber-300 font-bold">adminkalimati</code> atau <code className="bg-white px-1.5 py-0.5 rounded border border-amber-300 font-bold">admin</code>.
            </p>
            <p className="text-[10px] text-slate-500 pt-1 border-t border-amber-200/80">
              Catatan: Skema SQL Supabase & RLS tersedia di folder <code>supabase/schema.sql</code> untuk implementasi produksi.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Logged-in Admin Dashboard Layout
  return (
    <div className="bg-[#F8FAF8] min-h-screen pb-16">
      {/* Admin Subheader Bar */}
      <div className="bg-emerald-950 text-white border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-emerald-800 rounded-md">
              <Shield className="w-4 h-4 text-amber-300" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                PANEL PENGURUS DUKUH KALIMATI
              </span>
              <span className="text-[11px] text-emerald-200">
                Mode Kelola Langsung (Tersimpan Otomatis ke Penyimpanan Lokal)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('home')}
              className="px-3 py-1.5 rounded-md bg-emerald-900 hover:bg-emerald-800 text-xs text-emerald-100 flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lihat Website</span>
            </button>
            <button
              onClick={resetToDefaults}
              title="Kembalikan semua data ke default awal"
              className="px-3 py-1.5 rounded-md bg-emerald-900 hover:bg-emerald-800 text-xs text-amber-300 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Awal</span>
            </button>
            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-md bg-rose-900/80 hover:bg-rose-800 text-xs text-white flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-6 border-b border-slate-200">
          {[
            { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard },
            { id: 'requests', label: `Permohonan Warga (${requests.length})`, icon: FileCheck },
            { id: 'news', label: `Berita & Pengumuman (${news.length})`, icon: Newspaper },
            { id: 'agenda', label: `Agenda (${agenda.length})`, icon: Calendar },
            { id: 'officials', label: 'Data Pengurus', icon: Users },
            { id: 'gallery', label: 'Galeri Foto', icon: ImageIcon },
            { id: 'profile', label: 'Profil & Sambutan', icon: Shield },
            { id: 'settings', label: 'Pengaturan Kontak', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">Permohonan Warga</span>
                <div className="text-2xl font-bold font-mono text-emerald-900">{requests.length}</div>
                <span className="text-[11px] text-amber-600 font-semibold">
                  {requests.filter((r) => r.status === 'Menunggu').length} Menunggu Verifikasi
                </span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">Berita & Pengumuman</span>
                <div className="text-2xl font-bold font-mono text-emerald-900">{news.length}</div>
                <span className="text-[11px] text-slate-500">
                  {news.filter((n) => n.status === 'published').length} Terbit
                </span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">Agenda Kegiatan</span>
                <div className="text-2xl font-bold font-mono text-emerald-900">{agenda.length}</div>
                <span className="text-[11px] text-slate-500">Jadwal Kalender</span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">Potensi UMKM</span>
                <div className="text-2xl font-bold font-mono text-emerald-900">{businesses.length}</div>
                <span className="text-[11px] text-slate-500">Usaha Lokal Terdata</span>
              </div>
            </div>

            {/* Recent Requests Table */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Permohonan Warga Terbaru Masuk
                </h3>
                <button
                  onClick={() => setActiveTab('requests')}
                  className="text-xs font-bold text-emerald-800 hover:underline"
                >
                  Kelola Semua Permohonan
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-y border-slate-200 text-slate-700 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Kode Tiket</th>
                      <th className="py-2.5 px-3">Nama Pemohon</th>
                      <th className="py-2.5 px-3">Layanan</th>
                      <th className="py-2.5 px-3">Tanggal</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-normal text-slate-600">
                    {requests.slice(0, 5).map((r) => (
                      <tr key={r.id}>
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-950">
                          {r.ticketCode}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-slate-900">{r.applicantName}</td>
                        <td className="py-2.5 px-3">{r.serviceType}</td>
                        <td className="py-2.5 px-3 text-slate-400">{r.createdAt}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              r.status === 'Selesai'
                                ? 'bg-emerald-100 text-emerald-800'
                                : r.status === 'Diproses'
                                ? 'bg-amber-100 text-amber-800'
                                : r.status === 'Ditolak'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Requests Management */}
        {activeTab === 'requests' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Daftar Permohonan Surat & Pengaduan Warga
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Verifikasi berkas warga dan perbarui status pengerjaan surat agar warga dapat memantau dengan kode tiket.
              </p>
            </div>

            <div className="space-y-4">
              {requests.map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-100 px-2 py-1 rounded">
                        {r.ticketCode}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {r.serviceType}
                      </h4>
                    </div>

                    {/* Status Changer Controls */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Ubah Status:</span>
                      <select
                        value={r.status}
                        onChange={(e) =>
                          updateRequestStatus(
                            r.id,
                            e.target.value as ServiceRequest['status'],
                            r.adminNotes
                          )
                        }
                        className="px-2.5 py-1 text-xs font-semibold rounded border border-slate-300 bg-white"
                      >
                        <option value="Menunggu">Menunggu</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Selesai">Selesai</option>
                        <option value="Ditolak">Ditolak</option>
                      </select>
                      <button
                        onClick={() => deleteRequest(r.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Hapus permohonan"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Nama Pemohon:</span>
                      <span className="font-semibold text-slate-900">{r.applicantName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">No. WhatsApp:</span>
                      <a
                        href={`https://wa.me/${r.applicantPhone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-800 font-mono font-semibold hover:underline"
                      >
                        {r.applicantPhone}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Alamat RT/RW:</span>
                      <span>{r.address}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600">
                    <strong>Catatan / Keperluan Pemohon:</strong> {r.notes}
                  </div>

                  {/* Quick Admin Note */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      defaultValue={r.adminNotes || ''}
                      onBlur={(e) => updateRequestStatus(r.id, r.status, e.target.value)}
                      placeholder="Tulis pesan/catatan petugas untuk warga di sini..."
                      className="flex-1 px-3 py-1.5 text-xs rounded border border-slate-300 bg-white"
                    />
                    <span className="text-[10px] text-slate-400 shrink-0">
                      Otomatis tersimpan saat keluar kolom
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: News & Announcements Management */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Manajemen Berita & Pengumuman
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publikasikan pengumuman kerja bakti, posyandu, dan artikel pembangunan.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingNewsId(null);
                  setNewsTitle('');
                  setNewsSummary('');
                  setNewsContent('');
                  setNewsModalOpen(true);
                }}
                className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>Tulis Berita Baru</span>
              </button>
            </div>

            <div className="space-y-3">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-50/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-semibold text-emerald-800">{item.category}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                      <span>·</span>
                      <span
                        className={`px-1.5 py-0.2 rounded text-[10px] uppercase font-bold ${
                          item.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{item.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenEditNews(item)}
                      className="p-2 text-slate-600 hover:text-emerald-800 rounded-md hover:bg-emerald-50 transition-colors"
                      title="Edit artikel"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteNews(item.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors"
                      title="Hapus artikel"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Agenda Management */}
        {activeTab === 'agenda' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Manajemen Agenda & Kalender Wilayah
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tambahkan jadwal kerja bakti, musyawarah RT, dan posyandu.
                </p>
              </div>
              <button
                onClick={() => setAgendaModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Agenda Baru</span>
              </button>
            </div>

            <div className="space-y-3">
              {agenda.map((ag) => (
                <div
                  key={ag.id}
                  className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-800">
                      {ag.category} · {ag.date} ({ag.time})
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{ag.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Lokasi: {ag.location} | Penyelenggara: {ag.organizer}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteAgenda(ag.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Officials Management */}
        {activeTab === 'officials' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Daftar Pamong & Pengurus Wilayah ({officials.length})
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kelola susunan pengurus Dukuh Kalimati. Anda dapat menambah, mengedit, dan menghapus pamong.
                </p>
              </div>
              <button
                onClick={handleOpenAddOfficial}
                className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs self-start sm:self-auto shrink-0 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Pengurus Baru</span>
              </button>
            </div>

            {officials.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 space-y-2">
                <Users className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-semibold text-slate-600">Belum ada data pengurus.</p>
                <button
                  onClick={handleOpenAddOfficial}
                  className="text-xs font-bold text-emerald-800 hover:underline"
                >
                  Tambah Pengurus Pertama
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {officials.map((off) => (
                  <div
                    key={off.id}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3 flex flex-col justify-between hover:shadow-xs transition-shadow"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide bg-emerald-100/70 px-2 py-0.5 rounded">
                          {off.department}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-slate-400 mr-2 font-mono">#{off.order}</span>
                          <button
                            onClick={() => handleOpenEditOfficial(off)}
                            className="p-1.5 text-slate-500 hover:text-emerald-800 hover:bg-emerald-50 rounded-md transition-colors"
                            title="Edit data pengurus"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteOfficial(off.id, off.name)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                            title="Hapus pengurus ini"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{off.name}</h4>
                        <p className="text-xs font-semibold text-emerald-700">{off.role}</p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {off.bio || 'Tidak ada keterangan bio.'}
                      </p>

                      {off.tupoksi && off.tupoksi.length > 0 && (
                        <div className="pt-2 border-t border-slate-200/60">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                            Tupoksi ({off.tupoksi.length}):
                          </span>
                          <ul className="text-[11px] text-slate-600 space-y-0.5 pl-2 list-disc list-inside">
                            {off.tupoksi.slice(0, 2).map((tp, idx) => (
                              <li key={idx} className="line-clamp-1">{tp}</li>
                            ))}
                            {off.tupoksi.length > 2 && (
                              <li className="text-slate-400 italic list-none">+{off.tupoksi.length - 2} tupoksi lainnya</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    {off.phone && (
                      <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-1.5 border-t border-slate-200/60">
                        <span>Kontak:</span>
                        <span className="text-slate-700">{off.phone}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 6: Gallery Management */}
        {activeTab === 'gallery' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Manajemen Galeri Dokumentasi
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kelola arsip foto kegiatan sosial dan kerja bakti warga.
                </p>
              </div>
              <button
                onClick={() => setGalleryModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Foto Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((g) => (
                <div
                  key={g.id}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">
                      {g.category} · {g.date}
                    </span>
                    <h5 className="font-bold text-slate-900 text-xs line-clamp-2">{g.title}</h5>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{g.caption}</p>
                  </div>
                  <div className="pt-3 flex justify-end">
                    <button
                      onClick={() => deleteGalleryItem(g.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Profile & Speech Settings */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Profil Wilayah & Sambutan Kepala Dukuh
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Perbarui identitas kepala dukuh dan visi pedukuhan.
              </p>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Nama Kepala Dukuh
                  </label>
                  <input
                    type="text"
                    value={formChiefName}
                    onChange={(e) => setFormChiefName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Jabatan Resmi
                  </label>
                  <input
                    type="text"
                    value={formChiefTitle}
                    onChange={(e) => setFormChiefTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Periode Jabatan
                  </label>
                  <input
                    type="text"
                    value={formChiefPeriod}
                    onChange={(e) => setFormChiefPeriod(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Visi Pedukuhan
                </label>
                <textarea
                  rows={2}
                  value={formVision}
                  onChange={(e) => setFormVision(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-700 shadow-xs"
              >
                Simpan Perubahan Profil
              </button>
            </form>
          </div>
        )}

        {/* Tab 8: Contact & WhatsApp Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Pengaturan Kontak & WhatsApp Resmi
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pengaturan nomor WhatsApp tombol mengambang dan nomor pelayanan warga.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Nomor WhatsApp (Format: 62xxxxxxxxxxx)
                  </label>
                  <input
                    type="text"
                    value={formWaNumber}
                    onChange={(e) => setFormWaNumber(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono"
                  />
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Format internasional tanpa simbol plus (+) atau spasi.
                  </span>
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Telepon Sekretariat
                  </label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Alamat Sekretariat Dukuh
                </label>
                <input
                  type="text"
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Jam Operasional Pelayanan Warga
                </label>
                <input
                  type="text"
                  value={formHours}
                  onChange={(e) => setFormHours(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-700 shadow-xs"
              >
                Simpan Pengaturan Website
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Write News Modal */}
      {newsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 border border-slate-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-slate-900">
              {editingNewsId ? 'Edit Berita / Pengumuman' : 'Tulis Berita / Pengumuman Baru'}
            </h3>

            <form onSubmit={handleSaveNews} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Judul Berita</label>
                <input
                  type="text"
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Kategori</label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value as NewsCategory)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="Pengumuman">Pengumuman</option>
                    <option value="Kegiatan Warga">Kegiatan Warga</option>
                    <option value="Gotong Royong">Gotong Royong</option>
                    <option value="Sosial & Kemasyarakatan">Sosial & Kemasyarakatan</option>
                    <option value="Pembangunan Wilayah">Pembangunan Wilayah</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Status Publikasi</label>
                  <select
                    value={newsStatus}
                    onChange={(e) => setNewsStatus(e.target.value as 'published' | 'draft')}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="published">Diterbitkan (Published)</option>
                    <option value="draft">Konsep (Draft)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">Ringkasan Singkat</label>
                <textarea
                  rows={2}
                  value={newsSummary}
                  onChange={(e) => setNewsSummary(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  placeholder="Ringkasan 1-2 kalimat untuk thumbnail..."
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">Isi Lengkap Berita</label>
                <textarea
                  rows={6}
                  value={newsContent}
                  onChange={(e) => setNewsContent(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 font-sans"
                  placeholder="Isi berita lengkap..."
                  required
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setNewsModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  Simpan Artikel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Agenda Modal */}
      {agendaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-slate-900">Tambah Agenda Kegiatan</h3>
            <form onSubmit={handleSaveAgenda} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Nama Kegiatan</label>
                <input
                  type="text"
                  value={agendaTitle}
                  onChange={(e) => setAgendaTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Tanggal</label>
                  <input
                    type="text"
                    value={agendaDate}
                    onChange={(e) => setAgendaDate(e.target.value)}
                    placeholder="Contoh: Minggu, 25 Okt 2026"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Waktu</label>
                  <input
                    type="text"
                    value={agendaTime}
                    onChange={(e) => setAgendaTime(e.target.value)}
                    placeholder="Contoh: 08.00 - 11.00 WIB"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Lokasi</label>
                <input
                  type="text"
                  value={agendaLocation}
                  onChange={(e) => setAgendaLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Keterangan Singkat</label>
                <textarea
                  rows={2}
                  value={agendaDesc}
                  onChange={(e) => setAgendaDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAgendaModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Gallery Modal */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-slate-900">Tambah Foto Dokumentasi</h3>
            <form onSubmit={handleSaveGallery} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Judul Dokumentasi</label>
                <input
                  type="text"
                  value={galleryTitle}
                  onChange={(e) => setGalleryTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Kategori</label>
                  <select
                    value={galleryCategory}
                    onChange={(e) => setGalleryCategory(e.target.value as GalleryItem['category'])}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="Gotong Royong">Gotong Royong</option>
                    <option value="Sosial">Sosial</option>
                    <option value="Pembangunan">Pembangunan</option>
                    <option value="Budaya">Budaya</option>
                    <option value="Pemuda">Pemuda</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Tanggal</label>
                  <input
                    type="text"
                    value={galleryDate}
                    onChange={(e) => setGalleryDate(e.target.value)}
                    placeholder="Contoh: 18 Oktober 2026"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-800 mb-1">Keterangan / Caption</label>
                <textarea
                  rows={3}
                  value={galleryCaption}
                  onChange={(e) => setGalleryCaption(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Add / Edit Official Modal */}
      {officialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 border border-slate-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingOfficialId ? 'Edit Data Pengurus' : 'Tambah Pengurus Dukuh Baru'}
              </h3>
              <button
                type="button"
                onClick={() => setOfficialModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveOfficial} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Nama Lengkap beserta Gelar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={officialName}
                  onChange={(e) => setOfficialName(e.target.value)}
                  placeholder="Contoh: Bapak Sugiyanto, S.Sos."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Jabatan Resmi <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={officialRole}
                    onChange={(e) => setOfficialRole(e.target.value)}
                    placeholder="Contoh: Kepala Dukuh / Bendahara / Ketua RT 01"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-emerald-800"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Lembaga / Seksi
                  </label>
                  <select
                    value={officialDepartment}
                    onChange={(e) => setOfficialDepartment(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-emerald-800"
                  >
                    <option value="Pamong Wilayah">Pamong Wilayah</option>
                    <option value="Tata Usaha & Pelayanan Warga">Tata Usaha & Pelayanan Warga</option>
                    <option value="Rukun Warga">Rukun Warga (RW)</option>
                    <option value="Rukun Tetangga">Rukun Tetangga (RT)</option>
                    <option value="Pemberdayaan Kesejahteraan Keluarga">Pemberdayaan Kesejahteraan Keluarga (PKK)</option>
                    <option value="Kepemudaan & Olahraga">Kepemudaan & Olahraga (Karang Taruna)</option>
                    <option value="Keamanan & Ketertiban">Keamanan & Ketertiban (Linmas)</option>
                    <option value="Sosial & Keagamaan">Sosial & Keagamaan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Urutan Tampilan
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={officialOrder}
                    onChange={(e) => setOfficialOrder(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono focus:outline-emerald-800"
                  />
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    Nomor urut tampilan di halaman profil pemerintahan.
                  </span>
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Nomor Telepon / WhatsApp (Opsional)
                  </label>
                  <input
                    type="text"
                    value={officialPhone}
                    onChange={(e) => setOfficialPhone(e.target.value)}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono focus:outline-emerald-800"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Keterangan / Profil Singkat
                </label>
                <textarea
                  rows={2}
                  value={officialBio}
                  onChange={(e) => setOfficialBio(e.target.value)}
                  placeholder="Uraian singkat peran dan pengabdian dalam wilayah pedukuhan..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-emerald-800"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Tugas Pokok & Fungsi (Tupoksi)
                </label>
                <textarea
                  rows={4}
                  value={officialTupoksiText}
                  onChange={(e) => setOfficialTupoksiText(e.target.value)}
                  placeholder="Tuliskan setiap tugas pada baris baru:&#10;Contoh:&#10;Memimpin musyawarah warga RT&#10;Mengkoordinir kegiatan ronda malam&#10;Mendata permohonan surat pengantar"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-emerald-800 font-sans"
                />
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  Pisahkan masing-masing poin tugas dengan menekan tombol Enter (baris baru).
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOfficialModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  {editingOfficialId ? 'Simpan Perubahan' : 'Tambahkan Pengurus'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
