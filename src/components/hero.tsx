import { PhoneCall, Sparkles } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[170vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <Container className="relative flex flex-col items-center gap-8 text-center">
          <Eyebrow tone="dark">
            <Sparkles size={13} /> Apps · Websites · AI Voice &amp; Chat Agents
          </Eyebrow>

          <h1 className="blink-text select-none font-display text-h1 font-semibold leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-on-dark">
            Vocal<span className="text-accent">Engine</span>AI
          </h1>

          <p className="balance max-w-2xl text-lg text-on-dark-muted md:text-xl">
            VocalEngineAI designs and ships mobile apps, websites, and AI automations — including voice agents and
            chatbots that handle real conversations and plug straight into your existing tools.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="primary" className="h-12 px-7 text-base">
              Book a call
            </Button>
            <Button href="#work" variant="outline-dark" className="h-12 px-7 text-base">
              <PhoneCall size={16} /> See client work
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
