import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck, Check, Phone, Building2, QrCode, Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteApi } from '@/lib/api';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import CopyButton from '@/components/shared/CopyButton';

export const metadata = {
  title: 'Donate & Support | Official Banking & In-Kind Guidelines',
  description: 'Support orphaned and vulnerable children at Shrimad Dayanand Bal Sadan, Lucknow. Direct official Bank of India account, IFSC, UPI ID, and in-kind donation guidelines.',
};

export default async function SupportUsPage() {
  const donation = await siteApi.getDonationInfo();

  const mealOptions = [
    { title: 'Sponsor Daily Morning Breakfast & Pure Milk', desc: 'Fresh milk from on-campus Gaushala with wholesome nutritious morning breakfast for all 100+ children.' },
    { title: 'Sponsor Festival or Birthday Lunch Feast', desc: 'Celebrate your child’s birthday or special family occasion by serving a grand celebratory lunch to the children.' },
    { title: 'Sponsor Evening Dinner in Sacred Memory', desc: 'Dedicated dinner served in sacred remembrance of departed elders and parents.' },
    { title: 'Full Day Nutrition & Meals Sponsorship', desc: 'Covers breakfast, morning dairy, lunch, evening snacks, and dinner for the entire institution.' },
  ];

  const inKindList = [
    { title: 'Dry Food & Rations', items: 'Wheat flour (atta), Basmati/common rice, Toor/Moong/Chana dal, mustard oil, ghee, sugar, spices.' },
    { title: 'Fresh Fruits & Vegetables', items: 'Seasonal fresh fruits (apples, bananas, oranges) and fresh vegetables delivered directly.' },
    { title: 'Clothing & Footwear', items: 'New clothing sets, school uniforms, winter sweaters, socks, sport shoes, and daily wear slippers.' },
    { title: 'Stationery & Educational Books', items: 'Notebooks, pens, geometry boxes, school bags, NCERT textbooks, and drawing sketchbooks.' },
    { title: 'Healthcare & First Aid', items: 'General first aid supplies, bandages, antiseptic liquids, vitamins, and cough syrups approved by dispensary.' },
    { title: 'Daily Toiletries & Hygiene', items: 'Bathing soaps, washing detergent, toothbrushes, toothpaste, hair oil, shampoo, mosquito repellents.' },
    { title: 'Sports & Play Gear', items: 'Volleyballs, badminton rackets and shuttlecocks, footballs, carrom boards, chess sets.' },
    { title: 'Gaushala Fodder & Feed', items: 'Wholesome green fodder (chara), cattle feed, and mustard oil cakes for our 24 cows.' },
  ];

  return (
    <div>
      <PageHeader
        badge="Community Philanthropy"
        title="Your Support Can Change a Child's Future."
        subtitle="Shrimad Dayanand Bal Sadan operates independently without any government grants, sustained purely by the generous hearts of citizens like you."
        breadcrumbs={[{ label: 'Support Us' }]}
      />

      {/* Official Direct Banking Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Direct Bank Transfer"
            title="Official Bank & UPI Details"
            subtitle="Please make contributions directly to our official Bank of India account or via instant UPI. We operate with 100% financial transparency."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            
            {/* Left: Bank Details Card */}
            <div className="lg:col-span-7 bg-cream-50/70 border-2 border-gold-300 rounded-3xl p-8 sm:p-10 shadow-card">
              <div className="flex items-center justify-between pb-6 border-b border-gold-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-maroon-950 text-gold-300 flex items-center justify-center font-bold font-serif text-lg">
                    BOI
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-maroon">
                      {donation.bank_name || 'Bank of India'}
                    </h3>
                    <p className="text-xs text-charcoal-600">
                      {donation.branch || 'Aishbagh branch, Lucknow'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-saffron font-devanagari px-3 py-1 bg-white rounded-full border border-gold-300">
                  ओ३म्
                </span>
              </div>

              <div className="space-y-4 pt-6 text-sm">
                <div>
                  <span className="text-xs text-charcoal-500 font-semibold block">Account Beneficiary Name</span>
                  <p className="font-serif font-bold text-base text-charcoal-900 mt-0.5">
                    {donation.account_holder_name || 'SRIMAD DAYANAND BAL SADAN'}
                  </p>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-beige-200 shadow-2xs">
                  <div>
                    <span className="text-[11px] text-charcoal-500 uppercase font-semibold">Account Number</span>
                    <p className="font-mono font-bold text-base text-maroon mt-0.5">{donation.account_number}</p>
                  </div>
                  <CopyButton textToCopy={donation.account_number} label="Copy Account No" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-beige-200 shadow-2xs">
                  <div>
                    <span className="text-[11px] text-charcoal-500 uppercase font-semibold">IFSC Code</span>
                    <p className="font-mono font-bold text-base text-maroon mt-0.5">{donation.ifsc}</p>
                  </div>
                  <CopyButton textToCopy={donation.ifsc} label="Copy IFSC" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-cream-100 border border-gold-300 shadow-2xs">
                  <div>
                    <span className="text-[11px] text-gold-800 uppercase font-semibold">Official UPI ID</span>
                    <p className="font-mono font-bold text-sm sm:text-base text-charcoal-900 mt-0.5">{donation.upi_id}</p>
                  </div>
                  <CopyButton textToCopy={donation.upi_id} label="Copy UPI ID" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-beige-200 shadow-2xs">
                  <div>
                    <span className="text-[11px] text-charcoal-500 uppercase font-semibold">Google Pay / Phone</span>
                    <p className="font-mono font-semibold text-sm text-charcoal-900 mt-0.5">{donation.phone}</p>
                  </div>
                  <CopyButton textToCopy={donation.phone} label="Copy Phone" />
                </div>
              </div>

              {/* Tax Exemption badge */}
              <div className="mt-6 p-4 rounded-xl bg-maroon-900 text-cream-100 text-xs flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-saffron shrink-0" />
                <div>
                  <span className="font-bold text-white">80G Income Tax Exemption: </span>
                  <span>{donation.tax_exemption_note || 'Donations are eligible for tax deduction under Section 80G of the Income Tax Act.'}</span>
                </div>
              </div>
            </div>

            {/* Right: Official UPI QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="p-6 bg-white rounded-3xl shadow-card border-2 border-gold-300 max-w-sm w-full">
                <span className="text-xs font-bold text-saffron uppercase tracking-wider block mb-2">
                  Scan to Donate via Any UPI App
                </span>
                <p className="text-xs text-charcoal-500 mb-4">
                  GPay, PhonePe, Paytm, BHIM, Amazon Pay
                </p>

                <div className="relative w-56 h-56 mx-auto rounded-2xl overflow-hidden border border-beige-200 bg-white p-2 shadow-inner">
                  <Image
                    src={donation.qr_code || '/images/photos/donation_upi_qr.jpg'}
                    alt="Shrimad Dayanand Bal Sadan Official UPI QR Code"
                    fill
                    sizes="224px"
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-beige-100">
                  <p className="font-mono font-bold text-xs text-charcoal-800">
                    UPI ID: {donation.upi_id}
                  </p>
                  <p className="text-[11px] text-charcoal-500 mt-1">
                    Beneficiary: SRIMAD DAYANAND BAL SADAN
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Sponsoring Meals */}
      <section className="py-20 bg-beige-50 border-t border-beige-200">
        <Container>
          <SectionHeading
            badge="Special Occasions"
            title="Sponsor Meals on Birthdays & Memorials"
            subtitle="Make personal life milestones meaningful by nourishing the children of Bal Sadan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mealOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-beige-200 shadow-xs hover:border-gold-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cream-100 border border-gold-200 flex items-center justify-center mb-4">
                    <Heart className="w-5 h-5 text-saffron" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-charcoal-900 mb-2">
                    {opt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-beige-100 text-xs font-semibold text-maroon">
                  <span>Contact us to schedule date</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Ways to Help (In-Kind Donations) */}
      <section id="in-kind" className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Material Contributions"
            title="Other Ways to Help: In-Kind Donations"
            subtitle="Direct contributions of food grain, clothing, medicine, and learning materials are warmly received at our campus office."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inKindList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cream-50/50 border border-beige-200 shadow-xs hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gold-200 flex items-center justify-center mb-3">
                  <Gift className="w-5 h-5 text-maroon" />
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.items}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-maroon-900 text-cream-50 text-center max-w-2xl mx-auto space-y-2">
            <h4 className="font-serif font-bold text-lg text-white">
              Dropping Off In-Kind Donations?
            </h4>
            <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              Kindly visit our campus office between <strong>9:00 AM and 6:00 PM</strong> or call ahead at <strong>+91 9452158755</strong> to coordinate delivery.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
