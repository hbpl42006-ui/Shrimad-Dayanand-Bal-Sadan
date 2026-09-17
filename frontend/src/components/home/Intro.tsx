import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, BookOpen, Heart, Sparkles, Activity, ArrowRight } from 'lucide-react';
import { AboutSectionData } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

interface IntroProps {
  about: AboutSectionData;
}

export default function Intro({ about }: IntroProps) {
  const highlights = [
    {
      title: 'Residential Care & Shelter',
      description: 'Hostels for 100+ children with round-the-clock parenting, wholesome meals, and dignity.',
      icon: <Heart className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Recognized Modern Education',
      description: 'Junior High School recognized by UP Basic Education Council with dedicated educators.',
      icon: <BookOpen className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Vedic Values & Sanskars',
      description: 'Swasti Vachan, daily Havan, Upanishad teachings, and character development based on Arya Samaj ideals.',
      icon: <Sparkles className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Vocational Skill Building',
      description: 'Computer literacy, tailoring, musical arts, martial arts, cooking, and self-reliance skills.',
      icon: <Shield className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Health, Wellness & Gaushala',
      description: 'In-house homeopathic dispensary, naturopathy, weekly MBBS doctors, and fresh milk from 24 cows.',
      icon: <Activity className="w-5 h-5 text-saffron" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-beige-50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-white">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src={about.image || "/images/photos/campus_main_gate.jpg"}
                  alt="Shrimad Dayanand Bal Sadan Main Entrance Gate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-beige-200 flex items-center justify-between">
                <div>
                  <p className="font-serif text-xs font-semibold text-maroon">
                    Main Campus Gate • Moti Nagar
                  </p>
                  <p className="text-[11px] text-charcoal-500 font-devanagari">
                    उ० प्र० नियन्त्रण बोर्ड द्वारा मान्यता प्राप्त
                  </p>
                </div>
                <span className="text-xs font-bold text-saffron font-devanagari bg-cream-100 px-2.5 py-1 rounded border border-gold-200">
                  ओ३म्
                </span>
              </div>
            </div>

            {/* Floating Quote Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-maroon-900 text-cream-50 p-5 rounded-xl shadow-xl max-w-sm border border-gold-500/40">
              <p className="font-serif italic text-xs sm:text-sm text-cream-100 leading-relaxed">
                "{about.quote || "Every child is treated with dignity, care and equal opportunity. In Bal Sadan, no child is an orphan."}"
              </p>
              <p className="mt-2 text-[11px] font-semibold text-gold-300 uppercase tracking-wider">
                — Founding Principle Since 1915
              </p>
            </div>
          </div>

          {/* Right Column: Text & Structured Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="About Bal Sadan"
              title={about.heading || "A Home Built on Compassion"}
              subtitle={about.subheading || "More Than a Home — A Sacred Sanctuary to Grow and Thrive"}
              className="mb-6"
            />

            <p className="text-charcoal-700 leading-relaxed text-base sm:text-lg">
              {about.content || "Shrimad Dayanand Bal Sadan is a charitable residential and educational institution working tirelessly for orphaned, destitute, abandoned, and vulnerable children. In Bal Sadan, no child is considered an orphan; our dedicated caregivers and educators provide genuine parenting, secure shelter, nutritious meals, modern schooling, and moral grounding rooted in timeless Vedic values."}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-beige-200/80 shadow-xs hover:border-gold-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cream-100 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal-900 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 mt-0.5 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href={about.cta_url || "/about"}
                className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all group"
              >
                <span>{about.cta_text || "Learn About Bal Sadan"}</span>
                <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
