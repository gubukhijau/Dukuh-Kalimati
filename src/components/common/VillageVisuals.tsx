import React, { useState } from 'react';

/**
 * Official Civic Seal / Lambang Dukuh Kalimati
 */
export const DukuhSeal: React.FC<{ size?: number; className?: string }> = ({
  size = 44,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lambang Resmi Dukuh Kalimati"
    >
      {/* Outer shield ring with gold rim */}
      <circle cx="60" cy="60" r="56" fill="#064E3B" stroke="#D97706" strokeWidth="4" />
      <circle cx="60" cy="60" r="50" fill="#047857" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Star of unity at top */}
      <polygon
        points="60,18 63,27 72,27 65,33 67,42 60,37 53,42 55,33 48,27 57,27"
        fill="#FDE68A"
      />
      
      {/* Traditional Pendopo / Joglo Roof Silhouette */}
      <path
        d="M60 38 L40 54 L44 55 L48 53 L48 66 L72 66 L72 53 L76 55 L80 54 Z"
        fill="#FDE68A"
      />
      {/* Pillars */}
      <line x1="52" y1="54" x2="52" y2="66" stroke="#064E3B" strokeWidth="2" />
      <line x1="60" y1="54" x2="60" y2="66" stroke="#064E3B" strokeWidth="2" />
      <line x1="68" y1="54" x2="68" y2="66" stroke="#064E3B" strokeWidth="2" />

      {/* Rice stalks (Padi) on right */}
      <path
        d="M68 84 C76 80 82 72 84 62 C84 57 82 52 79 49"
        stroke="#FDE68A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="78" cy="53" r="2.5" fill="#FDE68A" />
      <circle cx="82" cy="60" r="2.5" fill="#FDE68A" />
      <circle cx="81" cy="68" r="2.5" fill="#FDE68A" />
      <circle cx="76" cy="76" r="2.5" fill="#FDE68A" />

      {/* Cotton blooms (Kapas) on left */}
      <path
        d="M52 84 C44 80 38 72 36 62 C36 57 38 52 41 49"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="53" r="3" fill="#FFFFFF" />
      <circle cx="38" cy="60" r="3" fill="#FFFFFF" />
      <circle cx="39" cy="68" r="3" fill="#FFFFFF" />
      <circle cx="44" cy="76" r="3" fill="#FFFFFF" />

      {/* Water flow (Alur Sungai Kalimati) */}
      <path
        d="M44 76 C52 79 56 73 64 76 C70 78 74 76 76 76"
        stroke="#93C5FD"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Banner / Pita with KALIMATI */}
      <path
        d="M32 94 L60 90 L88 94 L82 85 L60 87 L38 85 Z"
        fill="#FDE68A"
      />
      <text
        x="60"
        y="92"
        fill="#064E3B"
        fontSize="7"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        KALIMATI
      </text>
    </svg>
  );
};

/**
 * Hero Village Landscape Illustration
 */
