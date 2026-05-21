"use client";

import type { Event } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, MapPin } from "lucide-react";

const typeColors: Record<Event["type"], string> = {
  technical: "bg-blue-500/20 text-blue-400",
  cultural: "bg-purple-500/20 text-purple-400",
  placement: "bg-emerald-500/20 text-emerald-400",
  academic: "bg-amber-500/20 text-amber-400",
};

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const pct = (event.registered / event.seats) * 100;
  const remaining = event.seats - event.registered;

  return (
    <GlassCard hover className="h-full">
      <Badge className={typeColors[event.type]}>{event.type}</Badge>
      <h3 className="mt-3 font-semibold text-white">{event.title}</h3>
      <div className="mt-3 space-y-1 text-sm text-[#8899bb]">
        <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold-400" />{event.date} {event.time}</p>
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-400" />{event.venue}</p>
      </div>
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-[#8899bb]">
          <span>{remaining} seats left</span>
          <span>{Math.round(pct)}% filled</span>
        </div>
        <Progress value={pct} className="h-2" />
      </div>
      <Button className="mt-4 w-full bg-gold-gradient text-navy-950 hover:opacity-90">Register</Button>
    </GlassCard>
  );
}
