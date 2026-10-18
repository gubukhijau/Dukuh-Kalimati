import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export const KontakPage: React.FC = () => {
  const { settings, navigate } = useApp();
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const text = `Halo Pengurus Dukuh Kalimati,\nNama: ${senderName}\nNo. HP: ${senderPhone}\nPerihal: ${subject}\nPesan: ${message}`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FBFDFB] min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <button onClick={() => navigate('home')} className="hover:underline">
              Beranda
            </button>
            <span>/</span>
            <span>Kontak & Lokasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kontak & Pelayanan Sekretariat Dukuh
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-3xl">
            Hubungi pengurus Dukuh Kalimati untuk urusan pelayanan administrasi, koordinasi kegiatan kemasyarakatan, atau kunjungan langsung ke Balai Pertemuan.
          </p>
        </div>

        {/* 2-Column Contact & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-5">
              <h2 className="text-lg font-bold text-slate-900">
                Informasi Kontak Resmi
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Alamat Sekretariat:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {settings.address}
                    </span>
                    <span className="text-slate-500 text-xs block">
                      Kode Pos: {settings.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Jam Pelayanan Warga:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {settings.officeHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Telepon Resmi:</strong>
                    <span className="text-slate-600 block mt-0.5 font-mono">
                      {settings.officialPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp Pengurus:</strong>
                    <span className="text-slate-600 block mt-0.5 font-mono">
                      +{settings.whatsappNumber}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Resmi:</strong>
                    <span className="text-slate-600 block mt-0.5">
                      {settings.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Quick Message (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-5">
            <h2 className="text-lg font-bold text-slate-900">
              Kirim Pesan Cepat ke Pengurus Dukuh
            </h2>
            <p className="text-xs text-slate-600">
              Pesan akan otomatis dialihkan ke nomor WhatsApp pengurus resmi untuk mendapatkan respon cepat.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-900 mb-1">
                  Nama Anda <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1">
                  Nomor WhatsApp <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1">
                  Perihal <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contoh: Pertanyaan Syarat Surat Pengantar / Lapor Fasilitas"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1">
                  Isi Pesan <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan pesan pertanyaan atau saran Anda..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-emerald-800"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp Resmi</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-2xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Lokasi Balai Pertemuan Dukuh Kalimati
          </h2>
          <div className="rounded-xl overflow-hidden aspect-[21/9] border border-slate-200">
            <iframe
              title="Peta Lokasi Kantor Dukuh"
              src={settings.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
