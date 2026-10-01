import React from 'react';
import { X, GraduationCap, Award, Check, Calendar } from 'lucide-react';
import { DoctorProfile } from '../types/clinic';
import { useClinic } from '../context/ClinicContext';

interface DoctorModalProps {
  doctor: DoctorProfile | null;
  onClose: () => void;
}

export function DoctorModal({ doctor, onClose }: DoctorModalProps) {
  const { openBooking } = useClinic();

  if (!doctor) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F2236]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${doctor.name} Profile`}
    >
      <div className="relative max-w-2xl w-full bg-white rounded-sm shadow-2xl border border-[#E9E5DC] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#667582] hover:text-[#17324D] bg-[#FAF8F5] rounded-full transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D]"
          aria-label="Close Doctor Profile"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
          
          <div className="sm:col-span-5 bg-[#FAF8F5] p-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#E9E5DC]">
            <div className="w-40 h-48 rounded-sm overflow-hidden bg-[#E9E5DC] shadow-sm mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#17324D] text-center">
              {doctor.name}
            </h3>
            <p className="text-xs font-semibold text-[#77C7C3] uppercase tracking-wider text-center mt-0.5">
              {doctor.credentials}
            </p>
            <p className="text-xs text-[#667582] text-center mt-1">
              {doctor.specialty}
            </p>

            {doctor.experienceYears && (
              <div className="mt-4 pt-3 border-t border-[#E9E5DC] w-full text-center">
                <span className="text-xs text-[#263746]">
                  <strong>{doctor.experienceYears}+ years</strong> clinical practice
                </span>
              </div>
            )}
          </div>

          <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                  About Dr. {doctor.name.split(' ').slice(-1)[0]}
                </h4>
                <p className="text-xs sm:text-sm text-[#263746]/85 leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {doctor.education && doctor.education.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#77C7C3]" />
                    <span>Education & Advanced Fellowships</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="text-xs text-[#667582] flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-[#17324D] shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.focusAreas && doctor.focusAreas.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#77C7C3]" />
                    <span>Clinical Focus Areas</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-[#EEF4F1] text-[#17324D] rounded-xs font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#E9E5DC]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openBooking(undefined, doctor.id);
                }}
                className="w-full py-2.5 bg-[#17324D] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#23486C] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#77C7C3]" />
                <span>Book Consultation with {doctor.name}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
