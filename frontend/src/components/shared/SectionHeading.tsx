import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          dark
            ? 'bg-saffron/20 text-saffron-300 border border-saffron/30'
            : 'bg-maroon-50 text-maroon border border-maroon-200/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          dark ? 'text-cream-50' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-cream-200/80' : 'text-charcoal-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-[2px] w-8 rounded-full ${dark ? 'bg-saffron' : 'bg-maroon'}`} />
        <div className={`w-2 h-2 rotate-45 ${dark ? 'bg-gold-400' : 'bg-gold-500'}`} />
        <div className={`h-[2px] w-8 rounded-full ${dark ? 'bg-saffron' : 'bg-maroon'}`} />
      </div>
    </div>
  );
}
