import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Shield, Flame, Laptop, Heart, Activity, CheckCircle2 } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Our Work & Programs | Shrimad Dayanand Bal Sadan',
  description: 'Discover how Shrimad Dayanand Bal Sadan provides comprehensive residential care, recognized schooling, Vedic Sanskars, and vocational skills to 100+ children in Lucknow.',
};

export default function OurWorkPage() {
  const pillars = [
    {
      title: 'Residential Care & Parenting',
      href: '/facilities',
      image: '/images/photos/campus_main_gate.jpg',
      icon: <Heart className="w-5 h-5 text-saffron" />,
      description: 'Clean hostels, 24-hour warden supervision, dignity, nutritious vegetarian meals, and pure milk from our 24 campus cows.',
      badge: 'Residential Shelter',
    },
    {
      title: 'UP Board Recognized School',
      href: '/education',
      image: '/images/photos/campus_school_building.jpg',
      icon: <BookOpen className="w-5 h-5 text-saffron" />,
      description: 'On-campus Junior High School recognized by UP Basic Education Council with experienced faculty and counseling.',
      badge: 'Formal Schooling',
    },
    {
      title: 'Vedic Sanskars & Agnihotra',
      href: '/education#vedic',
      image: '/images/photos/havan_vedic_sanskars.jpg',
      icon: <Flame className="w-5 h-5 text-saffron" />,
      description: 'Sixteen Vedic Sanskars, daily morning and evening Agnihotra Havan, Swasti Vachan chanting, and moral character.',
      badge: 'Spiritual Heritage',
    },
    {
      title: 'Vocational Skill Training',
      href: '/skills',
      image: '/images/photos/computer_lab.jpg',
      icon: <Laptop className="w-5 h-5 text-saffron" />,
      description: 'Hands-on instruction in computer literacy, tailoring, musical instruments, karate, clay modelling, and cooking.',
      badge: 'Independence',
    },
    {
      title: 'Campus Healthcare & Naturopathy',
      href: '/facilities',
      image: '/images/photos/yoga_gymnastics_pyramid.jpg',
      icon: <Activity className="w-5 h-5 text-saffron" />,
      description: 'In-house dispensary, naturopathy treatment, dawn yoga, and weekly medical consultations by Govt. MBBS doctors.',
      badge: 'Holistic Health',
    },
    {
      title: 'Child Welfare & Rehabilitation',
      href: '/child-welfare',
      image: '/images/photos/school_assembly_uniform.jpg',
      icon: <Shield className="w-5 h-5 text-saffron" />,
      description: 'Formal admissions aligned with the Juvenile Justice Model Rules 2016 through Child Welfare Committees (CWC).',
      badge: 'Child Protection',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Holistic Impact"
        title="Nurturing Every Dimension of a Child's Life"
        subtitle="We provide an integrated ecosystem of shelter, schooling, Vedic values, vocational training, and loving care to orphan and vulnerable children."
        breadcrumbs={[{ label: 'Our Work' }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Programs Overview"
            title="Six Pillars of Care and Empowerment"
            subtitle="Designed to transform vulnerable children into self-confident, educated, and ethically grounded citizens."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-50/40 rounded-2xl overflow-hidden border border-beige-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full bg-cream-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-maroon-900/90 text-gold-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white border border-gold-200">
                        {item.icon}
                      </div>
                      <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-saffron transition-colors"
                  >
                    <span>Learn details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
