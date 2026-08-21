"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

type Stage = {
  label: string;
  /** Empty for stages whose approved copy is not yet supplied. */
  description?: string;
};

const STAGES: Stage[] = [
  {
    label: "Discover",
    description:
      "Scope, objectives, stakeholders, data, process, access, integrations, regions/entities, risks and decision ownership.",
  },
  { label: "Prepare" },
  { label: "Configure" },
  { label: "Migrate/connect" },
  { label: "Validate/launch" },
  { label: "Adopt & govern" },
];

export function ImplementationGovernanceSection() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Implementation &amp; Change Governance
          </span>
          <h2 className="mt-4 max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            A controlled path to standardized operations.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-slate-600">
            No fixed duration, staffing model or go-live commitment — scope
            depends on data, processes, access, integrations and testing.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Implementation stages"
            className="mt-8 flex flex-wrap gap-x-8 border-b border-slate-200"
          >
            {STAGES.map((item, i) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`stage-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`stage-panel-${i}`}
                onClick={() => setActive(i)}
                className={`-mb-px border-b-2 px-1 pb-3 text-sm transition-colors duration-150 ${
                  active === i
                    ? "border-primary font-semibold text-sky-950"
                    : "border-transparent text-slate-500 hover:text-sky-950"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            role="tabpanel"
            id={`stage-panel-${active}`}
            aria-labelledby={`stage-tab-${active}`}
            className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="font-bold text-sky-950">{stage.label}</p>
            {stage.description && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stage.description}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
