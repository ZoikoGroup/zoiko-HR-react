import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    number: "01",
    title: "Self-guided",
    body: "Browse all chapters or choose a role-oriented path without surrendering personal data.",
  },
  {
    number: "02",
    title: "Representative",
    body: "Screens use synthetic data and source-governed product concepts — not live customer data.",
  },
  {
    number: "03",
    title: "Permission-aware",
    body: "Role previews show allowed and restricted actions with explicit permission boundaries.",
  },
];

const LINKS = [
  ["Explore Platform Overview", "/platform"],
  ["Open Resource Center", "/resource-center"],
  ["Visit Trust Center", "/trust-center"],
];

export function WhatThisTourIsSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What This Tour Is
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            What is the Zoiko HR Product Tour?
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <p className="leading-7 text-slate-700">
                The Zoiko HR Product Tour is a{" "}
                <strong className="font-semibold text-slate-900">
                  no-signup, self-guided walkthrough
                </strong>{" "}
                of representative product experiences using{" "}
                <strong className="font-semibold text-slate-900">
                  synthetic example data
                </strong>
                . It explains how approved Zoiko HR concepts such as employee
                records, organization structures, lifecycle events, approvals,
                role-based access, operational reporting and integrations fit
                together. It is not a live customer tenant, contract, security
                artifact or guarantee of plan, integration or jurisdiction
                availability.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/product-tour/what-this-tour-is.png"
              alt="Two colleagues reviewing notes over coffee"
              label="Product tour walkthrough"
              className="h-full min-h-64 w-full rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={0.1 + i * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-black/10 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <p className="font-heading text-xl font-extrabold text-primary">
                  {pillar.number}
                </p>
                <p className="mt-2.5 font-heading font-bold text-slate-900">
                  {pillar.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-6 max-w-[860px] rounded-[10px] border border-red-400/20 bg-red-400/5 px-5 py-3.5">
            <p className="text-xs font-semibold text-red-700">Does not claim</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Universal country availability, automatic legal interpretation,
              legal/tax/payroll/employment advice, guaranteed compliance,
              guaranteed payroll correctness, or complete localization for every
              market. Product availability depends on approved scope, plan,
              configuration, integrations and jurisdiction.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
            {LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {label}
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
