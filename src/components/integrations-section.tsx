import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { integrations } from "@/lib/content";

export function IntegrationsSection() {
  return (
    <section className="py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Integrations"
          title="Connects into the stack you already run on"
          description="Calendars, CRMs, telephony, and support tools — new builds are wired into what your team already uses instead of asking you to switch."
        />

        <div className="flex flex-col divide-y divide-border">
          {integrations.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:flex-row sm:gap-8"
            >
              <h3 className="w-full shrink-0 font-mono text-xs uppercase tracking-widest text-muted sm:w-44">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border-strong px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
