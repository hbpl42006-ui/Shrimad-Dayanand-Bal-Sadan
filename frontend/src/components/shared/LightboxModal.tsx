'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: Array<{ title: string; image: string; caption?: string }>;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation: Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation: Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image & Caption Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[90vw] max-w-4xl h-[65vh] sm:h-[72vh]">
          <Image
            src={current.image}
            alt={current.title}
            fill
            sizes="90vw"
            className="object-contain rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-white text-base sm:text-lg font-serif font-semibold">
            {current.title}
          </h3>
          {current.caption && (
            <p className="text-cream-200/80 text-xs sm:text-sm mt-1">
              {current.caption}
            </p>
          )}
          <span className="inline-block mt-2 text-[11px] text-cream-300/60">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
