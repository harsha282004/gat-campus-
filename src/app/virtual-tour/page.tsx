"use client";

import { useState } from "react";
import { Compass, Maximize2, Share2, ZoomIn, ZoomOut } from "lucide-react";
import { CAMPUS_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { TourViewer } from "@/components/virtual-tour/TourViewer";
import { NavigationControls } from "@/components/virtual-tour/NavigationControls";
import { MiniMap } from "@/components/virtual-tour/MiniMap";
import { FloorSelector } from "@/components/virtual-tour/FloorSelector";
import { LocationCarousel } from "@/components/virtual-tour/LocationCarousel";

export default function VirtualTourPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [floor, setFloor] = useState(0);

  const location = CAMPUS_LOCATIONS[currentIndex];
  const breadcrumb = `Main Gate → ${location.name}`;

  const navigate = (dir: string) => {
    setCurrentIndex((prev) => {
      if (dir === "forward" || dir === "right") return (prev + 1) % CAMPUS_LOCATIONS.length;
      return (prev - 1 + CAMPUS_LOCATIONS.length) % CAMPUS_LOCATIONS.length;
    });
  };

  return (
    <div className="min-h-screen bg-navy-950 px-4 py-6 md:px-6">
      <div className="relative">
        <TourViewer location={location} breadcrumb={breadcrumb} />
        <NavigationControls onNavigate={navigate} />
        <MiniMap locations={CAMPUS_LOCATIONS} currentId={location.id} onSelect={(id) => {
          const idx = CAMPUS_LOCATIONS.findIndex((l) => l.id === id);
          if (idx >= 0) setCurrentIndex(idx);
        }} />
        <div className="absolute right-4 top-56">
          <FloorSelector floor={floor} onFloorChange={setFloor} />
        </div>
        <div className="absolute left-4 top-1/2 hidden w-48 -translate-y-1/2 lg:block">
          <div className="glass-navy rounded-xl p-4">
            <p className="mb-3 text-sm font-medium text-gold-400">Nearby</p>
            {location.nearbyFacilities.map((f) => (
              <div key={f} className="mb-2 flex items-center justify-between text-sm">
                <span className="text-[#8899bb]">{f}</span>
                <Button size="sm" variant="ghost" className="h-6 text-xs text-gold-400">Go</Button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-4 bottom-24 flex flex-col gap-2">
          <Button size="icon" variant="ghost" className="glass" aria-label="Zoom in"><ZoomIn className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" className="glass" aria-label="Zoom out"><ZoomOut className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" className="glass" aria-label="Fullscreen"><Maximize2 className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" className="glass" aria-label="Share"><Share2 className="h-4 w-4" /></Button>
          <Compass className="h-8 w-8 text-gold-400" style={{ transform: `rotate(${currentIndex * 45}deg)` }} />
        </div>
      </div>
      <div className="mt-6">
        <LocationCarousel
          locations={CAMPUS_LOCATIONS}
          currentId={location.id}
          onSelect={(id) => {
            const idx = CAMPUS_LOCATIONS.findIndex((l) => l.id === id);
            if (idx >= 0) setCurrentIndex(idx);
          }}
        />
      </div>
    </div>
  );
}
