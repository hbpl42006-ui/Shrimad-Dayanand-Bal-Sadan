import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Laptop, Sparkles, Scissors, Music, Shield, Palette, Utensils, Flower2 } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Vocational Skills & Self-Reliance Programs | Shrimad Dayanand Bal Sadan',
  description: 'Practical vocational courses empowering children with self-reliance: computer literacy, tailoring, music, martial arts, cooking, painting, and organic gardening.',
};

export default async function SkillsPage() {
  const rawPrograms = await siteApi.getPrograms();
  const allPrograms = Array.isArray(rawPrograms) ? rawPrograms : [];
  const skillPrograms = allPrograms.filter(p => p.category !== 'education');

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

  return (
    <div>
      <PageHeader
        badge="Self-Reliance & Vocations"
        title="Skills for an Independent Future"
        subtitle="Empowering children beyond textbooks with hands-on vocational skills, creative mastery, and physical self-defense."
        breadcrumbs={[{ label: 'Our Work', href: '/our-work' }, { label: 'Vocational Skills' }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Vocational Curriculum"
            title="Comprehensive Practical Training"
            subtitle="Tailored to individual interests and modern employment avenues to ensure every child graduates self-reliant."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillPrograms.map((prog, idx) => (
              <div
                key={prog.id || idx}
                className="bg-cream-50/50 rounded-2xl overflow-hidden border border-beige-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-cream-100 overflow-hidden">
                    <Image
                      src={prog.image || "/images/photos/computer_lab.jpg"}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-xs border border-beige-200">
                      {iconMap[prog.icon] || <Sparkles className="w-5 h-5 text-saffron" />}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-maroon transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {prog.detailed_description || prog.short_description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 border-t border-beige-200/60 flex items-center justify-between text-xs text-gold-700 font-semibold">
                  <span className="capitalize">{prog.category} Discipline</span>
                  <span className="text-saffron font-devanagari">स्वावलम्बन</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-beige-50 border border-gold-200/80 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-serif font-bold text-xl text-maroon">
              Help Provide Vocational Equipment & Tools
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Donations of sewing machines, musical instruments, computers, art supplies, and sports equipment directly enrich our children's vocational workshops.
            </p>
            <Link
              href="/support-us#in-kind"
              className="inline-flex items-center gap-2 bg-maroon text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-maroon-800 transition-colors shadow-sm"
            >
              <span>View In-Kind Donation Guidelines</span>
              <ArrowRight className="w-4 h-4 text-saffron" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
