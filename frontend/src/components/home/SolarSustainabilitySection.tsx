import React from 'react';
import Image from 'next/image';
import { Sun, Zap, Leaf, CheckCircle2 } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function SolarSustainabilitySection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Environmental Stewardship"
              title="A Greener Campus Powered by the Sun"
              subtitle="Pioneering ecological responsibility through our 18 kW rooftop solar installation and green campus routines."
              className="mb-4"
            />

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              Shrimad Dayanand Bal Sadan embraces sustainability as an extension of Vedic harmony with nature. With an 18-kilowatt rooftop solar panel array installed on the school building, the institution has significantly reduced its reliance on fossil power while ensuring continuous, uninterrupted electricity for classrooms, computer labs, and water filtration pumps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-cream-50 border border-gold-200">
                <div className="flex items-center gap-2 text-maroon font-bold text-sm mb-1 font-serif">
                  <Zap className="w-4 h-4 text-saffron" />
                  <span>Uninterrupted Power</span>
                </div>
                <p className="text-xs text-charcoal-600">
                  Reliable clean energy ensuring students always have lights, fans, and active computing systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-gold-200">
                <div className="flex items-center gap-2 text-maroon font-bold text-sm mb-1 font-serif">
                  <Leaf className="w-4 h-4 text-saffron" />
                  <span>Eco Education</span>
                </div>
                <p className="text-xs text-charcoal-600">
                  Children learn practical environmental conservation, tree planting, and zero-waste stewardship.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs text-charcoal-600">
              <CheckCircle2 className="w-4 h-4 text-saffron shrink-0" />
              <span>Solar panels installed on rooftop with bidirectional smart net metering.</span>
            </div>
          </div>

          {/* Right Column: Solar Image with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-beige-100 bg-white">
              <div className="relative h-72 sm:h-88 w-full">
                <Image
                  src="/images/photos/solar_power_rooftop.jpg"
                  alt="18 kW Rooftop Solar Power Plant at Shrimad Dayanand Bal Sadan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Energy Metric Tag */}
              <div className="p-5 bg-maroon-950 text-cream-50 border-t border-gold-500/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-saffron uppercase tracking-wider">
                    Rooftop Renewable Infrastructure
                  </span>
                  <p className="font-serif font-bold text-lg text-white">
                    18-Kilowatt Solar Power Plant
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-saffron/20 border border-saffron/40 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-saffron animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
