import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ServicesGrid } from "@/components/services-grid";
import { VoiceAiShowcase } from "@/components/voice-ai-showcase";
import { IndustriesSection } from "@/components/industries-section";
import { WhyUsSection } from "@/components/why-us-section";
import { IntegrationsStrip } from "@/components/integrations-strip";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <IntegrationsStrip />
        <ServicesGrid />
        <ProcessSection />
        <VoiceAiShowcase />
        <IndustriesSection />
        <WhyUsSection />
        <CaseStudiesSection />
        <CtaBand />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
