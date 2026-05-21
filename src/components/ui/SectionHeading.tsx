"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradientSpan?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  gradientSpan,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
      {badge && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-400">
          <Sparkles className="h-4 w-4" />
          {badge}
        </span>
      )}
      <h2 className="font-space-grotesk text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        {gradientSpan ? (
          <>
            {title.split(gradientSpan)[0]}
            <span className="gradient-text">{gradientSpan}</span>
            {title.split(gradientSpan)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-[#8899bb]">{subtitle}</p>}
    </div>
  );
}
