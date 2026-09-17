import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Facility } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  const featuredFacilities = facilities.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          badge="Campus Infrastructure"
          title="Designed for Safety, Learning & Dignity"
          subtitle="Spread over 3+ green acres in Lucknow with hostels, junior high school, auditorium, library, and sports courts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredFacilities.map((fac, idx) => (
            <div
              key={fac.id || idx}
              className="bg-cream-50/40 rounded-2xl overflow-hidden border border-beige-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={fac.image || "/images/photos/campus_school_building.jpg"}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-maroon-900/90 text-gold-300 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs uppercase tracking-wider">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-charcoal-900">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                    {fac.description}
                  </p>

                  {fac.features && fac.features.length > 0 && (
                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-beige-200/80">
                      {fac.features.slice(0, 3).map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-saffron shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="px-6 pb-5 pt-2">
                <Link
                  href="/facilities"
                  className="text-xs font-semibold text-maroon hover:text-saffron transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-7 py-3 rounded-full shadow hover:shadow-md transition-all group"
          >
            <span>View All Residential & Campus Facilities</span>
            <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
