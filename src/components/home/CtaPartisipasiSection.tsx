import React from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, PhoneCall, HeartHandshake } from 'lucide-react';

export const CtaPartisipasiSection: React.FC = () => {
  const { navigate, settings } = useApp();

  const handleHubungiPengurus = () => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      'Halo Pengurus Dukuh Kalimati, saya warga ingin berkomunikasi dan menanyakan informasi kegiatan pedukuhan.'
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-emerald-950 text-white relative overflow-hidden border-b border-emerald-900">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FDE68A 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/80 border border-emerald-500/30 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300">
          <HeartHandshake className="w-4 h-4" />
          <span>Partisipasi Aktif Warga</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Dukuh Maju Dimulai dari Kebersamaan
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
          Mari bersama-sama menjaga lingkungan, mendukung kegiatan masyarakat, dan membangun
          Dukuh Kalimati yang lebih baik, aman, dan nyaman untuk generasi kita dan anak cucu.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleHubungiPengurus}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-slate-950" />
            <span>Hubungi Pengurus Dukuh</span>
          </button>
          <button
            onClick={() => navigate('layanan', { serviceId: 'srv-6' })}
            className="px-6 py-3 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-white border border-emerald-500/30 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>Kirim Aspirasi & Pengaduan</span>
          </button>
        </div>
      </div>
    </section>
  );
};
