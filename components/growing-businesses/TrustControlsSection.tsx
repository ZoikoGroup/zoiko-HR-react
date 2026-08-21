import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    icon: "🔑",
    title: "Identity & Access",
    description:
      "Role/scope, least privilege, lifecycle/revocation, time-bounded delegation where supported.",
  },
  {
    icon: "🛡️",
    title: "Data & Privacy",
    description:
      "Purpose, minimization, access, retention and correction/rights routes from authoritative sources.",
  },
  {
    icon: "📜",
    title: "Audit & Change",
    description:
      "Attributable changes, approval/evidence, versions/effective dates and administrative actions per product scope.",
  },
  {
    icon: "⚖️",
    title: "Shared Responsibility",
    description:
      "Customer remains responsible for policy, configuration, employment decisions and compliance obligations.",
  },
];

const LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "DPA", href: "/data-processing-addendum" },
  { label: "Subprocessors", href: "/subprocessors" },
];

export function TrustControlsSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Security, Privacy and Access
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Trust controls — part of the solution, not a late disclaimer.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/10 bg-sky-950 p-5">
                <span aria-hidden className="text-xl leading-none">
                  {card.icon}
                </span>
                <p className="mt-4 font-semibold">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4">
            <p className="text-sm font-semibold text-red-400">
              Professional Boundary
            </p>
            <p className="mt-2 text-xs leading-5 text-white/60">
              Zoiko HR provides software for workforce administration. It
              does not provide legal, tax, payroll, employment, compliance
              or other professional advice.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
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
