"use client";

import { GlassCard } from "@/components/ui/GlassCard";

const calendar = [
  { sem: "Semester 1", start: "Aug 1, 2025", end: "Dec 15, 2025", exams: "Dec 1-15" },
  { sem: "Semester 2", start: "Jan 5, 2026", end: "May 20, 2026", exams: "May 5-20" },
  { sem: "Summer Break", start: "May 21, 2026", end: "Jul 31, 2026", exams: "—" },
];

const holidays = ["Jan 26 — Republic Day", "Aug 15 — Independence Day", "Oct 2 — Gandhi Jayanti"];

export function AcademicCalendar() {
  return (
    <GlassCard>
      <h3 className="mb-4 text-xl font-semibold text-white">Academic Calendar 2025-26</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-left text-[#8899bb]">
            <th className="py-2">Period</th>
            <th>Start</th>
            <th>End</th>
            <th>Exams</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((row) => (
            <tr key={row.sem} className="border-b border-white/5">
              <td className="py-3 text-white">{row.sem}</td>
              <td className="text-[#8899bb]">{row.start}</td>
              <td className="text-[#8899bb]">{row.end}</td>
              <td className="text-gold-400">{row.exams}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="mt-6 font-medium text-white">Holidays</h4>
      <ul className="mt-2 space-y-1">
        {holidays.map((h) => (
          <li key={h} className="text-sm text-[#8899bb]">{h}</li>
        ))}
      </ul>
    </GlassCard>
  );
}
