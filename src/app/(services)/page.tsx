
import CrewSection from "@/components/crew-section";
import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/contact-section";
import TestimonialSection from "@/components/testimonial-section";
import FeatureSection from "@/components/feature-section";

export default async function IndexPage() {
  return (
    <>
      <HeroSection/>
      <hr className="border-slate-200" />
      <FeatureSection/>
      <hr className="border-slate-200" />
      <CrewSection/>
      <hr className="border-slate-200" />
      <TestimonialSection/>
      <hr className="border-slate-200" />
      <ContactSection/>
    </>
  );
}
