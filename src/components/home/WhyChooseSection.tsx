"use client";

import Image from "next/image";
import { WHY_CHOOSE } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading badge="Why GAT" title="Why Choose Campus Compass" subtitle="Experience the future of campus navigation" />
        <div className="space-y-16">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = getIcon(item.icon);
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={item.title} direction={isEven ? "left" : "right"}>
                <div className={`flex flex-col items-center gap-8 lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl lg:h-80 lg:w-1/2">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="lg:w-1/2">
                    <Icon className="mb-4 h-12 w-12 text-gold-400" />
                    <h3 className="font-space-grotesk text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-[#8899bb]">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
