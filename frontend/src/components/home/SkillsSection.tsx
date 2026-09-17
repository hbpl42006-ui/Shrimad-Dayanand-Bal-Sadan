import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Laptop, Sparkles, Scissors, Music, Shield, Palette, Utensils, Flower2 } from 'lucide-react';
import { Program } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

interface SkillsSectionProps {
  programs: Program[];
}

export default function SkillsSection({ programs }: SkillsSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Laptop: <Laptop className="w-5 h-5 text-saffron" />,
    Sparkles: <Sparkles className="w-5 h-5 text-saffron" />,
    Scissors: <Scissors className="w-5 h-5 text-saffron" />,
    Music: <Music className="w-5 h-5 text-saffron" />,
    ShieldCheck: <Shield className="w-5 h-5 text-saffron" />,
    Palette: <Palette className="w-5 h-5 text-saffron" />,
    Utensils: <Utensils className="w-5 h-5 text-saffron" />,
    Flower2: <Flower2 className="w-5 h-5 text-saffron" />,
  };

  const skillItems = programs.filter(p => p.category !== 'education').slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-beige-50 relative">
      <Container>
        <SectionHeading
          badge="Vocational Training"
          title="Skills for an Independent Future"
          subtitle="Equipping every child with practical vocations and creative arts to build a dignified, self-reliant life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillItems.map((prog, idx) => (
            <div
              key={prog.id || idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-card border border-beige-200 hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={prog.image || "/images/photos/computer_lab.jpg"}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-xs border border-beige-200">
                    {iconMap[prog.icon] || <Sparkles className="w-4 h-4 text-saffron" />}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif font-bold text-base text-charcoal-900 group-hover:text-maroon transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-2 line-clamp-3 leading-relaxed">
                    {prog.short_description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-beige-100">
                <span className="text-[11px] font-semibold text-gold-700 capitalize">
                  {prog.category} Program
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all group"
          >
            <span>Explore All Vocational Training Courses</span>
            <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
