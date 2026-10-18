import React from 'react';
import { useApp } from '../../context/AppContext';
import { ResilientImage } from '../common/VillageVisuals';
import { ArrowRight, Phone, Tag } from 'lucide-react';

export const PotensiSection: React.FC = () => {
  const { businesses, navigate, settings } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-2">
              PEMBERDAYAAN EKONOMI MASYARAKAT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Potensi Unggulan & UMKM Warga
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Produk kerajinan tradisional, hasil pertanian segar pekarangan, serta olahan kuliner khas buatan warga Dukuh Kalimati.
            </p>
          </div>
          <button
            onClick={() => navigate('potensi')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>Buka Direktori UMKM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.slice(0, 4).map((biz) => (
            <div
              key={biz.id}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[4/3] bg-emerald-950/5 overflow-hidden">
                  <ResilientImage
                    src={biz.imageUrl}
                    alt={biz.name}
                    fallbackType="produce"
                    category={biz.category}
                    className="w-full h-full object-cover"
                  />
                  {/* Clean unboxed tag in card corner */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-emerald-900/90 text-white rounded text-[10px] font-semibold tracking-wider uppercase">
                    {biz.category}
                  </div>
                  {/* Mandatory Contoh Data Label */}
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-amber-500 text-slate-950 rounded text-[9px] font-bold uppercase tracking-wider">
                    Contoh Data
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {biz.name}
                  </h3>
                  <div className="text-[11px] text-emerald-800 font-medium mt-1">
                    Pengelola: {biz.owner}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {biz.description}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-2">
                <div className="text-[11px] text-slate-600 flex items-center justify-between">
                  <span className="text-slate-600">Kisaran:</span>
                  <span className="font-semibold text-slate-800">{biz.priceRange}</span>
                </div>
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Halo pengurus Dukuh Kalimati, saya tertarik dengan informasi produk UMKM "${biz.name}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-md bg-white border border-emerald-700/30 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3 h-3 text-emerald-700" />
                  <span>Hubungi Penjual</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
