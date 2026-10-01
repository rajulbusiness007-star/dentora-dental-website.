import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function FaqSection() {
  const { openBooking } = useClinic();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: 'Do you accept my insurance?',
      a: 'Yes, we are in-network with most major PPO providers including Delta Dental, Aetna, Cigna, MetLife, and Guardian. We file claims directly for you.',
    },
    {
      q: 'What are your office hours?',
      a: 'We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. Emergency on-call is available 24/7.',
    },
    {
      q: 'How often should I get a cleaning?',
      a: 'For most healthy adults, we recommend a professional exam and hygiene appointment every 6 months to maintain optimal oral health.',
    },
    {
      q: 'Do you offer emergency appointments?',
      a: 'Yes! We reserve same-day triage emergency slots every day for acute toothaches, chipped teeth, and urgent dental needs.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: Questions & Answers Accordion */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                QUESTIONS?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                We&apos;ve Got Answers
              </h2>

              <div className="space-y-3">
                {questions.map((item, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-slate-100 pb-3"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-2 font-semibold text-slate-800 hover:text-blue-600 transition-colors text-sm sm:text-base group cursor-pointer"
                      >
                        <span>{item.q}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 flex items-center justify-center shrink-0 ml-2 transition-colors">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed animate-in fade-in duration-150">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  openBooking();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Reception Desk Photography */}
          <div className="lg:col-span-4">
            <div className="relative rounded-[28px] overflow-hidden shadow-lg border-2 border-white aspect-[4/3.8] bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
                alt="PureSmile Dental Modern Clinic Reception Desk"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800 tracking-wide">PureSmile Reception Suite</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Insurance Cards */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50/80 rounded-[28px] p-6 sm:p-7 border border-slate-100 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-5">
                  WE ACCEPT MOST INSURANCE PLANS
                </span>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex items-center gap-2 shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-emerald-600" />
                    <span className="text-xs font-bold text-slate-800">Delta Dental</span>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex items-center gap-2 shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-purple-600" />
                    <span className="text-xs font-bold text-purple-700">aetna</span>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex items-center gap-2 shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-teal-600" />
                    <span className="text-xs font-bold text-teal-800">Cigna</span>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex items-center gap-2 shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold text-blue-900">MetLife</span>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex items-center gap-2 shadow-xs col-span-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">Guardian Dental Network</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Questions about your insurance? Contact us and our concierge will happily verify your coverage.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full py-3 px-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center shadow-xs cursor-pointer"
              >
                Check Your Insurance
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
