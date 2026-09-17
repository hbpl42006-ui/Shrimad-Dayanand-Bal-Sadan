import React from 'react';
import Image from 'next/image';
import { HeartPulse, Stethoscope, Sparkles, ShieldAlert } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function WellnessSection() {
  const points = [
    {
      title: 'Homeopathic Dispensary',
      description: 'Fully equipped dispensary on campus for immediate treatment of seasonal fevers, coughs, and minor ailments.',
      icon: <HeartPulse className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Weekly Govt. MBBS Doctors Clinic',
      description: 'A dedicated team of Government MBBS doctors visits every Friday to conduct clinical examinations and treat children.',
      icon: <Stethoscope className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Yoga & Naturopathy Center',
      description: 'Natural healing regimens, daily dawn asanas, and pranayama to build strong immunity and emotional resilience.',
      icon: <Sparkles className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Nutritious Diet & Pure Gaushala Milk',
      description: 'Zero food scarcity. Daily fresh, unadulterated milk from our 24 cows and protein-balanced vegetarian meals.',
      icon: <ShieldAlert className="w-5 h-5 text-saffron" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-beige-50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-white">
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src="/images/photos/yoga_gymnastics_pyramid.jpg"
                  alt="Children practicing physical fitness & gymnastics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-white border-t border-beige-200">
                <h4 className="font-serif font-bold text-sm text-maroon">
                  Physical Vitality & Daily Exercise
                </h4>
                <p className="text-xs text-charcoal-600 mt-1">
                  Daily morning yoga and outdoor gymnastics build disease-resistant stamina in resident children.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="Child Healthcare"
              title="Dedicated Health & Wellness Support"
              subtitle="Ensuring every child in our care is physically robust, mentally joyful, and clinically protected."
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-beige-200/80 shadow-xs hover:border-gold-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cream-100 w-fit mb-3">
                    {pt.icon}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-charcoal-900">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-maroon-50 border border-maroon-200/60 text-xs text-maroon-900 flex items-center justify-between">
              <span className="font-semibold">MBBS Doctors Consultation: Every Friday at Bal Sadan Clinic</span>
              <span className="text-saffron font-bold font-devanagari">ओ३म्</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
