import { FACILITIES } from "@/lib/constants";
import { FacilityCard } from "@/components/facilities/FacilityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FacilitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading badge="Campus Life" title="World-Class Facilities" subtitle="Everything you need for academic and personal growth" />
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {FACILITIES.map((facility, i) => (
          <div key={facility.name} className="mb-6 break-inside-avoid">
            <FacilityCard facility={facility} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
