import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GalleryItem } from '../types';
import { ResilientImage } from '../components/common/VillageVisuals';
import { Maximize2, X, Calendar } from 'lucide-react';

export const GaleriPage: React.FC = () => {
  const { gallery, navigate } = useApp();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Gotong Royong', 'Sosial', 'Pembangunan', 'Budaya', 'Pemuda'];

  const filtered =
    filter === 'all'
      ? gallery
      : gallery.filter((g) => g.category === filter);

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
            <span>Galeri Foto</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Dokumentasi Warga Dukuh Kalimati
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-3xl">
            Arsip visual potret kebersamaan warga, gotong royong kerja bakti, kegiatan posyandu, peringatan kemerdekaan, dan pembangunan infrastruktur desa.
          </p>
        </div>

        {/* Filters */}
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
              {c === 'all' ? 'Semua Dokumentasi' : c}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer aspect-[4/3] bg-emerald-950 flex flex-col justify-end shadow-2xs hover:shadow-md transition-all"
            >
              <ResilientImage
                src={item.imageUrl}
                alt={item.title}
                fallbackType="community"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="relative z-10 p-5 text-white">
                <div className="flex items-center gap-2 text-[11px] text-amber-300 font-medium mb-1">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base leading-snug text-white line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Tutup lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/10] bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
              <ResilientImage
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                fallbackType="community"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950 text-white">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                <span>{selectedPhoto.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPhoto.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
