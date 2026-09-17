import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Landmark } from 'lucide-react';
import { HistoryEvent } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

interface HistoryPreviewProps {
  history: HistoryEvent[];
}

export default function HistoryPreview({ history }: HistoryPreviewProps) {
  return (
    <section className="py-20 lg:py-28 bg-beige-100/50 relative">
      <Container>
        <SectionHeading
          badge="110+ Years of Service"
          title="A Legacy of Compassion & Resilience"
          subtitle="From a humble single-room sanctuary in 1915 to a thriving educational haven in Lucknow."
        />

        {/* Timeline Horizontal / Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {history.slice(0, 3).map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-beige-200/80 flex flex-col group hover:border-gold-300 transition-all duration-300"
            >
              <div className="relative h-48 w-full bg-cream-100 overflow-hidden">
                <Image
                  src={item.image || "/images/photos/dayanand_saraswati.jpg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-maroon text-white font-serif font-bold text-xs px-3 py-1 rounded-full shadow">
                  {item.year}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-maroon transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-beige-100 flex items-center justify-between text-xs text-gold-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-saffron" />
                    <span>Historical Milestone</span>
                  </span>
                  <span className="font-devanagari text-saffron">ओ३म्</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Timeline */}
        <div className="text-center">
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-7 py-3 rounded-full shadow hover:shadow-md transition-all group"
          >
            <Landmark className="w-4 h-4 text-saffron" />
            <span>Discover Our Full 110-Year Interactive Timeline</span>
            <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
