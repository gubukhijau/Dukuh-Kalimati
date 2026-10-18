import React from 'react';
import { useApp } from '../context/AppContext';
import { ChiefPortraitGraphic } from '../components/common/VillageVisuals';
import { ShieldCheck, User, Phone, CheckCircle, Info, Landmark } from 'lucide-react';

export const PemerintahanPage: React.FC = () => {
  const { officials, navigate } = useApp();

  return (
    <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <button onClick={() => navigate('home')} className="hover:underline">
              Beranda
            </button>
            <span>/</span>
            <span>Pemerintahan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pemerintahan & Struktur Pengurus Dukuh
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-3xl">
            Susunan pamong pedukuhan, ketua rukun warga (RW), rukun tetangga (RT), serta kelembagaan kemasyarakatan yang bertugas melayani warga Dukuh Kalimati.
          </p>
        </div>

        {/* Notice Info Box */}
        <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-900/10 text-xs text-emerald-950 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">
              Transparansi Lembaga Wilayah:
            </span>
            <p className="text-emerald-900/80">
              Pamong pedukuhan menjalankan fungsi kepemimpinan teritorial tingkat dukuh di bawah naungan Kalurahan. Nama pejabat, nomor kontak resmi, dan tupoksi dapat disesuaikan sewaktu-waktu melalui menu Pengaturan Admin.
            </p>
          </div>
        </div>

        {/* Chief Spotlight Card */}
        {officials.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/15 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-xs">
                  <ChiefPortraitGraphic className="w-full shadow-md" />
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{officials[0].department}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {officials[0].name}
                </h2>
                <p className="text-sm font-semibold text-emerald-800">
                  {officials[0].role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {officials[0].bio}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Tugas Pokok & Fungsi (Tupoksi):
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {officials[0].tupoksi.map((tp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{tp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Officials Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-emerald-700" />
            <span>Pengurus Wilayah & Kelembagaan Warga</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.slice(1).map((off) => (
              <div
                key={off.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      {off.department}
                    </span>
                    <span className="p-2 rounded-full bg-emerald-50 text-emerald-800">
                      <User className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {off.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {off.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {off.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block mb-1.5">
                      Tugas & Wewenang:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {off.tupoksi.map((tp, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">·</span>
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {off.phone && (
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{off.phone}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
