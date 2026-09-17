import React from 'react';
import Image from 'next/image';
import { Flame, Sparkles, Sun, ShieldCheck } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function VedicValuesSection() {
  const pillars = [
    {
      title: 'Sixteen Vedic Sanskars',
      description: 'Children are taught the depth and rituals of the 16 Sanskars prescribed by Maharshi Dayanand Saraswati in the Sanskar Vidhi.',
      icon: <Flame className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Daily Agnihotra & Sandhya',
      description: 'Every morning and evening, the sacred fragrance of Havan and chanting of Swasti Vachan purifies the mind, body, and environment.',
      icon: <Sun className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Community Ceremonies',
      description: 'Older students travel across Lucknow to conduct Havans, Upanayana, and weddings according to Arya Samaj customs, earning honorary Dakshina.',
      icon: <Sparkles className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Universal Equality',
      description: 'Zero discrimination based on caste, color, or creed. Every child is nurtured as a divine creation of God with equal rights and respect.',
      icon: <ShieldCheck className="w-5 h-5 text-saffron" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#E98B18_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <SectionHeading
          dark
          badge="Spiritual Heritage"
          title="Vedic Values & Character Development"
          subtitle="Echoes of Upanishads, divine fragrance of Havan, and timeless character formation rooted in Arya Samaj ideals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Authentic Visual Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-maroon-800/80">
              <Image
                src="/images/photos/havan_vedic_sanskars.jpg"
                alt="Children performing Havan and Vedic Sanskars at Bal Sadan Yagyashala"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold text-saffron uppercase tracking-widest font-devanagari">
                  यज्ञो वै श्रेष्ठतमं कर्म
                </span>
                <p className="text-white text-xs sm:text-sm font-serif mt-0.5">
                  Students performing Vedic Havan in sacred white attire at the campus Yagyashala.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-maroon-900/60 border border-maroon-800/80 hover:border-gold-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-maroon-950 flex items-center justify-center border border-maroon-700 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-base text-cream-50">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200/80 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
