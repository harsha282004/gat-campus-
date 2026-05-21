"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "@/components/ui/GlassCard";

const fees = {
  tuition: [
    { item: "B.Tech (Govt Quota)", govt: "₹65,000/yr", mgmt: "₹1,20,000/yr" },
    { item: "MBA", govt: "₹80,000/yr", mgmt: "₹1,50,000/yr" },
  ],
  hostel: [
    { item: "AC Room (Shared)", govt: "₹80,000/yr", mgmt: "₹1,00,000/yr" },
    { item: "Non-AC Room", govt: "₹50,000/yr", mgmt: "₹65,000/yr" },
  ],
  other: [
    { item: "Library & Lab", govt: "₹5,000/yr", mgmt: "₹8,000/yr" },
    { item: "Exam & Misc", govt: "₹3,000/yr", mgmt: "₹5,000/yr" },
  ],
};

function FeeTable({ data }: { data: typeof fees.tuition }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-white/10 text-left text-[#8899bb]">
          <th className="py-2">Item</th>
          <th>Govt Quota</th>
          <th>Management</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.item} className="border-b border-white/5">
            <td className="py-3 text-white">{row.item}</td>
            <td className="text-emerald-400">{row.govt}</td>
            <td className="text-gold-400">{row.mgmt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function FeeStructure() {
  return (
    <GlassCard>
      <h3 className="mb-4 text-xl font-semibold text-white">Fee Structure 2025-26</h3>
      <Tabs defaultValue="tuition">
        <TabsList className="glass mb-4">
          <TabsTrigger value="tuition">Tuition</TabsTrigger>
          <TabsTrigger value="hostel">Hostel</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="tuition"><FeeTable data={fees.tuition} /></TabsContent>
        <TabsContent value="hostel"><FeeTable data={fees.hostel} /></TabsContent>
        <TabsContent value="other"><FeeTable data={fees.other} /></TabsContent>
      </Tabs>
    </GlassCard>
  );
}
