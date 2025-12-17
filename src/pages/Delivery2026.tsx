import React from 'react';

import { QuarterColumn } from '../components/QuarterColumn';
import { AlertTriangle } from 'lucide-react';

export const Delivery2026: React.FC = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-[#e8eaed] tracking-tight mb-2">2026 Delivery Roadmap</h1>
          <p className="text-[#9aa0a6] font-medium">
            High-confidence target outcomes. Funded and prioritized.
          </p>
        </div>
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#81c995]/20 text-[#81c995] rounded-full border border-[#81c995]/30 shadow-sm">
          <AlertTriangle size={18} className="text-[#81c995]" />
          <span className="text-sm font-bold tracking-wide">COMMITTED DELIVERY</span>
        </div>
      </div>

      <div className="content-grid pb-4">
        <QuarterColumn 
          quarter="Q1 2026"
          title="Foundation & Control"
          items={[
             "V2 cane stability & reliability",
             "Bluetooth through mobile OS settings",
             "Observability & diagnostics",
             "Voice Assistant 2.0 hardening"
          ]}
        />
        <QuarterColumn 
          quarter="Q2 2026"
          title="Navigation Leap"
          items={[
             "New navigation infrastructure",
             "Sidewalk & crosswalk detection",
             "Visually-impaired-optimized routing",
             "Navigation instruction quality improvements"
          ]}
        />
        <QuarterColumn 
          quarter="Q3 2026"
          title="Interaction & Intelligence"
          items={[
             "VoiceOver / TalkBack control from cane & VA",
             "New voice options (male/female, TTS speed)",
             "Obstacle detection interaction modes (silent, sound, vibrate)",
             "Context-aware assistant behavior"
          ]}
        />
        <QuarterColumn 
          quarter="Q4 2026"
          title="Scale & Readiness"
          items={[
             "Platform hardening",
             "Subscription & entitlement maturity",
             "Data foundations for AI & insights",
             "2027 hardware readiness"
          ]}
        />
      </div>
    </div>
  );
};
