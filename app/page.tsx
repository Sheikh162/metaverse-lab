import CTASection from "@/components/landing/CTASection";
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-violet-500/30 selection:text-white">
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </main>
  );
}