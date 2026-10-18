import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { settings } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');

  const openWhatsApp = (customMessage: string) => {
    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick selection popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-emerald-900/15 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-emerald-800 text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold tracking-wide">
                Layanan WhatsApp Dukuh Kalimati
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-emerald-700 rounded-md transition-colors text-emerald-200 hover:text-white"
              aria-label="Tutup popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5 text-xs text-slate-700 bg-emerald-50/40">
            <p className="text-[12px] text-slate-600 leading-snug">
              Ada pertanyaan terkait administrasi atau kegiatan warga? Hubungi langsung pengurus pedukuhan:
            </p>

            <button
              onClick={() =>
                openWhatsApp(
                  'Halo Pengurus Dukuh Kalimati, saya ingin menanyakan informasi pelayanan warga.'
                )
              }
              className="w-full text-left p-2.5 rounded-lg bg-white border border-emerald-900/10 hover:border-emerald-700 hover:bg-emerald-50/50 transition-all text-xs font-medium text-emerald-950 flex items-center justify-between shadow-2xs"
            >
              <span>Pertanyaan Pelayanan & Surat</span>
              <span className="text-emerald-700 font-bold">→</span>
            </button>

            <button
              onClick={() =>
                openWhatsApp(
                  'Halo Pengurus Dukuh Kalimati, saya ingin berkonsultasi mengenai pengaduan fasilitas lingkungan warga.'
                )
              }
              className="w-full text-left p-2.5 rounded-lg bg-white border border-emerald-900/10 hover:border-emerald-700 hover:bg-emerald-50/50 transition-all text-xs font-medium text-emerald-950 flex items-center justify-between shadow-2xs"
            >
              <span>Konsultasi Pengaduan Lingkungan</span>
              <span className="text-emerald-700 font-bold">→</span>
            </button>

            <p className="text-[10px] text-slate-600 pt-1 border-t border-emerald-900/10">
              Nomor Pengurus: +{settings.whatsappNumber}
            </p>
          </div>
        </div>
      )}

      {/* Trigger floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 focus-visible:outline-emerald-800"
        aria-label="Hubungi WhatsApp Dukuh Kalimati"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="text-xs font-bold tracking-wide pr-0.5 hidden sm:inline-block">
          {isOpen ? 'Tutup Pesan' : 'Hubungi Pengurus'}
        </span>
      </button>
    </div>
  );
};
