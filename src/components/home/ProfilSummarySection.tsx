import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Landmark, ShieldCheck, ArrowRight, Building2, MapPin } from 'lucide-react';

export const ProfilSummarySection: React.FC = () => {
  const { profile, navigate } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-emerald-50/30 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-2">
                MENGENAL WILAYAH KITA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Sekilas Tentang Dukuh Kalimati
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {profile.historyText}
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-emerald-900/10 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wide">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>Karakter Geografis & Lingkungan</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {profile.geographicDescription}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('profil')}
                className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs flex items-center gap-2"
              >
                <span>Lihat Profil Lengkap & Batas Wilayah</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('pemerintahan')}
                className="px-4 py-2.5 rounded-lg border border-slate-300 hover:border-emerald-800 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
              >
                Struktur Pengurus & Lembaga
              </button>
            </div>
          </div>

          {/* Right Column: Key Facilities & Boundaries Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Fasilitas Umum Card */}
            <div className="bg-white rounded-xl p-6 border border-emerald-900/10 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 text-emerald-950">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Fasilitas Publik Lingkungan</span>
              </h3>
              <div className="space-y-3">
                {profile.facilities.slice(0, 4).map((f, i) => (
                  <div key={i} className="pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <p className="text-xs font-bold text-slate-800">{f.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Batas Wilayah Card */}
            <div className="bg-white rounded-xl p-6 border border-emerald-900/10 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 text-emerald-950">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Batas Wilayah Administratif</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-md bg-emerald-50/50 border border-emerald-900/5">
                  <span className="font-bold text-emerald-900 block text-[11px]">Utara:</span>
                  <span className="text-slate-600 text-[11px] leading-tight block mt-0.5">{profile.boundaries.north}</span>
                </div>
                <div className="p-2.5 rounded-md bg-emerald-50/50 border border-emerald-900/5">
                  <span className="font-bold text-emerald-900 block text-[11px]">Selatan:</span>
                  <span className="text-slate-600 text-[11px] leading-tight block mt-0.5">{profile.boundaries.south}</span>
                </div>
                <div className="p-2.5 rounded-md bg-emerald-50/50 border border-emerald-900/5">
                  <span className="font-bold text-emerald-900 block text-[11px]">Timur:</span>
                  <span className="text-slate-600 text-[11px] leading-tight block mt-0.5">{profile.boundaries.east}</span>
                </div>
                <div className="p-2.5 rounded-md bg-emerald-50/50 border border-emerald-900/5">
                  <span className="font-bold text-emerald-900 block text-[11px]">Barat:</span>
                  <span className="text-slate-600 text-[11px] leading-tight block mt-0.5">{profile.boundaries.west}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
