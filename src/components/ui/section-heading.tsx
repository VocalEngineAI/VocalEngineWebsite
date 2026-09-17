import type { ReactNode } from "react";
import { Eyebrow } from "./badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "primary",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "primary" | "dark";
}) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-on-dark" : "text-ink";
  const descColor = tone === "dark" ? "text-on-dark-muted" : "text-muted";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`balance font-display text-h2 leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-semibold ${titleColor}`}
      >
        {title}
      </h2>
      {description ? <p className={`text-lg leading-relaxed ${descColor}`}>{description}</p> : null}
    </div>
  );
}
