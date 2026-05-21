"use client";

import { useState } from "react";
import { EVENTS } from "@/lib/constants";
import { EventCard } from "@/components/events/EventCard";
import { NotificationPanel } from "@/components/events/NotificationPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Event } from "@/lib/types";

const filters = ["all", "technical", "cultural", "placement", "academic"] as const;

export default function EventsPage() {
  const [filter, setFilter] = useState<typeof filters[number]>("all");
  const filtered = filter === "all" ? EVENTS : EVENTS.filter((e) => e.type === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading badge="Campus Events" title="Upcoming Events" subtitle="Stay connected with campus life" />
      <NotificationPanel />
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList className="glass mb-8">
          {filters.map((f) => (
            <TabsTrigger key={f} value={f} className="capitalize">{f}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
