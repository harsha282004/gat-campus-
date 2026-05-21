"use client";

import Link from "next/link";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  { icon: GraduationCap, title: "Admissions Open", desc: "2025-26 intake now accepting applications", href: "/admissions" },
  { icon: Calendar, title: "TechFest 2025", desc: "March 15-17 — Register now", href: "/events" },
  { icon: MapPin, title: "Virtual Tour", desc: "Explore 8 campus locations", href: "/virtual-tour" },
];

export function CampusHighlights() {
  return (
    <section className="py-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading badge="Highlights" title="Campus Highlights" />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.1}>
              <Link href={h.href} className="glass-navy block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
                <h.icon className="mb-4 h-10 w-10 text-gold-400" />
                <h3 className="font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm text-[#8899bb]">{h.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
