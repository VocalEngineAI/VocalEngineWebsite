import { Building2, Headset, HeartPulse, ShoppingBag, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { IndustryDemoButton } from "./industry-demo-button";
import { voiceBotsIndustries } from "@/lib/voice-bots-industries";

const icons: Record<string, LucideIcon> = {
  healthcare: HeartPulse,
  "call-center": Headset,
  "real-estate": Building2,
  retail: ShoppingBag,
};

const GRADIENTS = [
  "linear-gradient(155deg, var(--color-primary), var(--color-dark))",
  "linear-gradient(155deg, var(--color-accent), var(--color-dark))",
  "linear-gradient(155deg, var(--color-primary), var(--color-accent))",
  "linear-gradient(155deg, var(--color-dark-soft), var(--color-primary))",
];

export function VoiceBotsIndustries() {
  return (
    <section className="py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={voiceBotsIndustries.eyebrow}
          title={voiceBotsIndustries.title}
          description={voiceBotsIndustries.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {voiceBotsIndustries.cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={card.name}
                className="relative flex h-80 flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] p-6"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white">{card.name}</h3>
                  <Icon size={20} className="shrink-0 text-white/80" />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-white/85">{card.description}</p>
                  <IndustryDemoButton label={card.name} audioSrc={card.audio} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
