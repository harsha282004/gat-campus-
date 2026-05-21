import { DEPARTMENTS } from "@/lib/constants";
import { DepartmentCard } from "@/components/academics/DepartmentCard";
import { FacultyHighlights } from "@/components/academics/FacultyHighlights";
import { ResearchLabs } from "@/components/academics/ResearchLabs";
import { AcademicCalendar } from "@/components/academics/AcademicCalendar";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AcademicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading badge="Academics" title="Departments & Programs" subtitle="NBA/NAAC accredited programs across 7 departments" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {DEPARTMENTS.map((dept) => (
          <DepartmentCard key={dept.code} department={dept} />
        ))}
      </div>
      <div className="mt-20">
        <SectionHeading title="Faculty Highlights" align="left" />
        <FacultyHighlights />
      </div>
      <div className="mt-20">
        <SectionHeading title="Research Labs" align="left" />
        <ResearchLabs />
      </div>
      <div className="mt-20">
        <AcademicCalendar />
      </div>
    </div>
  );
}
