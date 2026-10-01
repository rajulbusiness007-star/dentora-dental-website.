import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, MapPin, CheckCircle2, Clock, ShieldCheck, AlertCircle, Download } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function BookingSection() {
  const { config } = useClinic();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: config.services[0]?.id || 'general-preventive',
    doctor: '',
    preferredDate: '',
    preferredTime: 'morning',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = 'Please provide a valid contact number';
    }
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a preferred date';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
    link.setAttribute('download', 'Dentora-Appointment-Request.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context, Reassurance, Alternative Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17324D]/80 mb-3">
                Begin Your Journey
              </p>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#17324D] font-normal tracking-tight leading-[1.08] mb-6">
                Ready to Feel Good <br />
                About Your Smile?
              </h2>

              <p className="text-base text-[#263746]/80 leading-relaxed mb-8">
                Request your visit online in under 60 seconds. Our patient concierge will contact you promptly to confirm a dedicated time slot that fits your schedule.
              </p>

              <div className="space-y-3.5 mb-10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#263746]">
                  <ShieldCheck className="w-4 h-4 text-[#77C7C3] shrink-0" />
                  <span>Strict confidentiality & HIPAA / GDPR patient privacy compliant</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#263746]">
                  <Clock className="w-4 h-4 text-[#77C7C3] shrink-0" />
                  <span>Prompt response within 2 business hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#263746]">
                  <CheckCircle2 className="w-4 h-4 text-[#77C7C3] shrink-0" />
                  <span>Zero commitment initial smile consultation</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-sm border border-[#E9E5DC]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-3">
                Prefer to Speak Immediately?
              </p>
              
              <div className="flex flex-col gap-2.5">
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-sm font-semibold text-[#17324D] hover:text-[#23486C] transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#EEF4F1] flex items-center justify-center text-[#17324D]">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>{config.phone}</span>
                </a>

                {config.whatsappNumber && (
                  <a
                    href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#263746] hover:text-[#17324D] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#EEF4F1] flex items-center justify-center text-[#17324D]">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </span>
                    <span>Chat via WhatsApp Concierge</span>
                  </a>
                )}

                <div className="flex items-center gap-3 text-xs text-[#667582] pt-2 border-t border-[#E9E5DC]/80 mt-1">
                  <MapPin className="w-4 h-4 text-[#77C7C3] shrink-0" />
                  <span className="line-clamp-1">{config.fullAddress}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-sm border border-[#E9E5DC] shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#DCE9E3] text-[#17324D] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#17324D]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#17324D] mb-2">
                    Appointment Request Received
                  </h3>
                  <p className="text-sm text-[#263746]/80 max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Our clinical coordinator will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to finalize your appointment details.
                  </p>

                  <div className="p-4 bg-white rounded-sm border border-[#E9E5DC] text-left max-w-sm mx-auto mb-8 text-xs text-[#667582] space-y-1.5">
                    <div><strong className="text-[#17324D]">Preferred Date:</strong> {formData.preferredDate}</div>
                    <div><strong className="text-[#17324D]">Preferred Time:</strong> {formData.preferredTime === 'morning' ? 'Morning (8am – 12pm)' : 'Afternoon (12pm – 6pm)'}</div>
                    <div><strong className="text-[#17324D]">Location:</strong> {config.fullAddress}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleDownloadIcs}
                      className="px-5 py-2.5 bg-[#17324D] text-white rounded-sm text-xs font-semibold flex items-center gap-2 hover:bg-[#23486C] transition-colors"
                    >
                      <Download className="w-4 h-4 text-[#77C7C3]" />
                      <span>Save to Calendar (.ics)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          treatment: config.services[0]?.id || 'general-preventive',
                          doctor: '',
                          preferredDate: '',
                          preferredTime: 'morning',
                          notes: '',
                        });
                      }}
                      className="px-4 py-2.5 border border-[#E9E5DC] text-[#263746] rounded-sm text-xs font-medium hover:bg-white transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#E9E5DC] pb-4 mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#17324D]">
                      Request an Appointment
                    </h3>
                    <p className="text-xs text-[#667582] mt-0.5">
                      No payment or card required to request a visit.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                      }}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-white border text-sm text-[#263746] placeholder:text-[#667582]/60 focus:outline-none focus:ring-1 focus:ring-[#17324D] transition-colors ${
                        formErrors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E9E5DC]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        placeholder="eleanor@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-white border text-sm text-[#263746] placeholder:text-[#667582]/60 focus:outline-none focus:ring-1 focus:ring-[#17324D] transition-colors ${
                          formErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E9E5DC]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        placeholder="(214) 555-0187"
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-white border text-sm text-[#263746] placeholder:text-[#667582]/60 focus:outline-none focus:ring-1 focus:ring-[#17324D] transition-colors ${
                          formErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E9E5DC]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Treatment and Doctor preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="treatment" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        id="treatment"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E9E5DC] text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                      >
                        {config.services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="general-consultation">General Consultation & Checkup</option>
                        <option value="emergency-urgent">Emergency Urgent Care</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="doctor" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Preferred Clinician
                      </label>
                      <select
                        id="doctor"
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E9E5DC] text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                      >
                        <option value="">First Available Doctor</option>
                        {config.doctors.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name} ({d.specialty})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Preferred Date <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (formErrors.preferredDate) setFormErrors({ ...formErrors, preferredDate: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-sm bg-white border text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D] ${
                          formErrors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#E9E5DC]'
                        }`}
                      />
                      {formErrors.preferredDate && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Time of Day
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E9E5DC] text-sm text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                      >
                        <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="midday">Midday (12:00 PM – 3:00 PM)</option>
                        <option value="afternoon">Afternoon / Evening (3:00 PM – 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#17324D] mb-1.5">
                      Notes or Special Requests (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Interested in veneer pricing, mild dental anxiety, preference for early morning slots..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E9E5DC] text-sm text-[#263746] placeholder:text-[#667582]/60 focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#17324D] text-white rounded-sm text-sm font-semibold tracking-wide hover:bg-[#23486C] active:bg-[#0F2236] transition-colors duration-150 flex items-center justify-center gap-2 shadow-xs disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D] focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Securing Your Request...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-[#77C7C3]" />
                          <span>Request an Appointment</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#667582] text-center mt-2.5">
                      We respect your privacy. Your information is never sold or shared with third parties.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
