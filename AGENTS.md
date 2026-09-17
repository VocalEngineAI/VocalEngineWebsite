<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# VocalEngineAI marketing site

Multi-page Next.js marketing site for VocalEngineAI, an agency offering mobile app development, website development, AI automations, and AI voice/chat agents.

## Commands

- `npm run dev` — start the dev server (Turbopack) at localhost:3000
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript)

No test suite is configured.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4
- `lucide-react` for icons — this installed version has dropped brand/social icons (`Linkedin`, `Twitter`, `Youtube`, etc.); the footer uses plain text links instead of logo icons
- Fonts loaded via `next/font/google` in `src/app/layout.tsx`: Geist (body), Inter (headings/display), Reddit Mono (eyebrows/labels/mono text)
- `three` for the hero's WebGL background (`src/components/prism-streaks.tsx`) — a standalone fragment-shader effect, decoupled from React's render cycle (its own `requestAnimationFrame` loop, set up/torn down entirely inside one `useEffect`)

## Architecture

- Routes: `src/app/page.tsx` (homepage) and `src/app/solutions/voice-bots/page.tsx` (Voice Bots). `SiteHeader`/`SiteFooter` and the `PrismStreaks` canvas live in `src/app/layout.tsx`, not per-page, so every route gets them automatically — a new page only needs to export its own `<main>` content and, if it wants a different `<title>`/description, a `metadata` export.
- Nav links (`src/lib/content.ts` → `nav`) use paths relative to the site root (`/#services`, `/solutions/voice-bots`), not bare hashes (`#services`) — the header renders on every route, so a bare hash would try to scroll within whatever page you're currently on instead of navigating home first. Section components with same-page-only anchors (e.g. `Hero`'s own buttons) can still use bare hashes since they only ever render on their own page.
- `src/components/` — one file per section (`hero`, `services-grid`, `voice-ai-showcase`, `industries-section`, `case-studies-section`, `faq-section`, `voice-bots-hero`, `voice-bots-use-cases`, etc.), all Server Components by default. The only Client Components are `mobile-nav-toggle.tsx` (open/close state for the mobile menu) and `prism-streaks.tsx` — even the FAQ accordion and the nav's Solutions dropdown are plain server-rendered `<details>/<summary>`, no client JS.
- Some section components are reused across pages with props for the parts that differ (e.g. `FaqSection` takes optional `eyebrow`/`title`/`faqs`, defaulting to the homepage's). `ProcessSection`, `WhyUsSection`, `CaseStudiesSection`, and `CtaBand` are reused as-is (no props) on `/solutions/voice-bots` since their content and id-based anchors (`#work`, `#contact`) are generic enough to hold up on any page.
- `src/components/ui/` — shared primitives: `Container`, `Button`, `SectionHeading`, `Eyebrow` (badge).
- `src/components/prism-streaks.tsx` — mounted once, site-wide, in `src/app/layout.tsx` as a `fixed inset-0 -z-10` canvas behind every route — not per-section. It owns its own `requestAnimationFrame` loop, decoupled from React's render cycle. All tuning knobs (colors, speed, streak width, dust, exposure, etc.) are props with defaults — override at the single call site in `layout.tsx` rather than editing the shader.
- `src/lib/content.ts` — shared/homepage copy and data (nav links, services, industries, case studies, FAQs, footer links) as typed arrays. Page-specific content (currently `src/lib/voice-bots-content.ts`) lives in its own file per page instead of growing `content.ts` indefinitely — follow that pattern for the next page.
- `src/app/globals.css` — design tokens defined via Tailwind v4 `@theme`: colors, fonts, radii, section spacing, and the h1/h2 type scale all live here as CSS custom properties (`--color-*`, `--font-*`, `--radius-*`, `--spacing-section-*`, `--text-*`). Components consume them through the generated utility classes (`bg-primary`, `text-ink`, `py-[var(--spacing-section-sm)]`, etc.) rather than hardcoded hex/px values — keep new UI on these tokens instead of introducing one-off colors or spacing.

## Design system origin

The color palette, type scale, spacing scale, and section rhythm were reverse-engineered from a reference SaaS site's published CSS (see the comment at the top of `globals.css`) and reimplemented with original values and naming. Key colors: primary `#5b0dd5`, accent `#9747ff`, lime highlight `#b5ff90`. All copy, section content, and case studies are original to VocalEngineAI — not copied from the reference site.

## Dark theme / Prism Streaks background

The site is dark-themed site-wide so the Prism Streaks canvas (see above) stays visible behind every section, not just the hero. This drives how the color tokens work in `globals.css`:

- `--color-page-base` is the **only** solid/opaque color — it's `<body>`'s fallback paint before the canvas mounts. Don't use it for anything else.
- `--color-bg`, `--color-bg-subtle`, `--color-dark`, `--color-border`, `--color-border-strong`, `--color-primary-soft`, and `--color-accent-soft` are all baked with an alpha channel (8-digit hex) so that any card, chip, or section stripe using them reads as **tinted glass over the animation**, not an opaque fill. When adding new surfaces, reuse these tokens (or add a new alpha-baked one) rather than an opaque color — an opaque section background would black out the canvas.
- Sections with no explicit `bg-*` class are fully transparent, letting the canvas show through directly (e.g. the hero, and the gaps between cards in `services-grid.tsx` / `industries-section.tsx`). Only add a `bg-*` class to a section or card when its content needs the contrast.
- Text tokens (`--color-ink`, `--color-ink-soft`, `--color-muted`, `--color-on-dark`, `--color-on-dark-muted`) are all light colors now; there's no separate "light theme" text path left in the codebase.

## Content notes

- Case studies and stats in `src/lib/content.ts` are illustrative placeholders, not real client data — keep new additions in the same clearly-illustrative style unless told otherwise.
- The logo (`src/components/logo.tsx`) is a placeholder inline-SVG monogram + wordmark. Swap in the real logo asset (e.g. as `public/logo.svg` and update `Logo`) once it's available.
- `integrations` in `src/lib/content.ts` (rendered by `integrations-section.tsx`) lists real third-party tool names (Salesforce, HubSpot, Twilio, Zapier, etc.) as plain text, grouped by category — no logos, and the copy frames this as "connects into" rather than an official/certified partnership, since none exists. Keep that framing if you edit this list.

## Voice demo audio (Voice Bots page)

The demo card in `voice-bots-hero.tsx` plays real cached audio, generated once — the app never calls a TTS API at runtime:

- `src/lib/voice-demo-scripts.json` is the single source of truth for the four demo lines (slug, label, script text). `voice-bots-content.ts` imports it and derives each demo's `audio` path as `/audio/voice-demos/<slug>.mp3` — those files don't exist until generated.
- `npm run generate:voice-demos` (→ `scripts/generate-voice-demos.mjs`) reads that JSON, calls Deepgram's Aura TTS API (`POST /v1/speak`) once per line, and writes the mp3s into `public/audio/voice-demos/`. Requires `DEEPGRAM_API_KEY` — copy `.env.example` to `.env` (gitignored) and run via `node --env-file=.env scripts/generate-voice-demos.mjs`, or pass the key inline for a one-off run. Never commit a real key, and never paste one into chat — the `.env` file is the only place it should live.
- `voice-demo-player.tsx` is a small Client Component (play/pause via a plain `<audio>` element) — it's the only interactive piece; `voice-bots-hero.tsx` itself stays a Server Component.
- To add a fifth demo or change the script text, edit `voice-demo-scripts.json` and re-run the generate script — everything else derives from it automatically.
- `voice-bots-integrations.tsx` (the orbit diagram on `/solutions/voice-bots`) shows real product icons for Cal.com, Google Calendar, HubSpot, Gmail, and Zoho, via path/color data in `src/lib/brand-icons.ts` sourced from the `simple-icons` package (CC0-licensed SVG data built for exactly this "integrates with" use case — data was copied in and the npm dependency removed, so nothing here needs `simple-icons` installed). Salesforce and Slack are *not* in that library — likely withdrawn at the trademark owner's request — so they render as a plain two-letter monogram (`SF`/`SL`) in an approximate brand color instead of a hand-drawn logo. If you add another brand icon, check it's actually in `simple-icons` first rather than recreating a logo from memory; if it's absent, use the monogram fallback pattern instead.
- `concept/` (repo root) holds reference screenshots the user drops in for design direction on upcoming pages (not build input, not served by the app) — check it before starting a new page in case there's a reference image already waiting there.
