"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function VoiceDemoPlayer({
  label,
  audioSrc,
  wave,
}: {
  label: string;
  audioSrc: string;
  wave: number[];
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Audio not generated yet (npm run generate:voice-demos hasn't been run) — fail silently.
      });
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] px-4 py-3">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label} demo` : `Play ${label} demo`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-dark"
      >
        {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
      </button>

      <div className="flex flex-1 flex-col gap-1.5 overflow-hidden">
        <p className="truncate text-sm font-medium text-on-dark">{label}</p>
        <div className="flex items-end gap-[3px]" aria-hidden="true">
          {wave.map((h, j) => (
            <span
              key={j}
              className={`wave-bar w-[3px] rounded-full transition-colors ${
                playing ? "wave-bar-playing bg-lime/80" : "bg-on-dark-muted/50"
              }`}
              style={{ height: `${h}px`, animationDelay: playing ? `${(j % 5) * 110}ms` : undefined }}
            />
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
