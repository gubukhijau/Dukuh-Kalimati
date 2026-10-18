import React, { useState } from 'react';
import { useApp, PageRoute } from '../../context/AppContext';
import { DukuhSeal } from './VillageVisuals';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';

interface NavItem {
  id: PageRoute;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Beranda' },
  { id: 'profil', label: 'Profil Wilayah' },
  { id: 'pemerintahan', label: 'Pemerintahan' },
  { id: 'berita', label: 'Berita' },
  { id: 'potensi', label: 'Potensi & UMKM' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'kontak', label: 'Kontak' },
];

export const Header: React.FC = () => {
  const { currentPage, navigate, isAdminLoggedIn } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Official Government Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Wordmark with Civic Seal */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 text-left group focus-visible:outline-emerald-800"
            >
              <DukuhSeal size={42} className="shrink-0 drop-shadow-xs transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight leading-tight group-hover:text-emerald-800 transition-colors whitespace-nowrap">
                  DUKUH KALIMATI
                </span>
                <span className="text-[11px] sm:text-xs text-emerald-800/80 font-medium whitespace-nowrap">
                  Portal Informasi & Pelayanan Warga
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-semibold text-slate-600">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-2 transition-colors whitespace-nowrap shrink-0 hover:text-emerald-900 ${
                      isActive ? 'text-emerald-800 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Admin quick link */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Admin Portal Badge/Button */}
              <button
                onClick={() => handleNavClick('admin')}
                title="Portal Pengurus & Admin"
                className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  currentPage === 'admin'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden md:inline">{isAdminLoggedIn ? 'Panel Admin' : 'Admin'}</span>
              </button>

              {/* Primary CTA */}
              <button
                onClick={() => handleNavClick('layanan')}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  currentPage === 'layanan'
                    ? 'bg-emerald-900 text-white ring-2 ring-emerald-500/50'
                    : 'bg-emerald-800 text-white hover:bg-emerald-700 active:scale-98'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Layanan Warga</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg focus-visible:outline-emerald-800"
                aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-emerald-900/10 bg-white/98 px-4 pt-3 pb-6 shadow-xl space-y-1 animate-in slide-in-from-top duration-200">
            <div className="py-2 text-[11px] font-semibold tracking-wider uppercase text-emerald-900/60 px-3">
              Menu Utama Dukuh
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-emerald-700">Aktif</span>}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('layanan')}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-xs"
              >
                Buka Layanan & Surat Warga
              </button>
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full text-center py-2 px-4 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Masuk Dashboard Pengurus (Admin)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
