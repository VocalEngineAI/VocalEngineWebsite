import Link from "next/link";
import { Container } from "./ui/container";
import { Logo } from "./logo";
import { footerLinks } from "@/lib/content";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs uppercase tracking-widest text-on-dark-muted">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-on-dark-muted transition-colors hover:text-on-dark">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-dark text-on-dark">
      <Container className="flex flex-col gap-14 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo tone="dark" />
            <p className="text-sm leading-relaxed text-on-dark-muted">
              VocalEngineAI builds mobile apps, websites, and AI automations — including voice and chat agents — for
              teams that want one partner across product and support.
            </p>
            <div className="flex items-center gap-4 pt-2 text-sm font-medium">
              <Link href="#" className="text-on-dark-muted hover:text-on-dark">
                LinkedIn
              </Link>
              <Link href="#" className="text-on-dark-muted hover:text-on-dark">
                X
              </Link>
              <Link href="#" className="text-on-dark-muted hover:text-on-dark">
                YouTube
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Services" links={footerLinks.services} />
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VocalEngineAI. All rights reserved.</p>
          <p>Built with Next.js.</p>
        </div>
      </Container>
    </footer>
  );
}
