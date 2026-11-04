"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, ArrowItem, RefTable } from "./shared";

/**
 * The design publishes the requirement list for stage 01 only. The lists for
 * 02–04 are assembled from claims this page already makes elsewhere — the
 * authentication panel above and the identity-mapping and access-decision rows
 * of the table below — so no new capability claim is introduced.
 */
const STAGES = [
  {
    id: "01",
    name: "Identity source",
    numberClass: "text-primary",
    question: "Which external/ecosystem subject or account?",
    authority: "Identity Relationship Registry",
    boundary:
      "Source identity does not prove employment, organization or manager status.",
    requires: [
      "Stable subject/account class (not email/name assumption)",
      "Provider reference — source-controlled",
      "Tenant / organization / environment",
      "Owner and currentness",
      "State: linked, unlinked, conflict, stale",
    ],
  },
  {
    id: "02",
    name: "Authentication",
    numberClass: "text-violet-600",
    question: "Has identity been proved under current configuration?",
    authority: "Authentication Config / Runtime State",
    boundary:
      "Authentication proves identity. It does not grant authorization or HR authority.",
    requires: [
      "Current configuration required",
      "Version and scope explicit",
      "Test pass ≠ production activation",
      "Does not establish HR/business authority",
    ],
  },
  {
    id: "03",
    name: "Identity link",
    numberClass: "text-sky-700",
    question: "Which Zoiko HR identity or account?",
    authority: "Identity Mapping Registry",
    boundary:
      "Identity link does not create employment, manager or payroll authority.",
    requires: [
      "Deterministic approved identifiers only",
      "No fuzzy name/email/domain auto-link",
      "External attributes are identity signals, not HR facts",
      "State: linked, unlinked, conflict, stale",
    ],
  },
  {
    id: "04",
    name: "Access decision",
    numberClass: "text-green-700",
    question: "What is this identity allowed to do, where, why?",
    authority: "Access Policy + Decision Snapshot",
    boundary:
      "Deny/restriction/sensitivity precedence explicit. Unknown required input denies or routes review.",
    requires: [
      "Deny, restriction and sensitivity precedence explicit",
      "Unknown required input denies or routes review",
      "Scope, purpose and permission stated per decision",
      "Decision snapshot recorded against policy version",
    ],
  },
];

export function RelationshipModelSection() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section id="identity-relationship-model" className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Identity Relationship Model"
          title="Identity source → authentication → deterministic link → access decision — every stage is distinct"
          tone="dark"
        >
          No stage grants authority carried from the previous. Authentication
          does not grant authorization. Linking does not create employment truth.
          Select each stage to see the required behavior and authority boundary.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Identity relationship stages"
            className="mt-8 flex flex-wrap items-center gap-y-2"
          >
            {STAGES.map((item, i) => (
              <div key={item.id} className="flex items-center">
                <button
                  type="button"
                  role="tab"
                  id={`stage-tab-${item.id}`}
                  aria-selected={i === active}
                  aria-controls={`stage-panel-${item.id}`}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 transition-colors ${
                    i === active
                      ? "border-primary bg-primary/10"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <span className={`font-mono text-xs leading-4 ${item.numberClass}`}>
                    {item.id}
                  </span>
                  <span
                    className={`text-xs font-medium leading-5 ${
                      i === active ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
                {i < STAGES.length - 1 && (
                  <span aria-hidden className="px-1 text-white/20">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div
            role="tabpanel"
            id={`stage-panel-${stage.id}`}
            aria-labelledby={`stage-tab-${stage.id}`}
            className="mt-6 overflow-hidden rounded-xl border border-primary/20"
          >
            <div className="flex flex-col gap-4 border-b border-primary/10 bg-primary/5 px-6 pb-4 pt-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs leading-4 text-primary">
                    {stage.id}
                  </span>
                  <h3 className="text-xl font-extrabold leading-8 text-white">
                    {stage.name}
                  </h3>
                </div>
                <p className="pt-1 text-sm leading-5 text-white/60">
                  {stage.question}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-[9px] font-medium uppercase leading-3 tracking-wide text-white/30">
                  Authority
                </p>
                <p className="font-mono text-xs leading-4 text-primary">
                  {stage.authority}
                </p>
              </div>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase leading-4 tracking-wide text-white/30">
                  What this stage requires
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {stage.requires.map((requirement) => (
                    <ArrowItem key={requirement} tone="dark">
                      {requirement}
                    </ArrowItem>
                  ))}
                </ul>
              </div>

              <PlaceholderImage
                src="/images/zoiko-id/relationship-model.webp"
                alt="Colleagues standing together in a bright office"
                label={stage.name}
                className="aspect-video w-full rounded-xl border border-primary/20 bg-white lg:aspect-[603/170]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <details className="group mt-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-medium leading-4 text-white/30 transition-colors hover:text-white/60">
              <span aria-hidden className="transition-transform group-open:rotate-90">
                ▸
              </span>
              View as accessible table
            </summary>
            <div className="pt-3">
              <RefTable
                tone="dark"
                columns={["Stage", "Question", "Authority", "Boundary"]}
                gridClass="lg:grid-cols-[minmax(0,140px)_minmax(0,1fr)_minmax(0,260px)_minmax(0,1.2fr)]"
                rows={STAGES.map((item) => [
                  item.name,
                  item.question,
                  <span key={item.id} className="font-mono">
                    {item.authority}
                  </span>,
                  item.boundary,
                ])}
              />
            </div>
          </details>
        </Reveal>
      </Container>
    </section>
  );
}
