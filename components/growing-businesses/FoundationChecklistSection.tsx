"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const GROUPS = [
  {
    title: "Data",
    items: [
      "Owners/sources identified",
      "Required records defined",
      "Effective-date/change rules understood",
      "Data-quality exceptions known",
    ],
  },
  {
    title: "Structure",
    items: [
      "Organizations/teams/roles defined",
      "Manager relationships documented",
      "Change ownership clear",
      "Scopes sufficient for intended processes",
    ],
  },
  {
    title: "Insight",
    items: [
      "Operational questions identified",
      "Report definitions/sources understood",
      "Export needs reviewed",
    ],
  },
  {
    title: "Connections",
    items: [
      "Systems/integrations inventoried",
      "Authoritative sources/mappings defined",
      "Error/reconciliation understood",
    ],
  },
];

export function FoundationChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (item: string) =>
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  return (
    <section className="border-t border-white/10 bg-slate-900 py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Foundation Checklist
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Actionable evaluation summary.
          </h2>
          <p className="mt-3 max-w-[640px] text-white/50">
            Mark items for your own reference. No maturity score, risk grade
            or eligibility decision is calculated.
          </p>
          <p className="mt-3 text-xs leading-5 text-white/30">
            Sending to sales requires an explicit action — this checklist
            stays local to your session.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-white/10 bg-sky-950 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-col">
                    {group.items.map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-start gap-3 border-b border-white/10 py-2.5 text-sm text-white/80"
                      >
                        <span className="relative mt-0.5 flex h-3.5 w-3.5 flex-none items-center justify-center">
                          <input
                            type="checkbox"
                            checked={Boolean(checked[item])}
                            onChange={() => toggle(item)}
                            className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded-[3px] border border-white/20 bg-transparent transition-colors duration-150 checked:border-primary checked:bg-primary"
                          />
                          <svg
                            aria-hidden
                            viewBox="0 0 12 12"
                            className="pointer-events-none absolute h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100"
                          >
                            <path
                              d="M2.5 6.2L4.8 8.5L9.5 3.8"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/checklist.png"
              alt="A presenter walking a colleague through evaluation findings"
              label="Actionable evaluation summary"
              className="h-full w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/book-a-demo"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
            >
              Discuss with Zoiko
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setChecked({})}
              className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white/70 transition-colors duration-150 hover:border-white/30 hover:text-white"
            >
              Clear checklist
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
