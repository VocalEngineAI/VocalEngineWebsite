import { Plus } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { faqs as defaultFaqs } from "@/lib/content";

type Faq = { question: string; answer: string };

export function FaqSection({
  id = "faq",
  eyebrow = "FAQ",
  title = "Everything you need to know before you book a call",
  faqs = defaultFaqs,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  faqs?: Faq[];
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-bg-subtle py-[var(--spacing-section-sm)] md:py-[var(--spacing-section-md)]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-ink marker:content-none">
                {faq.question}
                <Plus size={18} className="shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
