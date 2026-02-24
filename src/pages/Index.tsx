import { HeroSection } from "@/components/home/HeroSection";
import { BentoMission } from "@/components/home/BentoMission";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
        <BentoMission />
        <HowItWorks />
        <ProgramsPreview />
        <StatsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
