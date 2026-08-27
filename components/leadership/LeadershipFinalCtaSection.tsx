import type { ReactElement } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M5 21V5a1 1 0 011-1h6a1 1 0 011 1v16M13 21v-8a1 1 0 011-1h4a1 1 0 011 1v8M9 7h.01M9 11h.01M9 15h.01M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M2 13l4-4 4 3 3-3 4 4M6 9l3 3-2 2a1.4 1.4 0 01-2-2l1-1M14 12l2 2a1.4 1.4 0 01-2 2l-1-1M17 9l4 4-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M4 5h13a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 5v13a1 1 0 001 1M8 9h7M8 12h7M8 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const DESTINATIONS: {
  title: string;
  Icon: () => ReactElement;
  description: string;
  linkLabel: string;
  href: string | null;
}[] = [
  {
    title: "Company Context",
    Icon: BuildingIcon,
    description:
      "Explore the Zoiko HR mission, platform model, and company story.",
    linkLabel: "About Zoiko HR",
    href: "/about",
  },
  {
    title: "About Zoiko Group",
    Icon: GlobeIcon,
    description:
      "Understand the broader portfolio and group governance context.",
    linkLabel: "About Zoiko Group",
    href: "/company/about-zoiko-group",
  },
  {
    title: "Careers",
    Icon: BriefcaseIcon,
    description:
      "Explore verified career opportunities and employer information.",
    linkLabel: "Careers",
    href: "/company/careers",
  },
  {
    title: "Partnerships",
    Icon: HandshakeIcon,
    description:
      "Learn about technology, commercial, and strategic partnership pathways.",
    linkLabel: "Partners",
    href: "/partners",
  },
  {
    title: "Press & Newsroom",
    Icon: NewspaperIcon,
    description: "Official announcements and corporate media materials.",
    linkLabel: "Newsroom",
    href: "/newsroom",
  },
  {
    title: "Trust & Security",
    Icon: LockIcon,
    description: "Product-specific trust, privacy, and security documentation.",
    linkLabel: "Trust & Security",
    href: null,
  },
];

export function LeadershipFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#040D18_0%,#0A1B2E_55%,#0C2036_100%)] py-16 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where would you like to go next?
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-3 text-center text-white/60">
            Navigate to your destination from the approved intent routes below.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((dest, i) => (
            <Reveal key={dest.title} delay={0.08 + i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <dest.Icon />
                </span>
                <p className="mt-3 font-semibold">{dest.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {dest.description}
                </p>
                {dest.href ? (
                  <Link
                    href={dest.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                  >
                    → {dest.linkLabel}
                  </Link>
                ) : (
                  <span className="mt-3 inline-block text-sm italic text-white/30">
                    → {dest.linkLabel} (Route pending activation)
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/40">
            Sales contact and enterprise evaluation routes are available through
            globally approved pathways. Leadership is a trust surface —
            commercial conversion is contextual and intent-aware.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
