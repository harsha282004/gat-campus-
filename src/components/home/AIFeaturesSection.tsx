"use client";

import { AI_FEATURES } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AIFeaturesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading badge="AI Technology" title="Powered by Next-Gen AI" subtitle="Seven intelligent capabilities at your fingertips" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {AI_FEATURES.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            return (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <GlassCard hover className="h-full">
                  <Icon className="mb-4 h-10 w-10 text-gold-400" />
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#8899bb]">{feature.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
