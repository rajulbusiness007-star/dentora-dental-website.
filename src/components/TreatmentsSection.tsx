import React, { useState, useMemo } from 'react';
import { ArrowRight, Clock, Shield, Sparkles, Check } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';
import { DentalService } from '../types/clinic';

export function TreatmentsSection() {
  const { config, setSelectedTreatment, openBooking } = useClinic();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventive', label: 'Preventive & Wellness' },
    { id: 'cosmetic', label: 'Cosmetic & Aesthetic' },
    { id: 'orthodontics', label: 'Clear Aligners' },
    { id: 'surgical', label: 'Implants & Surgery' },
    { id: 'restorative', label: 'Restorative & Emergency' },
  ];

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return config.services;
    return config.services.filter((s) => s.category === activeCategory);
  }, [config.services, activeCategory]);

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-white border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
              Comprehensive Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] text-[#17324D] font-normal tracking-tight leading-[1.08]">
              Complete Dental Care, <br />
              Under One Roof
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667582]">
              Every treatment is guided by conservative dentistry principles, minimally invasive techniques, and natural aesthetics.
            </p>
          </div>

          {/* Consultation Note */}
          <div className="text-xs sm:text-sm text-[#667582] max-w-xs bg-[#EEF4F1] p-4 rounded-sm border-l-2 border-[#17324D]">
            <p className="font-medium text-[#17324D] mb-1">Personalized Treatment Plans</p>
            Every smile receives tailored diagnostic imaging and clear, transparent estimates before care begins.
          </div>
        </div>

        {/* Interactive Category Segmented Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D] ${
                  isActive
                    ? 'bg-[#17324D] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#263746] hover:bg-[#EEF4F1] border border-[#E9E5DC]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] rounded-sm border border-[#E9E5DC] hover:border-[#17324D]/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E5DC]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/30 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-[#17324D]/85 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[11px] font-semibold text-white tracking-wider uppercase">
                    {service.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#17324D] mb-2 leading-snug group-hover:text-[#23486C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#263746]/80 leading-relaxed font-normal mb-5">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-xs text-[#667582] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#77C7C3] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 border-t border-[#E9E5DC]/70 flex items-center justify-between gap-3 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(service)}
                  className="text-xs sm:text-sm font-semibold text-[#17324D] hover:text-[#23486C] inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#17324D] py-1"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => openBooking(service.id)}
                  className="px-3 py-1.5 rounded-sm bg-white border border-[#E9E5DC] text-[#17324D] text-xs font-medium hover:bg-[#17324D] hover:text-white transition-all shadow-2xs"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF8F5] rounded-sm border border-[#E9E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-medium text-[#17324D]">
              Unsure which treatment is right for your smile?
            </h4>
            <p className="text-xs sm:text-sm text-[#667582] mt-1">
              Schedule a comprehensive diagnostic consultation with our dentists to discuss customized treatment pathways.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBooking()}
            className="px-5 py-2.5 bg-[#17324D] text-white text-xs sm:text-sm font-medium rounded-sm shrink-0 hover:bg-[#23486C] transition-colors"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
