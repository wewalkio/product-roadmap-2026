import React from 'react';

import { PillarCard } from '../components/PillarCard';
import { 
  ShieldCheck, 
  Map, 
  Mic, 
  Zap, 
  Layers, 
  TrendingUp 
} from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <div>
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight pb-2">
          2026: Reliability, Navigation Excellence, Intelligent Assistance
        </h1>
        <p className="text-xl md:text-2xl text-[#9aa0a6] max-w-4xl leading-relaxed font-light">
          Our focus for 2026 is twofold: <span className="text-[#8ab4f8] font-medium">finishing V2 properly</span> to ensure absolute stability, 
          while laying the groundwork for our <span className="text-[#c58af9] font-medium">next generation</span> of intelligent mobility products.
        </p>
      </div>

      <div className="content-grid pb-4">
        <PillarCard 
          number="P1" 
          title="Core Product Stability" 
          icon={ShieldCheck} 
          description="Ensuring rock-solid reliability for V2 cane and app connection."
        />
        <PillarCard 
          number="P2" 
          title="Navigation & Mobility Intelligence" 
          icon={Map} 
          description="Leapfrogging current capabilities with sidewalk detection and better routing."
        />
        <PillarCard 
          number="P3" 
          title="Voice Assistant & AI Layer" 
          icon={Mic} 
          description="More natural interactions and context-aware assistance."
        />
        <PillarCard 
          number="P4" 
          title="Hardware & Sensing Evolution" 
          icon={Zap} 
          description="Preparing for 2027 hardware while optimizing current sensor usage."
        />
        <PillarCard 
          number="P5" 
          title="Platform, Data & Ops" 
          icon={Layers} 
          description="Scaling our backend, data pipelines, and subscription management."
        />
        <PillarCard 
          number="P6" 
          title="Growth Readiness" 
          icon={TrendingUp} 
          description="Readying the product for mass adoption and new market entries."
        />
      </div>
    </div>
  );
};
