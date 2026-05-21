"use client";

import Image from "next/image";
import type { CampusLocation } from "@/lib/types";

interface TourViewerProps {
  location: CampusLocation;
  breadcrumb: string;
}

export function TourViewer({ location, breadcrumb }: TourViewerProps) {
  return (
    <div className="relative h-[calc(100vh-12rem)] w-full overflow-hidden rounded-2xl">
      <Image src={location.image} alt={location.name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />
      <div className="absolute left-4 top-4 glass-navy rounded-lg px-4 py-2 text-sm text-[#8899bb]">
        {breadcrumb}
      </div>
      <div className="absolute bottom-4 left-4 glass-navy rounded-xl px-6 py-4">
        <h2 className="font-space-grotesk text-2xl font-bold text-white">{location.name}</h2>
        <p className="text-sm text-gold-400">Floor {location.floor === 0 ? "G" : location.floor}</p>
      </div>
    </div>
  );
}
