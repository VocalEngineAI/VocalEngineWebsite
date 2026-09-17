import { PhoneCall, Sparkles } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";
import { Button } from "./ui/button";
import { PrismStreaks } from "./prism-streaks";
import { heroStats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pb-20 pt-16 md:pb-28 md:pt-24">
      <PrismStreaks />

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Eyebrow tone="dark">
          <Sparkles size={13} /> Apps · Websites · AI Voice &amp; Chat Agents
        </Eyebrow>

        <h1 className="balance max-w-4xl font-display text-h1 font-semibold leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-on-dark">
          One team to build your product, your site, and the AI that answers your phone
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

        <div className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-semibold text-on-dark md:text-3xl">{stat.value}</span>
              <span className="text-sm text-on-dark-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
