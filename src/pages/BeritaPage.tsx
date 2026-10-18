import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/common/VillageVisuals';
import { NewsCategory, NewsItem } from '../types';
import { Search, Calendar, User, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';

export const BeritaPage: React.FC = () => {
  const { news, selectedNewsSlug, navigate, showToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Pengumuman',
    'Kegiatan Warga',
    'Gotong Royong',
    'Sosial & Kemasyarakatan',
    'Pembangunan Wilayah',
  ];

  // If a news item is currently selected by slug, render Detail View
  const activeArticle = news.find((n) => n.slug === selectedNewsSlug);

  const handleShare = (article: NewsItem) => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Tautan berita berhasil disalin ke papan klip!', 'info');
    }
  };

  if (activeArticle) {
    const relatedNews = news
      .filter((n) => n.id !== activeArticle.id && n.status === 'published')
      .slice(0, 3);

    return (
      <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back button & Breadcrumb */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('berita')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Seluruh Berita</span>
            </button>
            <button
              onClick={() => handleShare(activeArticle)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-800" />
              <span>Bagikan</span>
            </button>
          </div>

          {/* Article Main Box */}
          <article className="bg-white rounded-2xl border border-emerald-900/10 shadow-xs overflow-hidden">
            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full bg-emerald-950">
              <ResilientImage
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                fallbackType="community"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded-md text-xs font-bold text-emerald-950 shadow-xs backdrop-blur-xs">
                {activeArticle.category}
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              {/* Unboxed Metadata with · separator */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <User className="w-3.5 h-3.5 text-emerald-700" />
                  {activeArticle.author}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  {activeArticle.date}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {activeArticle.title}
              </h1>

              {/* Lead Summary */}
              <p className="text-base font-medium text-slate-700 leading-relaxed border-l-3 border-emerald-800 pl-4 py-1 bg-emerald-50/40 rounded-r-lg">
                {activeArticle.summary}
              </p>

              {/* Prose Content */}
              <div className="prose prose-emerald max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {activeArticle.content}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedNews.length > 0 && (
            <div className="pt-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Berita & Informasi Lainnya
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedNews.map((rn) => (
                  <div
                    key={rn.id}
                    onClick={() => navigate('berita', { slug: rn.slug })}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-700 cursor-pointer transition-colors shadow-2xs"
                  >
                    <span className="text-[11px] font-semibold text-emerald-800">
                      {rn.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-1 line-clamp-2">
                      {rn.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-2 block">
                      {rn.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // List View
  const publishedNews = news.filter((n) => n.status === 'published');
  const filtered = publishedNews.filter((n) => {
    const matchesCat = selectedCategory === 'all' || n.category === selectedCategory;
    const matchesQuery =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

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
            <span>Berita & Pengumuman</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pusat Informasi & Pengumuman Warga
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Arsip berita resmi, agenda pembangunan, laporan kegiatan sosial, dan edaran pengurus Dukuh Kalimati.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-900/10 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pengumuman atau berita..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-emerald-800 focus:border-emerald-800 transition-colors"
              />
            </div>

            {/* Total Results */}
            <div className="text-xs text-slate-500 font-medium self-end md:self-center">
              Menampilkan {filtered.length} dari {publishedNews.length} berita
            </div>
          </div>

          {/* Categories Tab Strip */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <p className="text-sm font-semibold text-slate-700">
              Tidak ada berita yang cocok dengan kata kunci atau filter yang dipilih.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold text-emerald-800 hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate('berita', { slug: item.slug })}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-emerald-950 overflow-hidden">
                    <ResilientImage
                      src={item.imageUrl}
                      alt={item.title}
                      fallbackType="community"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 rounded text-[11px] font-bold text-emerald-950 shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{item.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Oleh: {item.author}
                  </span>
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
