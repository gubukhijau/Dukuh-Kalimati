import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SambutanSection } from '../components/home/SambutanSection';
import { LayananCepatSection } from '../components/home/LayananCepatSection';
import { BeritaSection } from '../components/home/BeritaSection';
import { ProfilSummarySection } from '../components/home/ProfilSummarySection';
import { PotensiSection } from '../components/home/PotensiSection';
import { AgendaSection } from '../components/home/AgendaSection';
import { GaleriSection } from '../components/home/GaleriSection';
import { PetaSection } from '../components/home/PetaSection';
import { CtaPartisipasiSection } from '../components/home/CtaPartisipasiSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <SambutanSection />
      <LayananCepatSection />
      <BeritaSection />
      <ProfilSummarySection />
      <PotensiSection />
      <AgendaSection />
      <GaleriSection />
      <PetaSection />
      <CtaPartisipasiSection />
    </div>
  );
};
