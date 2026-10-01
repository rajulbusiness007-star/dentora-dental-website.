import React, { useState } from 'react';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';
import { LightboxModal } from './LightboxModal';

export function SmileGallery() {
  const { config } = useClinic();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = config.galleryItems;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
            Clinic Life & Aesthetics
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#17324D] font-normal tracking-tight leading-[1.1]">
            A Space Designed for Calm, <br />
            Smiles Built for Life
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667582]">
            Step into our calm studio environment, see genuine patient smiles, and discover our conservative dental philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {galleryItems.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            const aspectClass = isLarge ? 'aspect-[16/10]' : 'aspect-square md:aspect-[4/3]';

            return (
              <div
                key={item.id}
                className={`${colSpan} group relative rounded-sm overflow-hidden bg-[#E9E5DC] cursor-pointer shadow-xs border border-[#E9E5DC]`}
                onClick={() => setLightboxIndex(index)}
              >
                <div className={`w-full ${aspectClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#77C7C3] uppercase tracking-wider block mb-1">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-1 mt-1 max-w-md hidden sm:block">
                        {item.caption}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <LightboxModal
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
