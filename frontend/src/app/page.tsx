import React from 'react';
import { siteApi } from '@/lib/api';
import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import Mission from '@/components/home/Mission';
import HistoryPreview from '@/components/home/HistoryPreview';
import EducationSection from '@/components/home/EducationSection';
import VedicValuesSection from '@/components/home/VedicValuesSection';
import SkillsSection from '@/components/home/SkillsSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import WellnessSection from '@/components/home/WellnessSection';
import SolarSustainabilitySection from '@/components/home/SolarSustainabilitySection';
import GaushalaSection from '@/components/home/GaushalaSection';
import DailyRoutineSection from '@/components/home/DailyRoutineSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import DonationCTA from '@/components/home/DonationCTA';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'Shrimad Dayanand Bal Sadan | Premier Charitable Institution, Lucknow',
  description: 'Shrimad Dayanand Bal Sadan, Moti Nagar, Lucknow. Established May 11, 1915. A charitable residential and educational sanctuary nurturing orphaned and underprivileged children with modern education and Vedic values.',
};

export default async function HomePage() {
  const bundle = await siteApi.getHomeBundle();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Floating Statistics */}
      <Hero hero={bundle.hero} stats={bundle.stats} />

      {/* 2. Introduction ("A Home Built on Compassion") */}
      <Intro about={bundle.about} />

      {/* 3. Our Mission & Objectives (4 Cards) */}
      <Mission />

      {/* 4. History & Renaissance Preview */}
      <HistoryPreview history={bundle.history} />

      {/* 5. Holistic Education Beyond the Classroom */}
      <EducationSection />

      {/* 6. Vedic Values & 16 Sanskars */}
      <VedicValuesSection />

      {/* 7. Vocational Skill Training */}
      <SkillsSection programs={bundle.programs} />

      {/* 8. Campus Facilities & Grounds */}
      <FacilitiesSection facilities={bundle.facilities} />

      {/* 9. Healthcare & Naturopathy */}
      <WellnessSection />

      {/* 10. Sustainability & 18 kW Solar Plant */}
      <SolarSustainabilitySection />

      {/* 11. Indigenous Gaushala & Pure Dairy */}
      <GaushalaSection />

      {/* 12. A Day at Bal Sadan (Daily Routine) */}
      <DailyRoutineSection routines={bundle.routines} />

      {/* 13. Photo Gallery Highlights with Lightbox */}
      <GalleryPreview gallery={bundle.gallery} />

      {/* 14. Support Our Mission / Donation Appeal */}
      <DonationCTA donation={bundle.donation} />

      {/* 15. Visit Bal Sadan & Contact Notice */}
      <ContactCTA />
    </div>
  );
}
