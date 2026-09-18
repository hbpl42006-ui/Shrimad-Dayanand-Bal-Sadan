'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, Filter } from 'lucide-react';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import LightboxModal from '@/components/shared/LightboxModal';
import { GalleryImage } from '@/lib/types';
import { fallbackGallery } from '@/lib/api/fallbackData';
import { siteApi } from '@/lib/api';

const categories = [
  { label: 'All Photos', key: 'all' },
  { label: 'Campus & Facilities', key: 'campus' },
  { label: 'Education & School', key: 'education' },
  { label: 'Vedic & Havan', key: 'vedic' },
  { label: 'Sports & Martial Arts', key: 'sports' },
  { label: 'Vocational Skills', key: 'skills' },
  { label: 'Events & Celebrations', key: 'events' },
  { label: 'Original Brochure', key: 'brochure' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(fallbackGallery);

  useEffect(() => {
    // In dev / production, fetch from live backend if available
    siteApi.getGallery()
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
        }
      })
      .catch(() => {
        // Fallback already preloaded
      });
  }, []);

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter(img => img.category === activeCategory);

  return (
    <div>
      <PageHeader
        badge="Photographic Archives"
        title="Bal Sadan Photo & Brochure Gallery"
        subtitle="Explore authentic visual moments of campus life, classroom learning, sacred havan rituals, sports, and our official publications."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 sm:py-20 bg-beige-50/60 min-h-[60vh]">
        <Container>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs ${
                  activeCategory === cat.key
                    ? 'bg-maroon text-white shadow-sm'
                    : 'bg-white text-charcoal-700 hover:bg-cream-100 hover:text-maroon border border-beige-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id || idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-card border-2 border-white hover:border-gold-400 transition-all duration-300 bg-cream-100"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
                  <div className="self-end bg-white/20 backdrop-blur-xs p-1.5 rounded-lg text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-wider block">
                      {img.category}
                    </span>
                    <h4 className="text-white text-sm font-serif font-bold leading-snug">
                      {img.title}
                    </h4>
                    {img.caption && (
                      <p className="text-cream-200/80 text-xs mt-1 line-clamp-2">
                        {img.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          <LightboxModal
            isOpen={lightboxIndex !== null}
            images={filteredImages}
            currentIndex={lightboxIndex || 0}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1))}
            onNext={() => setLightboxIndex(prev => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0))}
          />
        </Container>
      </section>
    </div>
  );
}
