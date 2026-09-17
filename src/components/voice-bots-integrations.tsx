import { Briefcase, Calendar, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { voiceBotsIntegrations } from "@/lib/voice-bots-content";

const icons: Record<string, LucideIcon> = {
  calendar: Calendar,
  briefcase: Briefcase,
  mail: Mail,
  "message-circle": MessageCircle,
};

const orbitItems = [
  ...voiceBotsIntegrations.categories.map((c) => ({ label: c.label, Icon: icons[c.icon] as LucideIcon | undefined })),
  { label: "+ n8n", Icon: undefined },
];

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

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-bg shadow-lg">
            <Logo iconOnly />
          </div>

          {orbitItems.map((item, i) => {
            const angle = (2 * Math.PI * i) / orbitItems.length - Math.PI / 2;
            const left = 50 + RADIUS * Math.cos(angle);
            const top = 50 + RADIUS * Math.sin(angle);
            const Icon = item.Icon;

            return (
              <div
                key={item.label}
                className="absolute flex flex-col items-center gap-1.5"
                style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-on-dark shadow-lg">
                  {Icon ? <Icon size={22} /> : <span className="font-mono text-[11px] font-semibold">n8n</span>}
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium text-on-dark-muted">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
