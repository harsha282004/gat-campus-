"use client";

import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SmartCampusSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <div className="glass-navy overflow-hidden rounded-3xl p-8 md:p-12">
            <SectionHeading
              badge="Smart Campus"
              title="Connected Campus Ecosystem"
              subtitle="WiFi, IoT sensors, smart classrooms, and real-time analytics — all integrated into one platform."
              align="left"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["1 Gbps WiFi", "IoT Monitoring", "Smart Classrooms"].map((item) => (
                <div key={item} className="rounded-xl border border-gold-400/20 bg-white/5 p-4 text-center">
                  <p className="font-semibold text-gold-400">{item}</p>
                </div>
              ))}
            </div>
            <GradientButton href="/facilities" variant="blue" className="mt-8">
              Explore Facilities
            </GradientButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
