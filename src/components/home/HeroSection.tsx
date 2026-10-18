import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeroLandscapeGraphic } from '../common/VillageVisuals';
import { Users, Home, Layers, Calendar, ChevronRight, FileText, Info } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { profile, navigate } = useApp();
  const demo = profile.demographics;

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-emerald-950 text-white">
      {/* Background Graphic with Scrim */}
      <div className="absolute inset-0 z-0">
        <HeroLandscapeGraphic className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 w-full my-auto">
        <div className="max-w-3xl">
          {/* Badge: PORTAL RESMI WARGA */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/80 border border-emerald-500/40 rounded-md text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-200 mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>PORTAL RESMI WARGA DUKUH KALIMATI</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            Selamat Datang di <span className="text-amber-300">Dukuh Kalimati</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
            Membangun lingkungan yang rukun, maju, dan sejahtera melalui kebersamaan,
            keterbukaan informasi, serta pelayanan masyarakat yang lebih mudah dan transparan.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('profil')}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-98 flex items-center gap-2"
            >
              <span>Jelajahi Profil Dukuh</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => navigate('layanan')}
              className="px-6 py-3 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-white border border-emerald-400/30 font-semibold text-sm transition-all backdrop-blur-xs flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>Informasi Pelayanan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Demographic Statistics Strip (Full Width Row Below Hero Split) */}
      <div className="relative z-10 w-full bg-emerald-900/90 border-t border-emerald-700/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-emerald-800/60">
            {/* Stat 1 */}
            <div className="pt-2 md:pt-0 md:px-4 first:pl-0 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-800/70 border border-emerald-600/40 text-amber-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                  {demo.totalPopulation.toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-emerald-200/90 font-medium">
                  Estimasi Penduduk (Jiwa)
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-800/70 border border-emerald-600/40 text-amber-300">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                  {demo.totalHouseholds.toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-emerald-200/90 font-medium">
                  Kepala Keluarga (KK)
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-800/70 border border-emerald-600/40 text-amber-300">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                  {demo.rtCount} RT / {demo.rwCount} RW
                </div>
                <div className="text-xs text-emerald-200/90 font-medium">
                  Struktur Rukun Warga
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-800/70 border border-emerald-600/40 text-amber-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                  Aktif
                </div>
                <div className="text-xs text-emerald-200/90 font-medium">
                  Kegiatan Sosial & Posyandu
                </div>
              </div>
            </div>
          </div>

          {/* Demographic Data Note */}
          <div className="mt-3 pt-2.5 border-t border-emerald-800/50 flex items-center gap-2 text-[11px] text-emerald-200/80">
            <Info className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="italic">{demo.isDummyNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
