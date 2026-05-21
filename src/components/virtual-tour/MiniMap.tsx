"use client";

import type { CampusLocation } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MiniMapProps {
  locations: CampusLocation[];
  currentId: string;
  onSelect: (id: string) => void;
}

export function MiniMap({ locations, currentId, onSelect }: MiniMapProps) {
  return (
    <div className="glass-navy absolute right-4 top-4 h-[200px] w-[200px] rounded-xl p-3">
      <p className="mb-2 text-xs font-medium text-gold-400">Campus Map</p>
      <div className="relative h-[160px] w-full rounded-lg bg-navy-800/50">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => onSelect(loc.id)}
            className={cn(
              "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all",
              currentId === loc.id ? "bg-gold-400 animate-pulse scale-150" : "bg-white/40 hover:bg-gold-400/60"
            )}
            style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
            aria-label={loc.name}
          />
        ))}
      </div>
    </div>
  );
}
