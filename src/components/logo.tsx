function LogoMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect width="30" height="30" rx="9" fill="#5B0DD5" />
      <path
        d="M8 10.5C8 9.67157 8.67157 9 9.5 9C10.1502 9 10.7222 9.42127 10.9222 10.0335L15 22.5L19.0778 10.0335C19.2778 9.42127 19.8498 9 20.5 9C21.3284 9 22 9.67157 22 10.5C22 10.6738 21.9706 10.8464 21.9129 11.0104L16.4129 20.7229C15.9143 21.5954 15.0001 22.1338 14 22.1338C13 22.1338 12.0857 21.5954 11.5871 20.7229L8.0871 11.0104C8.02942 10.8464 8 10.6738 8 10.5Z"
        fill="white"
      />
      <circle cx="15" cy="7" r="1.6" fill="#B5FF90" />
    </svg>
  );
}

export function Logo({ tone = "light", iconOnly = false }: { tone?: "light" | "dark"; iconOnly?: boolean }) {
  const wordColor = tone === "dark" ? "text-on-dark" : "text-ink";
  const accentColor = tone === "dark" ? "text-lime" : "text-primary";

  if (iconOnly) {
    return <LogoMark />;
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-display text-lg font-semibold tracking-tight ${wordColor}`}>
        Vocal<span className={accentColor}>Engine</span>AI
      </span>
    </span>
  );
}
