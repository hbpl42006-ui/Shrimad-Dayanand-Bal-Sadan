import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, Sparkles, Users, Award, BookOpen, Check } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'About Us | Lineage, Leadership & Values',
  description: 'Learn about Shrimad Dayanand Bal Sadan, established on 11 May 1915 on Maharshi Dayanand Saraswati’s ideals of selfless compassion, equality, and holistic education.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Universal Equality (समभाव)',
      description: 'Every child, irrespective of background, caste, or religion, is treated with equal dignity and love. In Bal Sadan, no child is labeled an orphan.',
      icon: <Heart className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Vedic Character (संस्कार)',
      description: 'Grounding life in truth, purity, daily Agnihotra havan, Swasti Vachan chanting, and moral righteousness as taught by Arya Samaj.',
      icon: <Sparkles className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Self-Reliance (स्वावलम्बन)',
      description: 'Preparing children not only with academic degrees but with practical vocational skills—computing, tailoring, culinary arts, and martial arts.',
      icon: <Shield className="w-5 h-5 text-saffron" />,
    },
    {
      title: 'Community-Driven Service (लोकहित)',
      description: 'Operating entirely through community philanthropy without government grants, maintaining 100% financial and moral accountability.',
      icon: <Users className="w-5 h-5 text-saffron" />,
    },
  ];

  return (
    <div>
      <PageHeader
        badge="About Bal Sadan"
        title="A Sanctuary Built on Compassion and Vedic Ideals"
        subtitle="Serving orphan, abandoned, destitute, and underprivileged children in Lucknow with shelter, modern schooling, and moral dignity since 1915."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Philosophical Foundations */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-cream-100">
                <div className="relative h-96 sm:h-[460px] w-full">
                  <Image
                    src="/images/photos/dayanand_saraswati.jpg"
                    alt="Maharshi Dayanand Saraswati Portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-maroon-950 text-cream-50 text-center border-t-2 border-gold-400">
                  <p className="font-serif font-bold text-sm text-gold-300">
                    Maharshi Dayanand Saraswati (1824–1883)
                  </p>
                  <p className="text-xs text-cream-200/80 mt-0.5 font-devanagari">
                    वेदों की ओर लौटो • कृण्वन्तो विश्वमार्यम्
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                badge="Vedic Inspiration"
                title="Our Lineage & Founding Philosophy"
                subtitle="Guided by the reformer Maharshi Dayanand Saraswati and established by Banarasi Lal Ji (Swami Nirbhayanand) in 1915."
                className="mb-4"
              />

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                Shrimad Dayanand Bal Sadan traces its spiritual lineage to the great Vedic renaissance inspired by Maharshi Dayanand Saraswati. In 1915, driven by pure altruism rather than self-interest, revered philanthropist Banarasi Lal Ji recognized the plight of parentless and destitute children in society.
              </p>

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                With the support of like-minded citizens of Lucknow, he formed a founding committee and established Shrimad Dayanand Bal Sadan on <strong>11 May 1915</strong>. Later, Banarasi Lal Ji embraced a life of spiritual sannyasa as Swami Nirbhayanand, bequeathing an institution that would weather severe challenges to become one of Uttar Pradesh’s most respected child-welfare sanctuaries.
              </p>

              <div className="p-4 rounded-xl bg-beige-50 border border-beige-200 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                <strong className="text-maroon">Official Recognition: </strong>
                Recognized by the Uttar Pradesh Control Board (Department of Women & Child Development) and the UP Basic Education Council for our Junior High School.
              </div>

              <div className="pt-2">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all group"
                >
                  <span>Read Bal Sadan's Renaissance & History</span>
                  <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-beige-50 border-y border-beige-200">
        <Container>
          <SectionHeading
            badge="Institutional Pillars"
            title="Values That Guide Every Breath at Bal Sadan"
            subtitle="Treating every child as God's sacred creation, without discrimination of caste, creed, or origin."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-beige-200/80 shadow-xs hover:shadow-card hover:border-gold-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-100 border border-gold-200 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-charcoal-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & Patrons Tribute */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                badge="Architect of Modernization"
                title="Remembering Shri Dharm Dutt Ji (1929–2019)"
                subtitle="Dedicated nearly 27 years of selfless service, contributing his retirement funds to build hostels, school classrooms, and Shri Dharm Dutt Sabhagar."
                className="mb-4"
              />

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                In the early 1990s, when Bal Sadan faced severe hardship—operating out of a single dilapidated room with just twenty children and lacking meals—Shri Dharm Dutt Ji (retired Joint Secretary, UP State Electricity Board) began visiting and teaching the children regularly.
              </p>

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                Appointed Manager in 1992 and Secretary in 1994, he committed himself entirely to modernizing Bal Sadan. Alongside his courageous wife, Mrs. Omeshwari, he resisted aggressive land grab attempts by anti-social elements, constructed modern hostels, and established the recognized school. He guided Bal Sadan until his peaceful demise on <strong>December 19, 2019</strong>, at age 90.
              </p>

              <p className="text-xs text-charcoal-600 italic">
                We also reverently remember former Presidents Shri Arjun Dev Mahana, Kunwar Shanti Prakash, Vaidya Kundan Lal Arya, Yagya Muni, Vice President Shri B.D. Kulshrestha, and former Secretary Santosh Dutta.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-cream-100">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/photos/shri_dharm_dutt_meeting.jpg"
                    alt="Shri Dharm Dutt Ji with Bal Sadan Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-maroon-950 text-cream-50 text-center">
                  <p className="font-serif font-bold text-xs text-gold-300">
                    Meeting of Management with Shri Dharm Dutt Ji
                  </p>
                  <p className="text-[11px] text-cream-200/70 mt-0.5">
                    Guiding Bal Sadan with selfless devotion for nearly 27 years
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
