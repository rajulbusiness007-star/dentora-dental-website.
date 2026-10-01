import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CreditCard, Sparkles } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function SocialProofBar() {
  const { config } = useClinic();

  return (
    <section className="bg-white py-12 border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Professional Associations */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#667582] mb-3">
              Professional Dental Affiliations & Standards
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {config.associations.map((assoc, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#FAF8F5] border border-[#E9E5DC] text-[#17324D] rounded-sm text-xs font-medium flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-[#77C7C3]" />
                  <span>{assoc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Insurance Networks Accepted */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#667582] mb-3 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-[#17324D]" />
              <span>Direct Claims & Accepted Insurance Networks</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {config.insuranceAccepted.map((ins, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#263746] bg-[#EEF4F1] px-2.5 py-1 rounded-xs font-normal"
                >
                  {ins}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-[#667582] mt-2">
              Our patient concierge team coordinates directly with your insurer to verify coverage and optimize benefits.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
