"use client";

import Image from "next/image";
import type { CampusLocation } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface LocationCarouselProps {
  locations: CampusLocation[];
  currentId: string;
  onSelect: (id: string) => void;
}

export function LocationCarousel({ locations, currentId, onSelect }: LocationCarouselProps) {
  return (
    <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
      <CarouselContent className="-ml-2">
        {locations.map((loc) => (
          <CarouselItem key={loc.id} className="basis-1/2 pl-2 md:basis-1/4 lg:basis-1/6">
            <button
              onClick={() => onSelect(loc.id)}
              className={cn(
                "w-full overflow-hidden rounded-xl border-2 transition-all",
                currentId === loc.id ? "border-gold-400" : "border-transparent"
              )}
            >
              <div className="relative h-24">
                <Image src={loc.image} alt={loc.name} fill className="object-cover" />
              </div>
              <p className="truncate bg-navy-900/80 px-2 py-1 text-xs text-white">{loc.name}</p>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
