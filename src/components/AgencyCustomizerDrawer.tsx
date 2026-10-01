import React, { useState } from 'react';
import { X, SlidersHorizontal, Building2, Globe, Sparkles, Check, RefreshCw, Eye, Edit3 } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function AgencyCustomizerDrawer() {
  const {
    config,
    activePresetId,
    selectPreset,
    updateConfig,
    isDemoMode,
    setIsDemoMode,
    customizerOpen,
    setCustomizerOpen,
  } = useClinic();

  const [activeTab, setActiveTab] = useState<'presets' | 'customize' | 'agency'>('presets');

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setCustomizerOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#17324D] text-white rounded-full shadow-xl hover:bg-[#23486C] active:scale-95 transition-all text-xs font-semibold border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#77C7C3]"
          aria-label="Open Agency Template Controls"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#77C7C3]" />
          <span className="hidden sm:inline">Agency Customizer</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Drawer Overlay */}
      {customizerOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0F2236]/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Agency Template Customizer"
        >
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#E9E5DC] animate-in slide-in-from-right duration-200">
            
            {/* Header */}
            <div className="p-5 border-b border-[#E9E5DC] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#17324D] text-[#77C7C3] flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#17324D]">
                    Agency Template Engine
                  </h3>
                  <p className="text-[11px] text-[#667582]">
                    White-label customization & preset switcher
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCustomizerOpen(false)}
                className="p-1.5 text-[#667582] hover:text-[#17324D] rounded-sm"
                aria-label="Close Customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-navigation tabs */}
            <div className="flex border-b border-[#E9E5DC] bg-white text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('presets')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                  activeTab === 'presets'
                    ? 'border-[#17324D] text-[#17324D] font-semibold bg-[#FAF8F5]'
                    : 'border-transparent text-[#667582] hover:text-[#17324D]'
                }`}
              >
                1-Click Presets
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('customize')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                  activeTab === 'customize'
                    ? 'border-[#17324D] text-[#17324D] font-semibold bg-[#FAF8F5]'
                    : 'border-transparent text-[#667582] hover:text-[#17324D]'
                }`}
              >
                Live Edit Info
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('agency')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                  activeTab === 'agency'
                    ? 'border-[#17324D] text-[#17324D] font-semibold bg-[#FAF8F5]'
                    : 'border-transparent text-[#667582] hover:text-[#17324D]'
                }`}
              >
                Agency System
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* TAB 1: PRESETS */}
              {activeTab === 'presets' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#667582] leading-relaxed">
                    Test how the entire clinic website adapts instantly to different international markets, currencies, and practice styles:
                  </p>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => selectPreset('beverly_hills')}
                      className={`w-full p-4 rounded-sm border text-left transition-all ${
                        activePresetId === 'beverly_hills'
                          ? 'border-[#17324D] bg-[#EEF4F1] shadow-xs'
                          : 'border-[#E9E5DC] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-base font-semibold text-[#17324D]">
                          Dentora
                        </span>
                        <span className="text-[11px] font-semibold text-[#17324D] uppercase bg-white px-2 py-0.5 rounded-xs border border-[#E9E5DC]">
                          USA · $ USD
                        </span>
                      </div>
                      <p className="text-xs text-[#667582]">
                        Dallas, TX · Family-friendly dentistry, ADA & AACD certified.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => selectPreset('london')}
                      className={`w-full p-4 rounded-sm border text-left transition-all ${
                        activePresetId === 'london'
                          ? 'border-[#17324D] bg-[#EEF4F1] shadow-xs'
                          : 'border-[#E9E5DC] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-base font-semibold text-[#17324D]">
                          Harley & Co. Dental Wellness
                        </span>
                        <span className="text-[11px] font-semibold text-[#17324D] uppercase bg-white px-2 py-0.5 rounded-xs border border-[#E9E5DC]">
                          UK · £ GBP
                        </span>
                      </div>
                      <p className="text-xs text-[#667582]">
                        Marylebone, London · Private practice, Swiss Airflow GBT, GDC & BACD registered.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => selectPreset('sydney')}
                      className={`w-full p-4 rounded-sm border text-left transition-all ${
                        activePresetId === 'sydney'
                          ? 'border-[#17324D] bg-[#EEF4F1] shadow-xs'
                          : 'border-[#E9E5DC] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-base font-semibold text-[#17324D]">
                          Pacific Coast Smiles
                        </span>
                        <span className="text-[11px] font-semibold text-[#17324D] uppercase bg-white px-2 py-0.5 rounded-xs border border-[#E9E5DC]">
                          AU · A$ AUD
                        </span>
                      </div>
                      <p className="text-xs text-[#667582]">
                        Sydney CBD, NSW · HICAPS instant health fund claiming, ADA Australian standards.
                      </p>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-[#E9E5DC]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#17324D] block">
                          Demo Compliance Badges
                        </span>
                        <span className="text-[11px] text-[#667582]">
                          Show/hide ethical template disclaimers
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsDemoMode(!isDemoMode)}
                        className={`w-11 h-6 rounded-full transition-colors relative focus-visible:outline-none ${
                          isDemoMode ? 'bg-[#17324D]' : 'bg-[#E9E5DC]'
                        }`}
                        aria-label="Toggle Demo Badges"
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            isDemoMode ? 'left-6' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: LIVE EDIT */}
              {activeTab === 'customize' && (
                <div className="space-y-4 text-xs">
                  <p className="text-[#667582]">
                    Change any clinic property below to preview instant live re-rendering across all 20+ sections:
                  </p>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">Clinic Name</label>
                    <input
                      type="text"
                      value={config.name}
                      onChange={(e) => updateConfig({ name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">City / Region</label>
                    <input
                      type="text"
                      value={config.city}
                      onChange={(e) => updateConfig({ city: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">Primary Phone</label>
                    <input
                      type="text"
                      value={config.phone}
                      onChange={(e) => updateConfig({ phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">Full Physical Address</label>
                    <input
                      type="text"
                      value={config.fullAddress}
                      onChange={(e) => updateConfig({ fullAddress: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">Google Rating (0.0 – 5.0)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={config.googleRating}
                      onChange={(e) => updateConfig({ googleRating: parseFloat(e.target.value) || 5.0 })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#17324D] mb-1">Verified Review Count</label>
                    <input
                      type="number"
                      value={config.reviewCount}
                      onChange={(e) => updateConfig({ reviewCount: parseInt(e.target.value, 10) || 0 })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E9E5DC] rounded-sm text-xs text-[#263746] focus:outline-none focus:ring-1 focus:ring-[#17324D]"
                    />
                  </div>
                </div>
              )}

              {/* TAB 3: AGENCY ARCHITECTURE */}
              {activeTab === 'agency' && (
                <div className="space-y-4 text-xs">
                  <div className="p-3.5 bg-[#FAF8F5] rounded-sm border border-[#E9E5DC]">
                    <h4 className="font-semibold text-[#17324D] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Ready to Deploy for Dental Clients</span>
                    </h4>
                    <p className="text-[#667582] leading-relaxed">
                      All content is structured through type-safe models (`clinicPresets.ts`). Easy to configure for custom branding, domains, and CRM webhooks.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Interactive Before/After comparison slider</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Online booking form with .ics calendar export</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Emergency urgent care priority hotline bar</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Real-time operating hours calculator</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>Schema.org Dentist & MedicalBusiness JSON-LD</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#17324D]">
                      <Check className="w-3.5 h-3.5 text-[#77C7C3]" />
                      <span>WCAG AA accessible contrast & responsive styling</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#E9E5DC] bg-[#FAF8F5] flex items-center justify-between">
              <span className="text-[11px] text-[#667582]">
                Active Preset: <strong className="text-[#17324D]">{config.name}</strong>
              </span>
              <button
                type="button"
                onClick={() => setCustomizerOpen(false)}
                className="px-4 py-2 bg-[#17324D] text-white text-xs font-semibold rounded-sm hover:bg-[#23486C]"
              >
                Apply & Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
