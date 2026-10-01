import React, { useState } from 'react';
import { PhoneCall, Clock, X } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export function EmergencyBanner() {
  const { config } = useClinic();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-slate-900 text-white py-2.5 px-4 sm:px-6 relative z-50 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-blue-400 text-[11px]">
            Same-Day Urgent Care
          </span>
          <span className="hidden md:inline text-slate-300">
            — Acute toothache or urgent consultation needed? Priority slots reserved today.
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${config.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-colors text-[11px]"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Priority Line: {config.emergencyPhone}</span>
          </a>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
