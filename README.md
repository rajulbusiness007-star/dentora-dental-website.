# 🦷 Dentora — Modern Family Dental Care & Wellness Studio

A high-converting, luxury dental wellness studio website built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion, and Lucide icons. Designed with a patient-first healthcare experience, cinematic hero photography, interactive clinical trust modules, and multi-city practice presets.

[![Live on GitHub](https://img.shields.io/badge/GitHub-rajulbusiness007--star%2Fdentora--dental--website.-blue?style=flat&logo=github)](https://github.com/rajulbusiness007-star/dentora-dental-website.)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

---

## ✨ Features

- **Cinematic Hero Card**: Full-bleed clinical operatory photography, multi-layered directional gradient scrims, typography hierarchy, and quick booking triggers.
- **In-Hero Floating Capsule Navigation**: Glassmorphic dark pill navigation bar with active state pill markers, mobile-responsive layout, and quick action triggers.
- **Interactive Treatment Clusters**: Floating service pills (`Dental Checkup`, `Teeth Cleaning`, `Tooth Filling`, `Gum Treatment`, `Retainers`) with live active state toggling.
- **Microscopy & Video Tour Modal**: Floating glass card highlighting clinical microscopy with built-in video tour player.
- **Phase Progression Track**: Visual 4-phase patient journey strip (`Smile Assessment` → `Care Planning` → `Treatment Process` → `Dental Maintenance`).
- **5-Card Clinical Trust Grid**: Highlighting *Patient First*, *Trusted Experts*, *Modern Technology*, *Affordable Care*, and *Convenient Location*.
- **State-of-the-Art Care Spotlight**: Dedicated technology feature with clinical operatory imagery and badge.
- **Smile Transformations (Before & After)**: Interactive draggable slider comparison cards for *Teeth Whitening*, *Dental Implants*, and *Orthodontics*.
- **Smile Membership Plan**: Dedicated in-house dental savings plan card ($29/month individual plan) with checklist and family perks.
- **Composite FAQ & Insurance Suite**: Interactive accordion FAQs paired with reception photography and accepted insurance provider badges.
- **Multi-Step Appointment Booking Flow**: Modal booking drawer with date picking, service selection, and instant confirmation with `.ics` calendar export.
- **Agency Preset Switcher**: 1-click live adaptation between Dallas (USA), London (UK), and Sydney (Australia) practice locations and currencies.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- `npm` or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajulbusiness007-star/dentora-dental-website..git
   cd dentora-dental-website.
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Type check:
   ```bash
   npm run lint
   ```

---

## 📁 Project Architecture

```
dentora-dental-website/
├── src/
│   ├── components/
│   │   ├── AgencyCustomizerDrawer.tsx   # Multi-city presets & white-label drawer
│   │   ├── BeforeAfterSection.tsx       # Interactive before/after sliders
│   │   ├── BookingModal.tsx             # Modal appointment request with .ics
│   │   ├── BookingSection.tsx           # Full-page appointment booking section
│   │   ├── ClosingCta.tsx               # Full-width closing call-to-action
│   │   ├── DoctorModal.tsx              # Detailed clinician biography modal
│   │   ├── EmergencyBanner.tsx          # Same-day urgent triage alert
│   │   ├── FaqSection.tsx               # Interactive FAQ accordion & insurance badges
│   │   ├── Footer.tsx                   # Multi-column footer & legal dialogs
│   │   ├── Header.tsx                   # Sticky responsive header & mobile navigation
│   │   ├── Hero.tsx                     # Dentora cinematic hero section
│   │   ├── LightboxModal.tsx            # Fullscreen clinical photo lightbox
│   │   ├── LocationSection.tsx          # Real-time operating hours & Google map embed
│   │   ├── MembershipSection.tsx        # In-house dental savings membership plan
│   │   ├── ProblemSolution.tsx          # Technology spotlights & operatory showcase
│   │   ├── ReviewsSection.tsx           # Verified 5-star testimonials & ratings
│   │   ├── SmileGallery.tsx             # Bento photography gallery
│   │   ├── SocialProofBar.tsx           # Accreditation badges & insurance networks
│   │   ├── TeamSection.tsx              # Doctor directory & credential cards
│   │   ├── TreatmentModal.tsx           # Detailed procedure guide modal
│   │   ├── TreatmentsSection.tsx        # Comprehensive segmented service catalog
│   │   ├── TrustBar.tsx                 # 5-card clinical trust features
│   │   └── WhyChooseUs.tsx              # The Dentora clinical care standard
│   ├── context/
│   │   └── ClinicContext.tsx            # React state & configuration provider
│   ├── data/
│   │   └── clinicPresets.ts             # Multi-city clinical data & content models
│   ├── types/
│   │   └── clinic.ts                    # TypeScript interfaces & domain types
│   ├── App.tsx                          # Application root
│   ├── index.css                        # Tailwind CSS v4 design tokens & theme
│   └── main.tsx                         # DOM entry point
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

Apache-2.0
