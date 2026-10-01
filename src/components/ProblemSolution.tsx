import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function ProblemSolution() {
  const { openBooking } = useClinic();

  const features = [
    'Digital X-rays for accurate diagnosis',
    'Intraoral cameras for better understanding',
    'Laser dentistry for comfortable treatment',
    'Sterilization that exceeds industry standards',
  ];

  return (
    <section id="technology" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Confident Patient Smile Photo with Floating Technology Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div 
                className="absolute -left-6 top-1/4 grid grid-cols-4 gap-2 z-0 opacity-60 pointer-events-none"
                aria-hidden="true"
              >
                {[...Array(16)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                ))}
              </div>

              {/* Main Patient Smile Image — Replaces dental chair/operatory photo */}
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
                  alt="Confident patient with a beautiful healthy smile after dental treatment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Circular Badge: State-of-the-Art Technology */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-2xl border-4 border-white">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 5 5 5 9c0 3 1.5 6 3 9 1 2 1.5 4 4 4s3-2 4-4c1.5-3 3-6 3-9 0-4-3-7-7-7z" />
                  <path d="M9 9c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight text-white">
                  State-of-the-Art<br />Technology
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT: Advanced Care Copy & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                ADVANCED CARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              State-of-the-Art <br />
              Dental Care
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We combine advanced technology with a gentle touch to deliver exceptional results. From routine cleanings to complex treatments, we&apos;ve got you covered.
            </p>

            <div className="space-y-3.5 mb-9">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 cursor-pointer"
              >
                <span>Explore Our Technology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
