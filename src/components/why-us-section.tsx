import {
  Rocket,
  ShieldCheck,
  Layers,
  HeartHandshake,
  Gauge,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { benefits } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  "shield-check": ShieldCheck,
  layers: Layers,
  "heart-handshake": HeartHandshake,
  gauge: Gauge,
  puzzle: Puzzle,
};

export function WhyUsSection() {
  return (
    <section className="bg-bg-subtle py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why VocalEngineAI"
          title="A build team that ships fast without cutting corners"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];
            return (
              <div key={benefit.title} className="flex flex-col gap-4 rounded-[var(--radius-xl)] bg-bg p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
