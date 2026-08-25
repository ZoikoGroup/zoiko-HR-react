import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CONFIG_CARDS = [
  "Global organization model",
  "Jurisdiction-aware configuration",
  "Effective-dated records",
  "Regional access controls",
  "Privacy & retention controls",
  "Global reporting with local boundaries",
];

const TOOLBAR_BADGES = [
  { label: "Entity: Zoiko GmbH", accent: false },
  { label: "Jurisdiction: Germany", accent: false },
  { label: "Policy v4.2", accent: false },
  { label: "Data region: EU", accent: true },
];

export function GlobalFoundationSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              One global HR foundation. Configured for local operating
              requirements.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Structure workforce information consistently while configuring
              policies, fields, documents, calendars, approvals, permissions
              and retention requirements by entity, location and
              jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG_CARDS.map((card, i) => (
            <Reveal key={card} delay={i * 0.06}>
              <div className="group rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10 hover:text-white">
                {card}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-ink-2 p-4">
            {TOOLBAR_BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold ${
                  badge.accent
                    ? "bg-emerald-500 text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                {badge.label}
                {!badge.accent && <span aria-hidden className="text-white/40">▾</span>}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.26} y={36}>
          <PlaceholderImage
            src="/images/home/global-foundation.png"
            alt="Global team gathered at an international HR conference"
            label="Global HR conference"
            className="mt-10 w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          />
        </Reveal>

        <Reveal delay={0.32}>
          <Link
            href="/global-hr-management"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore global HR management
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
