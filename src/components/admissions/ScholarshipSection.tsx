"use client";

import { SCHOLARSHIPS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ScholarshipSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {SCHOLARSHIPS.map((s, i) => (
        <ScrollReveal key={s.name} delay={i * 0.1}>
          <GlassCard hover>
            <h3 className="font-semibold text-gold-400">{s.name}</h3>
            <p className="mt-2 text-2xl font-bold text-white">{s.amount}</p>
            <p className="mt-2 text-sm text-[#8899bb]">{s.criteria}</p>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
