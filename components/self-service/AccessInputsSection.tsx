"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SquareBullet } from "./shared";

const INPUTS = [
  {
    tab: "Role & Relationship",
    points: [
      "Approved current product roles only",
      "Self, manager, delegated, assigned-task or approved service relation",
      "Relationship alone never grants blanket access",
    ],
  },
  {
    tab: "Organization Scope",
    points: [
      "Legal entity, country, business unit and team boundaries apply",
      "Scope narrows access; it never widens it",
      "Multi-entity users see only the entities they are scoped to",
    ],
  },
  {
    tab: "Purpose & Sensitivity",
    points: [
      "Purpose of use is evaluated alongside data sensitivity",
      "Sensitive fields can be restricted even where the record is visible",
      "Restriction returns a safe reason category, never silent absence",
    ],
  },
  {
    tab: "Object State",
    points: [
      "Draft, pending, approved, effective-dated and closed states differ",
      "A pending change never overwrites the current approved value",
      "State determines which actions are offered on the record",
    ],
  },
  {
    tab: "Workflow Assignment",
    points: [
      "Assigned tasks grant action only for the work in hand",
      "Assignment expires with the task; it is not standing access",
      "Completing a task never implies downstream processing is complete",
    ],
  },
  {
    tab: "Delegation",
    points: [
      "Acting-mode grants are scoped, time-bound and revocable",
      "Delegated context is shown explicitly while acting",
      "No silent persistence once the grant ends",
    ],
  },
];

export function AccessInputsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Six inputs decide what a user can see or do."
          className="max-w-[720px]"
        >
          Effective access is computed at the moment of use from role,
          relationship, scope, purpose, object state and delegation — never
          assumed from a job title.
        </SectionHeading>

        <Reveal delay={0.08}>
          {/* Tabs scroll horizontally rather than wrapping, so the row keeps
              its single-line rhythm on narrow screens. */}
          <div
            role="tablist"
            aria-label="Access inputs"
            className="mt-10 flex gap-2 overflow-x-auto border-b border-slate-200"
          >
            {INPUTS.map((input, i) => (
              <button
                key={input.tab}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm transition-colors ${
                  active === i
                    ? "border-primary font-bold text-sky-950"
                    : "border-transparent font-medium text-slate-500 hover:text-sky-950"
                }`}
              >
                {input.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white px-5 pb-7 pt-9 sm:px-7">
            {INPUTS[active].points.map((point) => (
              <div
                key={point}
                className="flex gap-3 border-b border-gray-100 py-2 last:border-b-0"
              >
                <SquareBullet className="bg-teal-600" />
                <p className="text-sm text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[820px] text-sm leading-5 text-slate-500">
            Decision output is always one of: view, direct edit, propose,
            correct, request, complete task, decide, acknowledge or restricted —
            with a safe reason category.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
