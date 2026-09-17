import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { MobileNavToggle } from "./mobile-nav-toggle";
import { nav } from "@/lib/content";

function NavLinks({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <ul
      className={
        variant === "desktop"
          ? "flex items-center gap-8 text-sm font-medium text-ink-soft"
          : "flex flex-col gap-4 text-sm font-medium text-ink-soft"
      }
    >
      {nav.links.map((link) => {
        if ("dropdown" in link) {
          return (
            <li key={link.label} className={variant === "desktop" ? "relative" : undefined}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-1 marker:content-none [&::-webkit-details-marker]:hidden hover:text-primary">
                  {link.label}
                  <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
                </summary>
                <ul
                  className={
                    variant === "desktop"
                      ? "absolute left-0 top-full z-10 mt-3 flex min-w-[11rem] flex-col gap-1 rounded-[var(--radius-md)] border border-border bg-bg p-2 shadow-lg"
                      : "mt-2 flex flex-col gap-1 border-l border-border pl-4"
                  }
                >
                  {link.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-primary-soft hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        }

        return (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="relative flex h-18 items-center justify-between py-3.5">
        <Link href="/" aria-label="VocalEngineAI home">
          <Logo />
        </Link>

        <nav className="hidden md:block">
          <NavLinks variant="desktop" />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/#contact" variant="outline">
            Sign in
          </Button>
          <Button href="/#contact" variant="primary">
            Book a call
          </Button>
        </div>

        <MobileNavToggle>
          <div className="flex flex-col gap-6">
            <NavLinks variant="mobile" />
            <div className="flex flex-col gap-3">
              <Button href="/#contact" variant="outline">
                Sign in
              </Button>
              <Button href="/#contact" variant="primary">
                Book a call
              </Button>
            </div>
          </div>
        </MobileNavToggle>
      </Container>
    </header>
  );
}
