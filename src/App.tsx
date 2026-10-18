import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ProfilPage } from './pages/ProfilPage';
import { PemerintahanPage } from './pages/PemerintahanPage';
import { BeritaPage } from './pages/BeritaPage';
import { LayananPage } from './pages/LayananPage';
import { PotensiPage } from './pages/PotensiPage';
import { GaleriPage } from './pages/GaleriPage';
import { KontakPage } from './pages/KontakPage';
import { AdminPage } from './pages/AdminPage';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentPage, toast, hideToast } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'profil':
        return <ProfilPage />;
      case 'pemerintahan':
        return <PemerintahanPage />;
      case 'berita':
        return <BeritaPage />;
      case 'layanan':
        return <LayananPage />;
      case 'potensi':
        return <PotensiPage />;
      case 'galeri':
        return <GaleriPage />;
      case 'kontak':
        return <KontakPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-slate-800">
      <Header />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Global Interactive Toast Notification */}
      {toast && (
        <div className="fixed top-24 right-4 z-50 max-w-sm w-full animate-in fade-in slide-in-from-top-2 duration-200">
          <div
            className={`p-4 rounded-xl shadow-xl border flex items-start gap-3 ${
              toast.type === 'error'
                ? 'bg-rose-900 text-white border-rose-700'
                : toast.type === 'info'
                ? 'bg-slate-900 text-white border-slate-700'
                : 'bg-emerald-900 text-white border-emerald-700'
            }`}
          >
            {toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
            ) : toast.type === 'info' ? (
              <Info className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
            )}

            <div className="flex-1 text-xs sm:text-sm font-medium leading-snug">
              {toast.message}
            </div>

            <button
              onClick={hideToast}
              className="text-white/70 hover:text-white p-1 rounded transition-colors"
              aria-label="Tutup notifikasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
