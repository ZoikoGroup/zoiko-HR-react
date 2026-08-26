import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const EXCEPTIONS = [
  "Missing required source — 3 fields",
  "Approvals overdue — 2 requests",
  "Relationship conflicts — 1 pair",
];

export function WorkflowAuthoritySection() {
  return (
    <section className="bg-sky-950 py-20 text-white">
      <Container>
        <Reveal className="max-w-[700px]">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Product Proof
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold">
            Routing and approval authority vary by entity scope.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-300">
            Automation never replaces required human or professional authority,
            and cannot silently skip a required step.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <div className="mt-8 rounded-xl border border-blue-950 bg-slate-900 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="text-sm font-bold">
                Workflow instance WF-6014 · Configuration override request v2 ·
                Acme DE GmbH
              </p>
              <span className="rounded-md bg-yellow-500/20 px-2.5 py-1 text-xs font-semibold text-yellow-400">
                Approval pending
              </span>
            </div>
            <p className="mt-2.5 text-xs leading-5 text-slate-400">
              Owner: Entity Admin · Reviewer role: Portfolio Owner · Due state:
              Within window · Last activity: Aug 19, 2026
            </p>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {EXCEPTIONS.map((exception, i) => (
            <Reveal key={exception} delay={0.16 + i * 0.06}>
              <div className="h-full rounded-lg border border-blue-950 bg-slate-900/60 px-4 py-3.5">
                <p className="text-xs text-slate-300">{exception}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <Link
            href="/workflows"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
          >
            See workflow &amp; approval evidence
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
