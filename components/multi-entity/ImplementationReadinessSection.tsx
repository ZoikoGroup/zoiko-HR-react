"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

/**
 * The design shows this tab set with only the "Discover" panel open, so only
 * that description is approved copy. The remaining eight descriptions are
 * drafts pending approval and stay in the same register as the approved one.
 */
const STAGES = [
  {
    label: "Discover",
    body: "Scope, objectives, stakeholders, entities, risks and decision ownership.",
  },
  {
    label: "Model",
    body: "Entity and unit concepts, relationships, owners, effective dates and status.",
  },
  {
    label: "Map sources",
    body: "Existing records, authoritative sources, gaps and reconciliation owners.",
  },
  {
    label: "Define roles/access",
    body: "Roles, entity scopes, delegation rules, separation of duties and approvals.",
  },
  {
    label: "Design configuration",
    body: "Shared baselines, approved overrides, versions and review requirements.",
  },
  {
    label: "Connect systems",
    body: "Participating entities, field authority, conflict rules and exception handling.",
  },
  {
    label: "Migrate/validate",
    body: "Data loads, validation, reconciliation and evidence before any cutover.",
  },
  {
    label: "Rollout",
    body: "Entity or unit waves, readiness criteria, owners and go-live decisions.",
  },
  {
    label: "Stabilize",
    body: "Exception review, access reviews, ownership handover and ongoing evidence.",
  },
];

export function ImplementationReadinessSection() {
  const [active, setActive] = useState(STAGES[0].label);
  const stage = STAGES.find((item) => item.label === active) ?? STAGES[0];

  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[760px]">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Evaluation, Implementation &amp; Change Readiness
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold text-sky-950">
            Modeling and governing a multi-entity rollout, realistically.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            No fixed duration, migration effort, or &quot;zero downtime&quot;
            claim without approved services evidence.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            role="tablist"
            aria-label="Implementation stages"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-200"
          >
            {STAGES.map((item) => {
              const selected = item.label === active;
              return (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(item.label)}
                  className={`-mb-px border-b-2 px-1 pb-2.5 text-sm transition-colors duration-150 ${
                    selected
                      ? "border-primary font-semibold text-sky-950"
                      : "border-transparent text-slate-500 hover:text-sky-950"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-sky-950">{stage.label}</p>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">
              {stage.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
