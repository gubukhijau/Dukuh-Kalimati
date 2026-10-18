import React from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

export const PetaSection: React.FC = () => {
  const { settings } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-emerald-50/30 border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block">
              PETA & LOKASI WILAYAH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pusat Wilayah Dukuh Kalimati
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dukuh Kalimati dapat diakses dengan mudah melalui jalan poros kalurahan. Balai pertemuan pedukuhan menjadi titik sentral koordinasi warga dan musyawarah.
            </p>

            <div className="p-4 rounded-xl bg-white border border-emerald-900/10 shadow-2xs space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{settings.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-mono">
                <Navigation className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Koordinat: {settings.mapLatitude}, {settings.mapLongitude}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Panduan Lokasi:</strong> Peta interaktif menggunakan OpenStreetMap. Koordinat dan tautan sematan peta dapat disesuaikan di Panel Pengaturan Admin.
              </span>
            </div>

            <div className="pt-2">
              <a
                href={`https://www.openstreetmap.org/?mlat=${settings.mapLatitude}&mlon=${settings.mapLongitude}#map=16/${settings.mapLatitude}/${settings.mapLongitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Buka di OpenStreetMap</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe Container (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border border-emerald-900/15 shadow-sm bg-slate-100 aspect-[16/9] relative">
              <iframe
                title="Peta Lokasi Dukuh Kalimati"
                src={settings.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-xs rounded-md shadow-xs text-[11px] font-medium text-slate-700 border border-slate-200">
                Titik Wilayah: Dukuh Kalimati
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
