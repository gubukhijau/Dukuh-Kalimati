import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceRequirement } from '../../types';
import {
  FileText,
  FileCheck,
  UserCheck,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  Coins,
  Phone,
  X,
  Send,
} from 'lucide-react';

export const LayananCepatSection: React.FC = () => {
  const { services, navigate } = useApp();
  const [activeModalService, setActiveModalService] = useState<ServiceRequirement | null>(null);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-6 h-6 text-emerald-800" />;
      case 1:
        return <FileCheck className="w-6 h-6 text-emerald-800" />;
      case 2:
        return <UserCheck className="w-6 h-6 text-emerald-800" />;
      case 3:
        return <UserCheck className="w-6 h-6 text-emerald-800" />;
      case 4:
        return <AlertCircle className="w-6 h-6 text-amber-600" />;
      case 5:
        return <HelpCircle className="w-6 h-6 text-emerald-800" />;
      default:
        return <FileText className="w-6 h-6 text-emerald-800" />;
    }
  };

  const handleOpenDetail = (srv: ServiceRequirement) => {
    setActiveModalService(srv);
  };

  const handleProceedToForm = (srv: ServiceRequirement) => {
    setActiveModalService(null);
    navigate('layanan', { serviceId: srv.id });
  };

  return (
    <section className="py-16 sm:py-20 bg-emerald-50/40 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-2">
            PELAYANAN PUBLIK PEDUKUHAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Layanan Cepat & Transparan bagi Warga
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Panduan persyaratan resmi, alur pengurusan surat pengantar, serta kanal pengaduan langsung ke pengurus Dukuh Kalimati.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl p-6 border border-emerald-900/10 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/60 group-hover:scale-105 transition-transform">
                    {getServiceIcon(idx)}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800/80">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {srv.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {srv.cost}
                </span>
                <button
                  onClick={() => handleOpenDetail(srv)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>Lihat Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Guidance */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-white border border-emerald-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900 block mb-0.5">
              Catatan Pelayanan Terpadu:
            </span>
            Surat pengantar resmi tetap membutuhkan verifikasi berkas dan pengesahan tanda tangan Ketua RT dan Kepala Dukuh sesuai tata tertib administrasi desa.
          </div>
          <button
            onClick={() => navigate('layanan')}
            className="shrink-0 px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
          >
            Buka Halaman Layanan Lengkap
          </button>
        </div>
      </div>

      {/* Service Detail & Procedure Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-900/20 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {activeModalService.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
                aria-label="Tutup rincian layanan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-5 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed text-slate-600">
                {activeModalService.description}
              </p>

              {/* Persyaratan */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-900">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Persyaratan Berkas:</span>
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-1 text-xs sm:text-sm">
                  {activeModalService.requirements.map((req, rIdx) => (
                    <li key={rIdx}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Alur Prosedur */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-900">
                  <FileCheck className="w-4 h-4 text-emerald-700" />
                  <span>Alur Prosedur:</span>
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600 pl-1 text-xs sm:text-sm">
                  {activeModalService.procedure.map((proc, pIdx) => (
                    <li key={pIdx}>{proc}</li>
                  ))}
                </ol>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-200/50 text-xs">
                <div>
                  <span className="text-slate-500 block">Waktu Proses:</span>
                  <span className="font-semibold text-slate-900 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    {activeModalService.processingTime}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Biaya / Retribusi:</span>
                  <span className="font-semibold text-emerald-800 flex items-center gap-1 mt-0.5">
                    <Coins className="w-3.5 h-3.5 text-emerald-700" />
                    {activeModalService.cost}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>{activeModalService.contactPerson}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Tutup
              </button>
              <button
                onClick={() => handleProceedToForm(activeModalService)}
                className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Isi Formulir Permohonan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
