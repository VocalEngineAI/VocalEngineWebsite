import industryDemoScripts from "./industry-demo-scripts.json";

const descriptions: Record<string, string> = {
  healthcare: "Book appointments, send reminders, and triage routine patient questions without adding staff.",
  "call-center": "Handle tier-1 support and overflow calls at scale, so your team only sees what needs a human.",
  "real-estate": "Answer property questions, qualify leads, and schedule showings instantly — even after hours.",
  retail: "Automate order tracking, FAQs, and returns to boost satisfaction and cut wait times.",
};

export const voiceBotsIndustries = {
  eyebrow: "Industries",
  title: "Built for the calls that never stop coming",
  description: "The same agent framework, tuned to how each industry actually talks on the phone.",
  cards: industryDemoScripts.map((demo) => ({
    name: demo.label,
    icon: demo.slug,
    audio: `/audio/voice-demos/${demo.slug}.mp3`,
    description: descriptions[demo.slug],
  })),
};
