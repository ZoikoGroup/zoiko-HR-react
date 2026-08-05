import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const EXPLORE_LINKS = [
  { label: "View Employee Records", href: "/platform/employee-records" },
  { label: "Explore Global HR Management", href: "/platform/global-hr-management" },
  { label: "Explore Workflows & Approvals", href: "/platform/workflows-approvals" },
  { label: "Integrations Overview", href: "/integrations" },
  { label: "Visit Trust Center", href: "/trust-center" },
];

const CAPABILITIES = [
  {
    number: "01",
    title: "Structure",
    description:
      "Defined objects, fields, relationships, ownership, source, and validation for every workforce record.",
    bg: "bg-primary-light",
  },
  {
    number: "02",
    title: "Control",
    description:
      "Roles, organization scope, field sensitivity, approvals, effective dates, and full audit trails.",
    bg: "bg-emerald-50",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Self-service, workflows, reporting, integrations, implementation pathways, and ongoing support.",
    bg: "bg-violet-50",
  },
];

export function WhatIsCoreHrSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm shadow-slate-900/[0.03] sm:p-10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-400 to-emerald-400"
            />

            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  AEO definition
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  What is Core HR?
                </h2>
                <p className="mt-4 text-ink/60">
                  Zoiko HR Core HR is the employee and organizational data
                  foundation for structuring workforce records, employment
                  relationships, positions, teams, entities, locations,
                  documents, permissions, and effective-dated changes. It
                  supports authorized employee, manager, HR, reporting, and
                  integration experiences.
                </p>
                <p className="mt-4 text-xs text-ink/40">
                  Exact capabilities depend on approved product scope, plan,
                  contract, configuration, and jurisdiction.
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  Explore
                </span>
                <div className="mt-3 divide-y divide-slate-100">
                  {EXPLORE_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between py-2.5 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      {link.label}
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CAPABILITIES.map((capability, i) => (
            <Reveal key={capability.title} delay={0.1 + i * 0.08}>
              <div
                className={`h-full rounded-2xl ${capability.bg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-900/5`}
              >
                <span className="text-xs font-semibold text-primary">
                  {capability.number}
                </span>
                <p className="mt-2 font-semibold text-ink">
                  {capability.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {capability.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
