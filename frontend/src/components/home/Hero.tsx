import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, BookOpen, ArrowRight, Sun, Users, TreePine, Award, Calendar } from 'lucide-react';
import { HomeHeroData, ImpactStatistic } from '@/lib/types';
import Container from '../shared/Container';

interface HeroProps {
  hero: HomeHeroData;
  stats: ImpactStatistic[];
}

export default function Hero({ hero, stats }: HeroProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-saffron" />,
    TreePine: <TreePine className="w-5 h-5 text-saffron" />,
    Calendar: <Calendar className="w-5 h-5 text-saffron" />,
    Sun: <Sun className="w-5 h-5 text-saffron" />,
    Heart: <Heart className="w-5 h-5 text-saffron" />,
    Award: <Award className="w-5 h-5 text-saffron" />,
  };

  return (
    <div className="relative bg-maroon-950 text-cream-100 overflow-hidden">
      {/* Background Hero Image with Dark Editorial Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.hero_image || "/images/photos/campus_school_building.jpg"}
          alt="Shrimad Dayanand Bal Sadan Campus & Students"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-50"
        />
        {/* Multi-layered gradient for reading comfort */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/70 to-maroon-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-950/50 to-transparent" />
      </div>

      {/* Subtle Vedic Pattern Accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D6A43B_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44">
        <Container>
          <div className="max-w-3xl space-y-6">
            {/* Subtle Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/20 border border-saffron/40 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase text-saffron">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
              <span>{hero.badge || "SHRIMAD DAYANAND BAL SADAN • LUCKNOW"}</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {hero.heading || "Giving Children a Home, Education & Hope."}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-cream-100/90 leading-relaxed font-sans max-w-2xl">
              {hero.subheading || "A residential institution in Lucknow providing orphaned and destitute children with loving care, UP Board recognized schooling, Vedic moral values, and life-changing skills since 1915."}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={hero.primary_cta_url || "/support-us"}
                className="inline-flex items-center justify-center gap-2.5 bg-saffron hover:bg-saffron-600 text-charcoal-950 font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base group"
              >
                <Heart className="w-4 h-4 text-maroon-900 fill-maroon-900" />
                <span>{hero.primary_cta_text || "Donate Now"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={hero.secondary_cta_url || "/our-story"}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 text-sm sm:text-base"
              >
                <BookOpen className="w-4 h-4 text-gold-300" />
                <span>{hero.secondary_cta_text || "Discover Our Story"}</span>
              </Link>
            </div>

            {/* Historical Heritage Tagline */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-gold-300 font-medium">
              <span className="font-devanagari font-bold text-saffron text-sm">ओ३म्</span>
              <span className="opacity-60">•</span>
              <span>{hero.footer_note || "Serving children since 1915 • 100+ Years of Dignity and Care"}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Floating Statistics Strip Underneath Hero */}
      <div className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-card border border-gold-200/60 p-5 sm:p-6 lg:p-8 backdrop-blur-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-beige-200">
            {stats.slice(0, 6).map((stat, idx) => (
              <div
                key={stat.id || idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-4' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-cream-100 border border-gold-200 flex items-center justify-center mb-2 shadow-xs">
                  {iconMap[stat.icon] || <Award className="w-5 h-5 text-saffron" />}
                </div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-maroon leading-none">
                  {stat.value}
                  <span className="text-saffron text-xl ml-0.5">{stat.suffix}</span>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-charcoal-800 tracking-tight">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-1 text-[11px] text-charcoal-500 line-clamp-1 hidden sm:block">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
