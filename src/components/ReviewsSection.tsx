import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function ReviewsSection() {
  const { config, isDemoMode } = useClinic();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = config.reviews;

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
              Patient Experiences
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#17324D] font-normal tracking-tight leading-[1.1]">
              Patients Tell the <br />
              Story Best.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667582]">
              Real feedback from individuals who entrusted their oral wellness and smile transformations to {config.name}.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm border border-[#E9E5DC] shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-sm bg-[#EEF4F1] flex items-center justify-center font-serif text-2xl font-semibold text-[#17324D]">
              {config.googleRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#263746] font-medium">
                Overall Google & Patient Rating
              </p>
              <p className="text-[11px] text-[#667582]">
                {config.reviewCount} verified patient testimonials
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              className="bg-white p-7 sm:p-8 rounded-sm border border-[#E9E5DC] shadow-xs flex flex-col justify-between relative group hover:border-[#17324D]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#667582]">
                    <CheckCircle2 className="w-3 h-3 text-[#77C7C3]" />
                    <span>{rev.source}</span>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-[#17324D] uppercase tracking-wider mb-3">
                  {rev.treatment}
                </div>

                <p className="text-sm text-[#263746]/85 leading-relaxed italic mb-6">
                  {rev.reviewText.replace(/^DEMO REVIEW — Replace with verified clinic review:\s*"?/, '"').replace(/"?$/, '"')}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E5DC] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#17324D]">
                    {rev.patientName}
                  </h4>
                  <span className="text-[11px] text-[#667582]">
                    {rev.date} · Verified Visit
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#DCE9E3] stroke-[1.5]" />
              </div>
            </div>
          ))}
        </div>

        {isDemoMode && (
          <div className="mt-8 text-center">
            <span className="text-xs text-[#667582]">
              Template Compliance Notice: Testimonials displayed above represent structural demo placeholders. Replace with authorized client reviews prior to live launch.
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
