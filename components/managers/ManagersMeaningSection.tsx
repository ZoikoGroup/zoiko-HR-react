import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    number: "01",
    title: "Assigned work",
    body: "Show only actions and context the current user is authorized to handle — not everything about the team.",
    accent: "border-r-4 border-r-primary",
    badge: "border-primary bg-primary/10 text-primary",
  },
  {
    number: "02",
    title: "Reviewable decisions",
    body: "Evidence, current/proposed values, conflicts and co-approvers visible before decision controls appear.",
    accent: "border-r-4 border-r-indigo-500",
    badge: "border-indigo-500 bg-indigo-500/10 text-indigo-500",
  },
];

const LINKS = [
  { label: "Workflows & Approvals", href: "/workflows-approvals" },
  { label: "Employee Records", href: "/employee-records" },
  { label: "Solutions Overview", href: "/solutions" },
];

export function ManagersMeaningSection() {
  return (
    <section className="border-t border-black/5 bg-slate-100 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What is Zoiko HR for Managers?
          </span>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_368px]">
          <div>
            <Reveal delay={0.08}>
              <div className="max-w-[880px] rounded-xl border-l-4 border-primary bg-white px-7 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.09)]">
                <p className="leading-7 text-slate-900">
                  Zoiko HR for Managers is a role-oriented solution pathway for
                  people managers and delegated approvers who need to complete
                  assigned approvals, team actions and authorized
                  administration. It provides the minimum necessary team
                  context, clear decision evidence, effective dates, deadlines,
                  delegation and escalation while keeping access role- and
                  scope-dependent. Manager status alone does not grant
                  unrestricted employee-data or administrative access.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.number} delay={0.14 + i * 0.08}>
                  <div
                    className={`h-full rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] ${pillar.accent}`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex size-6 items-center justify-center rounded-full border text-[10px] font-semibold ${pillar.badge}`}
                      >
                        {pillar.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-900">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.18} y={36} className="h-full">
            <PlaceholderImage
              src="/images/managers/what-is.png"
              alt="A manager reviewing a plan at a whiteboard with two colleagues"
              label="Role-oriented manager pathway"
              className="h-full min-h-72 w-full rounded-xl border-r-4 border-r-violet-400 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-8 text-xs leading-4 text-slate-400">
            Specific actions and fields depend on approved product scope, role
            configuration, plan, contract, integration and jurisdiction.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-3 flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark"
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
