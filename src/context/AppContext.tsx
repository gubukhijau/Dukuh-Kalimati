import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  WebsiteSettings,
  VillageProfile,
  NewsItem,
  Official,
  ServiceRequirement,
  ServiceRequest,
  AgendaItem,
  LocalBusiness,
  GalleryItem,
} from '../types';
import {
  initialSettings,
  initialProfile,
  initialOfficials,
  initialNews,
  initialServices,
  initialRequests,
  initialAgenda,
  initialBusinesses,
  initialGallery,
} from '../data/mockData';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export type PageRoute = 
  | 'home'
  | 'profil'
  | 'pemerintahan'
  | 'berita'
  | 'layanan'
  | 'potensi'
  | 'galeri'
  | 'kontak'
  | 'admin';

interface AppContextType {
  currentPage: PageRoute;
  selectedNewsSlug: string | null;
  selectedServiceId: string | null;
  settings: WebsiteSettings;
  profile: VillageProfile;
  news: NewsItem[];
  officials: Official[];
  services: ServiceRequirement[];
  requests: ServiceRequest[];
  agenda: AgendaItem[];
  businesses: LocalBusiness[];
  gallery: GalleryItem[];
  isAdminLoggedIn: boolean;
  toast: Toast | null;
  
  navigate: (page: PageRoute, params?: { slug?: string; serviceId?: string }) => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
  
  // Public citizen actions
  submitServiceRequest: (data: {
    applicantName: string;
    applicantPhone: string;
    address: string;
    serviceType: string;
    notes: string;
    attachmentName?: string;
  }) => string;
  
  // Admin management actions
  updateRequestStatus: (id: string, status: ServiceRequest['status'], adminNotes?: string) => void;
  deleteRequest: (id: string) => void;
  
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  
  addAgenda: (item: Omit<AgendaItem, 'id'>) => void;
  updateAgenda: (id: string, item: Partial<AgendaItem>) => void;
  deleteAgenda: (id: string) => void;
  
