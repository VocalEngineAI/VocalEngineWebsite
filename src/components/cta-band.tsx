import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-20 py-[var(--spacing-section-sm)]">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-dark px-8 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_0%,rgba(151,71,255,0.35)_0%,transparent_70%)]"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="balance max-w-2xl font-display text-h2 font-semibold leading-[var(--text-h2--line-height)] text-on-dark">
              Ready to see what a voice agent sounds like on your business?
            </h2>
            <p className="max-w-xl text-lg text-on-dark-muted">
              Book a 30-minute call — we&apos;ll scope your build and show you a working demo before you commit to
              anything.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:hello@vocalengineai.com" variant="primary" className="h-12 px-7 text-base">
                Book a call
              </Button>
              <Button href="#faq" variant="outline-dark" className="h-12 px-7 text-base">
                Read the FAQ
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
