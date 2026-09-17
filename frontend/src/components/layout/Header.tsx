'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    sublinks: [
      { name: 'Overview & Lineage', href: '/about' },
      { name: 'Our 110-Year Story', href: '/our-story' },
      { name: 'Transparency & Governance', href: '/transparency' },
    ],
  },
  {
    name: 'Our Work',
    href: '/our-work',
    sublinks: [
      { name: 'Overview of Programs', href: '/our-work' },
      { name: 'Holistic Education', href: '/education' },
      { name: 'Vocational Skills', href: '/skills' },
      { name: 'Child Welfare & Admissions', href: '/child-welfare' },
    ],
  },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card py-2.5 border-b border-gold-200/50'
          : 'bg-white py-3.5 border-b border-beige-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-xs shrink-0 bg-white border border-beige-200 p-1">
            <Image
              src="/images/logo.png"
              alt="Shrimad Dayanand Bal Sadan Official Emblem"
              fill
              sizes="48px"
              className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-saffron font-sans">
                ESTD. 1915 • LUCKNOW
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-saffron" />
              <span className="text-[10px] font-semibold text-gold-600 font-devanagari">
                ओ३म्
              </span>
            </div>
            <h1 className="font-serif font-bold text-base sm:text-lg text-maroon leading-tight tracking-tight">
              Shrimad Dayanand Bal Sadan
            </h1>
            <p className="text-[11px] text-charcoal-600 hidden sm:block">
              Residential Care & Education for Vulnerable Children
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            if (link.sublinks) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-maroon font-semibold bg-maroon-50/60'
                        : 'text-charcoal-800 hover:text-maroon hover:bg-beige-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-xl shadow-card border border-beige-200 p-2 space-y-1">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            pathname === sub.href
                              ? 'bg-maroon-50 text-maroon font-semibold'
                              : 'text-charcoal-700 hover:bg-cream-100 hover:text-maroon'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-maroon font-semibold bg-maroon-50/60'
                    : 'text-charcoal-800 hover:text-maroon hover:bg-beige-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/support-us"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group"
          >
            <Heart className="w-4 h-4 text-saffron fill-saffron group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/support-us"
            className="sm:hidden inline-flex items-center gap-1.5 bg-maroon text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            <Heart className="w-3.5 h-3.5 text-saffron fill-saffron" />
            <span>Donate</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal-700 hover:text-maroon hover:bg-beige-100 focus:outline-none focus:ring-2 focus:ring-maroon"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-beige-200 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto z-40 p-4 transition-all">
          <div className="space-y-1 pb-4">
            <Link
              href="/"
              className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                pathname === '/' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-800'
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-beige-100">
              <span className="text-[11px] font-bold text-gold-700 tracking-wider uppercase px-3">
                About Bal Sadan
              </span>
              <div className="mt-1 space-y-1">
                <Link
                  href="/about"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/about' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Overview & Leadership
                </Link>
                <Link
                  href="/our-story"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/our-story' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Our 110-Year Timeline
                </Link>
                <Link
                  href="/transparency"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/transparency' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Transparency & Legal Status
                </Link>
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-beige-100">
              <span className="text-[11px] font-bold text-gold-700 tracking-wider uppercase px-3">
                Our Programs & Care
              </span>
              <div className="mt-1 space-y-1">
                <Link
                  href="/our-work"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/our-work' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  All Programs & Residential Care
                </Link>
                <Link
                  href="/education"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/education' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Holistic & Vedic Education
                </Link>
                <Link
                  href="/skills"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/skills' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Vocational Skill Training
                </Link>
                <Link
                  href="/child-welfare"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/child-welfare' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Child Welfare & Admission
                </Link>
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-beige-100">
              <span className="text-[11px] font-bold text-gold-700 tracking-wider uppercase px-3">
                Campus & Media
              </span>
              <div className="mt-1 space-y-1">
                <Link
                  href="/facilities"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/facilities' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Campus Facilities & Gaushala
                </Link>
                <Link
                  href="/gallery"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/gallery' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Photo Gallery
                </Link>
                <Link
                  href="/events"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/events' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Events & Celebrations
                </Link>
                <Link
                  href="/contact"
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    pathname === '/contact' ? 'bg-maroon-50 text-maroon font-bold' : 'text-charcoal-700'
                  }`}
                >
                  Contact & Location Map
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-beige-200 flex flex-col gap-2">
            <Link
              href="/support-us"
              className="w-full flex items-center justify-center gap-2 bg-maroon text-white font-semibold text-sm py-3 rounded-xl shadow"
            >
              <Heart className="w-4 h-4 text-saffron fill-saffron" />
              <span>Donate Now / Support Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
