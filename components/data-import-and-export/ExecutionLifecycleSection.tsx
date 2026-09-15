"use client";

import { Container, Reveal } from "@/components/ui";

const LAYERS = [
  {
    layer: "Preparation",
    chips: ["Draft", "Source ready", "Mapping required", "Validation running", "Validation blocked", "Ready for review"],
  },
  {
    layer: "Authorization",
    chips: ["Confirmation required", "Approval required", "Authorized", "Authorization expired", "Permission changed"],
  },
  {
    layer: "Execution",
    chips: ["Queued", "Running", "Paused (if supported)", "Cancel requested", "Canceled", "Failed before/during execution"],
  },
  {
    layer: "Local outcome",
    chips: ["No changes", "Completed local", "Partial local", "Failed local"],
  },
  {
    layer: "Reconciliation",
    chips: ["Reconcile pending", "Conflict", "Partial reconciled", "Reconciled", "Unknown"],
  },
  {
    layer: "Recovery",
    chips: ["Rollback available", "Restore available", "Compensating correction", "Manual remediation", "Downstream non-reversible"],
  },
  {
    layer: "Closure",
    chips: ["Closed — no exceptions", "Closed — accepted exceptions", "Superseded"],
  },
];

export function ExecutionLifecycleSection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                A job is never just done or failed.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Preparation, authorization, execution, local outcome, reconciliation, recovery and closure are tracked as seven separate layers — never one green completed state.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {LAYERS.map((item, idx) => (
              <Reveal key={idx} delay={0.05 * idx + 0.12}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-4">
                  <span className="w-44 text-sky-950 text-sm font-bold font-['IBM_Plex_Sans'] shrink-0">
                    {item.layer}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 flex-1">
                    {item.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1.5 bg-slate-100 rounded-md border border-slate-200 text-slate-600 text-xs font-normal font-['IBM_Plex_Sans']"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
