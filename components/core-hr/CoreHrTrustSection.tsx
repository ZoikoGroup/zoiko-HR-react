import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Security & Privacy",
    description:
      "Access controls, data protection, secure development, incident management, and approved security practices.",
    href: "/security-privacy",
    linkLabel: "Security & Privacy",
    iconBg: "bg-primary-light",
    iconColor: "text-primary",
    linkColor: "text-primary hover:text-primary-dark",
  },
  {
    title: "Accessibility",
    description:
      "WCAG 2.2 AA commitment, conformance information, known limitations, and an accessibility feedback route.",
    href: "/accessibility",
    linkLabel: "Accessibility Statement",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    linkColor: "text-emerald-600 hover:text-emerald-700",
  },
  {
    title: "Data Processing",
    description:
      "DPA request route, subprocessor register, retention schedules, transfer mechanisms, and customer responsibilities.",
    href: "/data-processing-addendum",
    linkLabel: "Data Processing",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    linkColor: "text-violet-600 hover:text-violet-700",
  },
  {
    title: "AI Governance",
    description:
      "Human review requirements, permission controls, transparency, logging, and prohibited AI uses. Subject to approved capability.",
    href: "/ai-governance",
    linkLabel: "AI Governance",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    linkColor: "text-sky-600 hover:text-sky-700",
  },
  {
    title: "Operational Trust",
    description:
      "Documentation, Product Updates, Service Status, Contact Support, and Implementation Guide routes.",
    href: "/documentation",
    linkLabel: "Documentation",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    linkColor: "text-amber-600 hover:text-amber-700",
  },
];

function CardIcon({ title, className }: { title: string; className: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", className };
  switch (title) {
    case "Security & Privacy":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "Accessibility":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="8" r="1.4" fill="currentColor" />
          <path d="M7 11h10M12 11v4l-2.5 4M12 15l2.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "Data Processing":
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10 12h6M10 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "AI Governance":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M14.7 6.3a3.5 3.5 0 00-4.9 4.9L4 17v3h3l5.8-5.8a3.5 3.5 0 004.9-4.9l-2.6 2.6-2-2 2.6-2.6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function CoreHrTrustSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 24 — Trust
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built to support diligence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Direct pathways for every trust and procurement requirement.
              No unverified certification marks.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  <CardIcon title={card.title} className={`h-5 w-5 ${card.iconColor}`} />
                </span>
                <p className="mt-4 font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className={`group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${card.linkColor}`}
                >
                  {card.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-center text-sm leading-relaxed text-ink/50">
              Zoiko HR provides software for workforce administration. It
              does not provide legal, tax, payroll, employment, compliance,
              or other professional advice and does not guarantee compliance
              with any law. Customers remain responsible for their policies,
              employment decisions, configurations, and compliance
              obligations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.46}>
          <div className="mt-8 text-center">
            <Link
              href="/trust-center"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Visit the Trust Center
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
