"use client";

import { cn } from "@/lib/utils";

interface LocationHotspotProps {
  x: number;
  y: number;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function LocationHotspot({ x, y, label, active, onClick }: LocationHotspotProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all",
        active ? "bg-gold-400 animate-pulse scale-125" : "bg-white/50 hover:bg-gold-400"
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label={label}
    />
  );
}
