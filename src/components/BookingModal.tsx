import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, ShieldCheck, Download } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function BookingModal() {
  const { config, bookingModal, closeBooking } = useClinic();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: bookingModal.defaultServiceId || config.services[0]?.id || 'general-preventive',
    doctor: bookingModal.defaultDoctorId || '',
    preferredDate: '',
    preferredTime: 'morning',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!bookingModal.isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 7) newErrors.phone = 'Valid phone is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleDownloadIcs = () => {
    const calendarData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//${config.name}//Appointment Request//EN
BEGIN:VEVENT
SUMMARY:Dental Visit - ${config.name}
DESCRIPTION:Requested consultation for ${formData.treatment}. Clinic phone: ${config.phone}
LOCATION:${config.fullAddress}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Dentora-Appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F2236]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Appointment Request Dialog"
    >
      <div className="relative max-w-xl w-full bg-white rounded-sm shadow-2xl border border-[#E9E5DC] p-6 sm:p-8 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={closeBooking}
          className="absolute top-4 right-4 p-2 text-[#667582] hover:text-[#17324D] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D]"
          aria-label="Close Booking Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#DCE9E3] text-[#17324D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-[#17324D]" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#17324D] mb-2">
              Appointment Request Sent
            </h3>
            <p className="text-xs sm:text-sm text-[#263746]/80 mb-6 leading-relaxed">
              We look forward to welcoming you, <strong>{formData.fullName}</strong>. Our clinical concierge will confirm your slot shortly via phone or email.
            </p>

            <div className="p-3 bg-[#FAF8F5] rounded-sm border border-[#E9E5DC] text-xs text-[#667582] text-left max-w-xs mx-auto mb-6 space-y-1">
              <div><strong className="text-[#17324D]">Date:</strong> {formData.preferredDate}</div>
              <div><strong className="text-[#17324D]">Clinic:</strong> {config.name} ({config.city})</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleDownloadIcs}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#17324D] text-white rounded-sm text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#23486C]"
              >
                <Download className="w-4 h-4 text-[#77C7C3]" />
                <span>Save to Calendar</span>
              </button>
              <button
                type="button"
                onClick={closeBooking}
                className="w-full sm:w-auto px-4 py-2.5 border border-[#E9E5DC] text-[#263746] rounded-sm text-xs font-medium hover:bg-[#FAF8F5]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="border-b border-[#E9E5DC] pb-3 mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#17324D] uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#77C7C3]" />
                <span>Fast Online Scheduling</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#17324D]">
                Request an Appointment
              </h3>
              <p className="text-xs text-[#667582]">
                {config.name} · {config.city}
              </p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                placeholder="Jane Doe"
                className={`w-full px-3 py-2 rounded-sm bg-[#FAF8F5] border text-xs sm:text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D] ${
                  errors.fullName ? 'border-rose-400' : 'border-[#E9E5DC]'
                }`}
              />
              {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="jane@example.com"
                  className={`w-full px-3 py-2 rounded-sm bg-[#FAF8F5] border text-xs sm:text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D] ${
                    errors.email ? 'border-rose-400' : 'border-[#E9E5DC]'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1">
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="Contact number"
                  className={`w-full px-3 py-2 rounded-sm bg-[#FAF8F5] border text-xs sm:text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D] ${
                    errors.phone ? 'border-rose-400' : 'border-[#E9E5DC]'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-treatment" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1">
                  Treatment Interest
                </label>
                <select
                  id="modal-treatment"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#FAF8F5] border border-[#E9E5DC] text-xs sm:text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                >
                  {config.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="general-consult">Comprehensive Checkup & Hygiene</option>
                  <option value="emergency">Emergency Relief</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-date" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1">
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <input
                  id="modal-date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => {
                    setFormData({ ...formData, preferredDate: e.target.value });
                    if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                  }}
                  className={`w-full px-3 py-2 rounded-sm bg-[#FAF8F5] border text-xs sm:text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D] ${
                    errors.preferredDate ? 'border-rose-400' : 'border-[#E9E5DC]'
                  }`}
                />
                {errors.preferredDate && <p className="text-[11px] text-rose-600 mt-1">{errors.preferredDate}</p>}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#17324D] text-white rounded-sm text-xs sm:text-sm font-semibold hover:bg-[#23486C] active:bg-[#0F2236] transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#77C7C3]" />
                    <span>Confirm Appointment Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
