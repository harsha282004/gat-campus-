"use client";

import { RESEARCH_LABS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ResearchLabs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {RESEARCH_LABS.map((lab, i) => (
        <ScrollReveal key={lab.name} delay={i * 0.1}>
          <GlassCard hover>
            <h3 className="font-semibold text-gold-400">{lab.name}</h3>
            <p className="mt-2 text-sm text-[#8899bb]">Hours: {lab.hours}</p>
            <ul className="mt-3 space-y-1">
              {lab.equipment.map((eq) => (
                <li key={eq} className="text-sm text-white">• {eq}</li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
