"use client";

import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { title: "Application", date: "Jan 1 - Jun 30, 2025", done: true },
  { title: "Document Verify", date: "Within 7 days", done: true },
  { title: "Entrance Exam", date: "Jul 15, 2025", done: false },
  { title: "Counseling", date: "Jul 25-30, 2025", done: false },
  { title: "Enrollment", date: "Aug 1-15, 2025", done: false },
];

export function AdmissionTimeline() {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <ScrollReveal key={step.title} delay={i * 0.1}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.done ? "bg-gold-400 text-navy-950" : "glass border border-white/20"}`}>
                {step.done ? <Check className="h-5 w-5" /> : <span className="text-sm text-[#8899bb]">{i + 1}</span>}
              </div>
              {i < steps.length - 1 && <div className="h-16 w-0.5 bg-white/10" />}
            </div>
            <div className="pb-8">
              <h4 className="font-semibold text-white">{step.title}</h4>
              <p className="text-sm text-[#8899bb]">{step.date}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
