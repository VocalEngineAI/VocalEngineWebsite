import Link from "next/link";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { MobileNavToggle } from "./mobile-nav-toggle";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const links = (
    <ul className="flex flex-col gap-4 text-sm font-medium text-ink-soft md:flex-row md:items-center md:gap-8">
      {nav.links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="transition-colors hover:text-primary">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="relative flex h-18 items-center justify-between py-3.5">
        <Link href="/" aria-label="VocalEngineAI home">
          <Logo />
        </Link>

        <nav className="hidden md:block">{links}</nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#contact" variant="outline">
            Sign in
          </Button>
          <Button href="#contact" variant="primary">
            Book a call
          </Button>
        </div>

        <MobileNavToggle>
          <div className="flex flex-col gap-6">
            {links}
            <div className="flex flex-col gap-3">
              <Button href="#contact" variant="outline">
                Sign in
              </Button>
              <Button href="#contact" variant="primary">
                Book a call
              </Button>
            </div>
          </div>
        </MobileNavToggle>
      </Container>
    </header>
  );
}
