import type { Metadata } from "next";
import { VoiceBotsHero } from "@/components/voice-bots-hero";
import { VoiceBotsWhy } from "@/components/voice-bots-why";
import { VoiceBotsIntegrations } from "@/components/voice-bots-integrations";
import { VoiceBotsIndustries } from "@/components/voice-bots-industries";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { voiceBotsFaqs } from "@/lib/voice-bots-content";

export const metadata: Metadata = {
  title: "Voice Bots — VocalEngineAI",
  description:
    "AI voice bots for customer service, appointment setting, answering service, and inbound call routing — all on one platform.",
};

export default function VoiceBotsPage() {
  return (
    <main>
      <VoiceBotsHero />
      <VoiceBotsWhy />
      <VoiceBotsIntegrations />
      <VoiceBotsIndustries />
      <CaseStudiesSection />
      <CtaBand />
      <FaqSection eyebrow="FAQ" title="Common questions about voice bots" faqs={voiceBotsFaqs} />
    </main>
  );
}
