"use client";

import Link from "next/link";
import {
  Home,
  GraduationCap,
  Building2,
  FileText,
  Bot,
  Map,
  Calendar,
  Mail,
  Bell,
  Route,
  Sparkles,
} from "lucide-react";
import { EVENTS, NAV_LINKS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AIStatusBadge } from "@/components/ui/AIStatusBadge";
import { Badge } from "@/components/ui/badge";

const sidebarIcons: Record<string, React.ElementType> = {
  "/": Home,
  "/academics": GraduationCap,
  "/facilities": Building2,
  "/admissions": FileText,
  "/ai-assistant": Bot,
  "/virtual-tour": Map,
  "/events": Calendar,
  "/contact": Mail,
};

const stats = [
  { label: "Attendance", value: 92, suffix: "%" },
  { label: "GPA", value: 8, suffix: ".4" },
  { label: "Events", value: 5, suffix: "" },
  { label: "Routes", value: 3, suffix: "" },
];

const recommendations = [
  "Visit the new Innovation Lab",
  "Register for Hackathon 48hrs",
  "Check placement drive on Feb 28",
];

const savedRoutes = [
  { from: "Hostel", to: "CSE Block" },
  { from: "Library", to: "Cafeteria" },
  { from: "Main Gate", to: "Auditorium" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)]">
      <aside className="glass-navy hidden w-64 shrink-0 border-r border-white/10 p-4 lg:block">
        <h2 className="mb-6 font-space-grotesk text-lg font-bold text-gold-400">Dashboard</h2>
        <nav className="space-y-1">
          {NAV_LINKS.map((link) => {
            const Icon = sidebarIcons[link.href] || Home;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#8899bb] transition-colors hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 p-4 md:p-8">
        <GlassCard className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-space-grotesk text-2xl font-bold text-white">Welcome, Arjun!</h1>
              <p className="mt-1 text-[#8899bb]">
                <Sparkles className="mr-1 inline h-4 w-4 text-gold-400" />
                AI Greeting: You have 2 events this week and 1 new lab to explore.
              </p>
            </div>
            <AIStatusBadge />
          </div>
        </GlassCard>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <GlassCard key={s.label} className="text-center">
              <AnimatedCounter end={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-[#8899bb]">{s.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="mb-4 font-semibold text-white">Upcoming Events</h3>
            <ul className="space-y-3">
              {EVENTS.slice(0, 5).map((e) => (
                <li key={e.id} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-sm text-white">{e.title}</span>
                  <Badge variant="outline" className="text-xs">{e.date.split(",")[0]}</Badge>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-4 font-semibold text-white">AI Recommendations</h3>
            <ul className="space-y-3">
              {recommendations.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-[#8899bb]">
                  <Sparkles className="h-4 w-4 shrink-0 text-gold-400" />
                  {r}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <Route className="h-5 w-5 text-gold-400" /> Saved Routes
            </h3>
            <ul className="space-y-2">
              {savedRoutes.map((r) => (
                <li key={r.from} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-sm text-[#8899bb]">{r.from} → {r.to}</span>
                  <Link href="/virtual-tour" className="text-xs text-gold-400 hover:underline">Navigate</Link>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <Bell className="h-5 w-5 text-gold-400" /> Notifications
            </h3>
            <ul className="space-y-2 text-sm text-[#8899bb]">
              <li>• TechFest registration opens March 1</li>
              <li>• Assignment due: Data Structures — Feb 22</li>
              <li>• Library extended hours during exams</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
