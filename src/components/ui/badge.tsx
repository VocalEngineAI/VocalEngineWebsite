import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-on-dark-muted"
      : "border-border-strong bg-primary-soft text-primary";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest ${toneClasses}`}
    >
      {children}
    </span>
  );
}
