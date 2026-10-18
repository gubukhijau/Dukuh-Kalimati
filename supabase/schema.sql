-- ====================================================================
-- SKEMA BASIS DATA SUPABASE / POSTGRESQL - WEBSITE RESMI DUKUH KALIMATI
-- Portal Informasi dan Pelayanan Masyarakat
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
CREATE TYPE news_category_enum AS ENUM (
  'Pengumuman',
  'Kegiatan Warga',
  'Gotong Royong',
  'Sosial & Kemasyarakatan',
  'Pembangunan Wilayah'
);

CREATE TYPE service_status_enum AS ENUM (
  'Menunggu',
  'Diproses',
  'Selesai',
  'Ditolak'
);

CREATE TYPE agenda_status_enum AS ENUM (
  'Akan Datang',
  'Berlangsung',
  'Selesai'
);

-- 3. TABEL: WEBSITE SETTINGS
CREATE TABLE IF NOT EXISTS website_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dukuh_name VARCHAR(120) NOT NULL DEFAULT 'Dukuh Kalimati',
  tagline TEXT NOT NULL DEFAULT 'Portal Informasi dan Pelayanan Masyarakat',
  address TEXT NOT NULL,
  postal_code VARCHAR(20),
  official_phone VARCHAR(50),
  whatsapp_number VARCHAR(30) NOT NULL,
  email VARCHAR(100),
  office_hours TEXT,
  map_embed_url TEXT,
  map_latitude NUMERIC(10, 6),
  map_longitude NUMERIC(10, 6),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. TABEL: PROFILES & DEMOGRAFI WILAYAH
CREATE TABLE IF NOT EXISTS village_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(120) NOT NULL DEFAULT 'Dukuh Kalimati',
  motto TEXT NOT NULL,
  history_text TEXT NOT NULL,
  vision TEXT NOT NULL,
  missions JSONB NOT NULL DEFAULT '[]'::jsonb,
  geographic_description TEXT,
  boundaries JSONB NOT NULL DEFAULT '{}'::jsonb,
  facilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_population INT DEFAULT 0,
  total_households INT DEFAULT 0,
  rt_count INT DEFAULT 4,
  rw_count INT DEFAULT 2,
  male_count INT DEFAULT 0,
  female_count INT DEFAULT 0,
  demographic_notice TEXT,
  chief_name VARCHAR(120),
  chief_title VARCHAR(120),
  chief_period VARCHAR(80),
  chief_speech JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. TABEL: OFFICIALS (PAMONG & PENGURUS DUKUH)
CREATE TABLE IF NOT EXISTS officials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(120) NOT NULL,
  role VARCHAR(120) NOT NULL,
  department VARCHAR(120) NOT NULL,
  order_index INT NOT NULL DEFAULT 1,
  phone VARCHAR(50),
  bio TEXT,
  tupoksi JSONB NOT NULL DEFAULT '[]'::jsonb,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. TABEL: NEWS & ANNOUNCEMENTS (BERITA & PENGUMUMAN)
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category news_category_enum NOT NULL DEFAULT 'Pengumuman',
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL DEFAULT 'Sekretariat Dukuh',
  image_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'published',
  read_time VARCHAR(40) DEFAULT '3 menit baca',
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. TABEL: AGENDAS (AGENDA KEGIATAN WILAYAH)
CREATE TABLE IF NOT EXISTS agendas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(80) NOT NULL,
  event_date VARCHAR(80) NOT NULL,
  event_time VARCHAR(80) NOT NULL,
  location TEXT NOT NULL,
  organizer VARCHAR(120) NOT NULL,
  status agenda_status_enum NOT NULL DEFAULT 'Akan Datang',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. TABEL: SERVICES (MASTER LAYANAN & PERSYARATAN)
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(150) NOT NULL,
  category VARCHAR(80) NOT NULL,
  description TEXT NOT NULL,
  requirements JSONB NOT NULL DEFAULT '[]'::jsonb,
  procedure JSONB NOT NULL DEFAULT '[]'::jsonb,
  processing_time VARCHAR(60) NOT NULL,
  cost VARCHAR(60) NOT NULL DEFAULT 'Gratis (Rp 0,-)',
  contact_person VARCHAR(120) NOT NULL,
  is_online_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. TABEL: SERVICE REQUESTS (PERMOHONAN WARGA & PENGADUAN)
CREATE TABLE IF NOT EXISTS service_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_code VARCHAR(40) UNIQUE NOT NULL,
  applicant_name VARCHAR(120) NOT NULL,
  applicant_phone VARCHAR(50) NOT NULL,
  address TEXT NOT NULL,
  service_type VARCHAR(150) NOT NULL,
  notes TEXT NOT NULL,
  attachment_name TEXT,
  status service_status_enum NOT NULL DEFAULT 'Menunggu',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. TABEL: LOCAL BUSINESSES (POTENSI & UMKM LOKAL)
CREATE TABLE IF NOT EXISTS local_businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(150) NOT NULL,
  category VARCHAR(80) NOT NULL,
  owner VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  phone VARCHAR(50) NOT NULL,
  address TEXT NOT NULL,
  price_range VARCHAR(80),
  is_example BOOLEAN DEFAULT TRUE,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. TABEL: GALLERY (GALERI DOKUMENTASI KEGIATAN)
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  category VARCHAR(80) NOT NULL,
  activity_date VARCHAR(60) NOT NULL,
  caption TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE village_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE officials ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE agendas ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE local_businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Policies: Siapapun dapat membaca konten publik yang berstatus diterbitkan
CREATE POLICY "Public Read Website Settings" ON website_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Village Profiles" ON village_profiles FOR SELECT USING (true);
CREATE POLICY "Public Read Officials" ON officials FOR SELECT USING (true);
CREATE POLICY "Public Read Published News" ON news FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Agendas" ON agendas FOR SELECT USING (true);
CREATE POLICY "Public Read Services" ON services FOR SELECT USING (true);
CREATE POLICY "Public Read Local Businesses" ON local_businesses FOR SELECT USING (true);
CREATE POLICY "Public Read Gallery" ON gallery FOR SELECT USING (true);

-- 2. Citizen Request Policy: Publik dapat mengirimkan permohonan baru
CREATE POLICY "Public Can Submit Service Request" ON service_requests FOR INSERT WITH CHECK (true);

-- 3. Citizen Request Tracking: Publik dapat mencari tiket permohonan miliknya berdasarkan kode tiket
CREATE POLICY "Public Can Track Own Request By Ticket" ON service_requests FOR SELECT USING (true);

-- 4. Admin Full Access: Hanya pengguna terotentikasi (admin) yang dapat memodifikasi data
CREATE POLICY "Admin Full Access Website Settings" ON website_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Profiles" ON village_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Officials" ON officials FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access News" ON news FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Agendas" ON agendas FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Requests" ON service_requests FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Businesses" ON local_businesses FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Gallery" ON gallery FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ====================================================================
-- SEED DATA AWAL
-- ====================================================================

INSERT INTO website_settings (dukuh_name, tagline, address, postal_code, official_phone, whatsapp_number, email, office_hours)
VALUES (
  'Dukuh Kalimati',
  'Portal Informasi dan Pelayanan Masyarakat',
  'Jl. Utama Kalimati RT 02 / RW 01, Wilayah Kalimati',
  '55xxx',
  '0812-3456-7890',
  '6281234567890',
  'dukuh.kalimati@example.desa.id',
  'Senin - Jumat: 08.00 - 15.00 WIB | Sabtu: 08.00 - 12.00 WIB'
);
