import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TRAITS_LEFT = [
  {
    title: "Event-based",
    description:
      "Every journey has a defined subject, type, purpose, scope, owner and effective date.",
  },
  {
    title: "Participant-aware",
    description:
      "Employees, managers, HR, IT, specialists and reviewers see only relevant work and context.",
  },
];

const TRAITS_RIGHT = [
  {
    title: "Effective-dated",
    description:
      "Current and proposed record states remain distinct until approved activation.",
  },
  {
    title: "Auditable",
    description:
      "Changes, decisions, communications, documents, handoffs and closure remain attributable.",
  },
];

const EXPLORE_LINKS = [
  { label: "Explore Employee Records", href: "/platform/employee-records" },
  { label: "See Workflows & Approvals", href: "/platform/workflows-approvals" },
  { label: "Explore Integrations", href: "/integrations" },
];

export function WhatIsOnboardingSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              What is Onboarding & Lifecycle?
            </span>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Zoiko HR Onboarding & Lifecycle coordinates employee events
              from preboarding and onboarding through changes, transfers,
              leave, return, separation, and post-employment record
              handling — organized as event plans with tasks, owners,
              dependencies, documents, communications, approvals, and
              evidence.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-xs text-ink/40">
              Exact capability and availability require approved product
              and contractual confirmation.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-8">
            {TRAITS_LEFT.map((trait, i) => (
              <Reveal key={trait.title} delay={0.1 + i * 0.08}>
                <div className="border-t-2 border-primary pt-4">
                  <p className="font-semibold text-ink">{trait.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {trait.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/what-is.png"
              alt="Team meeting around a laptop"
              label="Coordinated employee events"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-8">
            {TRAITS_RIGHT.map((trait, i) => (
              <Reveal key={trait.title} delay={0.16 + i * 0.08}>
                <div className="border-t-2 border-primary pt-4">
                  <p className="font-semibold text-ink">{trait.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {trait.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {link.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
