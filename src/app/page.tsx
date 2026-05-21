import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { AIFeaturesSection } from "@/components/home/AIFeaturesSection";
import { SmartCampusSection } from "@/components/home/SmartCampusSection";
import { TourPreviewSection } from "@/components/home/TourPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CampusHighlights } from "@/components/home/CampusHighlights";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <AIFeaturesSection />
      <SmartCampusSection />
      <TourPreviewSection />
      <TestimonialsSection />
      <CampusHighlights />
    </>
  );
}
