import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const RESOURCES = [
  { title: "Trust Center", description: "Verified security, privacy, governance, and assurance information.", linkLabel: "Visit Trust Center", href: "/trust-center" },
  { title: "Security & Privacy", description: "Access controls, data protection, secure development, and incident management.", linkLabel: "View Security & Privacy", href: "/security-privacy" },
  { title: "AI Governance", description: "Human review, permission controls, transparency, logging, and prohibited uses.", linkLabel: "View AI Governance", href: "/ai-governance" },
  { title: "Accessibility", description: "Commitment, conformance information, limitations, and feedback route.", linkLabel: "View Accessibility", href: "/accessibility" },
  { title: "DPA & Subprocessors", description: "Approved data-processing route and current approved subprocessors.", linkLabel: "View DPA", href: "/data-processing-addendum" },
  { title: "Service Status", description: "Current and historical service availability and product changes.", linkLabel: "View Status", href: "/service-status" },
];

export function TrustProcurementSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trust & procurement
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Resources for security, legal, and procurement evaluation.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Commercial diligence does not imply certification,
              compliance, residency, hosting, support, or availability.
              Each assurance route is source-governed and does not
              borrow credibility from pricing design.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-semibold text-ink">{resource.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {resource.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
            <p className="text-sm leading-relaxed text-emerald-900">
              <span className="font-semibold">Professional boundary:</span>{" "}
              Zoiko HR provides software for workforce administration. It
              does not provide legal, tax, payroll, employment,
              compliance, procurement, accounting, or other professional
              advice and does not guarantee compliance with any law.
              Customers remain responsible for their policies, employment
              decisions, configurations, and compliance obligations.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
