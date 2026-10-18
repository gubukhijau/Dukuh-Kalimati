import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, MapPin, Clock, Users, Tag } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const { agenda } = useApp();
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Gotong Royong', 'Kegiatan Sosial', 'Rapat Warga'];

  const filteredAgenda =
    filter === 'all' ? agenda : agenda.filter((a) => a.category === filter);

  return (
    <section className="py-16 sm:py-20 bg-emerald-50/20 border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 block mb-2">
              JADWAL & KALENDER WILAYAH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Agenda Kegiatan Masyarakat
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Ikuti dan sukseskan program kerja bakti, posyandu rutin, rapat RT/RW, dan kegiatan kepemudaan di Dukuh Kalimati.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  filter === cat
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'Semua Agenda' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agenda Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAgenda.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="text-xs text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{item.category}</span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      item.status === 'Akan Datang'
                        ? 'bg-emerald-100 text-emerald-900'
                        : item.status === 'Berlangsung'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-900">{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-slate-500">Penyelenggara: {item.organizer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
