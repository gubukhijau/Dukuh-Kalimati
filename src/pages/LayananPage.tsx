import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceRequirement, ServiceRequest } from '../types';
import {
  FileText,
  Send,
  Search,
  CheckCircle,
  AlertCircle,
  Clock,
  Coins,
  Shield,
  HelpCircle,
  Phone,
  MessageSquare,
  FileCheck,
} from 'lucide-react';

export const LayananPage: React.FC = () => {
  const { services, requests, selectedServiceId, submitServiceRequest, navigate, settings, showToast } =
    useApp();

  // Form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState<string>('Surat Pengantar RT / Dukuh');
  const [notes, setNotes] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [createdTicketCode, setCreatedTicketCode] = useState<string | null>(null);

  // Status tracker state
  const [trackingCode, setTrackingCode] = useState('');
  const [trackedRequest, setTrackedRequest] = useState<ServiceRequest | null>(null);
  const [trackSearched, setTrackSearched] = useState(false);

  // Pre-select service from URL parameter or prop
  useEffect(() => {
    if (selectedServiceId) {
      const match = services.find((s) => s.id === selectedServiceId);
      if (match) {
        setServiceType(match.title);
      }
    }
  }, [selectedServiceId, services]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim()) {
      showToast('Mohon isi nama lengkap pemohon.', 'error');
      return;
    }
    if (!applicantPhone.trim() || applicantPhone.length < 8) {
      showToast('Mohon masukkan nomor WhatsApp yang valid.', 'error');
      return;
    }
    if (!address.trim()) {
      showToast('Mohon isi alamat lengkap RT/RW di Dukuh Kalimati.', 'error');
      return;
    }
    if (!notes.trim()) {
      showToast('Mohon isi keterangan atau keperluan permohonan Anda.', 'error');
      return;
    }
    if (!agreePrivacy) {
      showToast('Mohon centang persetujuan verifikasi data pengurus.', 'error');
      return;
    }

    const ticket = submitServiceRequest({
      applicantName,
      applicantPhone,
      address,
      serviceType,
      notes,
      attachmentName: attachmentName.trim() || undefined,
    });

    setCreatedTicketCode(ticket);
    // Reset form fields
    setApplicantName('');
    setApplicantPhone('');
    setAddress('');
    setNotes('');
    setAttachmentName('');
    setAgreePrivacy(false);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackSearched(true);
    const code = trackingCode.trim().toUpperCase();
    const found = requests.find((r) => r.ticketCode.toUpperCase() === code);
    setTrackedRequest(found || null);
  };

  const openWhatsAppConfirmation = (ticketCode: string, type: string) => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Halo Pengurus Dukuh Kalimati, saya telah mengirimkan permohonan di Portal Warga dengan Tiket: ${ticketCode} untuk jenis "${type}". Mohon arahan dan petunjuk selanjutnya. Terima kasih.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <button onClick={() => navigate('home')} className="hover:underline">
              Beranda
            </button>
            <span>/</span>
            <span>Pelayanan Warga</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pelayanan Administrasi & Pengaduan Warga
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-3xl">
            Ajukan permohonan surat pengantar, laporkan kendala fasilitas lingkungan, atau periksa status permohonan Anda secara transparan.
          </p>
        </div>

        {/* Lacak Permohonan Strip */}
        <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Lacak Berkas Pelayanan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              Sudah Memiliki Kode Tiket Permohonan?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Masukkan kode permohonan (contoh: <code>KLM-2026-001</code>) untuk mengecek status verifikasi oleh pengurus dukuh.
            </p>

            <form onSubmit={handleTrack} className="pt-2 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Masukkan Kode Tiket (misal: KLM-2026-001)"
                className="px-4 py-2.5 rounded-lg bg-emerald-950/80 border border-emerald-600/60 text-white placeholder-emerald-300/50 text-xs sm:text-sm focus:outline-amber-400 focus:border-amber-400 flex-1 font-mono uppercase"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Periksa Status</span>
              </button>
            </form>
          </div>

          {/* Tracking Result Box */}
          {trackSearched && (
            <div className="mt-6 pt-6 border-t border-emerald-800 animate-in fade-in duration-200">
              {trackedRequest ? (
                <div className="bg-emerald-950/90 rounded-xl p-5 border border-emerald-700/60 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-amber-300 font-mono font-bold">
                        Tiket: {trackedRequest.ticketCode}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {trackedRequest.serviceType}
                      </h4>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                        trackedRequest.status === 'Selesai'
                          ? 'bg-emerald-500 text-white'
                          : trackedRequest.status === 'Diproses'
                          ? 'bg-amber-400 text-slate-950'
                          : trackedRequest.status === 'Ditolak'
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      Status: {trackedRequest.status}
                    </span>
                  </div>

                  <div className="text-xs text-emerald-200/90 space-y-1">
                    <p>
                      <strong>Pemohon:</strong> {trackedRequest.applicantName} ({trackedRequest.address})
                    </p>
                    <p>
                      <strong>Diajukan Pada:</strong> {trackedRequest.createdAt}
                    </p>
                    <p>
                      <strong>Keperluan / Catatan Pemohon:</strong> {trackedRequest.notes}
                    </p>
                    {trackedRequest.adminNotes && (
                      <div className="mt-2 p-3 bg-emerald-900/90 rounded-lg border border-emerald-600/50 text-white">
                        <strong className="text-amber-300 block mb-0.5">Tanggapan Petugas Dukuh:</strong>
                        <p>{trackedRequest.adminNotes}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-emerald-950/70 rounded-xl border border-emerald-700/50 text-xs text-emerald-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>
                    Kode tiket <strong>"{trackingCode}"</strong> tidak ditemukan. Pastikan huruf dan angka sesuai format (misal: KLM-2026-001).
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 2-Columns Form & Guidance Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Pengajuan Surat & Pengaduan (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-1">
                FORMULIR PELAYANAN DUKUH
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Pengajuan Surat & Aduan Warga
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Isi data di bawah ini secara lengkap. Pengurus dukuh akan menindaklanjuti permohonan Anda sesuai jam kerja operasional.
              </p>
            </div>

            {/* Success Message Banner after Submit */}
            {createdTicketCode && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-700" />
                  <span>Permohonan Anda Berhasil Dicatat!</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Kode Tiket Anda:{' '}
                  <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-400 text-emerald-950">
                    {createdTicketCode}
                  </span>
                  . Simpan kode ini untuk melacak status verifikasi.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => openWhatsAppConfirmation(createdTicketCode, serviceType)}
                    className="px-3 py-1.5 rounded-md bg-[#25D366] text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Konfirmasi Cepat via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setCreatedTicketCode(null)}
                    className="px-3 py-1.5 rounded-md bg-white border border-emerald-300 text-xs text-emerald-900 hover:bg-emerald-100"
                  >
                    Tutup Notifikasi
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Jenis Layanan */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Jenis Layanan / Permohonan <span className="text-rose-500">*</span>
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-emerald-800"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Nama Pemohon */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Nama Lengkap Pemohon <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Contoh: Bapak Ahmad Fauzi / Ibu Siti"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800 font-mono"
                  required
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Digunakan pengurus untuk mengabari saat berkas selesai atau membutuhkan kelengkapan data.
                </span>
              </div>

              {/* Alamat RT/RW */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Alamat di Dukuh Kalimati (RT / RW) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Contoh: RT 02 / RW 01, Gang Flamboyan No. 12"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              {/* Keperluan / Pesan */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Keterangan / Keperluan Surat / Detail Aduan <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tuliskan secara ringkas tujuan surat atau permohonan Anda..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              {/* Lampiran Simulasi Dokumen */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  Nama Dokumen Pendukung (Opsional)
                </label>
                <input
                  type="text"
                  value={attachmentName}
                  onChange={(e) => setAttachmentName(e.target.value)}
                  placeholder="Contoh: Foto KTP & KK Pemohon (Tersedia saat pengambilan)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Untuk keamanan privasi warga, dokumen fisik asli diverifikasi langsung saat pengambilan surat di sekretariat.
                </span>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={agreePrivacy}
                    onChange={(e) => setAgreePrivacy(e.target.checked)}
                    className="mt-0.5 rounded text-emerald-800 focus:ring-emerald-700"
                  />
                  <span>
                    Saya menyatakan data yang diisi adalah benar, dan saya bersedia dihubungi oleh pengurus RT/Dukuh Kalimati untuk verifikasi berkas administrasi.
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permohonan ke Pengurus Dukuh</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Standard Persyaratan & Panduan (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Shield className="w-4 h-4 text-emerald-700" />
                <span>Privasi & Keamanan Warga</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Komitmen Perlindungan Data Warga
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Portal Dukuh Kalimati tidak mempublikasikan identitas sensitif seperti Nomor Induk Kependudukan (NIK) maupun dokumen personal warga ke publik. Semua permohonan diproses secara internal oleh perangkat pedukuhan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <span>Ketentuan Pengambilan Surat</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">1.</span>
                  <span>Bawa fotokopi KTP dan KK pemohon saat mengambil surat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">2.</span>
                  <span>Pelayanan tidak dipungut biaya retribusi (Gratis Rp 0,-).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">3.</span>
                  <span>Jam pengambilan berkas mengikuti jam kantor sekretariat dukuh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">4.</span>
                  <span>Tunjukkan kode tiket permohonan kepada petugas pelayanan.</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-900/10 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-emerald-950">
                Butuh bantuan mendesak atau surat pengantar darurat?
              </p>
              <p className="text-slate-600">
                Silakan hubungi langsung Kepala Dukuh atau Sekretaris melalui telepon/WhatsApp:
              </p>
              <div className="pt-1 font-mono font-bold text-emerald-900 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>+{settings.whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
