import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { process } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="bg-bg-subtle py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="How we work"
          title="A straight line from scope to a live product"
          description="Four stages, one team, no handoffs between agencies for design, engineering, and AI."
        />

        <div className="grid gap-8 md:grid-cols-4">
          {process.map((phase, index) => (
            <div key={phase.step} className="relative flex flex-col gap-4">
              <span className="font-mono text-sm text-primary">{phase.step}</span>
              <h3 className="font-display text-h4 font-semibold text-ink">{phase.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{phase.description}</p>
              {index < process.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1.25rem] top-1.5 hidden h-px w-8 bg-border-strong md:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
