import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function Header() {
  const { config, openBooking, setCustomizerOpen } = useClinic();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#treatments' },
    { label: 'New Patients', href: '#membership' },
    { label: 'Technology', href: '#technology' },
    { label: 'Blog', href: '#faq' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'opacity-100 translate-y-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3 pointer-events-auto'
            : 'opacity-0 -translate-y-full pointer-events-none py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Dentora Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:outline-none"
              aria-label="Dentora Home"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 5 5 5 9c0 3 1.5 6 3 9 1 2 1.5 4 4 4s3-2 4-4c1.5-3 3-6 3-9 0-4-3-7-7-7z" />
                  <path d="M9 9c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  Dentora
                </span>
                <span className="text-[9px] font-sans tracking-[0.22em] uppercase text-slate-500 font-bold">
                  DENTAL CARE
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1 relative hover:font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Quick Link */}
              <a
                href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-1.5"
                title={`Call ${config.name}`}
              >
                <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>{config.phone}</span>
              </a>

              {/* Book Appointment Pill CTA Button */}
              <button
                type="button"
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              {/* Customizer trigger */}
              <button
                type="button"
                onClick={() => setCustomizerOpen(true)}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-colors"
                title="Theme Settings"
                aria-label="Open Theme Settings"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-full flex items-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:bg-slate-100 rounded-full focus-visible:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 p-3 bg-blue-50/70 rounded-xl text-sm font-medium text-slate-800"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Direct Clinic Line</span>
                    <span className="font-bold text-blue-600">{config.phone}</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full py-3 bg-blue-600 text-white rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Booking CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 p-3 shadow-lg flex items-center gap-3">
        <a
          href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 py-2.5 px-3 bg-slate-100 text-slate-800 rounded-full text-xs font-semibold flex items-center justify-center gap-2 active:bg-slate-200"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>Call Clinic</span>
        </a>
        <button
          type="button"
          onClick={() => openBooking()}
          className="flex-[2] py-2.5 px-4 bg-blue-600 text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 active:bg-blue-700"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
}
