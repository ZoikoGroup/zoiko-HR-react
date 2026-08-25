import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DETAILS = [
  ["Action", "Position change approval"],
  ["Subject", "A. Mwangi"],
  ["Scope", "EMEA Operations GmbH"],
  ["Requester", "HR Admin — J. Bertollo"],
  ["Source", "Workflow — Band Change — v3.1"],
  ["Stage", "Pending manager approval (Stage 2 of 3)"],
  ["Co-approver required", "HR Leader — required (Band 5+)"],
  ["Effective date", "01 Sep 2026"],
  ["Deadline", "Tomorrow 17:00 CEST"],
];

const DECISIONS = [
  "Approve",
  "Approved with modification",
  "Reject",
  "Request information",
  "Delegate",
  "Escalate",
];

export function ApprovalsReviewSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Approvals and Action Review
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Context before decision controls — every time, with no exceptions.
          </h2>
          <p className="mt-4 max-w-[600px] leading-6 text-slate-400">
            Decision controls appear only after current/proposed values, reason,
            evidence, conflicts and co-approvers are available. Zoiko HR records
            configured human decisions — it does not autonomously determine
            employment/legal outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[700px] rounded-lg border border-red-400/20 bg-red-400/5 px-3.5 py-2">
            <p className="text-xs leading-4 text-slate-400">
              Zoiko HR presents context and records configured human decisions.
              It does not autonomously determine employment, legal, tax, payroll
              or compliance outcomes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <div className="relative mt-10 pt-5">
            <span className="absolute left-6 top-0 z-10 rounded-full bg-primary px-3.5 py-1 text-[10px] font-semibold text-white shadow-[0_4px_12px_rgba(49,94,251,0.25)]">
              Action Review — APR-2026-0814
            </span>

            <div className="rounded-2xl border border-white/10 bg-sky-950 p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Request details
                  </span>
                  <dl className="mt-3 space-y-1.5">
                    {DETAILS.map(([term, value]) => (
                      <div key={term} className="flex flex-wrap gap-3">
                        <dt className="min-w-36 text-xs font-semibold text-slate-500">
                          {term}
                        </dt>
                        <dd className="text-xs leading-4 text-slate-300">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <PlaceholderImage
                  src="/images/managers/approvals.png"
                  alt="A manager reviewing an approval on a laptop"
                  label="Action review"
                  className="h-64 w-full rounded-[10px] bg-white lg:h-full"
                />
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold text-slate-500">
                  Permitted decisions — select one
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {DECISIONS.map((decision) => (
                    <span
                      key={decision}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-400"
                    >
                      {decision}
                    </span>
                  ))}
                </div>
                <Link
                  href="/workflows-approvals"
                  className="group mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-white"
                >
                  Request information
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <Link
            href="/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
          >
            Explore Workflows and Approvals
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
