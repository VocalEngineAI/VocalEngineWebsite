type NavLink = { label: string; href: string };
type NavItem = NavLink | { label: string; dropdown: NavLink[] };

export const nav: { links: NavItem[] } = {
  links: [
    { label: "Services", href: "/#services" },
    {
      label: "Solutions",
      dropdown: [{ label: "Voice Bots", href: "/solutions/voice-bots" }],
    },
    { label: "Work", href: "/#work" },
    { label: "Industries", href: "/#industries" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export const process = [
  {
    step: "01",
    title: "Scope",
    description:
      "We map your workflows, call volume, and existing stack, then define the smallest build that proves ROI fast.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Design and engineering work in parallel — app, site, or agent — inside weekly checkpoints you can see and test.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "We wire everything into your CRM, calendars, support desk, and telephony so nothing lives in a silo.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Post-launch, we monitor conversations and usage data, then tune flows and features on a running cadence.",
  },
];

export const services = [
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Native iOS/Android and cross-platform apps built for speed, retention, and app-store approval on the first submit.",
    points: ["React Native & Swift/Kotlin", "Offline-first architecture", "App Store & Play Store launch support"],
  },
  {
    icon: "layout-template",
    title: "Website Development",
    description:
      "Marketing sites, web apps, and e-commerce storefronts built on modern frameworks, tuned for speed and conversion.",
    points: ["Next.js & headless CMS", "Core Web Vitals optimized", "Analytics & A/B testing wired in"],
  },
  {
    icon: "workflow",
    title: "AI Automations",
    description:
      "Custom workflow automations that take repetitive ops work — data entry, follow-ups, reporting — off your team's plate.",
    points: ["Event-driven pipelines", "Human-in-the-loop review", "Full audit trail on every run"],
  },
  {
    icon: "phone-call",
    title: "AI Voice Agents & Chatbots",
    description:
      "Inbound and outbound voice agents plus chat assistants that handle real conversations, not just scripted menus.",
    points: ["Natural, interruption-aware voice", "Omnichannel: voice, SMS, web chat", "Live escalation to your team"],
  },
  {
    icon: "plug-zap",
    title: "Integrations",
    description:
      "We connect new builds — or your existing stack — to the CRMs, calendars, and support tools your team already runs on.",
    points: ["CRM & helpdesk sync", "Calendar & scheduling", "Payments & billing"],
  },
];

export const voiceAiFeatures = [
  {
    title: "Human-paced conversation",
    description: "Agents handle interruptions, pauses, and follow-up questions without breaking the flow of a call.",
  },
  {
    title: "Live call monitoring",
    description: "Watch calls in real time, listen in, or take over instantly when a conversation needs a human.",
  },
  {
    title: "Structured outcomes",
    description: "Every call ends with a clean record — booking, ticket, or CRM update — no manual re-entry.",
  },
  {
    title: "Bring your own number",
    description: "Port existing business lines or provision new ones; agents work across voice, SMS, and web chat.",
  },
];

export const industries = [
  { name: "Real Estate", description: "Qualify leads, schedule showings, and answer listing questions around the clock." },
  { name: "Healthcare", description: "Book appointments, send reminders, and triage routine patient questions." },
  { name: "E-commerce & Retail", description: "Handle order status, returns, and product questions without a queue." },
  { name: "Professional Services", description: "Intake new clients, qualify inquiries, and route them to the right team." },
  { name: "Hospitality", description: "Manage reservations, guest requests, and after-hours front-desk questions." },
  { name: "Home & Field Services", description: "Book jobs, confirm appointment windows, and follow up automatically." },
  { name: "Finance & Insurance", description: "Verify callers, walk through claims status, and route escalations securely." },
  { name: "SaaS & Startups", description: "Qualify demo requests, onboard new users, and staff support during peak hours." },
];

export const benefits = [
  {
    icon: "rocket",
    title: "From kickoff to live in weeks",
    description: "A senior team runs your build end-to-end, so you're live and measuring ROI in weeks, not quarters.",
  },
  {
    icon: "shield-check",
    title: "Built with security in mind",
    description: "Access controls, encrypted data in transit and at rest, and clear data-retention policies by default.",
  },
  {
    icon: "layers",
    title: "One team, every layer",
    description: "App, site, automation, and voice agent from a single team that already knows how your stack fits together.",
  },
  {
    icon: "heart-handshake",
    title: "Designed for real conversations",
    description: "Agents follow your business logic and escalate cleanly — no off-script answers, no dead ends.",
  },
  {
    icon: "gauge",
    title: "Reliable under real load",
    description: "Built to handle peak call and traffic volume without dropped sessions or degraded response time.",
  },
  {
    icon: "puzzle",
    title: "Fits your existing stack",
    description: "We integrate with the CRM, helpdesk, and calendar tools you already use instead of replacing them.",
  },
];

export const integrations = [
  { category: "Calendars", tools: ["Cal.com", "Google Calendar", "Microsoft Calendar"] },
  {
    category: "Contact Center (CCaaS)",
    tools: ["8x8", "Five9", "RingCentral", "Genesys", "OpenPhone", "Dialpad", "3CX", "JustCall", "CloudTalk", "Cisco", "Avaya", "Intermedia"],
  },
  { category: "CRM", tools: ["GoHighLevel", "Zoho", "Salesforce", "Freshworks", "ActiveCampaign", "Monday.com", "Pipedrive", "HubSpot"] },
  {
    category: "Vertical CRM",
    tools: ["Jobber", "Follow Up Boss", "Housecall Pro", "Dentrix", "Velocify", "Practice Better", "ServiceTitan", "Bitrix24", "AthenaOne"],
  },
  { category: "Sales", tools: ["Clay", "Apollo.io", "Gong", "Outreach"] },
  { category: "Telephony", tools: ["Twilio", "Telnyx", "Vonage", "Asterisk", "GoTo", "Plivo", "Ooma"] },
  { category: "Connectors", tools: ["Zapier", "Make", "ActivePieces"] },
  { category: "Developer Tools", tools: ["Bubble", "n8n", "Azure"] },
  { category: "Customer Support", tools: ["Intercom", "Zendesk"] },
  { category: "AI", tools: ["ElevenLabs", "OpenAI", "Anthropic"] },
  { category: "Commerce & Payments", tools: ["Stripe", "Shopify"] },
  { category: "Productivity", tools: ["Airtable"] },
];

export const caseStudies = [
  {
    client: "Regional Healthcare Network",
    segment: "Healthcare · 200+ staff",
    summary: "Replaced overflow phone lines with a voice agent that books, reschedules, and confirms appointments.",
    stats: [
      { value: "68%", label: "Calls resolved without staff" },
      { value: "-35%", label: "Missed appointments" },
      { value: "3 wks", label: "Time to launch" },
    ],
  },
  {
    client: "Direct-to-Consumer Retail Brand",
    segment: "E-commerce · Retail",
    summary: "Shipped a companion mobile app and an AI chat assistant that handles order status and returns.",
    stats: [
      { value: "42%", label: "Support tickets deflected" },
      { value: "4.7★", label: "App store rating" },
      { value: "2x", label: "Repeat purchase rate" },
    ],
  },
  {
    client: "Property Management Group",
    segment: "Real Estate · Multi-site",
    summary: "New marketing site paired with a voice agent that answers listing questions and books showings.",
    stats: [
      { value: "3.1x", label: "Qualified showing requests" },
      { value: "24/7", label: "Inquiry coverage" },
      { value: "-40%", label: "Leasing team workload" },
    ],
  },
  {
    client: "B2B SaaS Startup",
    segment: "Software · Seed stage",
    summary: "Automated onboarding and CRM sync so the founding team stopped copy-pasting data between tools.",
    stats: [
      { value: "12 hrs", label: "Saved per week" },
      { value: "100%", label: "CRM data accuracy" },
      { value: "5 days", label: "Time to first automation" },
    ],
  },
];

export const faqs = [
  {
    question: "What does VocalEngineAI actually build?",
    answer:
      "Mobile apps, websites and web apps, AI automations, and AI voice agents/chatbots — plus the integrations that connect them to your existing tools. Most clients start with one service and expand once it proves out.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused voice agent or automation usually launches in 2–4 weeks. Full websites and mobile apps typically run 4–10 weeks depending on scope, with staged releases along the way.",
  },
  {
    question: "Do you build custom voice agents, or use a fixed template?",
    answer:
      "Every agent is built around your call flows, tone, and business logic. We start from a proven framework so we're not reinventing the basics, but the conversation design is yours.",
  },
  {
    question: "Can you integrate with the CRM and tools we already use?",
    answer:
      "Yes — connecting to your existing CRM, helpdesk, calendar, and payment tools is standard on every build, not an add-on.",
  },
  {
    question: "What happens if an AI agent can't handle a request?",
    answer:
      "Agents are built to recognize their limits and escalate cleanly to a human, with full context handed off — no dead ends or repeated questions.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every build includes a post-launch monitoring period, and ongoing support plans are available for continued tuning and feature work.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Projects are scoped and quoted individually based on complexity and integrations required. Book a call and we'll walk through a fixed-scope estimate before any work starts.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Data is encrypted in transit and at rest, access is role-restricted, and we document data retention and handling per project so you know exactly what's stored and where.",
  },
];

export const footerLinks = {
  services: [
    { label: "Mobile App Development", href: "#services" },
    { label: "Website Development", href: "#services" },
    { label: "AI Automations", href: "#services" },
    { label: "Voice Agents & Chatbots", href: "#voice-ai" },
    { label: "Integrations", href: "#services" },
  ],
  company: [
    { label: "Our Work", href: "#work" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
