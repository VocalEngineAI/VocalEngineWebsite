import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { industries } from "@/lib/content";

export function IndustriesSection() {
  return (
    <section id="industries" className="scroll-mt-20 py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Industries"
          title="Built for teams that live on the phone and in their inbox"
          description="Every industry has different call patterns and compliance needs — our agents and apps are configured around yours."
        />

        <div className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col gap-3 bg-bg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-ink">{industry.name}</h3>
                <ArrowUpRight size={16} className="text-muted" />
              </div>
              <p className="text-sm leading-relaxed text-muted">{industry.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
