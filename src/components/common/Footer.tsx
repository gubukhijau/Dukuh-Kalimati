import React from 'react';
import { useApp, PageRoute } from '../../context/AppContext';
import { DukuhSeal } from './VillageVisuals';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, navigate } = useApp();
  const currentYear = new Date().getFullYear();

  const handleLink = (page: PageRoute) => {
    navigate(page);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-emerald-950">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-emerald-800 via-amber-500 to-emerald-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <DukuhSeal size={48} className="shrink-0" />
              <div>
                <span className="text-base font-bold tracking-tight text-white block">
                  DUKUH KALIMATI
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  Portal Informasi & Pelayanan Masyarakat
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Website resmi pedukuhan sebagai pusat transparansi informasi warga,
              kemudahan pelayanan administrasi persuratan, serta etalase potensi dan
              kegiatan gotong royong masyarakat.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Platform Komunikasi Digital Warga Dukuh Kalimati</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigasi Halaman
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('profil')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Profil Wilayah & Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pemerintahan')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Pemerintahan & Struktur Pengurus
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('layanan')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Pelayanan Surat & Pengaduan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('berita')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Berita & Pengumuman Warga
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('potensi')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Potensi Wilayah & UMKM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('galeri')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Dokumentasi & Galeri Foto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('kontak')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Kontak & Jam Pelayanan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak & Pelayanan (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Sekretariat & Pelayanan Warga
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{settings.address} (Kode Pos: {settings.postalCode})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kontak Resmi: {settings.officialPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Email: {settings.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jam Pelayanan: {settings.officeHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleLink('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md text-[11px] text-slate-300 transition-colors"
              >
                <span>Akses Dashboard Pengurus</span>
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Dukuh Kalimati. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1">
            <span>Dikelola dengan semangat kebersamaan & gotong royong</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
