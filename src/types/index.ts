export type NewsCategory = 
  | 'Pengumuman' 
  | 'Kegiatan Warga' 
  | 'Gotong Royong' 
  | 'Sosial & Kemasyarakatan' 
  | 'Pembangunan Wilayah';

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: NewsCategory;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
  status: 'published' | 'draft';
  imageUrl?: string;
}

export interface Official {
  id: string;
  name: string;
  role: string;
  department: string;
  order: number;
  phone?: string;
  bio: string;
  tupoksi: string[];
  imageUrl?: string;
}

export interface ServiceRequirement {
  id: string;
  title: string;
  category: 'Administrasi' | 'Kependudukan' | 'Surat Pengantar' | 'Bantuan Sosial' | 'Pengaduan';
  description: string;
  requirements: string[];
  procedure: string[];
  processingTime: string;
  cost: string;
  contactPerson: string;
  isOnlineAvailable: boolean;
}

export interface ServiceRequest {
  id: string;
  ticketCode: string;
  applicantName: string;
  applicantPhone: string;
  address: string;
  serviceType: string;
  notes: string;
  attachmentName?: string;
  status: 'Menunggu' | 'Diproses' | 'Selesai' | 'Ditolak';
  createdAt: string;
  adminNotes?: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  category: 'Gotong Royong' | 'Rapat Warga' | 'Kegiatan Sosial' | 'Keagamaan' | 'Kepemudaan' | 'Hari Besar';
  date: string;
  time: string;
  location: string;
  organizer: string;
  status: 'Akan Datang' | 'Berlangsung' | 'Selesai';
  description: string;
}

export interface LocalBusiness {
  id: string;
  name: string;
  category: 'Kuliner' | 'Pertanian & Perkebunan' | 'Kerajinan' | 'Jasa';
  owner: string;
  description: string;
  phone: string;
  address: string;
  priceRange: string;
  isExample: boolean;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gotong Royong' | 'Pembangunan' | 'Sosial' | 'Budaya' | 'Pemuda';
  date: string;
  caption: string;
  imageUrl?: string;
}

export interface DemographicData {
  totalPopulation: number;
  totalHouseholds: number;
  rtCount: number;
  rwCount: number;
  maleCount: number;
  femaleCount: number;
  updateDate: string;
  isDummyNotice: string;
}

export interface VillageProfile {
  name: string;
  dukuhName: string;
  motto: string;
  historyText: string;
  vision: string;
  missions: string[];
  geographicDescription: string;
  boundaries: {
    north: string;
    south: string;
    east: string;
    west: string;
  };
  facilities: {
    name: string;
    category: string;
    description: string;
  }[];
  demographics: DemographicData;
  speech: {
    chiefName: string;
    chiefTitle: string;
    chiefPeriod: string;
    speechText: string[];
  };
}

export interface WebsiteSettings {
  dukuhName: string;
  tagline: string;
  address: string;
  postalCode: string;
  officialPhone: string;
  whatsappNumber: string; // international format e.g. 6281234567890
  email: string;
  officeHours: string;
  mapEmbedUrl: string;
  mapLatitude: number;
  mapLongitude: number;
}
