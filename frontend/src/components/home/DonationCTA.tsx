import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { DonationInformation } from '@/lib/types';
import Container from '../shared/Container';
import CopyButton from '../shared/CopyButton';

interface DonationCTAProps {
  donation: DonationInformation;
}

export default function DonationCTA({ donation }: DonationCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-maroon-950 text-cream-100 relative overflow-hidden border-y-4 border-gold-500">
      {/* Background with Authentic Assembly Photo with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photos/bal_sadan_banner_assembly.jpg"
          alt="Bal Sadan Students Assembly"
          fill
          sizes="100vw"
          className="object-cover filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/80" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Emotional Call */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/20 border border-saffron/40 text-xs font-semibold uppercase tracking-wider text-saffron">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Independent Charitable Trust</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Help Us Build Brighter Futures for Vulnerable Children.
            </h2>

            <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed max-w-2xl font-sans">
              Shrimad Dayanand Bal Sadan operates independently without any government financial assistance, relying solely on the compassion, goodwill, and generosity of citizens like you. Your contribution directly provides food, lodging, education, and medical care to 100+ children.
            </p>

            <div className="p-4 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-xs text-gold-200 flex items-start gap-3 max-w-xl">
              <ShieldCheck className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Sponsor Meals on Birthdays & Memorials: </span>
                <span>Many donors choose to sponsor breakfast, lunch, or dinner for all children in honor of a family member’s birthday or in sacred memory of departed loved ones.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/support-us"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-600 text-charcoal-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Heart className="w-4 h-4 text-maroon fill-maroon" />
                <span>Donate Now / Support Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/support-us#in-kind"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all"
              >
                <Gift className="w-4 h-4 text-gold-300" />
                <span>Other Ways to Help (Ration & In-Kind)</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Banking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-charcoal-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-gold-400">
              <div className="flex items-center justify-between border-b border-beige-200 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold text-saffron tracking-wider uppercase">
                    Direct Official Bank Details
                  </span>
                  <h3 className="font-serif font-bold text-lg text-maroon">
                    {donation.bank_name || "Bank of India"}
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    {donation.branch || "Aishbagh branch, Lucknow"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-devanagari text-gold-600">ओ३म्</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="text-charcoal-500 text-[11px] block">Account Name</span>
                  <span className="font-semibold text-charcoal-900">{donation.account_holder_name || "SRIMAD DAYANAND BAL SADAN"}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-beige-50 border border-beige-200">
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase font-semibold">Account Number</span>
                    <p className="font-mono font-bold text-sm text-maroon">{donation.account_number || "680310100008184"}</p>
                  </div>
                  <CopyButton textToCopy={donation.account_number || "680310100008184"} label="Copy" />
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-beige-50 border border-beige-200">
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase font-semibold">IFSC Code</span>
                    <p className="font-mono font-bold text-sm text-maroon">{donation.ifsc || "BKID0006803"}</p>
                  </div>
                  <CopyButton textToCopy={donation.ifsc || "BKID0006803"} label="Copy" />
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-cream-100 border border-gold-300">
                  <div>
                    <span className="text-[10px] text-gold-800 uppercase font-semibold">UPI ID</span>
                    <p className="font-mono font-bold text-xs sm:text-sm text-charcoal-900">{donation.upi_id || "9452158755@okbizicici"}</p>
                  </div>
                  <CopyButton textToCopy={donation.upi_id || "9452158755@okbizicici"} label="Copy" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-beige-200 text-center">
                <Link
                  href="/support-us"
                  className="text-xs font-semibold text-maroon hover:text-saffron transition-colors inline-flex items-center gap-1"
                >
                  <span>View Official QR Code & Tax Exemption Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
