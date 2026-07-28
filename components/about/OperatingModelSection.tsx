import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ITEMS = [
  {
    problem: "Workforce records are scattered or inconsistent.",
    detail:
      "Structured employee profiles, effective-dated information, documents, organizational relationships, and controlled change history.",
    outcome:
      "More dependable workforce information and clearer ownership.",
  },
  {
    problem: "HR work relies on email, spreadsheets, and memory.",
    detail:
      "Configurable forms, assignments, approvals, notifications, delegations, escalations, and completion evidence.",
    outcome: "More repeatable processes and fewer invisible handoffs.",
  },
  {
    problem: "Global standards conflict with local requirements.",
    detail:
      "Common organization and data structures with jurisdiction-, entity-, or location-specific configuration.",
    outcome:
      "Global consistency without pretending every operating environment is identical.",
  },
  {
    problem: "Employees and managers depend on HR for routine actions.",
    detail:
      "Permission-controlled self-service, requests, tasks, documents, policies, leave, and approvals.",
    outcome: "Faster access and reduced administrative bottlenecks.",
  },
  {
    problem:
      "HR, time, payroll, documents, identity, and reporting are disconnected.",
    detail: "Defined integrations and permission-controlled information flows.",
    outcome: "Less avoidable re-entry and better cross-process continuity.",
  },
  {
    problem: "Leaders lack current workforce and process visibility.",
    detail:
      "Permission-sensitive organizational views, lifecycle activity, outstanding actions, and configurable reporting.",
    outcome:
      "Better-informed oversight without indiscriminate exposure of personal information.",
  },
];

export function OperatingModelSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              From problem to operating model
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Replace fragmented administration with governed people
              operations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR does not treat every HR challenge as a separate
              application. It creates a common operating foundation in
              which workforce information, responsibilities, approvals,
              documents, employee access, reporting, and integrations can
              work together under defined permissions.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 space-y-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.problem} delay={i * 0.06}>
              <div className="group flex gap-4 border-l-2 border-slate-200 py-4 pl-5 transition-colors duration-200 hover:border-primary">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary"
                />
                <div>
                  <p className="font-semibold text-ink">{item.problem}</p>
                  <p className="mt-1.5 text-sm text-ink/60">{item.detail}</p>
                  <p className="mt-1.5 text-sm font-medium text-emerald-600">
                    → {item.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <Link
            href="/platform"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            See How Zoiko HR Works
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
