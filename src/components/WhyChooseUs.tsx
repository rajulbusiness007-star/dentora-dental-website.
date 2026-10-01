import React from 'react';
import { UserCheck2, HeartHandshake, Microscope, FileText, CheckCircle2 } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function WhyChooseUs() {
  const { config, openBooking } = useClinic();

  const benefits = [
    {
      icon: UserCheck2,
      number: '01',
      title: 'Personalized Care',
      description:
        'We never rush. Every appointment is scheduled with dedicated buffer time so our clinicians listen attentively to your aesthetic desires and health concerns.',
    },
    {
      icon: HeartHandshake,
      number: '02',
      title: 'Comfortable Experience',
      description:
        'From weighted blankets and heated dental chairs to noise-canceling acoustics and computerized painless anesthesia, your comfort is guaranteed at every step.',
    },
    {
      icon: Microscope,
      number: '03',
      title: 'Modern Technology',
      description:
        'We invest in optical 3D intraoral scanners, ultra-low-radiation digital radiography, and in-house digital smile planning for maximum clinical accuracy.',
    },
    {
      icon: FileText,
      number: '04',
      title: 'Clear Treatment Guidance',
      description:
        'You receive clear, visual treatment pathways with upfront fee breakdowns. No hidden line-items, unnecessary procedures, or aggressive sales tactics.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
              The {config.name} Standard
            </p>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] text-[#17324D] font-normal tracking-tight leading-[1.08] mb-6">
              Modern Dentistry. <br />
              Thoughtfully Delivered.
            </h2>

            <p className="text-base sm:text-lg text-[#263746]/80 leading-relaxed max-w-xl mb-10">
              We believe oral healthcare should elevate your overall wellness. Our clinical team combines the warmth of personal hospitality with the exactitude of modern medical science.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex flex-col group">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="font-serif text-sm font-semibold text-[#77C7C3]">
                        {benefit.number}
                      </span>
                      <span className="w-4 h-[1px] bg-[#E9E5DC]" aria-hidden="true" />
                      <h3 className="font-serif text-lg font-medium text-[#17324D] group-hover:text-[#23486C] transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#667582] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-[#E9E5DC] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-6 py-3 bg-[#17324D] text-white text-sm font-medium rounded-sm hover:bg-[#23486C] transition-colors shadow-xs"
              >
                Experience the Difference
              </button>
              <div className="text-xs text-[#667582]">
                Accepting new patients for general and cosmetic care
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden bg-[#E9E5DC] shadow-xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary dental operatory suite"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-sm border border-[#E9E5DC] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#17324D] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#77C7C3]" />
                  <span>Acoustically Treated Treatment Suites</span>
                </div>
                <p className="text-xs text-[#667582]">
                  Designed to eliminate harsh clinical noise and foster a calm restorative environment during visits.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
