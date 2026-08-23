import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    title: "Security and Privacy",
    bar: "bg-sky-500",
    dot: "bg-sky-500",
    items: [
      "Access controls and data protection",
      "Secure development practices",
      "Incident management",
      "Approved architecture and practices",
    ],
  },
  {
    title: "Access Governance",
    bar: "bg-primary",
    dot: "bg-primary",
    items: [
      "Role/scope/sensitivity/state/purpose-aware access",
      "Review, delegation and audit",
      "Restricted states and field-level control",
      "Permission changes are audited",
    ],
  },
  {
    title: "Operational Trust",
    bar: "bg-emerald-400",
    dot: "bg-emerald-400",
    items: [
      "Service Status dashboard",
      "Product Updates",
      "Documentation",
      "Support routes direct — not sales-gated",
    ],
  },
  {
    title: "Accessibility",
    bar: "bg-violet-400",
    dot: "bg-violet-400",
    items: [
      "WCAG 2.2 AA target",
      "Known limitations documented",
      "Support and feedback routes",
      "Localized experience",
    ],
  },
];

const LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "DPA", href: "/dpa" },
  { label: "Subprocessors", href: "/subprocessors" },
  { label: "Contact Support", href: "/contact-support" },
];

export function TrustGovernanceSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Trust, Privacy, Security and AI Governance
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Direct diligence routes and explicit responsible-use boundaries.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            Only approved and current trust claims render. No unverified badges
            or compliance guarantees.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,660px)_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.08 + i * 0.06}>
                <div className="h-full overflow-hidden rounded-xl bg-slate-900">
                  <div className={`h-1 w-full ${card.bar}`} />
                  <div className="p-5">
                    <p className="text-sm font-semibold">{card.title}</p>
                    <ul className="mt-3 space-y-2">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-400"
                        >
                          <span
                            aria-hidden
                            className={`mt-1.5 size-1 shrink-0 rounded-full ${card.dot}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/trust.png"
              alt="Colleagues reviewing work at a desk"
              label="Trust and governance"
              className="h-full min-h-72 w-full rounded-xl border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <div className="mt-8 max-w-[720px] rounded-lg border border-red-400/30 bg-red-400/5 px-5 py-3.5">
            <p className="text-xs font-semibold text-red-400">
              Professional boundary
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Zoiko HR provides software for workforce administration. It does
              not provide legal, tax, payroll, employment, immigration,
              compliance or other professional advice and does not guarantee
              compliance with any law or regulation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-6 flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-white"
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
