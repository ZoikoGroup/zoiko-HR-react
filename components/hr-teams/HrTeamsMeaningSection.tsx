import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    title: "Records",
    body: "Structured, source-aware, effective-dated employee and employment information.",
    accent: "border-l-sky-500",
    titleTone: "text-sky-500",
  },
  {
    title: "Workflows",
    body: "Forms, routing, responsibility, approvals, deadlines, exceptions and evidence.",
    accent: "border-l-primary",
    titleTone: "text-primary",
  },
  {
    title: "Employee services",
    body: "Permissioned requests, ownership, confidentiality, status and resolution.",
    accent: "border-l-emerald-400",
    titleTone: "text-emerald-500",
  },
  {
    title: "Reporting",
    body: "Defined, permission-aware operational views with scope and data-quality context.",
    accent: "border-l-violet-400",
    titleTone: "text-violet-500",
  },
];

const LINKS = [
  { label: "View Employee Records", href: "/employee-records" },
  { label: "Explore Workflows & Approvals", href: "/workflows-approvals" },
  { label: "Explore Global HR Management", href: "/global-hr-management" },
];

export function HrTeamsMeaningSection() {
  return (
    <section className="border-t border-black/5 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            What Is Zoiko HR for HR Teams?
          </span>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_384px]">
          <div>
            <Reveal delay={0.08}>
              <div className="max-w-[820px] rounded-2xl border-l-4 border-sky-500 bg-white px-8 py-7 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
                <p className="leading-7 text-slate-900">
                  Zoiko HR for HR Teams is a role-oriented solution pathway for
                  teams that administer workforce records, HR workflows,
                  reporting, policy and document operations, and employee
                  services. The experience keeps ownership, permissions,
                  effective dates, approvals, exceptions and evidence visible.
                  Access remains role- and scope-dependent, and Zoiko HR does
                  not replace legal, tax, payroll, employment or compliance
                  advice.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.12 + i * 0.06}>
                  <div
                    className={`h-full rounded-xl border-l-[3px] bg-white py-5 pl-6 pr-5 shadow-[0_2px_14px_rgba(0,0,0,0.08)] ${pillar.accent}`}
                  >
                    <p
                      className={`text-xs font-semibold leading-5 ${pillar.titleTone}`}
                    >
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16} y={36} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/what-is.png"
              alt="Colleagues celebrating around a table beside an ideas board"
              label="Role-oriented HR pathway"
              className="h-full min-h-72 w-full rounded-xl border-l-[3px] border-amber-400 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-600"
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
