"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-navy rounded-xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-glow",
        glow && "shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
