import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, BookOpen, Monitor, Award } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function EducationSection() {
  const points = [
    'Campus Junior High School officially recognized by the Uttar Pradesh Basic Education Council.',
    'Experienced, compassionate teachers and child counselors focusing on individualized academic growth.',
    'Modern technical education in a dedicated computer lab teaching digital literacy and Office suites.',
    'Proven track record of students achieving first-class marks in high school and intermediate board exams.',
    'Special guidance for post-12th technical diploma, vocational training, and collegiate admissions.',
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Holistic Education"
              title="Education Beyond the Classroom"
              subtitle="Combining rigorous UP Board curriculum with technical computing, Sanskrit pronunciation, and moral values."
              className="mb-4"
            />

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              At Shrimad Dayanand Bal Sadan, education is not merely textbook rote learning. It is an all-encompassing journey that combines modern sciences, mathematics, and computing with ancient Gurukul traditions of self-discipline, contemplation, and ethical conduct.
            </p>

            <ul className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-charcoal-700 leading-snug">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Academic Curriculum</span>
                <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dual Visual Composition */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-beige-200">
                <Image
                  src="/images/photos/campus_school_building.jpg"
                  alt="Bal Sadan School Building & Students in Uniform"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-[11px] font-semibold text-white">UP Board Recognized School</span>
                </div>
              </div>

              <div className="p-4 bg-cream-50 rounded-2xl border border-gold-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-maroon font-serif font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-saffron" />
                  <span>Vedic Voice Modulation</span>
                </div>
                <p className="text-xs text-charcoal-600 mt-1">
                  Students learn authentic phonetic pronunciation of Sanskrit hymns and Upanishads.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-maroon-900 text-cream-100 rounded-2xl border border-gold-500/40 shadow-xs">
                <div className="flex items-center gap-2 text-gold-300 font-serif font-bold text-sm">
                  <Monitor className="w-4 h-4 text-saffron" />
                  <span>Computer Laboratory</span>
                </div>
                <p className="text-xs text-cream-200/80 mt-1">
                  Digital literacy, MS Office, typing speed, and internet education for each child.
                </p>
              </div>

              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-beige-200">
                <Image
                  src="/images/photos/computer_lab.jpg"
                  alt="Computer Lab at Bal Sadan"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-[11px] font-semibold text-white">Digital Skill Training</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
