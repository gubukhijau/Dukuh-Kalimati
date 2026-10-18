import React from 'react';
import { useApp } from '../../context/AppContext';
import { ResilientImage } from '../common/VillageVisuals';
import { ArrowRight, Newspaper } from 'lucide-react';

export const BeritaSection: React.FC = () => {
  const { news, navigate } = useApp();

  // Take top 3 published articles
  const displayedNews = news.filter((n) => n.status === 'published').slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-2">
              KABAR & PENGUMUMAN DUKUH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Informasi Terkini Seputar Kalimati
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pengumuman resmi, kegiatan gotong royong, agenda kemasyarakatan, dan transparansi pembangunan wilayah.
            </p>
          </div>
          <button
            onClick={() => navigate('berita')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item) => (
            <article
              key={item.id}
              onClick={() => navigate('berita', { slug: item.slug })}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                  <ResilientImage
                    src={item.imageUrl}
                    alt={item.title}
                    fallbackType="community"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 rounded-md text-[11px] font-semibold text-emerald-900 shadow-xs backdrop-blur-xs">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span>{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Penulis: {item.author}
                </span>
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 group-hover:text-emerald-950">
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
