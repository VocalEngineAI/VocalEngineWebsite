import { AudioLines, Mic } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";
import { voiceAiFeatures } from "@/lib/content";

export function VoiceAiShowcase() {
  return (
    <section
      id="voice-ai"
      className="scroll-mt-20 bg-dark py-[var(--spacing-section-sm)] text-on-dark md:py-[var(--spacing-section-md)]"
    >
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            tone="dark"
            eyebrow="Voice & chat AI"
            title="Agents that carry a real conversation, not a phone tree"
            description="Every voice and chat agent is built around your actual call flows — qualifying, booking, and answering questions the way your best rep would."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {voiceAiFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display text-base font-semibold text-on-dark">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-on-dark-muted">{feature.description}</p>
              </div>
            ))}
          </div>

          <Button href="#contact" variant="ghost" className="w-fit px-0">
            <Mic size={16} /> Hear a sample agent →
          </Button>
        </div>

        <div className="relative mx-auto flex h-80 w-full max-w-sm items-center justify-center rounded-[var(--radius-xl)] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[var(--radius-xl)] bg-[radial-gradient(60%_50%_at_50%_20%,rgba(151,71,255,0.35)_0%,transparent_70%)]"
          />
          <div className="relative flex flex-col items-center gap-5 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90">
              <AudioLines size={26} />
            </span>
            <div className="flex items-end gap-1" aria-hidden="true">
              {[10, 22, 14, 28, 18, 24, 12].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-lime/80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <p className="text-sm text-on-dark-muted">Live call · 00:42</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
