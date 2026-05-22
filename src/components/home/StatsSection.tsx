"use client";

import { STATS } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsSection() {
  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <GlassCard
  hover
  glow
  className="text-center bg-[#102347] border border-[#1e3a8a] shadow-2xl"
>
                  <Icon className="mx-auto mb-4 h-10 w-10 text-gold-400" />
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                 <p className="mt-2 text-[#dbe4ff]">
  {stat.label}
</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
