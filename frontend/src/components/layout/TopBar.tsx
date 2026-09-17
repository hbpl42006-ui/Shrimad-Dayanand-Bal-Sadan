import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-maroon-950 text-cream-200 text-xs py-2 px-4 border-b border-maroon-800/50 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Vedic Invocation */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="text-saffron font-bold text-sm font-devanagari">ओ३म्</span>
          <span className="text-gold-300 font-devanagari">कृण्वन्तो विश्वमार्यम्</span>
          <span className="text-cream-300/40">|</span>
          <span className="text-cream-300/80">Serving Underprivileged Children Since 1915</span>
        </div>

        {/* Contact Quick Details */}
        <div className="flex items-center gap-6 text-cream-200/90">
          <a
            href="tel:+919452158755"
            className="flex items-center gap-1.5 hover:text-saffron transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-saffron" />
            <span>+91 9452158755</span>
          </a>
          <a
            href="mailto:dbslucknow@gmail.com"
            className="flex items-center gap-1.5 hover:text-saffron transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-saffron" />
            <span>dbslucknow@gmail.com</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 hover:text-saffron transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-saffron" />
            <span>Moti Nagar, Lucknow</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
