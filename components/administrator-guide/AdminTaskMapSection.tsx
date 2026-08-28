"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FILTERS = [
  "All",
  "Organization Setup",
  "People & Access",
  "Policy & Governance",
  "Data Administration",
  "Integrations",
  "Change & Recovery",
];

const TASKS = [
  {
    area: "Organization Setup",
    state: "Current",
    title: "Set organization profile defaults",
    meta: "Actor: HR Administrator · Prerequisites: Organization created",
    impact: "Impact: Organization-wide",
  },
  {
    area: "Policy & Governance",
    state: "Current",
    title: "Update an approval workflow",
    meta: "Actor: HR Administrator · Prerequisites: Workflow-configuration permission",
    impact: "Impact: Affected workflow",
  },
  {
    area: "Data Administration",
    state: "Role-restricted",
    title: "Import employee records",
    meta: "Actor: HR Administrator · Prerequisites: Approved template",
    impact: "Impact: Bulk / organization-wide",
  },
  {
    area: "Change & Recovery",
    state: "Current",
    title: "Roll out a policy change",
    meta: "Actor: HR Administrator · Prerequisites: Change validated in preview",
    impact: "Impact: Affected population",
  },
];

export function AdminTaskMapSection() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? TASKS : TASKS.filter((task) => task.area === active);

  return (
    <section id="task-map" className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Admin task map &amp; quick start.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Filter by responsibility area. Every card names actor,
            prerequisites, scope, and state.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors duration-200 ${
                  active === filter
                    ? "border-primary bg-indigo-50 text-primary"
                    : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:order-1 lg:col-span-2 lg:grid-cols-2">
            {visible.length > 0 ? (
              visible.map((task, i) => (
                <Reveal key={task.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-bold uppercase text-slate-400">
                        {task.area}
                      </span>
                      <span
                        className={`flex-none rounded-full px-2.5 py-1 text-xs font-bold ${
                          task.state === "Current"
                            ? "bg-emerald-50 text-teal-600"
                            : "bg-indigo-50 text-primary"
                        }`}
                      >
                        {task.state}
                      </span>
                    </div>
                    <h3 className="mt-3 font-bold text-ink">{task.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {task.meta}
                    </p>
                    <p className="mt-auto pt-3 text-xs text-slate-400">
                      {task.impact}
                    </p>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
                  No published tasks in this responsibility area yet. Use search
                  or browse another area.
                </p>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.14} className="lg:order-2">
            <PlaceholderImage
              src="/images/administrator-guide/task-map.png"
              alt="An administrator working at a multi-screen desk in an open office"
              label="Admin task map"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
