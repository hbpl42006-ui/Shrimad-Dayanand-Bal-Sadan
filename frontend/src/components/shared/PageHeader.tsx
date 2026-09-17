import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Container from './Container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="relative bg-maroon-950 text-cream-100 py-16 sm:py-20 border-b-4 border-gold-500 overflow-hidden">
      {/* Subtle Pattern & Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#E98B18_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 opacity-90" />

      <Container className="relative z-10">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs text-cream-200/70">
            <li>
              <Link href="/" className="hover:text-saffron transition-colors inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-cream-400/40 shrink-0" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-saffron transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-300 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-saffron/20 text-saffron border border-saffron/30">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
            <span>{badge}</span>
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-cream-200/85 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}
