// One-time generator for the Voice Bots page's cached demo-call audio.
//
// Usage:
//   node --env-file=.env.local scripts/generate-voice-demos.mjs
//   (or) DEEPGRAM_API_KEY=... node scripts/generate-voice-demos.mjs
//
// This calls Deepgram's Aura TTS API once per script in
// src/lib/voice-demo-scripts.json and writes the resulting mp3 files to
// public/audio/voice-demos/. Nothing in the app itself calls Deepgram —
// the site just plays these cached static files.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCRIPTS_PATH = path.join(ROOT, "src", "lib", "voice-demo-scripts.json");
const OUT_DIR = path.join(ROOT, "public", "audio", "voice-demos");

const API_KEY = process.env.DEEPGRAM_API_KEY;
const MODEL = process.env.DEEPGRAM_VOICE_MODEL || "aura-asteria-en";

if (!API_KEY) {
  console.error(
    "Missing DEEPGRAM_API_KEY.\n\n" +
      "Run with:\n" +
      "  node --env-file=.env.local scripts/generate-voice-demos.mjs\n" +
      "(put DEEPGRAM_API_KEY=... in .env.local, which is gitignored)\n\n" +
      "or inline for a one-off run:\n" +
      "  DEEPGRAM_API_KEY=... node scripts/generate-voice-demos.mjs"
  );
  process.exit(1);
}

async function synthesize(text) {
  const res = await fetch(`https://api.deepgram.com/v1/speak?model=${MODEL}&encoding=mp3`, {
    method: "POST",
    headers: {
      Authorization: `Token ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Deepgram request failed (${res.status} ${res.statusText}): ${body}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const demos = JSON.parse(await readFile(SCRIPTS_PATH, "utf-8"));

  await mkdir(OUT_DIR, { recursive: true });

  for (const demo of demos) {
    console.log(`Generating "${demo.label}" (${demo.slug})...`);
    const audio = await synthesize(demo.script);
    const outPath = path.join(OUT_DIR, `${demo.slug}.mp3`);
    await writeFile(outPath, audio);
    console.log(`  -> ${path.relative(ROOT, outPath)} (${audio.length} bytes)`);
  }

  console.log("\nDone. Commit the new files under public/audio/voice-demos/.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
