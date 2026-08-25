import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    icon: "◎",
    title: "Authority",
    body: "Each field and event has an approved source, accountable owner and explicit direction. No silent last-write-wins.",
  },
  {
    icon: "◷",
    title: "Timing",
    body: "Effective dates, pay periods and payroll cutoffs remain visible and actionable before release.",
  },
];

const LINKS = [
  { label: "Explore Integrations", href: "/integrations" },
  { label: "View Workflows and Approvals", href: "/workflows-approvals" },
  { label: "Review Employee Records", href: "/employee-records" },
];

export function AeoAnswerSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 2 — AEO Direct Answer
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            What does Connect HR, Time and Payroll mean?
          </h2>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <Reveal delay={0.08}>
              <div className="max-w-[800px] rounded-xl border border-sky-500/20 bg-sky-500/5 px-5 py-5 sm:px-7 sm:py-6">
                <p className="leading-7 text-slate-700">
                  Zoiko HR Connect HR, Time &amp; Payroll is a solution pathway
                  for coordinating approved HR information, time-related context
                  and payroll processes through explicit source ownership,
                  permissions, effective dates, approvals, handoff status,
                  exceptions and reconciliation. It does not mean every system
                  owns the same data or that an upstream approval proves payroll
                  was calculated, paid, filed or financially reconciled.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.16 + i * 0.06}>
                  <div className="h-full rounded-xl border border-black/5 bg-slate-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                    <div className="flex size-10 items-center justify-center rounded-[10px] bg-sky-500/10 text-xl leading-8 text-sky-500">
                      {pillar.icon}
                    </div>
                    <h3 className="mt-3.5 text-xs font-semibold leading-5 text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/connect-hr/aeo-answer.png"
              alt="Two colleagues discussing HR records across a table"
              label="Coordinated HR, time and payroll context"
              className="aspect-square w-full rounded-xl border border-black/5 bg-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold leading-5 text-sky-500 hover:text-sky-600"
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
