import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { voiceBotsIntegrations } from "@/lib/voice-bots-content";
import { brandIcons } from "@/lib/brand-icons";

const RADIUS = 42;

export function VoiceBotsIntegrations() {
  return (
    <section className="py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>{voiceBotsIntegrations.eyebrow}</Eyebrow>
          <h2 className="balance font-display text-h2 font-semibold leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">
            {voiceBotsIntegrations.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted">{voiceBotsIntegrations.description}</p>
          <Button href={voiceBotsIntegrations.cta.href} variant="primary" className="h-12 px-7 text-base">
            {voiceBotsIntegrations.cta.label}
          </Button>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div aria-hidden="true" className="absolute inset-[7%] rounded-full border border-dashed border-border-strong" />

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
            <Logo iconOnly />
          </div>

          {brandIcons.map((brand, i) => {
            const angle = (2 * Math.PI * i) / brandIcons.length - Math.PI / 2;
            const left = 50 + RADIUS * Math.cos(angle);
            const top = 50 + RADIUS * Math.sin(angle);

            return (
              <div
                key={brand.name}
                className="absolute flex flex-col items-center gap-1.5"
                style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
                  {brand.path ? (
                    <svg viewBox="0 0 24 24" width={22} height={22} fill={`#${brand.hex}`} aria-hidden="true">
                      <path d={brand.path} />
                    </svg>
                  ) : (
                    <span className="font-display text-xs font-bold" style={{ color: `#${brand.hex}` }}>
                      {brand.monogram}
                    </span>
                  )}
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium text-on-dark-muted">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
