"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BoundaryRow } from "./shared";

const TABS = [
  {
    id: "conflict",
    label: "Conflict",
    caption: "Conflict — property authority determines the winner",
    rows: [
      { label: "Property", value: "Timesheet hours — Tue 2025-09-02" },
      { label: "ZoikoTime assertion", value: "8.5 hours (source: TS-2025-09-02-v1)" },
      { label: "Zoiko HR received", value: "7.5 hours (cached ref from prior exchange)" },
      { label: "Authority rule", value: "ZoikoTime — timesheet authority for this property" },
      {
        label: "Resolution",
        value: "ZoikoTime value applied; prior ref preserved in conflict log",
      },
      {
        label: "No last-write-wins",
        value: "Both values retained until authority resolution recorded",
      },
    ],
  },
  {
    id: "correction",
    label: "Correction",
    caption: "Correction — append or supersede, never silent overwrite",
    rows: [
      { label: "Property", value: "Timesheet hours — Tue 2025-09-02" },
      { label: "Prior version", value: "TS-2025-09-02-v1 (retained, read-only)" },
      { label: "Correction", value: "TS-2025-09-02-v2 (supersedes v1)" },
      { label: "Lineage", value: "v2 links to v1; prior evidence preserved" },
      {
        label: "Downstream effect",
        value: "Authorized consumers notified; no retroactive rewrite",
      },
      {
        label: "Effective period",
        value: "Correction carries its own effective and recorded timestamps",
      },
    ],
  },
  {
    id: "reconciliation",
    label: "Reconciliation",
    caption: "Reconciliation — closure requires defined criteria",
    rows: [
      { label: "Scope", value: "Exchange window — 2025-09-01 to 2025-09-07" },
      { label: "Phase state", value: "Compare complete; review outstanding" },
      { label: "Open items", value: "2 property-level differences pending authority" },
      {
        label: "Closure criteria",
        value: "All differences resolved or explicitly accepted",
      },
      {
        label: "Phase ≠ closure",
        value: "Phase completion does not close the reconciliation",
      },
      { label: "Evidence", value: "Prior states retained for authorized review" },
    ],
  },
];

export function ConflictResolutionSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Conflict, correction & reconciliation"
          title="No last-write-wins — source authority, version lineage and closure criteria are explicit"
        >
          Conflict resolution uses property-level authority. Corrections
          append/supersede and preserve prior evidence. Reconciliation closure
          requires defined criteria — phase completion is not closure.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div role="tablist" aria-label="Resolution views" className="mt-8 flex flex-wrap gap-2">
            {TABS.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-full border px-5 py-2 text-xs font-medium capitalize leading-5 transition-colors ${
                  active === i
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-3">
                <p className="text-sm font-semibold text-slate-950">
                  {tab.caption}
                </p>
                <p className="whitespace-nowrap text-[10px] font-medium text-gray-400">
                  Synthetic data
                </p>
              </div>
              <div className="p-5">
                {tab.rows.map((row) => (
                  <BoundaryRow key={row.label} {...row} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="h-full">
            <PlaceholderImage
              src="/images/zoikotime/conflict-resolution.webp"
              alt="Colleagues resolving a discrepancy at a whiteboard"
              label="Conflict resolution"
              className="aspect-square w-full rounded-xl border border-red-600/20 bg-red-600/5 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
