import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Container from '../shared/Container';

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 bg-beige-50 relative">
      <Container>
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-beige-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-50 text-maroon text-xs font-semibold uppercase tracking-wider">
              <span>Open Campus</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 leading-tight">
              You Are Welcome to Visit Bal Sadan
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              We warmly invite patrons, well-wishers, and community members to visit our Moti Nagar campus, interact with our children, witness daily Havan rituals, and observe our educational and skill programs firsthand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-charcoal-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>Moti Nagar, Near DAV College, Lucknow</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <span>+91 9452158755 / 9305882580</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-saffron shrink-0" />
                <span>Visiting: 10:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow transition-all group"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/child-welfare"
              className="inline-flex items-center justify-center gap-2 bg-beige-100 hover:bg-beige-200 text-charcoal-800 font-semibold text-xs px-5 py-3 rounded-full border border-beige-300 transition-colors"
            >
              <span>Child Welfare Information</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
