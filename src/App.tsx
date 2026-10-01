/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClinicProvider, useClinic } from './context/ClinicContext';
import { Header } from './components/Header';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSolution } from './components/ProblemSolution';
import { TreatmentsSection } from './components/TreatmentsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { MembershipSection } from './components/MembershipSection';
import { SmileGallery } from './components/SmileGallery';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { TreatmentModal } from './components/TreatmentModal';
import { DoctorModal } from './components/DoctorModal';
import { BookingModal } from './components/BookingModal';
import { AgencyCustomizerDrawer } from './components/AgencyCustomizerDrawer';

function DentalClinicApp() {
  const {
    selectedTreatment,
    setSelectedTreatment,
    selectedDoctor,
    setSelectedDoctor,
  } = useClinic();

  return (
    <div className="min-h-screen bg-[#EAECEE] text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Dentora Cinematic Hero Section */}
        <Hero />

        {/* Urgent Care Priority Banner */}
        <EmergencyBanner />

        {/* 2. Floating 5 Feature Cards */}
        <TrustBar />

        {/* 3. State-of-the-Art Dental Care with Operatory Photo & Technology Badge */}
        <ProblemSolution />

        {/* 4. Real Results: Smile Transformations Before/After Sliders */}
        <BeforeAfterSection />

        {/* 5. Smile Membership Plan: $29/mo Individual Plan & Family Benefits */}
        <MembershipSection />

        {/* 6. Questions & Answers Accordion + Reception Suite Photo + Insurance Provider Cards */}
        <FaqSection />

        {/* 7. Comprehensive Clinical Treatments & Specialties */}
        <TreatmentsSection />

        {/* 8. Dedicated Clinical Doctors & Credentials */}
        <TeamSection />

        {/* 9. Verified Patient Reviews & 5-Star Testimonials */}
        <ReviewsSection />

        {/* 10. Interactive Online Appointment Booking Flow */}
        <BookingSection />

        {/* 11. Location, Transit Directions & Practice Hours */}
        <LocationSection />

        {/* 12. Full-Width Royal Blue Closing CTA: Ready to Love Your Smile? */}
        <ClosingCta />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />

      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />

      <BookingModal />

      {/* Agency Preset Switcher & Template Customizer */}
      <AgencyCustomizerDrawer />
    </div>
  );
}

export default function App() {
  return (
    <ClinicProvider>
      <DentalClinicApp />
    </ClinicProvider>
  );
}
