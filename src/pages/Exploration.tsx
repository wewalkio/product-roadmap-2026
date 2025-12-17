import React from 'react';

import { FeasibilityCard } from '../components/FeasibilityCard';
import { Lightbulb, Glasses, Microscope, Info } from 'lucide-react';

export const Exploration: React.FC = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#e8eaed] tracking-tight">Exploration <span className="text-[#9aa0a6] font-light">&</span> Feasibility</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f9ab00]/20 text-[#f9ab00] rounded-full border border-[#f9ab00]/30 shadow-sm">
            <Microscope size={18} />
            <span className="text-sm font-bold tracking-wide">DISCOVERY PHASE</span>
          </div>
        </div>
        <div className="flex items-start gap-3 mt-6 p-4 bg-[#f9ab00]/10 rounded-xl border border-[#f9ab00]/20 text-sm text-[#9aa0a6] max-w-2xl">
          <Info className="w-5 h-5 text-[#f9ab00] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#e8eaed]">Note:</strong> Exploration initiatives do not guarantee delivery. 
            Strict kill criteria and feasibility gates apply before any of these move to the committed roadmap.
          </p>
        </div>
      </div>

      <div className="content-grid flex-1 pb-4">
        <FeasibilityCard
          title="New Product & Platform Ideas"
          icon={Lightbulb}
          items={[
            "SAW-NS (Situationally Aware Wearable Navigation System)",
            "Indoor navigation trials (POILabs infrastructure)",
            "Elderly Cane feasibility study",
            "WeWALK Voice & Visual Assistant integration (wearables, glasses, phone cam)",
            "Switching logic: Navigation → WeAssist / Visual Assistant",
            "AI mode for WeAssist (reduce waiting time & call duration)"
          ]}
        />
        <FeasibilityCard
          title="Smart Cane V3 (Target: CES 2027)"
          icon={Glasses} // Using Glasses as proxy for 'Future Hardware' icon concept
          items={[
            "User studies & ergonomic research",
            "New sensor technology evaluations (LiDAR, Radar, etc.)",
            "Form-factor studies & industrial design",
             "Procurement & supply-chain strategies for next-gen components"
          ]}
        />
      </div>
    </div>
  );
};
