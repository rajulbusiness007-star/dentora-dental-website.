import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function ClosingCta() {
  const { openBooking } = useClinic();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[32px] p-8 sm:p-12 text-white shadow-xl shadow-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/30">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                Ready to Love Your Smile?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                Schedule your appointment today and take the first step toward a healthier, more confident you.
              </p>
            </div>
          </div>

          {/* Right: White Pill Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-base hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
