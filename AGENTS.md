<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# VocalEngineAI marketing site

Single-page Next.js marketing site for VocalEngineAI, an agency offering mobile app development, website development, AI automations, and AI voice/chat agents.

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

## Architecture

- Single route: `src/app/page.tsx` composes every landing-page section in order. There are no other routes.
- `src/components/` — one file per section (`hero`, `services-grid`, `voice-ai-showcase`, `industries-section`, `case-studies-section`, `faq-section`, etc.), all Server Components by default. The only Client Component is `mobile-nav-toggle.tsx` (open/close state for the mobile menu) — even the FAQ accordion is plain server-rendered `<details>/<summary>`, no client JS.
- `src/components/ui/` — shared primitives: `Container`, `Button`, `SectionHeading`, `Eyebrow` (badge).
- `src/lib/content.ts` — all page copy and data (nav links, services, industries, case studies, FAQs, footer links) as typed arrays. Edit copy here, not inline in components.
- `src/app/globals.css` — design tokens defined via Tailwind v4 `@theme`: colors, fonts, radii, section spacing, and the h1/h2 type scale all live here as CSS custom properties (`--color-*`, `--font-*`, `--radius-*`, `--spacing-section-*`, `--text-*`). Components consume them through the generated utility classes (`bg-primary`, `text-ink`, `py-[var(--spacing-section-sm)]`, etc.) rather than hardcoded hex/px values — keep new UI on these tokens instead of introducing one-off colors or spacing.

## Design system origin

The color palette, type scale, spacing scale, and section rhythm were reverse-engineered from a reference SaaS site's published CSS (see the comment at the top of `globals.css`) and reimplemented with original values and naming. Key colors: primary `#5b0dd5`, accent `#9747ff`, lime highlight `#b5ff90`, dark section background `#110229`. All copy, section content, and case studies are original to VocalEngineAI — not copied from the reference site.

## Content notes

- Case studies and stats in `src/lib/content.ts` are illustrative placeholders, not real client data — keep new additions in the same clearly-illustrative style unless told otherwise.
- The logo (`src/components/logo.tsx`) is a placeholder inline-SVG monogram + wordmark. Swap in the real logo asset (e.g. as `public/logo.svg` and update `Logo`) once it's available.
