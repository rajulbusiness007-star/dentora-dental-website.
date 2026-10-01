export interface DoctorProfile {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  experienceYears?: number;
  bio: string;
  education: string[];
  associations: string[];
  image: string;
  focusAreas: string[];
}

export interface DentalService {
  id: string;
  title: string;
  category: 'preventive' | 'cosmetic' | 'restorative' | 'orthodontics' | 'surgical';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedureTime: string;
  recoveryTime: string;
  expectedLongevity: string;
  image: string;
  startingPrice?: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'whitening' | 'veneers' | 'aligners' | 'implants' | 'cosmetic';
  categoryLabel: string;
  duration: string;
  description: string;
  clinicalNotes: string;
  beforeImage: string;
  afterImage: string;
  isDemoPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'smiles' | 'technology' | 'team';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  rating: number;
  treatment: string;
  reviewText: string;
  date: string;
  source: 'Google' | 'Verified Survey' | 'Doctolib';
  isVerified: boolean;
}

export interface ClinicHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ClinicConfig {
  id: string;
  name: string;
  tagline: string;
  eyebrow: string;
  subheadline: string;
  city: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  fullAddress: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  whatsappNumber?: string;
  currencySymbol: string;
  googleRating: number;
  reviewCount: number;
  trustHeadline: string;
  parkingInfo: string;
  transitInfo: string;
  openingHours: ClinicHours[];
  insuranceAccepted: string[];
  associations: string[];
  doctors: DoctorProfile[];
  services: DentalService[];
  beforeAfterCases: BeforeAfterCase[];
  galleryItems: GalleryItem[];
  reviews: PatientReview[];
  faqs: {
    category: string;
    question: string;
    answer: string;
  }[];
  mapCoordinates: {
    lat: number;
    lng: number;
    embedQuery: string;
  };
}
