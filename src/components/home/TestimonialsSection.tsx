"use client";

import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading badge="Testimonials" title="What Our Community Says" />
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full"
        >
          <CarouselContent>
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <GlassCard className="h-full">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-[#8899bb]">&ldquo;{t.content}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gold-400/20 text-gold-400">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-[#8899bb]">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-gold-400/30 text-gold-400" />
          <CarouselNext className="right-0 border-gold-400/30 text-gold-400" />
        </Carousel>
      </div>
    </section>
  );
}
