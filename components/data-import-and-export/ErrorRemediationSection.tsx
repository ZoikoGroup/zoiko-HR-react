"use client";

import { Container, Reveal } from "@/components/ui";

const REMEDIATION_ACTIONS = [
  {
    title: "Issue filters",
    desc: "Filter by category, object, field, severity, batch and owner — every count stays permission-safe.",
  },
  {
    title: "Record card",
    desc: "Synthetic, reference-safe identifiers show field, error, source and target expectation, with a suggested next step — never a speculative auto-fix.",
  },
  {
    title: "Bulk correction",
    desc: "Only for a deterministic, approved transformation, and only after a preview of the changed-field count passes validation.",
  },
  {
    title: "Manual correction",
    desc: "Requires an assigned role and purpose, and always records the actor and reason. Source authority is never silently changed.",
  },
  {
    title: "Exclude / skip",
    desc: "Only where policy allows it — the reason and impact are retained, and a skip never masquerades as a success.",
  },
  {
    title: "Revalidate",
    desc: "Runs against the exact corrected snapshot and the current approved rule versions, or explicitly pins a prior version.",
  },
  {
    title: "Retry",
    desc: "Creates a traceable attempt linked to the prior job, with duplicate prevention built in.",
  },
  {
    title: "Close",
    desc: "Only after every issue has a disposition and a reconciliation state. Unresolved items stay visible.",
  },
];

export function ErrorRemediationSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Fixing an error is never the same as hiding it.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every correction, skip or retry stays linked to its original issue and its own evidence trail.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REMEDIATION_ACTIONS.map((act, idx) => (
              <Reveal key={idx} delay={0.05 * idx + 0.12}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm hover:border-slate-300 transition-colors h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                      {act.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {act.desc}
                    </p>
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
