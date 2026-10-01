import React from 'react';
import { CheckCircle2, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function MembershipSection() {
  const { openBooking } = useClinic();

  const planFeatures = [
    '2 Regular Cleanings Per Year',
    'X-rays & Comprehensive Exams',
    '15% Off All In-House Treatments',
    'No Insurance? No Problem!',
  ];

  const cardPerks = [
    'No annual maximums',
    'No waiting periods',
    'Cancel anytime',
    'Immediate benefits',
  ];

  return (
    <section id="membership" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                JOIN & SAVE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Smile Membership <br />
              Plan
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Affordable dental care made easy. Get exclusive benefits with our in-house membership plan.
            </p>

            <div className="space-y-3.5 mb-9">
              {planFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-500/25 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40 rounded-[36px] p-6 sm:p-8 border border-blue-100 shadow-lg relative overflow-hidden">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="inline-block bg-blue-100 text-blue-700 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    ONLY
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl sm:text-5xl font-black text-blue-600">$29</span>
                    <span className="text-sm font-semibold text-slate-500">/month</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-6">
                    Individual Plan
                  </p>

                  <div className="space-y-2.5">
                    {cardPerks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {perk}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Family discounts available</span>
                  </div>
                </div>

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85"
                    alt="Happy family smiling together with healthy teeth"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
