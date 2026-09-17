import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Check } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function GaushalaSection() {
  const highlights = [
    'Sheltering and caring for over 24 indigenous cows and calves on campus.',
    'Supplies 100% pure, fresh, and unadulterated milk to all resident children daily.',
    'Children learn gentle compassion, respect for living creatures, and the virtue of Gau Seva.',
    'Generates organic fertilizer for campus gardens, vegetable plots, and flowering trees.',
  ];

  return (
    <section className="py-20 lg:py-28 bg-beige-50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Authentic Cowshed Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-white">
              <div className="relative h-72 sm:h-88 w-full">
                <Image
                  src="/images/photos/gaushala_cowshed.jpg"
                  alt="Gaushala at Shrimad Dayanand Bal Sadan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-beige-200 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-maroon">
                    Bal Sadan Campus Gaushala
                  </p>
                  <p className="text-xs text-charcoal-500">
                    Housing 24+ Indigenous Cattle & Calves
                  </p>
                </div>
                <span className="text-xs font-bold text-saffron font-devanagari bg-cream-100 px-3 py-1 rounded-full border border-gold-200">
                  गौ सेवा
                </span>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Description */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Sacred Heritage"
              title="Gaushala: Care, Nutrition & Gau Seva"
              subtitle="Providing nutritious dairy for our children while preserving reverence for sacred cattle."
              className="mb-4"
            />

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              A well-tended cowshed within the Bal Sadan complex serves the dual purpose of cow protection and providing children with fresh, pure, unadulterated milk every day. In keeping with Vedic ethos, the cowshed fosters an atmosphere of loving service and connects children intimately with nature.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                  <div className="w-5 h-5 rounded-full bg-cream-200 border border-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-maroon" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-white border border-gold-200/80 shadow-xs flex items-center gap-3">
              <Heart className="w-5 h-5 text-saffron shrink-0" />
              <p className="text-xs text-charcoal-600 leading-normal">
                Donors frequently sponsor wholesome fodder (chara) and healthcare for our Gaushala cows during sacred family occasions.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
