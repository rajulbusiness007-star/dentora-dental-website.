import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Play, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function Hero() {
  const { openBooking } = useClinic();
  const [activePill, setActivePill] = useState<string>('checkup');
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [videoOpen, setVideoOpen] = useState<boolean>(false);

  const totalSlides = 8;
  const heroImg = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85';

  const servicePills = [
    { id: 'checkup', label: 'Dental Checkup' },
    { id: 'cleaning', label: 'Teeth Cleaning' },
    { id: 'filling', label: 'Tooth Filling' },
    { id: 'gum', label: 'Gum Treatment' },
    { id: 'retainers', label: 'Retainers' },
  ];

  const phases = [
    'Smile Assessment',
    'Care Planning',
    'Treatment Process',
    'Dental Maintenance',
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  return (
    <div className="bg-[#EAECEE] pt-3 sm:pt-4 pb-12 sm:pb-16 px-3 sm:px-5 lg:px-7 font-sans">
      
      {/* 1. DENTORA CINEMATIC HERO CARD */}
      <section className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-2xl min-h-[640px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white bg-slate-950 isolate">
        
        {/* Full-bleed Background Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroImg}
            alt="Smiling young woman reclining in dental chair examined by doctor with dental mirror"
            className="w-full h-full object-cover object-[75%_center] lg:object-center brightness-105 contrast-105"
          />
          {/* Directional scrim: dark left side for text readability, clear right side for patient & dentist */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/15" />
          {/* Bottom scrim for pills & status bar */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
          {/* Top subtle scrim for in-hero nav */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent" />
        </div>

        {/* TOP BAR: Floating In-Hero Navigation */}
        <nav className="relative z-10 flex items-center justify-between gap-4" aria-label="Hero Navigation">
          
          {/* Dentora Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 3 1.5 6 3 9 1 2 1.5 4 4 4s3-2 4-4c1.5-3 3-6 3-9 0-4-3-7-7-7z" />
                <path d="M9 9c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              Dentora
            </span>
          </a>

          {/* Center Frosted Capsule Pill Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/15 p-1 rounded-full shadow-lg">
            <a
              href="#"
              className="bg-white text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs shadow-sm transition-all"
            >
              Home
            </a>
            <a
              href="#treatments"
              className="text-white/80 hover:text-white px-3.5 py-1.5 text-xs font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white px-3.5 py-1.5 text-xs font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#results"
              className="text-white/80 hover:text-white px-3.5 py-1.5 text-xs font-medium transition-colors"
            >
              Testimonial
            </a>
            <a
              href="#location"
              className="text-white/80 hover:text-white px-3.5 py-1.5 text-xs font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right CTA Button */}
          <div>
            <button
              type="button"
              onClick={() => openBooking()}
              className="bg-white text-slate-900 font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm hover:bg-slate-100 active:bg-slate-200 transition-all shadow-md hover:scale-102 cursor-pointer"
            >
              Book a Call
            </button>
          </div>

        </nav>

        {/* CENTER BODY: Headline, Subheadline & Floating Content */}
        <div className="relative z-10 my-auto py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Dominant Editorial Headline & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.06] mb-4">
                Family-Friendly <br />
                Dental Care
              </h1>

              <p className="text-xs sm:text-sm text-white/90 max-w-sm mb-7 leading-relaxed font-normal">
                Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.
              </p>

              {/* White Pill CTA with Cyan Arrow Circle */}
              <div>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 active:bg-slate-200 transition-all shadow-xl group cursor-pointer hover:shadow-2xl"
                >
                  <span>Book a Appointment</span>
                  <span className="w-8 h-8 rounded-full bg-[#14b8a6] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              {/* Floating Glassmorphic Micro-card */}
              <div 
                onClick={() => setVideoOpen(true)}
                className="bg-black/50 backdrop-blur-md border border-white/20 p-3 rounded-2xl max-w-[230px] shadow-2xl mt-8 sm:mt-12 text-white cursor-pointer hover:bg-black/70 transition-all group"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-2.5 bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=400&q=80"
                    alt="Precision Microscopy Treatment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#14b8a6] transition-colors">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                <p className="text-[11px] font-medium leading-snug text-white/90 mb-2">
                  Restore natural healthy confident dental growth.
                </p>

                <div className="flex items-center justify-between text-[11px] font-bold border-t border-white/15 pt-2">
                  <span className="text-amber-400 flex items-center gap-1">
                    ★ <span className="text-white">4.9 [Rating]</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-[#14b8a6] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>

            {/* Right Column: Floating Treatment Pills Overlaid on Photo */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end">
              <div className="flex flex-wrap items-center gap-2 max-w-md justify-start lg:justify-end">
                {servicePills.map((pill) => {
                  const isActive = activePill === pill.id;
                  return (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setActivePill(pill.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-xl scale-105'
                          : 'bg-black/45 backdrop-blur-md border border-white/20 text-white/95 hover:bg-black/65 hover:text-white'
                      }`}
                    >
                      {pill.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM STATUS & CONTROLS BAR */}
        <div className="relative z-10 border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          
          {/* Tagline */}
          <div className="text-[11px] font-semibold tracking-wider uppercase text-white/80">
            Your Teeth Our Science
          </div>

          {/* Slide Navigator Controls */}
          <div className="flex items-center gap-3 font-medium">
            <button
              type="button"
              onClick={handlePrevSlide}
              className="text-white/80 hover:text-white text-xs cursor-pointer transition-colors"
            >
              Preview
            </button>

            <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] text-white font-mono font-bold border border-white/20">
              0{currentSlide} / 0{totalSlides}
            </span>

            <button
              type="button"
              onClick={handleNextSlide}
              className="text-white/80 hover:text-white text-xs cursor-pointer transition-colors"
            >
              Next
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <span>Scroll for More</span>
            <div className="w-4 h-[1px] bg-white/50" />
          </div>

        </div>

      </section>

      {/* 2. PROGRESS / PHASE STRIP */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="h-1 bg-slate-300 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${idx === 0 ? 'bg-slate-800 w-full' : 'bg-slate-400 w-1/3'}`} 
                />
              </div>
              <span className="text-xs font-semibold text-slate-600">
                {phase}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EDITORIAL ABOUT STATEMENT SECTION */}
      <section id="about" className="max-w-6xl mx-auto mt-14 sm:mt-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: About Us Pill & Avatars */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <span className="inline-block rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-2xs">
                About Us
              </span>
            </div>

            {/* Patient Avatars */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-white">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Verified Patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-white">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Verified Patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Modern High-Impact Editorial Typography */}
          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.3] text-slate-400">
              We deliver <span className="text-slate-900">personalized dental</span> treatments with{' '}
              <span className="text-slate-900">modern</span> technology and{' '}
              <span className="text-slate-900">gentle care</span> ensuring{' '}
              <span className="text-slate-900">healthy confident smiles</span> for every patient.
            </h2>
          </div>

        </div>
      </section>

      {/* Video Clinic Tour Modal */}
      {videoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">
                Dentora Advanced Microscopy & Clinic Care
              </h3>
              <button 
                type="button"
                onClick={() => setVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video bg-slate-950 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Dentora Care Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
