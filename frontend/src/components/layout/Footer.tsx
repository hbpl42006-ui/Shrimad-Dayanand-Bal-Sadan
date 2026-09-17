import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-cream-100 relative overflow-hidden border-t-4 border-gold-500">
      {/* Subtle Vedic Mandala Pattern Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D6A43B_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-maroon-800/60">
          
          {/* Column 1: Organization Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm bg-white p-1 shrink-0 border border-gold-400/60">
                <Image
                  src="/images/logo.png"
                  alt="Shrimad Dayanand Bal Sadan Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-saffron font-devanagari">ओ३म्</span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                    FOUNDED MAY 11, 1915
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-cream-50 leading-tight">
                  Shrimad Dayanand Bal Sadan
                </h3>
              </div>
            </div>

            <p className="text-sm text-cream-200/80 leading-relaxed max-w-md">
              A charitable residential and educational institution in Lucknow, UP, dedicated to providing loving shelter, formal education, Vedic values, nutritious food, and vocational life skills to orphan, destitute, and underprivileged children.
            </p>

            {/* 80G Tax Exemption Notice */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-maroon-900/80 border border-gold-500/30 text-xs text-gold-300">
              <ShieldCheck className="w-4 h-4 text-saffron shrink-0" />
              <span>Independent Charitable Institution • 80G Tax Exemption</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@ShrimadDayanandBalSadan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-maroon-900 hover:bg-saffron text-cream-100 hover:text-charcoal-900 flex items-center justify-center transition-colors border border-maroon-800"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/srimaddayanandbalsadan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-maroon-900 hover:bg-saffron text-cream-100 hover:text-charcoal-900 flex items-center justify-center transition-colors border border-maroon-800"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Work */}
          <div>
            <h4 className="font-serif font-semibold text-gold-400 text-base mb-4 tracking-wide">
              Our Work
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link href="/education" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>Holistic Education</span>
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>Vocational Training</span>
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>16 Vedic Sanskars</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>Campus Gaushala</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>18 kW Solar Energy</span>
                </Link>
              </li>
              <li>
                <Link href="/child-welfare" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                  <span>Child Welfare Guidelines</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-gold-400 text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link href="/about" className="hover:text-saffron transition-colors">
                  About Bal Sadan
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-saffron transition-colors">
                  Our 110-Year Legacy
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-saffron transition-colors">
                  Facilities & Grounds
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-saffron transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-saffron transition-colors">
                  Events & Festivals
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-saffron transition-colors">
                  Brochure & Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Banking */}
          <div>
            <h4 className="font-serif font-semibold text-gold-400 text-base mb-4 tracking-wide">
              Contact & Bank
            </h4>
            <ul className="space-y-3 text-xs text-cream-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>Moti Nagar, Near DAV College, Aishbagh Road, Lucknow - 226004, UP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919452158755" className="hover:text-saffron">+91 9452158755</a>
                  <a href="tel:+919305882580" className="hover:text-saffron">+91 9305882580</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-saffron shrink-0" />
                <a href="mailto:dbslucknow@gmail.com" className="hover:text-saffron">dbslucknow@gmail.com</a>
              </li>
              <li className="pt-2 border-t border-maroon-800/60">
                <Link
                  href="/support-us"
                  className="inline-flex items-center gap-1.5 text-saffron hover:text-gold-300 font-semibold"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>View Bank of India & UPI</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-300/70 border-t border-maroon-800/40 mt-4">
          <p>© {new Date().getFullYear()} Shrimad Dayanand Bal Sadan, Lucknow. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-cream-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream-100 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/transparency" className="hover:text-cream-100 transition-colors">
              Statutory Disclosures
            </Link>
          </div>
        </div>

        {/* Center Bottom Attribution */}
        <div className="pt-4 pb-2 text-center text-xs text-cream-200/90 font-medium border-t border-maroon-800/30 mt-4">
          Crafted by{' '}
          <a
            href="https://jstechnova.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 hover:text-saffron font-bold transition-colors underline underline-offset-4 decoration-gold-400/50 hover:decoration-saffron"
          >
            JS Technova
          </a>
        </div>
      </div>
    </footer>
  );
}
