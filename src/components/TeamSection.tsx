import React from 'react';
import { ArrowRight, UserCheck, Calendar } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function TeamSection() {
  const { config, setSelectedDoctor, openBooking } = useClinic();

  return (
    <section id="team" className="py-20 sm:py-28 bg-white border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
              Clinical Leadership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#17324D] font-normal tracking-tight leading-[1.1]">
              Meet Your Dedicated <br />
              Dental Team
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667582]">
              Our clinicians blend deep academic training from leading institutions with warm bedside compassion and continuous mastery.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-[#667582] max-w-xs">
            Every clinician at {config.name} exceeds annual continuing dental education standards by over 200%.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-[#FAF8F5] rounded-sm border border-[#E9E5DC] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#17324D]/30 hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E5DC]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 bg-[#17324D]/85 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[11px] font-semibold text-white tracking-wider uppercase">
                    {doctor.specialty}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#17324D] group-hover:text-[#23486C] transition-colors">
                      {doctor.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#17324D]/80 uppercase tracking-wider mb-3">
                    {doctor.credentials}
                  </p>

                  <p className="text-xs sm:text-sm text-[#263746]/80 leading-relaxed line-clamp-3 mb-4">
                    {doctor.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {doctor.focusAreas.slice(0, 2).map((area, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 bg-white border border-[#E9E5DC] text-[#667582] rounded-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 sm:p-7 sm:pt-0 border-t border-[#E9E5DC]/70 flex items-center justify-between gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(doctor)}
                  className="text-xs sm:text-sm font-semibold text-[#17324D] hover:text-[#23486C] inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#17324D] py-1"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => openBooking(undefined, doctor.id)}
                  className="p-2 text-[#17324D] hover:bg-[#EEF4F1] rounded-sm transition-colors"
                  title={`Book with ${doctor.name}`}
                  aria-label={`Book with ${doctor.name}`}
                >
                  <Calendar className="w-4 h-4 text-[#17324D]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
