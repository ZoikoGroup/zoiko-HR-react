import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const PILLARS = [
  {
    number: "01",
    title: "Structured information",
    description:
      "Consistent employee, position, organization, document, and lifecycle records.",
  },
  {
    number: "02",
    title: "Controlled operations",
    description:
      "Roles, permissions, approvals, effective dates, ownership, evidence, and auditability.",
  },
  {
    number: "03",
    title: "Connected experiences",
    description:
      "Employee, manager, HR, reporting, integration, implementation, and support pathways.",
  },
];

const EXPLORE_LINKS = [
  { label: "Explore Core HR", href: "/platform/core-hr" },
  { label: "Explore Global HR Management", href: "#entity-portfolio" },
  { label: "View Employee Records", href: "/platform/employee-records" },
];

export function WhatIsZoikoHrSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What is Zoiko HR?
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-900/[0.03] sm:p-10">
            <p className="text-lg leading-relaxed text-ink/70">
              Zoiko HR is a global HR management platform for organizing
              employee and organizational information, coordinating
              onboarding and workforce changes, routing approvals,
              supporting authorized employee and manager access, and
              connecting people operations.
            </p>
            <p className="mt-4 text-sm text-ink/40">
              Specific capabilities depend on the approved plan, contract,
              configuration, integration, and jurisdiction.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.12 + i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <span className="text-xs font-semibold text-primary">
                  {pillar.number}
                </span>
                <p className="mt-2 font-semibold text-ink">{pillar.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
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
