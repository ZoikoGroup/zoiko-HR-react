"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SquareBullet } from "./shared";

const VIEWS = [
  {
    tab: "Manager",
    points: [
      "Scoped team task and approval queue — never a full-organization view",
      "Bounded delegation controls when a manager is temporarily unavailable",
      "Minimum necessary context; no blanket access from job title",
      "Bulk actions show per-item eligibility and excluded-item reasons before approval",
    ],
  },
  {
    tab: "Delegated approver",
    points: [
      "Acting-mode is explicit, scoped to named duties and time-bound",
      "The delegated context is shown on screen for the whole session",
      "Access ends with the grant — there is no silent persistence",
      "Actions taken while acting are attributed to both the delegate and the grantor",
    ],
  },
];

export function TeamActionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Scoped team actions — never a blanket view of everyone's data."
          className="max-w-[700px]"
        >
          Managers and delegated approvers see minimum necessary context for the
          work assigned to them.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Team action views"
            className="mt-8 flex flex-wrap gap-2"
          >
            {VIEWS.map((view, i) => (
              <button
                key={view.tab}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === i
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-gray-800 hover:bg-slate-200"
                }`}
              >
                {view.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
            {VIEWS[active].points.map((point) => (
              <div key={point} className="flex gap-3 py-1.5">
                <SquareBullet className="rounded-full bg-primary" />
                <p className="text-sm text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl bg-sky-950 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-300">
              Acting as delegate for R. Chen · Leave approvals only · Through Sep
              12, 2026
            </p>
            <span className="shrink-0 self-start rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white sm:self-auto">
              Exit acting mode
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