  addOfficial: (item: Omit<Official, 'id'>) => void;
  updateOfficial: (id: string, item: Partial<Official>) => void;
  deleteOfficial: (id: string) => void;
  
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  
  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;
  updateProfile: (newProfile: Partial<VillageProfile>) => void;
  
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_PREFIX = 'kalimati_portal_v1_';

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error(`Failed to load key ${key} from storage`, err);
  }
  return defaultValue;
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to save key ${key} to storage`, err);
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedNewsSlug, setSelectedNewsSlug] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);

  // States with localStorage initialization
  const [settings, setSettings] = useState<WebsiteSettings>(() =>
    loadFromStorage('settings', initialSettings)
  );
  const [profile, setProfile] = useState<VillageProfile>(() =>
    loadFromStorage('profile', initialProfile)
  );
  const [news, setNews] = useState<NewsItem[]>(() =>
    loadFromStorage('news', initialNews)
  );
  const [officials, setOfficials] = useState<Official[]>(() =>
    loadFromStorage('officials', initialOfficials)
  );
  const [services] = useState<ServiceRequirement[]>(initialServices);
  const [requests, setRequests] = useState<ServiceRequest[]>(() =>
    loadFromStorage('requests', initialRequests)
  );
  const [agenda, setAgenda] = useState<AgendaItem[]>(() =>
    loadFromStorage('agenda', initialAgenda)
  );
  const [businesses, setBusinesses] = useState<LocalBusiness[]>(() =>
    loadFromStorage('businesses', initialBusinesses)
  );
  const [gallery, setGallery] = useState<GalleryItem[]>(() =>
    loadFromStorage('gallery', initialGallery)
  );
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() =>
    loadFromStorage('admin_auth', false)
  );

  // Listen to browser hash or simple router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const [path, param] = hash.split('/');
      const validPages: PageRoute[] = [
        'home',
        'profil',
        'pemerintahan',
        'berita',
        'layanan',
        'potensi',
        'galeri',
        'kontak',
        'admin',
      ];
      if (path && validPages.includes(path as PageRoute)) {
        setCurrentPage(path as PageRoute);
        if (path === 'berita' && param) {
          setSelectedNewsSlug(param);
        } else if (path === 'layanan' && param) {
          setSelectedServiceId(param);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageRoute, params?: { slug?: string; serviceId?: string }) => {
    setCurrentPage(page);
    if (params?.slug) {
      setSelectedNewsSlug(params.slug);
      window.location.hash = `#/${page}/${params.slug}`;
    } else if (params?.serviceId) {
      setSelectedServiceId(params.serviceId);
      window.location.hash = `#/${page}/${params.serviceId}`;
    } else {
      setSelectedNewsSlug(null);
      setSelectedServiceId(null);
      window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 4500);
  };

  const hideToast = () => {
    setToast(null);
  };

  // Submit service request with generated ticket code
  const submitServiceRequest = (data: {
    applicantName: string;
    applicantPhone: string;
    address: string;
    serviceType: string;
    notes: string;
    attachmentName?: string;
  }): string => {
    const date = new Date();
    const year = date.getFullYear();
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const count = requests.length + 1;
    const ticketCode = `KLM-${year}-${String(count).padStart(3, '0')}-${randomSuffix}`;

    const newRequest: ServiceRequest = {
      id: 'req-' + Date.now(),
      ticketCode,
      applicantName: data.applicantName,
      applicantPhone: data.applicantPhone,
      address: data.address,
      serviceType: data.serviceType,
      notes: data.notes,
      attachmentName: data.attachmentName,
      status: 'Menunggu',
      createdAt: `${date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}, ${date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB`,
      adminNotes: 'Permohonan berhasil diterima dalam antrean sistem dukuh.',
    };

    const updated = [newRequest, ...requests];
    setRequests(updated);
    saveToStorage('requests', updated);
    showToast(`Permohonan tercatat! Simpan Kode Tiket Anda: ${ticketCode}`, 'success');
    return ticketCode;
  };

  const updateRequestStatus = (id: string, status: ServiceRequest['status'], adminNotes?: string) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status, ...(adminNotes ? { adminNotes } : {}) } : req
    );
    setRequests(updated);
    saveToStorage('requests', updated);
    showToast(`Status permohonan berhasil diubah menjadi "${status}"`, 'info');
  };

  const deleteRequest = (id: string) => {
    const updated = requests.filter((r) => r.id !== id);
    setRequests(updated);
    saveToStorage('requests', updated);
    showToast('Permohonan berhasil dihapus dari arsip.', 'info');
  };

  // News CRUD
  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...item,
      id: 'news-' + Date.now(),
    };
    const updated = [newItem, ...news];
    setNews(updated);
    saveToStorage('news', updated);
    showToast('Berita baru berhasil disimpan!', 'success');
  };

  const updateNews = (id: string, item: Partial<NewsItem>) => {
    const updated = news.map((n) => (n.id === id ? { ...n, ...item } : n));
    setNews(updated);
    saveToStorage('news', updated);
    showToast('Berita berhasil diperbarui!', 'success');
  };

  const deleteNews = (id: string) => {
    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    saveToStorage('news', updated);
    showToast('Berita berhasil dihapus.', 'info');
  };

  // Agenda CRUD
  const addAgenda = (item: Omit<AgendaItem, 'id'>) => {
    const newItem: AgendaItem = {
      ...item,
      id: 'agd-' + Date.now(),
    };
    const updated = [newItem, ...agenda];
    setAgenda(updated);
    saveToStorage('agenda', updated);
    showToast('Agenda kegiatan berhasil ditambahkan!', 'success');
  };

  const updateAgenda = (id: string, item: Partial<AgendaItem>) => {
    const updated = agenda.map((a) => (a.id === id ? { ...a, ...item } : a));
    setAgenda(updated);
    saveToStorage('agenda', updated);
    showToast('Agenda kegiatan berhasil diubah!', 'success');
  };

  const deleteAgenda = (id: string) => {
    const updated = agenda.filter((a) => a.id !== id);
    setAgenda(updated);
    saveToStorage('agenda', updated);
    showToast('Agenda berhasil dihapus.', 'info');
  };

  // Official CRUD
  const addOfficial = (item: Omit<Official, 'id'>) => {
    const newItem: Official = {
      ...item,
      id: 'off-' + Date.now(),
    };
    const updated = [...officials, newItem];
    setOfficials(updated);
    saveToStorage('officials', updated);
    showToast('Data pengurus baru berhasil disimpan!', 'success');
  };

  const updateOfficial = (id: string, item: Partial<Official>) => {
    const updated = officials.map((o) => (o.id === id ? { ...o, ...item } : o));
    setOfficials(updated);
    saveToStorage('officials', updated);
    showToast('Data pengurus berhasil diperbarui!', 'success');
  };

  const deleteOfficial = (id: string) => {
    const updated = officials.filter((o) => o.id !== id);
    setOfficials(updated);
    saveToStorage('officials', updated);
    showToast('Data pengurus berhasil dihapus.', 'info');
  };

  // Gallery CRUD
  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'gal-' + Date.now(),
    };
    const updated = [newItem, ...gallery];
    setGallery(updated);
    saveToStorage('gallery', updated);
    showToast('Foto dokumentasi berhasil ditambahkan ke galeri!', 'success');
  };

  const deleteGalleryItem = (id: string) => {
    const updated = gallery.filter((g) => g.id !== id);
    setGallery(updated);
    saveToStorage('gallery', updated);
    showToast('Foto galeri berhasil dihapus.', 'info');
  };

  // Settings & Profile
  const updateSettings = (newSettings: Partial<WebsiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveToStorage('settings', updated);
    showToast('Pengaturan website berhasil disimpan!', 'success');
  };

  const updateProfile = (newProfile: Partial<VillageProfile>) => {
    const updated = { ...profile, ...newProfile };
    setProfile(updated);
    saveToStorage('profile', updated);
    showToast('Profil wilayah berhasil diperbarui!', 'success');
  };

  // Admin login - Note: This is an educational demo authentication for frontend state,
  // matching the prompt instruction: "Jika backend belum dikonfigurasi, tampilkan demo dashboard dan jangan menganggap autentikasi frontend sebagai keamanan sungguhan."
  const loginAdmin = (pass: string): boolean => {
    if (pass === 'adminkalimati' || pass === 'admin' || pass === 'dukuh2026') {
      setIsAdminLoggedIn(true);
      saveToStorage('admin_auth', true);
      showToast('Berhasil masuk ke Dashboard Pengurus Dukuh Kalimati', 'success');
      return true;
    }
    showToast('Kata sandi pengurus salah. Coba: adminkalimati', 'error');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    saveToStorage('admin_auth', false);
    showToast('Anda telah keluar dari sesi admin.', 'info');
  };

  const resetToDefaults = () => {
    setSettings(initialSettings);
    setProfile(initialProfile);
    setNews(initialNews);
    setOfficials(initialOfficials);
    setRequests(initialRequests);
    setAgenda(initialAgenda);
    setBusinesses(initialBusinesses);
    setGallery(initialGallery);
    
    saveToStorage('settings', initialSettings);
    saveToStorage('profile', initialProfile);
    saveToStorage('news', initialNews);
    saveToStorage('officials', initialOfficials);
    saveToStorage('requests', initialRequests);
    saveToStorage('agenda', initialAgenda);
    saveToStorage('businesses', initialBusinesses);
    saveToStorage('gallery', initialGallery);
    
    showToast('Seluruh data berhasil dikembalikan ke data awal!', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        selectedNewsSlug,
        selectedServiceId,
        settings,
        profile,
        news,
        officials,
        services,
        requests,
        agenda,
        businesses,
        gallery,
        isAdminLoggedIn,
        toast,
        navigate,
        showToast,
        hideToast,
        submitServiceRequest,
        updateRequestStatus,
        deleteRequest,
        addNews,
        updateNews,
        deleteNews,
        addAgenda,
        updateAgenda,
        deleteAgenda,
        addOfficial,
        updateOfficial,
        deleteOfficial,
        addGalleryItem,
        deleteGalleryItem,
        updateSettings,
        updateProfile,
        loginAdmin,
        logoutAdmin,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
