import { Container } from "./ui/container";
import { integrationCategories } from "@/lib/content";

export function IntegrationsStrip() {
  return (
    <section className="border-y border-border py-14">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Connects to the tools you already run on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {integrationCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {category}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
