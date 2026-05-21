"use client";

import type { Department } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <GlassCard hover className="h-full">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-gradient font-bold text-white">
        {department.code}
      </div>
      <h3 className="font-semibold text-white">{department.name}</h3>
      <p className="mt-2 text-sm text-[#8899bb]">Intake: {department.intake} · Faculty: {department.facultyCount}</p>
      {department.accreditation && (
        <Badge className="mt-3" variant="outline">{department.accreditation} Accredited</Badge>
      )}
      <Button variant="outline" className="mt-4 w-full border-gold-400/30 text-gold-400">Explore</Button>
    </GlassCard>
  );
}
