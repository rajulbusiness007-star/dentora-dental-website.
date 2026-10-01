import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types/clinic';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function LightboxModal({ items, currentIndex, onClose, onNavigate }: LightboxModalProps) {
  if (currentIndex === null || !items[currentIndex]) return null;
  const current = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F2236]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl w-full bg-[#17324D] rounded-sm overflow-hidden shadow-2xl border border-white/15">
        <div className="relative aspect-[16/10] sm:aspect-[16/10] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-[#17324D] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#77C7C3] uppercase tracking-wider font-semibold mb-1">
              <span>{current.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/60">Photo {currentIndex + 1} of {items.length}</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              {current.caption}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:hidden self-end">
            <button
              type="button"
              onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)}
              className="p-2 bg-white/10 rounded-sm text-white text-xs font-medium"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)}
              className="p-2 bg-white/10 rounded-sm text-white text-xs font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
