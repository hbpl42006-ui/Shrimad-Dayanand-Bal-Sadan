import React from 'react';
import { BookOpen, HeartHandshake, Flame, Compass } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function Mission() {
  const missionCards = [
    {
      title: 'Education',
      subtitle: 'Rigorous Academic & Technical Upliftment',
      description: 'Providing recognized schooling up to Junior High School under UP Basic Education Council, alongside advanced computer training and academic mentorship.',
      icon: <BookOpen className="w-6 h-6 text-maroon" />,
      tag: 'Academic Excellence',
    },
    {
      title: 'Care',
      subtitle: 'Dignified Parenting & Nurturing Home',
      description: 'Ensuring every child receives unconditional love, wholesome food, pure milk from our Gaushala, modern medical care, and safe residential shelter.',
      icon: <HeartHandshake className="w-6 h-6 text-maroon" />,
      tag: 'Loving Shelter',
    },
    {
      title: 'Values',
      subtitle: 'Vedic Heritage & Character Formation',
      description: 'Instilling the timeless sixteen Sanskars, daily Havan, Upanishadic mantras, voice modulation, and moral virtues of truth, service, and universal brotherhood.',
      icon: <Flame className="w-6 h-6 text-maroon" />,
      tag: 'Vedic Lineage',
    },
    {
      title: 'Independence',
      subtitle: 'Vocational Skills & Self-Reliance',
      description: 'Equipping youth with practical vocations—IT skills, tailoring, culinary arts, music, and martial arts—preparing them to enter society with confidence and honor.',
      icon: <Compass className="w-6 h-6 text-maroon" />,
      tag: 'Empowered Future',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          badge="Guiding Principles"
          title="Our Mission & Sacred Purpose"
          subtitle="Combining traditional Vedic Gurukul wisdom with contemporary education to prepare self-reliant, morally upright citizens."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-cream-50/50 border border-beige-200/80 hover:border-gold-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gold-200 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-saffron-600 bg-saffron-50 px-2.5 py-1 rounded-full border border-saffron-200">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-maroon transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-gold-700 mt-1 mb-3">
                  {card.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-beige-200/60 flex items-center justify-between text-xs text-maroon font-semibold">
                <span>Part of Gurukul Ethos</span>
                <span className="text-saffron font-devanagari">ओ३म्</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
