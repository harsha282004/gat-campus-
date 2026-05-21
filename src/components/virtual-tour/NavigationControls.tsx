"use client";

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationControlsProps {
  onNavigate: (dir: string) => void;
}

export function NavigationControls({ onNavigate }: NavigationControlsProps) {
  const dirs = [
    { dir: "forward", icon: ChevronUp, className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%]" },
    { dir: "back", icon: ChevronDown, className: "top-1/2 left-1/2 -translate-x-1/2 translate-y-[20%]" },
    { dir: "left", icon: ChevronLeft, className: "top-1/2 left-1/2 -translate-x-[180%] -translate-y-1/2" },
    { dir: "right", icon: ChevronRight, className: "top-1/2 left-1/2 translate-x-[80%] -translate-y-1/2" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {dirs.map(({ dir, icon: Icon, className }) => (
        <Button
          key={dir}
          variant="ghost"
          size="icon"
          className={`pointer-events-auto absolute glass h-12 w-12 rounded-full ${className}`}
          onClick={() => onNavigate(dir)}
          aria-label={`Navigate ${dir}`}
        >
          <Icon className="h-6 w-6 text-white" />
        </Button>
      ))}
    </div>
  );
}
