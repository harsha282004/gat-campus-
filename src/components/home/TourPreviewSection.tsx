"use client";

import Image from "next/image";
import Link from "next/link";
import { CAMPUS_LOCATIONS } from "@/lib/constants";
import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TourPreviewSection() {
  const preview = CAMPUS_LOCATIONS.slice(0, 4);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading badge="Virtual Tour" title="Explore Campus Virtually" subtitle="Navigate 8+ locations before you visit" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((loc, i) => (
            <ScrollReveal key={loc.id} delay={i * 0.1}>
              <Link href="/virtual-tour" className="group block overflow-hidden rounded-2xl">
                <div className="relative h-48">
                  <Image src={loc.image} alt={loc.name} fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <p className="absolute bottom-4 left-4 font-semibold text-white">{loc.name}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <GradientButton href="/virtual-tour" variant="gold">Start Full Tour</GradientButton>
        </div>
      </div>
    </section>
  );
}
