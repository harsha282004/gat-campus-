"use client";

import { FACULTY } from "@/lib/constants";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FacultyHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {FACULTY.map((f, i) => (
        <ScrollReveal key={f.name} delay={i * 0.05}>
          <GlassCard>
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gold-400/20 text-gold-400">{f.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">{f.name}</h3>
                <p className="text-sm text-gold-400">{f.designation}</p>
                <p className="mt-1 text-sm text-[#8899bb]">{f.specialization}</p>
                <p className="mt-2 text-xs text-[#8899bb]">{f.publications} publications</p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
