import React from 'react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';

export const metadata = {
  title: 'Terms of Use | Shrimad Dayanand Bal Sadan',
  description: 'Terms of use and institutional policies for Shrimad Dayanand Bal Sadan website.',
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        badge="Institutional Policies"
        title="Terms of Use"
        subtitle="General terms and conditions governing the use of the Shrimad Dayanand Bal Sadan official web portal."
        breadcrumbs={[{ label: 'Terms of Use' }]}
      />

      <section className="py-20 bg-white">
        <Container size="narrow">
          <div className="prose prose-maroon max-w-none text-charcoal-700 leading-relaxed text-sm sm:text-base space-y-6">
            <h3 className="font-serif font-bold text-xl text-maroon">1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. The website is provided for informational and charitable purposes to communicate the mission, history, and activities of Shrimad Dayanand Bal Sadan, Lucknow.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">2. Authentic Content & Intellectual Property</h3>
            <p>
              All photographs, archival brochure materials, texts, emblems, and visual assets published on this website are the property of Shrimad Dayanand Bal Sadan or used with appropriate institutional authorization. Misuse or unauthorized commercial reproduction of photographs of resident children is strictly prohibited by law.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">3. Voluntary Contributions & 80G Receipts</h3>
            <p>
              All donations made through our official Bank of India account or official UPI channels are strictly voluntary charitable contributions. Donors requiring official 80G income tax exemption receipts must provide their valid PAN details, name, and address to our administrative office at <code>dbslucknow@gmail.com</code>.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">4. Child Admission Disclaimer</h3>
            <p>
              This website serves exclusively to disseminate information about the institution. It does not constitute a direct contract for private child placement. All admissions must follow statutory Child Welfare Committee (CWC) protocols under the Juvenile Justice Act 2016.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">5. Jurisdiction</h3>
            <p>
              Any disputes arising out of the use of this website or institutional donations shall be subject exclusively to the jurisdiction of the competent courts in Lucknow, Uttar Pradesh, India.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
