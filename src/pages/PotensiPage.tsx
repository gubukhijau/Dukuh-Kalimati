import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/common/VillageVisuals';
import { Phone, Tag, Info, ArrowLeft } from 'lucide-react';

export const PotensiPage: React.FC = () => {
  const { businesses, navigate, settings } = useApp();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    'Kuliner',
    'Pertanian & Perkebunan',
    'Kerajinan',
    'Jasa',
  ];

  const filtered =
    filter === 'all'
      ? businesses
      : businesses.filter((b) => b.category === filter);

  return (
    <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <button onClick={() => navigate('home')} className="hover:underline">
              Beranda
            </button>
            <span>/</span>
            <span>Potensi & UMKM</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Potensi Wilayah & UMKM Warga Dukuh Kalimati
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-3xl">
            Katalog usaha mandiri, produk pangan olahan, kerajinan tangan, dan hasil pertanian lokal warga Dukuh Kalimati guna mendukung kebangkitan ekonomi pedukuhan.
          </p>
        </div>

        {/* Notice Info */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Pemberitahuan Data Contoh (Mock Data):</span>
            <p className="text-amber-900/80 mt-0.5">
              Daftar usaha di bawah ini berstatus <strong>Contoh Data</strong> untuk peragaan tata letak portal resmi dukuh. Warga pelaku UMKM Dukuh Kalimati yang ingin mempromosikan usahanya dapat mendaftar melalui pengurus dukuh.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filter === c
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {c === 'all' ? 'Semua Potensi' : c}
            </button>
          ))}
        </div>

        {/* Grid of Businesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((biz) => (
            <div
              key={biz.id}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-emerald-950/10 overflow-hidden">
                  <ResilientImage
                    src={biz.imageUrl}
                    alt={biz.name}
                    fallbackType="produce"
                    category={biz.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-emerald-900 text-white text-[10px] font-semibold uppercase tracking-wider rounded">
                    {biz.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded">
                    Contoh Data
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {biz.name}
                  </h3>
                  <div className="text-xs text-emerald-800 font-medium">
                    Pengelola: {biz.owner}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {biz.description}
                  </p>
                  <div className="text-xs text-slate-500 pt-1">
                    Lokasi: {biz.address}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Estimasi Harga:</span>
                  <span className="font-semibold text-slate-800">{biz.priceRange}</span>
                </div>
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Halo pengurus Dukuh Kalimati, saya tertarik memesan produk UMKM "${biz.name}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hubungi Penjual / Info Pemesanan</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
