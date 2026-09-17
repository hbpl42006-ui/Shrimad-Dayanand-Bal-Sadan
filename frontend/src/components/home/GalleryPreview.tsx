'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { GalleryImage } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';
import LightboxModal from '../shared/LightboxModal';

interface GalleryPreviewProps {
  gallery: GalleryImage[];
}

export default function GalleryPreview({ gallery }: GalleryPreviewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const items = gallery.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-beige-100/50 relative">
      <Container>
        <SectionHeading
          badge="Moments at Bal Sadan"
          title="Campus Life, Activities & Ceremonies"
          subtitle="Authentic snapshots of our resident children learning, practicing rituals, celebrating festivals, and excelling in sports."
        />

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-card-hover border-2 border-white transition-all duration-300 bg-cream-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                <Maximize2 className="w-5 h-5 text-white/90 mb-2 self-end" />
                <h4 className="text-white text-xs sm:text-sm font-serif font-bold leading-snug">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-cream-200/80 text-[11px] mt-0.5 line-clamp-1">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-800 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all group"
          >
            <ImageIcon className="w-4 h-4 text-saffron" />
            <span>Explore Full Photo & Brochure Gallery</span>
            <ArrowRight className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxIndex !== null}
          images={items}
          currentIndex={lightboxIndex || 0}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0))}
        />
      </Container>
    </section>
  );
}
