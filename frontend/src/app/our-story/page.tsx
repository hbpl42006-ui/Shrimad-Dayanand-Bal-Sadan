import React from 'react';
import Image from 'next/image';
import { Calendar, Landmark, Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';

export const metadata = {
  title: 'Our Story & 110-Year Timeline | Shrimad Dayanand Bal Sadan',
  description: 'Explore the 110-year journey of Shrimad Dayanand Bal Sadan from its founding on 11 May 1915 through its 1990s renaissance under Shri Dharm Dutt Ji to today.',
};

export default async function OurStoryPage() {
  const rawHistory = await siteApi.getHistory();
  const historyEvents = Array.isArray(rawHistory) ? rawHistory : [];

  return (
    <div>
      <PageHeader
        badge="Our 110-Year Journey"
        title="A Century of Compassion, Courage & Service"
        subtitle="The historical chronicle of Shrimad Dayanand Bal Sadan, from its founding in 1915 to its transformation into a modern educational sanctuary in Lucknow."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Our Story' }]}
      />

      <section className="py-20 bg-beige-50/60 relative">
        <Container size="narrow">
          {/* Timeline Center Line */}
          <div className="relative border-l-2 border-gold-400/80 ml-4 sm:ml-32 space-y-16 py-4">
            {historyEvents.map((evt, idx) => (
              <div key={evt.id || idx} className="relative pl-8 sm:pl-12 group">
                
                {/* Year Marker Badge on the left */}
                <div className="sm:absolute sm:-left-32 sm:top-0 mb-3 sm:mb-0 sm:w-28 sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-maroon text-white font-serif font-bold text-xs sm:text-sm shadow-sm">
                    {evt.year}
                  </span>
                </div>

                {/* Center Node Pin */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-saffron border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-card border border-beige-200 overflow-hidden group-hover:border-gold-300 transition-all duration-300">
                  {evt.image && (
                    <div className="relative h-60 sm:h-72 w-full bg-cream-100 overflow-hidden">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                        <span className="text-white font-serif font-semibold text-xs sm:text-sm">
                          Historical Archive
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 leading-snug">
                      {evt.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-beige-100 flex items-center justify-between text-xs text-gold-700 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-saffron" />
                        <span>Shrimad Dayanand Bal Sadan Heritage</span>
                      </span>
                      <span className="font-devanagari text-saffron font-bold">ओ३म्</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
