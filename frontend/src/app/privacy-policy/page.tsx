import React from 'react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';

export const metadata = {
  title: 'Privacy Policy | Shrimad Dayanand Bal Sadan',
  description: 'Privacy policy and data protection commitments of Shrimad Dayanand Bal Sadan, Lucknow.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        badge="Legal & Privacy"
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding donor confidentiality, child protection privacy, and website visitor information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <Container size="narrow">
          <div className="prose prose-maroon max-w-none text-charcoal-700 leading-relaxed text-sm sm:text-base space-y-6">
            <h3 className="font-serif font-bold text-xl text-maroon">1. Introduction</h3>
            <p>
              Shrimad Dayanand Bal Sadan (&quot;we&quot;, &quot;us&quot;, &quot;institution&quot;) respects your privacy and is committed to protecting any personal information you share with us through our website. This Privacy Policy details how we collect, use, and protect visitor information.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">2. Strict Protection of Child Privacy</h3>
            <p>
              In full accordance with the Juvenile Justice (Care and Protection of Children) Act and institutional child welfare guidelines, we strictly respect the privacy, dignity, and legal protections afforded to children under our residential care. We do not publish sensitive personal legal histories, private records, or identifying data of children.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">3. Information Collected from Donors and Visitors</h3>
            <p>
              When you contact us, sponsor meals, or make a voluntary contribution, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and contact details (email, phone number, address)</li>
              <li>PAN number and postal details strictly for issuing Section 80G tax exemption receipts</li>
              <li>Details of inquiries or meal dates requested</li>
            </ul>
            <p>
              We do NOT sell, rent, or trade donor information to any third party for commercial marketing under any circumstances.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">4. Security of Financial Transactions</h3>
            <p>
              All donations made to Shrimad Dayanand Bal Sadan are deposited directly into our official Bank of India institutional account or through standard verified UPI protocols. We never store credit card numbers, net banking passwords, or personal banking credentials on our web servers.
            </p>

            <h3 className="font-serif font-bold text-xl text-maroon">5. Contact for Privacy Matters</h3>
            <p>
              For any questions regarding our privacy practices, please contact us at:
              <br />
              <strong>Email:</strong> dbslucknow@gmail.com
              <br />
              <strong>Phone:</strong> +91 9452158755
              <br />
              <strong>Address:</strong> Shrimad Dayanand Bal Sadan, Moti Nagar, Lucknow - 226004, UP, India
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
