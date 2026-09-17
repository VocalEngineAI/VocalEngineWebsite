import { Clock, MessageCircle, Zap } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { voiceBotsWhy } from "@/lib/voice-bots-content";

const icons = [Clock, MessageCircle, Zap];

export function VoiceBotsWhy() {
  return (
    <section className="py-[var(--spacing-section-sm)]">
      <Container className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Eyebrow>Why Voice Bots</Eyebrow>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {voiceBotsWhy.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="flex flex-col gap-4 rounded-[var(--radius-xl)] border border-border bg-bg p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
