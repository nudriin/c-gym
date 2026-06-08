import React, { useRef, useState } from 'react';
import { FACILITIES_DATA, Facility } from '../types';
import { ChevronLeft, ChevronRight, X, ExternalLink, MapPin } from 'lucide-react';

export default function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="facilities" className="py-20 overflow-hidden bg-brand-background">
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-brand-primary font-display tracking-widest text-xs uppercase block font-semibold mb-1">
              OUR GALLERY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              Fasilitas Eksklusif
            </h2>
          </div>
          
          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-brand-secondary/20 hover:border-brand-primary text-brand-secondary hover:text-brand-primary rounded bg-brand-surface-container/60 transition-colors"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-brand-secondary/20 hover:border-brand-primary text-brand-secondary hover:text-brand-primary rounded bg-brand-surface-container/60 transition-colors"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Content Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-10 snap-x max-w-7xl mx-auto scroll-smooth pb-4"
      >
        {FACILITIES_DATA.map((fac) => (
          <div
            key={fac.id}
            onClick={() => setActiveFacility(fac)}
            className="min-w-[280px] xs:min-w-[320px] sm:min-w-[400px] md:min-w-[480px] aspect-[4/3] bg-brand-surface-container snap-start relative group rounded overflow-hidden cursor-pointer border border-brand-secondary/5"
          >
            {/* Image */}
            <img
              src={fac.image}
              alt={fac.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Top-down Shadow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            {/* Badge Indicator top left */}
            <div className="absolute top-4 left-4 bg-brand-background-deep/90 backdrop-blur border border-brand-primary/20 px-3 py-1 text-xs font-display text-brand-primary uppercase font-bold tracking-widest rounded">
              {fac.title}
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-left bg-brand-background-deep/95 backdrop-blur p-3.5 rounded border border-brand-secondary/10 w-full flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-mono text-brand-primary tracking-widest uppercase mb-0.5">TAP TO VIEW SPECS</p>
                  <p className="text-xs text-brand-secondary">{fac.area}</p>
                </div>
                <ExternalLink className="text-brand-primary h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-brand-surface-container border border-brand-outline/30 w-full max-w-2xl p-6 rounded relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setActiveFacility(null)}
              className="absolute top-4 right-4 text-brand-secondary hover:text-white p-2 rounded-full bg-black/40 backdrop-blur"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Title / Header */}
            <div className="mb-4">
              <span className="text-brand-primary font-display tracking-widest text-xs uppercase block font-semibold">
                FACILITY PORTFOLIO
              </span>
              <h3 className="font-display text-3xl font-black uppercase text-white tracking-wide">
                {activeFacility.title}
              </h3>
            </div>

            {/* Main Picture */}
            <div className="aspect-[16/10] bg-black overflow-hidden rounded border border-brand-secondary/10 mb-6 relative">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute bottom-3 left-3 bg-brand-background-deep/85 border border-brand-secondary/10 backdrop-blur px-3 py-1.5 rounded text-xs flex items-center gap-1.5 font-bold">
                <MapPin size={13} className="text-brand-primary" /> {activeFacility.area}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-brand-on-surface leading-relaxed text-brand-secondary mb-6">
              {activeFacility.description}
            </p>

            {/* Footer Specifications Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-secondary/10">
              <div className="text-xs font-mono text-brand-secondary uppercase">
                ⚙️ RATING KEBERSIHAN: <span className="text-brand-primary font-bold">10/10 EXCELLENT</span>
              </div>
              <button
                onClick={() => setActiveFacility(null)}
                className="bg-brand-primary-container hover:bg-brand-primary text-brand-on-primary-fixed uppercase font-display text-xs font-bold tracking-widest px-6 py-2.5 rounded"
              >
                Kembali Ke Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
