import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function Footer() {
  const { config, openBooking } = useClinic();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 sm:pt-20 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Column 1: Dentora Logo & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <svg className="w-6 h-6 text-white fill-white/20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 9v5" />
                  <path d="M9.5 11.5h5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-white leading-tight">
                  Dentora
                </span>
                <span className="text-[10px] font-sans tracking-[0.22em] uppercase text-blue-400 font-bold">
                  DENTAL CARE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We&apos;re dedicated to providing gentle, high-quality dental care in a warm and welcoming environment.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-xs font-semibold text-white transition-all shadow-sm cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors block py-0.5">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors block py-0.5">About Us</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Services</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors block py-0.5">New Patients</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors block py-0.5">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Preventive Care</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Cosmetic Dentistry</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Restorative Dentistry</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Orthodontics</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors block py-0.5">Dental Implants</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{config.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {config.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">
                  {config.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Dentora Dental Care. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <h3 className="text-xl font-bold mb-4">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Dentora Dental is committed to protecting patient privacy and providing transparent clinical care in accordance with HIPAA standards.
            </p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
