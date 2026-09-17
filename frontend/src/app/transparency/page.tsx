import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ShieldCheck, Download, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Transparency & Governance | Shrimad Dayanand Bal Sadan',
  description: 'Statutory disclosures, recognition by UP Basic Education Council, Juvenile Justice compliance, and downloadable official brochure publications.',
};

export default async function TransparencyPage() {
  const documents = await siteApi.getDocuments();

  const brochurePages = [
    { page: 1, title: 'Cover Page: Maharshi Dayanand Saraswati & Introduction', image: '/images/brochure/brochure_page_1.jpg' },
    { page: 2, title: 'Overview, Objectives & Inclusive Environment', image: '/images/brochure/brochure_page_2.jpg' },
    { page: 3, title: 'Beginning in 1915 & Bal Sadan’s Renaissance', image: '/images/brochure/brochure_page_3.jpg' },
    { page: 4, title: 'Admission Guidelines, Schooling & Vocational Courses', image: '/images/brochure/brochure_page_4.jpg' },
    { page: 5, title: 'Hostels, Gaushala, 18 kW Solar Plant & Daily Routine', image: '/images/brochure/brochure_page_5.jpg' },
    { page: 6, title: 'How You Can Help, Official Banking Info & Contacts', image: '/images/brochure/brochure_page_6.jpg' },
  ];

  return (
    <div>
      <PageHeader
        badge="Governance & Trust"
        title="Transparency, Governance & Disclosures"
        subtitle="Shrimad Dayanand Bal Sadan maintains complete institutional transparency, statutory adherence, and community accountability."
        breadcrumbs={[{ label: 'Transparency' }]}
      />

      {/* Community Model & No Government Funding Statement */}
      <section className="py-16 bg-white">
        <Container>
          <div className="p-8 sm:p-10 rounded-3xl bg-maroon-950 text-cream-50 border-2 border-gold-400 shadow-card">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/40 text-xs font-semibold text-saffron uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Community Statement</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                No Government Funding: 100% Community-Driven Care
              </h2>
              <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed">
                Bal Sadan operates independently, without any government financial aid or recurring state grant, relying solely on the goodwill, generosity, and direct philanthropic support of citizens. We provide children with free accommodation, modern education, sports training, healthcare, and nutritious food with zero fee burden.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gold-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron" />
                  <span>80G Income Tax Exemption</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron" />
                  <span>UP Basic Education Council Recognized</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron" />
                  <span>Juvenile Justice Act 2016 Compliant</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Document Records */}
      <section className="py-16 bg-beige-50 border-y border-beige-200">
        <Container>
          <SectionHeading
            badge="Official Publications"
            title="Institutional Documents & Certificates"
            subtitle="View and verify our official credentials and regulatory reports."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={doc.id || idx}
                className="p-6 rounded-2xl bg-white border border-beige-200 shadow-xs hover:shadow-card hover:border-gold-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cream-100 border border-gold-200 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-maroon" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-beige-100 text-charcoal-700">
                      {doc.year}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-charcoal-900 leading-snug">
                    {doc.title}
                  </h3>
                  {doc.description && (
                    <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                      {doc.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-beige-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gold-700">
                    {doc.category_name || 'Official Document'}
                  </span>
                  <a
                    href={doc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-maroon hover:text-saffron transition-colors"
                  >
                    <span>View Record</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Complete Official Brochure Pages */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Full Brochure"
            title="Official Institutional Brochure Pages"
            subtitle="Original authentic publication of Shrimad Dayanand Bal Sadan, Lucknow."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochurePages.map((b) => (
              <div
                key={b.page}
                className="bg-cream-50/50 rounded-2xl overflow-hidden border border-beige-200 shadow-card hover:border-gold-300 transition-all duration-300 group"
              >
                <div className="relative h-96 w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-maroon text-white font-serif font-bold text-xs px-3 py-1 rounded-full shadow">
                    Page {b.page}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-serif font-bold text-sm text-charcoal-900 leading-snug">
                    {b.title}
                  </h4>
                  <div className="mt-3 pt-3 border-t border-beige-200 flex items-center justify-between">
                    <a
                      href={b.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-maroon hover:text-saffron transition-colors inline-flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>View Full Page Scan</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
