import React from 'react';
import { useApp } from '../../context/AppContext';
import { ChiefPortraitGraphic } from '../common/VillageVisuals';
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react';

export const SambutanSection: React.FC = () => {
  const { profile, navigate } = useApp();
  const { speech } = profile;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Col Left: Chief Photo / Portrait (4 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-900/15 p-2 bg-emerald-50/50">
              <ChiefPortraitGraphic className="w-full" />
              <div className="p-4 text-center bg-white rounded-xl mt-2 border border-emerald-900/10">
                <h3 className="font-bold text-slate-900 text-base">
                  {speech.chiefName}
                </h3>
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  {speech.chiefTitle}
                </p>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {speech.chiefPeriod}
                </span>
              </div>
            </div>
          </div>

          {/* Col Right: Courteous Speech (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Sambutan Pemimpin Wilayah</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Mewujudkan Dukuh Kalimati yang Rukun, Mandiri, dan Terbuka
            </h2>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-700/60 space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <Quote className="w-8 h-8 text-emerald-800/15 absolute -left-4 -top-3 -scale-x-100" />
              {speech.speechText.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-slate-900' : ''}>
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('pemerintahan')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <span>Lihat Struktur Pemerintahan Dukuh</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('profil')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-emerald-800 text-slate-700 hover:text-emerald-900 text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Visi & Misi Pedukuhan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
