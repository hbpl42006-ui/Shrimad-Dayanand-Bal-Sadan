import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, AlertCircle, FileText, Scale, HeartHandshake, Phone, Mail } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata = {
  title: 'Child Welfare & Statutory Admission Protocol | Shrimad Dayanand Bal Sadan',
  description: 'Official statutory child welfare framework, Juvenile Justice Act compliance, and Child Welfare Committee (CWC) referral process for children aged 10-18.',
};

export default function ChildWelfarePage() {
  return (
    <div>
      <PageHeader
        badge="Statutory Protocol"
        title="Child Welfare & Institutional Care Framework"
        subtitle="Dedicated to child rights, dignity, and statutory compliance under the Juvenile Justice Act and UP Child Welfare Committees."
        breadcrumbs={[{ label: 'Child Welfare & Admissions' }]}
      />

      <section className="py-20 bg-white">
        <Container size="narrow">
          
          {/* Important Regulatory Disclaimer Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-maroon-50 border-2 border-maroon-200 text-charcoal-900 space-y-3 mb-12 shadow-xs">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-maroon shrink-0" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-maroon">
                Important Legal & Admission Notice
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              <strong>Shrimad Dayanand Bal Sadan strictly adheres to the Juvenile Justice (Care and Protection of Children) Act and the Juvenile Justice Model Rules 2016.</strong> The website does not offer informal or direct private admissions. All admissions of orphaned, abandoned, destitute, or vulnerable children must be processed formally through the statutory <strong>Child Welfare Committee (CWC)</strong> or authorized legal channels.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Historical vs Modern Process */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-charcoal-900">
                1. Evolution of the Admission Process
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Historically, Bal Sadan welcomed children through local referrals from village Pradhans, social welfare organizations, and public representatives. However, following the formalization of child welfare governance under the <strong>Juvenile Justice Model Rules 2016</strong>, the entire admission and placement procedure has been systematically formalized.
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Today, children aged <strong>10 to 18</strong> who are orphaned, destitute, neglected, abused, or have run away from home are admitted solely through the orders and oversight of the Child Welfare Committee (CWC).
              </p>
            </div>

            {/* Core Pillars of Child Rights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-cream-50 border border-gold-200">
                <Scale className="w-6 h-6 text-maroon mb-3" />
                <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                  Legal Compliance
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Every resident child is accounted for under legal registries with thorough documentation, quarterly welfare reviews, and government oversight.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream-50 border border-gold-200">
                <HeartHandshake className="w-6 h-6 text-maroon mb-3" />
                <h4 className="font-serif font-bold text-base text-charcoal-900 mb-1">
                  Equal & Dignified Care
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  No discrimination on caste, creed, or origin. All children share the same food, clothing, education, medical care, and loving parental attention.
                </p>
              </div>
            </div>

            {/* Child Welfare Committee (CWC) Procedure */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-charcoal-900">
                2. Overview of the CWC Referral Workflow
              </h3>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-beige-50 border border-beige-200">
                  <span className="w-7 h-7 rounded-full bg-maroon text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <div>
                    <h5 className="font-bold text-sm text-charcoal-900">Identification & Reporting</h5>
                    <p className="text-xs text-charcoal-600 mt-0.5">A vulnerable child is brought to the attention of Childline (1098), Special Juvenile Police Unit (SJPU), or public welfare workers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-beige-50 border border-beige-200">
                  <span className="w-7 h-7 rounded-full bg-maroon text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <div>
                    <h5 className="font-bold text-sm text-charcoal-900">Production Before Child Welfare Committee</h5>
                    <p className="text-xs text-charcoal-600 mt-0.5">The child is produced before the district CWC, which issues statutory inquiry and protective placement orders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-beige-50 border border-beige-200">
                  <span className="w-7 h-7 rounded-full bg-maroon text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <div>
                    <h5 className="font-bold text-sm text-charcoal-900">Admission & Holistic Rehabilitation at Bal Sadan</h5>
                    <p className="text-xs text-charcoal-600 mt-0.5">Following official CWC directives, the child is warmly admitted into Bal Sadan for residential care, UP board schooling, and medical attention.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Inquiries */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gold-300 shadow-sm space-y-4">
              <h4 className="font-serif font-bold text-lg text-maroon">
                Need Guidance on Child Welfare Cases?
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                If you encounter a child in need of care and protection, please contact the national emergency child helpline or our institutional administration for statutory guidance:
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-charcoal-800 pt-2">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-saffron" />
                  <span>National Childline: 1098</span>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-saffron" />
                  <span>Bal Sadan Office: +91 9452158755</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-saffron" />
                  <span>dbslucknow@gmail.com</span>
                </span>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
