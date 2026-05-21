"use client";

import { cn } from "@/lib/utils";

interface FloorSelectorProps {
  floor: number;
  onFloorChange: (floor: number) => void;
}

const floors = [
  { label: "G", value: 0 },
  { label: "1st", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
];

export function FloorSelector({ floor, onFloorChange }: FloorSelectorProps) {
  return (
    <div className="glass-navy flex flex-col gap-2 rounded-xl p-2">
      {floors.map((f) => (
        <button
          key={f.value}
          onClick={() => onFloorChange(f.value)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            floor === f.value ? "bg-gold-400 text-navy-950" : "text-[#8899bb] hover:bg-white/10"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
