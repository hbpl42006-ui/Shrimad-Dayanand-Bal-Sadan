import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Events & Celebrations | Shrimad Dayanand Bal Sadan',
  description: 'Upcoming and past annual celebrations, Vedic Havans, Independence Day parades, and cultural festivals at Shrimad Dayanand Bal Sadan, Lucknow.',
};

export default async function EventsPage() {
  const rawEvents = await siteApi.getEvents();
  const events = Array.isArray(rawEvents) ? rawEvents : [];

  return (
    <div>
      <PageHeader
        badge="Cultural Life"
        title="Events, Celebrations & Havan Parvas"
        subtitle="Join our children in commemorating national festivals, Vedic foundation anniversaries, and community cultural gatherings."
        breadcrumbs={[{ label: 'Events' }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((evt, idx) => (
              <div
                key={evt.id || idx}
                className="bg-cream-50/50 rounded-2xl overflow-hidden border border-beige-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full bg-cream-100 overflow-hidden">
                    <Image
                      src={evt.image || "/images/photos/havan_vedic_sanskars.jpg"}
                      alt={evt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-maroon-900/90 text-gold-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {evt.is_upcoming ? 'Upcoming Event' : 'Past Celebration'}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2 mb-3 text-xs text-charcoal-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-saffron shrink-0" />
                        <span>{formatDate(evt.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-saffron shrink-0" />
                        <span>{evt.time_str}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-saffron shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon transition-colors leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 line-clamp-3 leading-relaxed">
                      {evt.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/events/${evt.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-saffron transition-colors"
                  >
                    <span>Read full event details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
