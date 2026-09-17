import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, MapPin, ArrowLeft, Heart } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import { formatDate } from '@/lib/utils';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const evt = await siteApi.getEventBySlug(slug);
  if (!evt) return { title: 'Event Not Found' };
  return {
    title: `${evt.title} | Shrimad Dayanand Bal Sadan`,
    description: evt.summary,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const evt = await siteApi.getEventBySlug(slug);

  if (!evt) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        badge={evt.is_upcoming ? 'Upcoming Event' : 'Past Celebration'}
        title={evt.title}
        subtitle={evt.summary}
        breadcrumbs={[{ label: 'Events', href: '/events' }, { label: evt.title }]}
      />

      <section className="py-20 bg-white">
        <Container size="narrow">
          <div className="space-y-8">
            
            {/* Event Meta Details Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-gold-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-charcoal-700">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-saffron shrink-0" />
                <div>
                  <span className="text-[10px] text-charcoal-500 uppercase block">Date</span>
                  <span className="font-semibold">{formatDate(evt.date)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-saffron shrink-0" />
                <div>
                  <span className="text-[10px] text-charcoal-500 uppercase block">Time</span>
                  <span className="font-semibold">{evt.time_str}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-saffron shrink-0" />
                <div>
                  <span className="text-[10px] text-charcoal-500 uppercase block">Venue</span>
                  <span className="font-semibold truncate">{evt.location}</span>
                </div>
              </div>
            </div>

            {/* Event Featured Image */}
            {evt.image && (
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-card border-4 border-white bg-cream-100">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Full Content */}
            <div className="prose prose-maroon max-w-none text-charcoal-700 leading-relaxed sm:text-base space-y-4">
              <p>{evt.content}</p>
            </div>

            {/* Actions */}
            <div className="pt-8 border-t border-beige-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-maroon hover:text-saffron transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Events</span>
              </Link>

              <Link
                href="/support-us"
                className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm"
              >
                <Heart className="w-4 h-4 text-saffron fill-saffron" />
                <span>Support Bal Sadan Celebrations</span>
              </Link>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
