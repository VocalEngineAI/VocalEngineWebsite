import {
  Smartphone,
  LayoutTemplate,
  Workflow,
  PhoneCall,
  PlugZap,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { services } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  "layout-template": LayoutTemplate,
  workflow: Workflow,
  "phone-call": PhoneCall,
  "plug-zap": PlugZap,
};

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What we build"
          title="Everything a growing business needs to run online and on the phone"
          description="Pick one service or combine all five — every build is designed to work together from day one."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.title}
                className="flex flex-col gap-5 rounded-[var(--radius-xl)] border border-border bg-bg p-7 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-h4 font-semibold text-ink">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
                <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
