"use client";

import { cn } from "@/lib/utils";

type Status = "online" | "thinking" | "offline";

interface AIStatusBadgeProps {
  status?: Status;
  className?: string;
}

const labels: Record<Status, string> = {
  online: "AI Online",
  thinking: "AI Thinking",
  offline: "AI Offline",
};

const dotColors: Record<Status, string> = {
  online: "bg-emerald-500",
  thinking: "bg-amber-500 animate-pulse",
  offline: "bg-gray-500",
};

export function AIStatusBadge({ status = "online", className }: AIStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#8899bb]",
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", dotColors[status], status === "online" && "animate-pulse")} />
      {labels[status]}
    </span>
  );
}
