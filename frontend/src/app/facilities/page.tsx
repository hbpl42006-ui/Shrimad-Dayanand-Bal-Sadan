import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Shield, Sparkles, Sun, Heart, Award } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Campus & Residential Facilities | Shrimad Dayanand Bal Sadan',
  description: 'Spread over 3+ acres in Moti Nagar, Lucknow: Hostels, School, 18 kW Solar Plant, 24-cow Gaushala, Computer Lab, Yagyashalas, and Sports Grounds.',
};

export default async function FacilitiesPage() {
  const rawFacilities = await siteApi.getFacilities();
  const facilities = Array.isArray(rawFacilities) ? rawFacilities : [];

  return (
    <div>
      <PageHeader
        badge="3+ Acre Campus"
        title="Comprehensive Campus & Living Facilities"
        subtitle="A secure, serene, green environment in the heart of Lucknow equipped for holistic residential upbringing, education, health, and spiritual peace."
        breadcrumbs={[{ label: 'Facilities' }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Infrastructure & Amenities"
            title="A Nurturing World Inside Our Campus Walls"
            subtitle="Enclosed by protective perimeter walls and equipped with modern solar power, clean submersible water pumps, and open playgrounds."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={fac.id || idx}
                className="bg-cream-50/40 rounded-2xl overflow-hidden border border-beige-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full bg-cream-100 overflow-hidden">
                    <Image
                      src={fac.image || "/images/photos/campus_school_building.jpg"}
                      alt={fac.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-maroon-900/90 text-gold-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                      {fac.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif font-bold text-xl text-charcoal-900">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {fac.description}
                    </p>

                    {fac.features && fac.features.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-beige-200">
                        <span className="text-[11px] font-bold text-maroon uppercase tracking-wider block mb-2">
                          Key Infrastructure Highlights
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {fac.features.map((feat, fidx) => (
                            <li key={fidx} className="flex items-start gap-2 text-xs text-charcoal-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-saffron shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between text-xs text-gold-700 font-semibold border-t border-beige-100">
                  <span>Bal Sadan Campus, Lucknow</span>
                  <span className="font-devanagari text-saffron">ओ३म्</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
