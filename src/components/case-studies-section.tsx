import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { caseStudies } from "@/lib/content";

export function CaseStudiesSection() {
  return (
    <section id="work" className="scroll-mt-20 py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Client work"
          title="Illustrative results from recent builds"
          description="Representative outcomes based on typical engagements across our service lines."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div key={study.client} className="flex flex-col gap-6 rounded-[var(--radius-xl)] border border-border p-7">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg font-semibold text-ink">{study.client}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{study.segment}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{study.summary}</p>
              <div className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-5">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-display text-xl font-semibold text-primary">{stat.value}</span>
                    <span className="text-xs leading-snug text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
