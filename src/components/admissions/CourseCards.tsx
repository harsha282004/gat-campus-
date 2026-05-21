"use client";

import { COURSES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CourseCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {COURSES.map((course, i) => (
        <ScrollReveal key={course.code} delay={i * 0.05}>
          <GlassCard hover className="h-full">
            <Badge className="mb-2">{course.category}</Badge>
            <h3 className="font-semibold text-white">{course.name}</h3>
            <p className="mt-2 text-sm text-[#8899bb]">{course.duration} · {course.seats} seats</p>
            <Badge variant="outline" className="mt-3 border-gold-400/30 text-gold-400">{course.fees}</Badge>
            <Button className="mt-4 w-full bg-gold-gradient text-navy-950 hover:opacity-90">Apply Now</Button>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
