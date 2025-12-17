import React from 'react';
import { Slide } from '../components/Slide';
import { ResponsibilityCard } from '../components/ResponsibilityCard';
import { JiraDiagram } from '../components/JiraDiagram';

export const CapacityJira: React.FC = () => {
  return (
    <Slide>
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-[#e8eaed] tracking-tight">Capacity, Ownership <span className="text-[#9aa0a6] font-light">&</span> Jira</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        
        {/* Left Column: Responsibility Matrix */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#e8eaed] mb-2">Responsibility Breakdown</h2>
          <div className="content-grid">
            <ResponsibilityCard 
              role="Product / Head of Product" 
              items={[
                "Roadmap ownership",
                "Trade-offs & prioritization",
                "External tech strategy"
              ]} 
            />
            <ResponsibilityCard 
              role="Hardware / Firmware" 
              items={[
                "Cane firmware & sensors",
                "Power & manufacturing loops",
                "Certifications"
              ]} 
            />
            <ResponsibilityCard 
              role="Mobile (iOS / Android)" 
              items={[
                "Navigation UX",
                "Voice Assistant UX",
                "Accessibility & releases"
              ]} 
            />
             <ResponsibilityCard 
              role="Backend / Cloud" 
              items={[
                "Navigation services",
                "Logging & analytics",
                "Subscription & AI orchestration"
              ]} 
            />
            <ResponsibilityCard 
              role="UX / Research" 
              items={[
                "Instruction design",
                "Voice flows",
                "Usability validation"
              ]} 
            />
            <ResponsibilityCard 
              role="Data / AI" 
              items={[
                "AIM analytics",
                "Model evaluation",
                "Insight generation"
              ]} 
            />
          </div>
        </div>

        {/* Right Column: Jira Mapping */}
        <div className="lg:w-1/3 flex flex-col">
           <h2 className="text-xl font-bold text-text mb-2">Jira Structure</h2>
           <JiraDiagram />
        </div>

      </div>
    </Slide>
  );
};
