import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ClinicConfig, DentalService, DoctorProfile } from '../types/clinic';
import { CLINIC_PRESETS } from '../data/clinicPresets';

interface BookingModalState {
  isOpen: boolean;
  defaultServiceId?: string;
  defaultDoctorId?: string;
}

interface ClinicContextType {
  config: ClinicConfig;
  activePresetId: string;
  selectPreset: (presetId: string) => void;
  updateConfig: (partial: Partial<ClinicConfig>) => void;
  isDemoMode: boolean;
  setIsDemoMode: (val: boolean) => void;
  bookingModal: BookingModalState;
  openBooking: (serviceId?: string, doctorId?: string) => void;
  closeBooking: () => void;
  selectedTreatment: DentalService | null;
  setSelectedTreatment: (treatment: DentalService | null) => void;
  selectedDoctor: DoctorProfile | null;
  setSelectedDoctor: (doctor: DoctorProfile | null) => void;
  customizerOpen: boolean;
  setCustomizerOpen: (val: boolean) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export function ClinicProvider({ children }: { children: ReactNode }) {
  const [activePresetId, setActivePresetId] = useState<string>('beverly_hills');
  const [overrides, setOverrides] = useState<Partial<ClinicConfig>>({});
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  const [bookingModal, setBookingModal] = useState<BookingModalState>({ isOpen: false });
  const [selectedTreatment, setSelectedTreatment] = useState<DentalService | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(null);

  const selectPreset = (presetId: string) => {
    if (CLINIC_PRESETS[presetId]) {
      setActivePresetId(presetId);
      setOverrides({});
    }
  };

  const updateConfig = (partial: Partial<ClinicConfig>) => {
    setOverrides(prev => ({ ...prev, ...partial }));
  };

  const openBooking = (serviceId?: string, doctorId?: string) => {
    setBookingModal({ isOpen: true, defaultServiceId: serviceId, defaultDoctorId: doctorId });
  };

  const closeBooking = () => {
    setBookingModal({ isOpen: false });
  };

  const config: ClinicConfig = useMemo(() => {
    const base = CLINIC_PRESETS[activePresetId] || CLINIC_PRESETS.beverly_hills;
    return {
      ...base,
      ...overrides,
    };
  }, [activePresetId, overrides]);

  return (
    <ClinicContext.Provider
      value={{
        config,
        activePresetId,
        selectPreset,
        updateConfig,
        isDemoMode,
        setIsDemoMode,
        bookingModal,
        openBooking,
        closeBooking,
        selectedTreatment,
        setSelectedTreatment,
        selectedDoctor,
        setSelectedDoctor,
        customizerOpen,
        setCustomizerOpen,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
}
