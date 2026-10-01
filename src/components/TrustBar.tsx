import React from 'react';
import { User, ShieldCheck, Monitor, DollarSign, MapPin } from 'lucide-react';

export function TrustBar() {
  const cards = [
    {
      icon: User,
      title: 'Patient First',
      description: 'Your comfort and satisfaction are our top priorities.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Experts',
      description: 'Skilled professionals with years of experience in dental care.',
    },
    {
      icon: Monitor,
      title: 'Modern Technology',
      description: 'We use the latest technology for precise and pain-free treatment.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Care',
      description: 'Quality dental care that fits your budget and your needs.',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: "Easy to find, easy to visit. We're right around the corner.",
    },
  ];

  return (
    <section className="py-8 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center group"
              >
                {/* Blue Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                {/* Card Title */}
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {card.title}
                </h3>
                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
