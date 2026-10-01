import React from 'react';
import { X, Clock, Sparkles, Check, Calendar, ShieldCheck, HeartHandshake } from 'lucide-react';
import { DentalService } from '../types/clinic';
import { useClinic } from '../context/ClinicContext';

interface TreatmentModalProps {
  treatment: DentalService | null;
  onClose: () => void;
}

export function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  const { openBooking } = useClinic();

  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F2236]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${treatment.title} Details`}
    >
      <div className="relative max-w-2xl w-full bg-white rounded-sm shadow-2xl border border-[#E9E5DC] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#667582] hover:text-[#17324D] bg-white/90 backdrop-blur-xs rounded-full transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D]"
          aria-label="Close Treatment Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of treatment */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-[#E9E5DC] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-[#17324D]/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-semibold text-[#77C7C3] uppercase tracking-wider block mb-1">
              {treatment.categoryLabel}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-tight">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key metrics bar */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-[#FAF8F5] rounded-sm border border-[#E9E5DC] text-center text-xs">
            <div>
              <span className="text-[#667582] block text-[11px]">Appointment</span>
              <strong className="text-[#17324D] font-semibold">{treatment.procedureTime}</strong>
            </div>
            <div className="border-x border-[#E9E5DC]">
              <span className="text-[#667582] block text-[11px]">Downtime</span>
              <strong className="text-[#17324D] font-semibold">{treatment.recoveryTime}</strong>
            </div>
            <div>
              <span className="text-[#667582] block text-[11px]">Longevity</span>
              <strong className="text-[#17324D] font-semibold">{treatment.expectedLongevity}</strong>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-2">
              Procedure Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#263746]/85 leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Clinical Advantages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-2.5">
              Key Patient Benefits
            </h4>
            <ul className="space-y-2">
              {treatment.benefits.map((benefit, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#263746] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#77C7C3] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#E9E5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#667582]">
              Complimentary 3D digital imaging included with your initial consultation.
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                openBooking(treatment.id);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#17324D] text-white rounded-sm text-xs sm:text-sm font-semibold hover:bg-[#23486C] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#77C7C3]" />
              <span>Book for {treatment.title}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
