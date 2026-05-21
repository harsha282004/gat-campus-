"use client";

import Image from "next/image";
import Link from "next/link";
import type { Facility } from "@/lib/types";
import { MapPin } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FacilityCardProps {
  facility: Facility;
  index: number;
}

export function FacilityCard({ facility, index }: FacilityCardProps) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="relative h-72">
          <Image src={facility.image} alt={facility.name} fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-space-grotesk text-xl font-bold text-white">{facility.name}</h3>
          <p className="mt-1 text-sm text-[#8899bb]">{facility.description}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {facility.features.map((f) => (
              <span key={f} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gold-400">{f}</span>
            ))}
          </ul>
          <GradientButton href="/virtual-tour" variant="glass" size="sm" icon={<MapPin className="h-4 w-4" />} className="mt-4">
            Virtual Tour
          </GradientButton>
        </div>
      </div>
    </ScrollReveal>
  );
}
