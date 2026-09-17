import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, CheckCircle2, GraduationCap, Monitor, Sparkles, Award, ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Holistic & Vedic Education | Shrimad Dayanand Bal Sadan',
  description: 'Combining formal UP Board recognized schooling with ancient Vedic Gurukul traditions, Sanskrit voice modulation, computer literacy, and board exam excellence.',
};

export default function EducationPage() {
  const educationalHighlights = [
    {
      title: 'UP Basic Education Council Recognition',
      description: 'Our campus school is formally recognized up to the Junior High School level, delivering standard NCERT/State Board syllabus in Hindi, English, Mathematics, Science, and Social Studies.',
      icon: <GraduationCap className="w-6 h-6 text-maroon" />,
    },
    {
      title: 'Vedic Phonetics & Voice Modulation',
      description: 'Children receive daily training in the accurate pronunciation of Vedic hymns, Upanishads, and mantras, mastering classical Sanskrit accentuation and rhythmic breath control.',
      icon: <Sparkles className="w-6 h-6 text-maroon" />,
    },
    {
      title: 'Digital Literacy & Computer Lab',
      description: 'Equipped with internet-enabled desktop PCs, teaching practical digital literacy, word processing, spreadsheets, presentations, and modern internet research.',
      icon: <Monitor className="w-6 h-6 text-maroon" />,
    },
    {
      title: 'Board Exam & Collegiate Transition',
      description: 'Upon completing 8th grade, students are sponsored and admitted into top reputed high schools and colleges, consistently achieving first-class marks in board exams.',
      icon: <Award className="w-6 h-6 text-maroon" />,
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Academic & Moral Growth"
        title="Education Beyond the Classroom"
        subtitle="Where ancient Gurukul reverence meets modern scientific literacy, unlocking each child’s intellectual and moral potential."
        breadcrumbs={[{ label: 'Our Work', href: '/our-work' }, { label: 'Education' }]}
      />

      {/* Main Educational Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                badge="Campus School"
                title="A Foundation Built on Academic Rigor & Compassion"
                subtitle="Staffed by dedicated, experienced educators and child counselors who guide each student individually."
                className="mb-4"
              />

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                Bal Sadan provides a unique synthesis of modern education and Gurukul values. In our dedicated campus school recognized by the Uttar Pradesh Basic Education Council, children are taught in small, focused batches where every individual receives dedicated attention and nurturing guidance.
              </p>

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                Beyond regular school hours, evening study is supervised by resident teachers. Children in grades 9th and above are placed in reputed senior secondary schools in Lucknow, and students receive vocational counseling to select specialized technical diplomas after class 12th.
              </p>

              <div className="p-4 rounded-xl bg-beige-50 border border-beige-200 text-xs sm:text-sm text-charcoal-800">
                <strong className="text-maroon">Holistic Balance: </strong>
                Daily routines include Yoga, Pranayama, and meditation at 6:00 AM, followed by morning and evening Sandhya and Havan rituals.
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-white bg-cream-100">
                <Image
                  src="/images/photos/campus_school_building.jpg"
                  alt="Bal Sadan Junior High School Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-maroon-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Campus School Recognized by UP Board
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden shadow-sm border-2 border-white">
                  <Image
                    src="/images/photos/computer_lab.jpg"
                    alt="Computer Education"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    Computer Lab
                  </div>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden shadow-sm border-2 border-white">
                  <Image
                    src="/images/photos/school_assembly_uniform.jpg"
                    alt="Morning School Assembly"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    School Assembly
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4 Cards Grid */}
      <section className="py-20 bg-beige-50 border-t border-beige-200">
        <Container>
          <SectionHeading
            badge="Academic Facets"
            title="Key Dimensions of Our Educational Model"
            subtitle="Preparing students for academic achievement, technical competence, and noble character."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalHighlights.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-beige-200 shadow-xs hover:border-gold-300 transition-all flex items-start gap-5"
              >
                <div className="p-3 rounded-xl bg-cream-100 border border-gold-200 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/support-us"
              className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow hover:shadow-md transition-all group"
            >
              <span>Sponsor a Child's Annual Education</span>
              <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
