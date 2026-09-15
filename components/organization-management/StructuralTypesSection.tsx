"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TYPES = [
  {
    code: "ENT",
    name: "Entity",
    description: "Top-level structural unit. Taxonomy-controlled definition; do not infer legal or corporate-registration meaning without Product Truth approval.",
    fields: ["entity_id", "label", "state", "source", "effective_context"],
    warning: "Entity type and hierarchy rules require approved Organization Taxonomy entry before public use.",
  },
  {
    code: "BU",
    name: "Business Unit",
    description: "A business-aligned grouping beneath an entity, used to organize divisions or product lines.",
    fields: ["bu_id", "label", "parent_entity", "state", "source"],
    warning: "Business Unit rules require approved Organization Taxonomy entry before public use.",
  },
  {
    code: "DEPT",
    name: "Department",
    description: "A functional grouping beneath a business unit or entity, representing a working group with a defined purpose.",
    fields: ["dept_id", "label", "parent_path", "state", "source"],
    warning: "Department rules require approved Organization Taxonomy entry before public use.",
  },
  {
    code: "TEAM",
    name: "Team",
    description: "The smallest governed structural unit, typically aligned to a delivery group or squad.",
    fields: ["team_id", "label", "parent_path", "state", "source"],
    warning: "Team rules require approved Organization Taxonomy entry before public use.",
  },
  {
    code: "LOC",
    name: "Location (reference)",
    description: "A reference-only structural unit representing a physical or registered location; not itself a reporting unit.",
    fields: ["location_id", "label", "region", "state", "source"],
    warning: "Location reference rules require approved Organization Taxonomy entry before public use.",
  },
];

export function StructuralTypesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr] lg:items-stretch">
          <div className="flex flex-col">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Structural types
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Taxonomy-approved structural unit types
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Each type comes from the approved Organization Taxonomy
                Registry. Types not listed here are not represented.
                Expand a type to see its field contract and authority
                notes.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={30} className="mt-6 lg:mt-auto">
              <PlaceholderImage
                src="/images/organization-management/structural-types.png"
                alt="Team reviewing structural diagrams around a table"
                label="Taxonomy-approved types"
                className="h-[340px] w-[340px] max-w-full rounded-2xl"
              />
            </Reveal>
          </div>

          <div className="space-y-3">
            {TYPES.map((type, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={type.code} delay={0.06 + i * 0.05}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                          {type.code}
                        </span>
                        <span className="font-semibold text-ink">{type.name}</span>
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`h-4 w-4 flex-none text-ink/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 py-4">
                        <p className="text-sm leading-relaxed text-ink/60">{type.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {type.fields.map((field) => (
                            <span key={field} className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-ink/60">
                              {field}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs text-amber-900">
                          <span aria-hidden>⚠</span>
                          {type.warning}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