export const HeroLandscapeGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#052e24] ${className}`}>
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03221b] via-[#064e3b] to-[#047857] opacity-90" />
      
      {/* Atmospheric Mist & Mountain Silhouette */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-35"
        fill="none"
      >
        {/* Distant Mountain Peak (Merapi) */}
        <polygon points="720,120 980,480 460,480" fill="#0f3d32" />
        <polygon points="420,200 680,480 180,480" fill="#0b2f27" />
        <polygon points="1060,220 1340,480 820,480" fill="#0b2f27" />
        
        {/* Soft morning sun aura */}
        <circle cx="720" cy="180" r="160" fill="url(#sunGlow)" />
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Terraced Rice Fields Curves */}
        <path
          d="M0 380 Q360 330 720 380 T1440 370 L1440 600 L0 600 Z"
          fill="#064e3b"
          opacity="0.8"
        />
        <path
          d="M0 430 Q400 400 800 440 T1440 420 L1440 600 L0 600 Z"
          fill="#047857"
          opacity="0.9"
        />
        <path
          d="M0 490 Q300 460 700 500 T1440 470 L1440 600 L0 600 Z"
          fill="#022c22"
        />

        {/* Gentle Coconut Palm & Tropical Tree Silhouettes */}
        <g opacity="0.6">
          {/* Tree left */}
          <path d="M120 540 Q130 420 140 340" stroke="#022c22" strokeWidth="8" strokeLinecap="round" />
          <path d="M140 340 Q100 320 80 340 M140 340 Q180 310 210 330 M140 340 Q150 280 140 270 M140 340 Q110 300 90 290 M140 340 Q170 330 190 360" stroke="#022c22" strokeWidth="5" strokeLinecap="round" />
          {/* Tree right */}
          <path d="M1320 540 Q1310 410 1300 330" stroke="#022c22" strokeWidth="9" strokeLinecap="round" />
          <path d="M1300 330 Q1250 310 1230 330 M1300 330 Q1350 300 1380 320 M1300 330 Q1310 270 1300 260 M1300 330 Q1270 290 1240 280" stroke="#022c22" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Grid Pattern Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

/**
 * Dignified Civic Leadership Portrait Graphic (Village Chief Placeholder)
 */
export const ChiefPortraitGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full aspect-[3/4] bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 rounded-xl overflow-hidden border border-emerald-800/50 shadow-inner flex flex-col items-center justify-center p-6 ${className}`}
    >
      {/* Decorative Traditional Batik Motif Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#d97706 1.5px, transparent 1.5px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Portrait Vector Avatar */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Indonesian Peci Cap */}
        <div className="w-24 h-11 bg-slate-950 rounded-t-lg shadow-md border-b border-amber-600/40 relative">
          <div className="absolute top-1 left-2 right-2 h-1 bg-slate-800 rounded-full opacity-60" />
        </div>
        {/* Head */}
        <div className="w-20 h-22 bg-[#E0A97E] rounded-b-3xl relative shadow-md -mt-1 flex flex-col items-center">
          {/* Eyebrows */}
          <div className="flex justify-between w-12 mt-6">
            <div className="w-4 h-1 bg-amber-950 rounded-full rotate-3" />
            <div className="w-4 h-1 bg-amber-950 rounded-full -rotate-3" />
          </div>
          {/* Eyes */}
          <div className="flex justify-between w-10 mt-1">
            <div className="w-2 h-1 bg-slate-900 rounded-full" />
            <div className="w-2 h-1 bg-slate-900 rounded-full" />
          </div>
          {/* Friendly Smile */}
          <div className="w-6 h-2 border-b-2 border-amber-950 rounded-full mt-4" />
        </div>
        {/* Batik Shirt Collar and Torso */}
        <div className="w-48 h-32 bg-[#451a03] rounded-t-3xl mt-1 border-t-2 border-amber-500/50 relative overflow-hidden flex justify-center shadow-lg">
          {/* Batik Pattern Overlay */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#fde68a_1px,transparent_1px)] [background-size:10px_10px]" />
          {/* Inner Shirt Collar */}
          <div className="w-12 h-8 bg-amber-100 rounded-b-lg border-x border-b border-amber-900/30" />
          {/* Garuda / Pin badge */}
          <div className="absolute top-8 left-10 w-4 h-4 bg-amber-400 rounded-full shadow" />
        </div>
      </div>

      <div className="relative z-10 mt-4 text-center">
        <span className="text-[11px] font-medium tracking-widest uppercase text-amber-300">
          Foto Pejabat Resmi
        </span>
        <p className="text-xs text-emerald-100/70 mt-0.5">
          Siap diganti foto dokumentasi kepala dukuh
        </p>
      </div>
    </div>
  );
};

/**
 * Community Activity & Balai Pertemuan Graphic
 */
export const CommunityHallGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-48 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-lg overflow-hidden flex items-center justify-center p-4 border border-emerald-700/40 ${className}`}
    >
      <div className="text-center z-10">
        <div className="inline-flex p-3 rounded-xl bg-emerald-700/60 text-amber-300 mb-2 border border-emerald-600/50">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">
          Balai Pertemuan Warga Dukuh Kalimati
        </p>
        <p className="text-xs text-emerald-100/70 mt-1">
          Pusat Rembuk & Musyawarah Gotong Royong
        </p>
      </div>
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FDE68A 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
    </div>
  );
};

/**
 * UMKM Produce Graphic
 */
export const UMKMProduceGraphic: React.FC<{ category?: string; className?: string }> = ({
  category = 'Kuliner',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full h-44 bg-gradient-to-tr from-stone-100 via-amber-50 to-emerald-50 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 border border-emerald-900/10 ${className}`}
    >
      <div className="p-3 bg-white shadow-sm border border-emerald-800/10 rounded-xl text-emerald-800 mb-2">
        {category.includes('Pertanian') ? (
          <svg className="w-7 h-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : category.includes('Kerajinan') ? (
          <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )}
      </div>
      <p className="text-xs font-semibold text-slate-800 text-center tracking-wide">
        Produk Potensi Lokal Dukuh Kalimati
      </p>
      <span className="text-[11px] text-emerald-800/70 mt-1 font-mono">
        Kategori: {category}
      </span>
    </div>
  );
};

/**
 * Resilient Image Component with Zero Broken Frame Guarantee
 */
export const ResilientImage: React.FC<{
  src?: string;
  alt: string;
  fallbackType?: 'landscape' | 'chief' | 'community' | 'produce' | 'building';
  category?: string;
  className?: string;
}> = ({ src, alt, fallbackType = 'community', category, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    if (fallbackType === 'landscape') {
      return <HeroLandscapeGraphic className={className} />;
    }
    if (fallbackType === 'chief') {
      return <ChiefPortraitGraphic className={className} />;
    }
    if (fallbackType === 'produce') {
      return <UMKMProduceGraphic category={category} className={className} />;
    }
    return <CommunityHallGraphic className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
