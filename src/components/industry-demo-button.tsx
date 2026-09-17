"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function IndustryDemoButton({ label, audioSrc }: { label: string; audioSrc: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Audio not generated yet — fail silently.
      });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label} demo` : `Hear ${label} demo`}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-semibold text-page-base transition-opacity hover:opacity-90"
      >
        {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
        {playing ? "Playing…" : "Hear Demo"}
      </button>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
}
