import { AudioLines, Play, Sparkles } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { Button } from "./ui/button";
import { voiceBotsHero } from "@/lib/voice-bots-content";

const WAVE_PATTERNS = [
  [6, 14, 9, 18, 11, 16, 7, 20, 10],
  [10, 6, 16, 9, 20, 12, 8, 15, 11],
  [8, 18, 10, 14, 6, 19, 9, 13, 16],
  [12, 8, 17, 10, 6, 20, 13, 9, 15],
];

export function VoiceBotsHero() {
  return (
    <section className="relative pb-20 pt-16 md:pb-28 md:pt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
        <div className="flex flex-col items-start gap-6 text-left">
          <Eyebrow tone="dark">
            <Sparkles size={13} /> {voiceBotsHero.eyebrow}
          </Eyebrow>

          <h1 className="balance max-w-2xl font-display text-h1 font-semibold leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-on-dark">
            {voiceBotsHero.title}
          </h1>

          <p className="balance max-w-xl text-lg text-on-dark-muted md:text-xl">{voiceBotsHero.description}</p>

          <Button href="/#contact" variant="primary" className="h-12 px-7 text-base">
            Book a call
          </Button>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-5 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/90">
              <AudioLines size={18} />
            </span>
            <p className="mt-2 font-display text-base font-semibold text-on-dark">{voiceBotsHero.demoCard.title}</p>
            <p className="text-sm text-on-dark-muted">{voiceBotsHero.demoCard.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3">
            {voiceBotsHero.demoCard.demos.map((demo, i) => (
              <div
                key={demo.label}
                className="flex items-center gap-3 rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-dark"
                >
                  <Play size={13} fill="currentColor" />
                </span>
                <div className="flex flex-1 flex-col gap-1.5 overflow-hidden">
                  <p className="truncate text-sm font-medium text-on-dark">{demo.label}</p>
                  <div className="flex items-end gap-[3px]" aria-hidden="true">
                    {WAVE_PATTERNS[i % WAVE_PATTERNS.length].map((h, j) => (
                      <span key={j} className="w-[3px] rounded-full bg-on-dark-muted/50" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
