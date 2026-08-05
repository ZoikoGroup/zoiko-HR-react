import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const CARDS = [
  {
    title: "Security & Privacy",
    description:
      "Access controls, data protection, secure development, incident management, and approved security practices.",
    href: "/security-privacy",
    linkLabel: "Security & Privacy",
  },
  {
    title: "AI Governance",
    description:
      "Human review, permission controls, transparency, logging, and prohibited AI uses. No autonomous employment decisions.",
    href: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Accessibility",
    description:
      "WCAG 2.2 AA commitment, conformance information, known limitations, and feedback route.",
    href: "/accessibility",
    linkLabel: "Accessibility",
  },
  {
    title: "Data Processing",
    description:
      "Approved DPA route, current subprocessors, change notification, and purpose-limitation controls.",
    href: "/data-processing-addendum",
    linkLabel: "Data Processing Addendum",
  },
];

export function SecurityPrivacyTrustSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 15 — Security, privacy & trust
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Governed workforce information with clear accountability.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
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

        <Reveal delay={0.36}>
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-relaxed text-amber-900">
              <span className="font-semibold">Professional boundary:</span>{" "}
              Zoiko HR provides software for workforce administration. It
              does not provide legal, tax, payroll, employment, compliance,
              or other professional advice and does not guarantee compliance
              with any law. Customers remain responsible for their
              policies, employment decisions, configurations, and
              compliance obligations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button href="/trust-center">Visit the Trust Center</Button>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm">
              <Link
                href="/security-reporting"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Security Reporting
              </Link>
              <Link
                href="/subprocessors"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Subprocessors
              </Link>
              <Link
                href="/data-processing-addendum"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Data Processing Addendum
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
