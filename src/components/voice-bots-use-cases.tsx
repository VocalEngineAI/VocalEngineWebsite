import { Check, Phone } from "lucide-react";
import { Container } from "./ui/container";
import { voiceBotsUseCases } from "@/lib/voice-bots-content";

export function VoiceBotsUseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-20">
        {voiceBotsUseCases.map((useCase, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={useCase.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={reversed ? "flex flex-col gap-5 lg:order-2" : "flex flex-col gap-5"}>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{useCase.label}</span>
                <h3 className="font-display text-h3 font-semibold text-ink">{useCase.title}</h3>
                <p className="text-base leading-relaxed text-muted">{useCase.description}</p>
                <ul className="flex flex-col gap-2 pt-2">
                  {useCase.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={
                  reversed
                    ? "mx-auto flex h-56 w-full max-w-md items-center justify-center rounded-[var(--radius-xl)] border border-border bg-bg-subtle lg:order-1"
                    : "mx-auto flex h-56 w-full max-w-md items-center justify-center rounded-[var(--radius-xl)] border border-border bg-bg-subtle"
                }
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white">
                    <Phone size={22} />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">{useCase.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
