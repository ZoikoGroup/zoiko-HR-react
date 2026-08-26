import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TASK_ROWS = [
  { task: "Send offer documentation", role: "HR Ops", due: "05 Mar", dependency: "Offer approved", evidence: "Signed offer", status: "Complete" },
  { task: "Provision system access", role: "IT Admin", due: "10 Mar", dependency: "Offer signed", evidence: "Access log", status: "In progress" },
  { task: "Complete right-to-work verification", role: "HR Admin", due: "12 Mar", dependency: "Start date", evidence: "Verified docs", status: "Pending" },
  { task: "Policy acknowledgment", role: "Employee", due: "14 Mar", dependency: "Access granted", evidence: "Acknowledgment", status: "Not started" },
];

const STATUS_STYLES: Record<string, string> = {
  Complete: "bg-emerald-100 text-emerald-700",
  "In progress": "bg-sky-100 text-sky-700",
  Pending: "bg-amber-100 text-amber-700",
  "Not started": "bg-slate-200 text-slate-500",
};

function StageCard({
  number,
  label,
  description,
  accentBar,
  accentText,
}: {
  number: string;
  label: string;
  description: string;
  accentBar: string;
  accentText: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-900/[0.03]">
      <div className={`h-1.5 w-full ${accentBar}`} />
      <div className="p-5">
        <span className={`text-xs font-semibold ${accentText}`}>
          Stage {number}
        </span>
        <p className="mt-1.5 truncate font-semibold text-ink">{label}</p>
        <p className="mt-1 truncate text-sm text-ink/60">{description}</p>
      </div>
    </div>
  );
}

export function OnboardingLifecycleSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 9 — Onboarding & lifecycle
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Coordinate employee journeys from preparation through
              transition.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Event-based lifecycle coordination with tasks, owners,
              dependencies, approvals, evidence, and effective dates —
              across every stage of the employee journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Reveal>
              <StageCard
                number="01"
                label="Preboarding"
                description="Documents, access setup, preparation tasks"
                accentBar="bg-primary"
                accentText="text-primary"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <StageCard
                number="04"
                label="Leave / Absence"
                description="Leave requests, approvals, return planning"
                accentBar="bg-amber-400"
                accentText="text-amber-500"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1} y={30}>
            <PlaceholderImage
              src="/images/global-hr/onboarding-lifecycle.png"
              alt="HR administrator supporting a new employee at a desk"
              label="Every stage, coordinated"
              className="h-full min-h-[200px] w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.04}>
              <StageCard
                number="03"
                label="Active Changes"
                description="Promotions, transfers, contract updates"
                accentBar="bg-violet-400"
                accentText="text-violet-500"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <StageCard
                number="06"
                label="Separation"
                description="Offboarding tasks, document retrieval, audit"
                accentBar="bg-slate-400"
                accentText="text-slate-500"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm shadow-slate-900/[0.03]">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-ink px-6 py-4">
              <div>
                <p className="font-semibold text-white">
                  Onboarding Event Plan — Alex Chen
                </p>
                <p className="text-xs text-white/50">
                  Eff. 12 Mar 2026 · Owner: HR Ops · 8 tasks remaining
                </p>
              </div>
              <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                In progress
              </span>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-sm text-ink/50">
                    <th className="px-6 py-3 font-medium">Task</th>
                    <th className="px-6 py-3 font-medium">Assigned Role</th>
                    <th className="px-6 py-3 font-medium">Due Date</th>
                    <th className="px-6 py-3 font-medium">Dependency</th>
                    <th className="px-6 py-3 font-medium">Evidence Required</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TASK_ROWS.map((row) => (
                    <tr
                      key={row.task}
                      className="transition-colors duration-150 hover:bg-slate-50"
                    >
                      <td className="px-6 py-3.5 font-medium text-ink">{row.task}</td>
                      <td className="px-6 py-3.5 text-ink/60">{row.role}</td>
                      <td className="px-6 py-3.5 text-ink/60">{row.due}</td>
                      <td className="px-6 py-3.5 text-ink/40">{row.dependency}</td>
                      <td className="px-6 py-3.5 text-ink/40">{row.evidence}</td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/onboarding-lifecycle"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Explore Onboarding & Lifecycle
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
