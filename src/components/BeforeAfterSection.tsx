import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  iconSvg: React.ReactNode;
}

function TransformationCard({ item }: { item: TransformationItem }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Before / After Interactive Slider Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none bg-slate-100">
        {/* After Image (Full background) */}
        <img
          src={item.afterImg}
          alt={`${item.title} After Treatment`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.beforeImg}
            alt={`${item.title} Before Treatment`}
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            style={{ width: '100%', minWidth: '320px' }}
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-200">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Draggable Range Input */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label={`Slide to compare before and after for ${item.title}`}
        />

        {/* Tags */}
        <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-blue-600/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none">
          After
        </div>
      </div>

      {/* Card Footer with Title and Icon */}
      <div className="mt-4 flex items-center gap-3 px-1">
        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          {item.iconSvg}
        </div>
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          {item.title}
        </h4>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const { openBooking } = useClinic();

  const transformations: TransformationItem[] = [
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      category: 'Cosmetic',
      beforeImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      iconSvg: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 5 5 5 9c0 3 1.5 6 3 9 1 2 1.5 4 4 4s3-2 4-4c1.5-3 3-6 3-9 0-4-3-7-7-7z" />
        </svg>
      ),
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      category: 'Restorative',
      beforeImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      iconSvg: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: 'ortho',
      title: 'Orthodontic Treatment',
      category: 'Aligners',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      iconSvg: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="results" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                REAL RESULTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Smile Transformations
            </h2>
            <p className="mt-2 text-base text-slate-600">
              See how we help our patients achieve healthier, brighter smiles. Drag sliders to compare.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm shadow-xs transition-all cursor-pointer self-start md:self-auto"
          >
            <span>View More Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {transformations.map((item) => (
            <TransformationCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
