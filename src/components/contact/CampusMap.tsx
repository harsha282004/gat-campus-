"use client";

import { MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { CONTACT } from "@/lib/constants";

export function CampusMap() {
  return (
    <GlassCard className="overflow-hidden p-0">
      <div className="relative h-80 bg-navy-800">
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <MapPin className="h-12 w-12 text-gold-400 animate-bounce" />
            <span className="mt-2 rounded-lg glass-navy px-3 py-1 text-sm font-medium text-white">GAT Campus</span>
          </div>
        </div>
        <iframe
          title="Campus location"
          src="https://maps.google.com/maps?q=Bangalore&output=embed"
          className="absolute inset-0 h-full w-full opacity-30"
          loading="lazy"
        />
      </div>
      <p className="p-4 text-sm text-[#8899bb]">{CONTACT.address}</p>
    </GlassCard>
  );
}
