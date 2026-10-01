import React from 'react';
import { MapPin, Phone, Clock, Car, Train, Navigation, ExternalLink } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function LocationSection() {
  const { config } = useClinic();

  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todaySchedule = config.openingHours.find((h) => h.day.toLowerCase() === todayName.toLowerCase());

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
            Visit Our Studio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#17324D] font-normal tracking-tight leading-[1.1]">
            Conveniently Located in <br />
            {config.city}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667582]">
            Designed for ease of arrival with dedicated patient parking and close proximity to public transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Address, Hours, Parking, Transit */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direct Actions */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E9E5DC] shadow-xs">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-sm bg-[#EEF4F1] flex items-center justify-center text-[#17324D] shrink-0">
                  <MapPin className="w-5 h-5 text-[#17324D]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#17324D]">
                    {config.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#263746]/85 mt-1 leading-relaxed">
                    {config.fullAddress}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E9E5DC]">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 bg-[#17324D] text-white text-xs font-semibold rounded-sm flex items-center justify-center gap-1.5 hover:bg-[#23486C] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#77C7C3]" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-3.5 py-2.5 border border-[#E9E5DC] text-[#17324D] text-xs font-semibold rounded-sm flex items-center justify-center gap-1.5 hover:bg-[#FAF8F5] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#17324D]" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Opening Hours with Live Status */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E9E5DC] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#17324D]" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D]">
                    Operating Hours
                  </h4>
                </div>
                {todaySchedule && (
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs">
                    Today ({todayName}): {todaySchedule.hours}
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                {config.openingHours.map((schedule, idx) => {
                  const isToday = schedule.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between py-1 border-b border-[#E9E5DC]/50 last:border-b-0 ${
                        isToday ? 'font-semibold text-[#17324D]' : 'text-[#667582]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                        {schedule.day}
                      </span>
                      <span>{schedule.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Parking & Transit information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-sm border border-[#E9E5DC] text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#17324D] mb-1">
                  <Car className="w-3.5 h-3.5 text-[#77C7C3]" />
                  <span>Parking</span>
                </div>
                <p className="text-[#667582] leading-relaxed">
                  {config.parkingInfo}
                </p>
              </div>

              <div className="bg-white p-4 rounded-sm border border-[#E9E5DC] text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#17324D] mb-1">
                  <Train className="w-3.5 h-3.5 text-[#77C7C3]" />
                  <span>Public Transit</span>
                </div>
                <p className="text-[#667582] leading-relaxed">
                  {config.transitInfo}
                </p>
              </div>
            </div>

          </div>

          {/* Right: Map Integration / Interactive Map Display */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-sm border border-[#E9E5DC] shadow-sm h-full flex flex-col justify-between">
              
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-xs overflow-hidden bg-[#E9E5DC]">
                <iframe
                  title={`Map showing location of ${config.name}`}
                  className="w-full h-full border-0 filter contrast-[0.98] saturate-[0.85]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(config.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-sm shadow-md border border-[#E9E5DC] max-w-xs">
                  <p className="text-xs font-semibold text-[#17324D]">{config.name}</p>
                  <p className="text-[11px] text-[#667582] line-clamp-1">{config.city}, {config.stateOrRegion}</p>
                </div>
              </div>

              <div className="p-3 text-xs text-[#667582] flex items-center justify-between">
                <span>Coordinates: {config.mapCoordinates.lat.toFixed(4)}, {config.mapCoordinates.lng.toFixed(4)}</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#17324D] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
