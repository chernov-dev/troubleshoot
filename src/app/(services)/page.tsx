
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import { Button } from "@/components/ui/button";

export default async function IndexPage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
  );
}
