import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Building2,
  Users,
  Target,
  Sparkles,
  MapPin,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const ProfilPage: React.FC = () => {
  const { profile, navigate } = useApp();
  const demo = profile.demographics;

  const culturalValues = [
    {
      title: 'Guyub Rukun & Sambatan',
      description:
        'Saling tolong menolong tanpa pamrih saat tetangga mendirikan rumah, hajatan, atau tertimpa musibah duka cita.',
    },
    {
      title: 'Musyawarah Rembuk Warga',
      description:
        'Pengambilan keputusan pembangunan dan ketertiban lingkungan selalu dimusyawarahkan secara terbuka di Balai Pertemuan.',
    },
    {
      title: 'Siskamling & Ronda Malam',
      description:
        'Penjagaan keamanan swadaya bergiliran oleh kaum bapak dan pemuda di gardu ronda tiap RT untuk kenyamanan bersama.',
    },
    {
      title: 'Pelestarian Budaya & Tradisi',
      description:
        'Memelihara seni karawitan, merti dusun (bersih desa), dan peringatan hari besar keagamaan secara harmonis.',
    },
  ];

  return (
    <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title & Breadcrumb */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <button onClick={() => navigate('home')} className="hover:underline">
              Beranda
            </button>
            <span>/</span>
            <span>Profil Wilayah</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Profil Resmi Dukuh Kalimati
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Mengenal sejarah, letak geografis, demografi penduduk, fasilitas umum, dan nilai luhur kehidupan warga Dukuh Kalimati.
          </p>
        </div>

        {/* Section 1: Sejarah Dukuh */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Sejarah & Asal Usul</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Kilas Sejarah Pedukuhan
          </h2>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
            <p>{profile.historyText}</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              Catatan: Uraian sejarah di atas merupakan placeholder naratif dan siap disinkronkan dengan dokumen resmi babad desa atau hasil wawancara sesepuh dukuh.
            </span>
          </div>
        </div>

        {/* Section 2: Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Target className="w-4 h-4" />
              <span>Visi Pedukuhan</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Arah & Tujuan Bersama
            </h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
              "{profile.vision}"
            </p>
            <p className="text-xs text-emerald-300/80">
              Motto: <strong className="text-white">{profile.motto}</strong>
            </p>
          </div>

          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Misi Pedukuhan</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Langkah Konkret Pelaksanaan
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {profile.missions.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Data Demografi & Batas Wilayah */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Kependudukan & Wilayah</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Data Demografi & Batas Wilayah
          </h2>

          {/* Demographic Metrics Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-emerald-50/70 border-y border-emerald-900/10 text-emerald-950 font-bold">
                <tr>
                  <th className="py-3 px-4">Parameter Kependudukan</th>
                  <th className="py-3 px-4 font-mono">Jumlah</th>
                  <th className="py-3 px-4">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Total Penduduk</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-900 tabular-nums">
                    {demo.totalPopulation.toLocaleString('id-ID')} Jiwa
                  </td>
                  <td className="py-3 px-4 text-slate-500">Estimasi total warga terdaftar</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Laki-Laki</td>
                  <td className="py-3 px-4 font-mono tabular-nums">{demo.maleCount.toLocaleString('id-ID')} Jiwa</td>
                  <td className="py-3 px-4 text-slate-500">50.1% proporsi</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Perempuan</td>
                  <td className="py-3 px-4 font-mono tabular-nums">{demo.femaleCount.toLocaleString('id-ID')} Jiwa</td>
                  <td className="py-3 px-4 text-slate-500">49.9% proporsi</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Kepala Keluarga (KK)</td>
                  <td className="py-3 px-4 font-mono font-bold tabular-nums">{demo.totalHouseholds.toLocaleString('id-ID')} KK</td>
                  <td className="py-3 px-4 text-slate-500">Tersebar di 4 RT</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Pembagian Rukun Tetangga</td>
                  <td className="py-3 px-4 font-mono tabular-nums">{demo.rtCount} RT / {demo.rwCount} RW</td>
                  <td className="py-3 px-4 text-slate-500">RW 01 (RT 01, 02) & RW 02 (RT 03, 04)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Batas Wilayah Grid */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Batas Administratif Wilayah:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="font-bold text-emerald-900 block">Batas Sebelah Utara:</span>
                <span className="text-slate-600 block mt-1">{profile.boundaries.north}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="font-bold text-emerald-900 block">Batas Sebelah Selatan:</span>
                <span className="text-slate-600 block mt-1">{profile.boundaries.south}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="font-bold text-emerald-900 block">Batas Sebelah Timur:</span>
                <span className="text-slate-600 block mt-1">{profile.boundaries.east}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="font-bold text-emerald-900 block">Batas Sebelah Barat:</span>
                <span className="text-slate-600 block mt-1">{profile.boundaries.west}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Fasilitas Umum */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Building2 className="w-4 h-4 text-emerald-700" />
            <span>Sarana & Prasarana</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Fasilitas Umum Pedukuhan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:bg-white transition-colors"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  {fac.category}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{fac.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Nilai & Budaya Masyarakat */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Nilai Budaya & Kearifan Lokal Warga
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {culturalValues.map((val, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-900/10">
                <h4 className="font-bold text-emerald-950 text-sm mb-1">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
