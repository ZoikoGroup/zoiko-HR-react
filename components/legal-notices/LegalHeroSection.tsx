import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SourceToken, CurrentPill } from "./shared";

const ACTIONS = [
  { label: "Review Terms of Service", href: "/terms-of-service", primary: true },
  { label: "Privacy Notice", href: "/privacy-notice", primary: false },
  { label: "Legal contact route", href: "#legal-communications", primary: false },
];

const CARDS = [
  {
    title: "Website operator",
    body: "Zoiko HR is owned and operated by Zoiko Tech Inc., a Zoiko Group company.",
  },
  {
    title: "Scope of this page",
    body: "This page provides legal notices for the Zoiko HR public website and routes you to current authoritative agreements and policies.",
  },
];

export function LegalHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-14 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,594px)_minmax(0,578px)]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-indigo-400">
                Legal
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Legal Notices
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[580px] text-base leading-7 text-slate-400">
                Review public-site legal notices, operator information,
                intellectual-property statements, and links to the
                authoritative terms and policies that govern Zoiko HR.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                  Effective: <SourceToken>LEGAL-APPROVED DATE</SourceToken>
                </span>
                <span aria-hidden className="hidden text-white/20 sm:inline">
                  ·
                </span>
                <span className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                  Version: <SourceToken>VERSION ID</SourceToken>
                </span>
                <CurrentPill />
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {ACTIONS.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors ${
                      action.primary
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "border border-white/20 text-white/80 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-14 grid gap-3 sm:grid-cols-2">
                {CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <h2 className="text-sm font-semibold leading-5 text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2.5 text-xs leading-5 text-slate-400">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/legal-notices/hero.png"
              alt="Two colleagues reviewing printed documents together in a meeting room"
              label="Reviewing legal documents"
              className="aspect-[578/536] w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
