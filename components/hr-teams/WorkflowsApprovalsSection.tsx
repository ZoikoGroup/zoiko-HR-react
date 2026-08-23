import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const WORKFLOWS = [
  {
    title: "New starter onboarding",
    meta: "WF-DEF-012 · v3 · Global · Due: 18 Aug",
    status: "In progress",
    statusClass: "bg-sky-500/10 text-sky-600",
    accent: "border-l-sky-500",
  },
  {
    title: "Position change approval",
    meta: "WF-DEF-008 · v4 · All orgs · Due: 25 Aug",
    status: "Approval req.",
    statusClass: "bg-slate-200 text-slate-600",
    accent: "border-l-slate-400",
  },
  {
    title: "Separation workflow",
    meta: "WF-DEF-019 · v2 · APAC / JP · Due: Overdue",
    status: "Blocked",
    statusClass: "bg-red-100 text-red-500",
    accent: "border-l-red-400",
  },
];

export function WorkflowsApprovalsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Workflows and Approvals
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Structured forms, routing, decisions and evidence — no silent
            approvals.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            Human decision rights remain explicit. Automation may route or
            validate approved rules; no autonomous employment decisions.
          </p>
        </Reveal>

        <div className="mt-8 space-y-3">
          {WORKFLOWS.map((workflow, i) => (
            <Reveal key={workflow.title} delay={0.1 + i * 0.06}>
              <div
                className={`flex items-center justify-between gap-4 rounded-xl border-l-[3px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${workflow.accent}`}
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {workflow.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{workflow.meta}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-semibold ${workflow.statusClass}`}
                  >
                    {workflow.status}
                  </span>
                  <span aria-hidden className="text-xs text-slate-400">
                    ▼
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <Link
            href="/platform/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600"
          >
            Explore Workflows &amp; Approvals
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
