"use client";

import { useEffect, useState } from "react";
import { EligibilityChecker } from "@/components/admissions/EligibilityChecker";
import { CourseCards } from "@/components/admissions/CourseCards";
import { FeeStructure } from "@/components/admissions/FeeStructure";
import { AdmissionTimeline } from "@/components/admissions/AdmissionTimeline";
import { ScholarshipSection } from "@/components/admissions/ScholarshipSection";
import { AdmissionForm } from "@/components/admissions/AdmissionForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AdmissionsPage() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const deadline = new Date("2025-06-30");
    const now = new Date();
    setDaysLeft(Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading
        badge="Admissions 2025"
        title="Begin Your Journey at GAT"
        subtitle={`Application deadline in ${daysLeft} days — June 30, 2025`}
      />
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <EligibilityChecker />
        <AdmissionTimeline />
      </div>
      <SectionHeading title="Programs Offered" align="left" />
      <CourseCards />
      <div className="my-16 grid gap-8 lg:grid-cols-2">
        <FeeStructure />
        <AdmissionForm />
      </div>
      <SectionHeading title="Scholarships" align="left" />
      <ScholarshipSection />
    </div>
  );
}
