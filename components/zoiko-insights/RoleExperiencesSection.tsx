"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckList, SectionHeading } from "./shared";

type Role = {
  id: string;
  icon: string;
  label: string;
  /** Null until approved copy exists — the tab renders but can't be selected. */
  content: { summary: string; items: string[]; limit: string } | null;
};

/**
 * Only the HR / People Ops tab's content is in the design. The other tabs
 * keep the layout but stay disabled rather than opening onto empty panels.
 */
const ROLES: Role[] = [
  {
    id: "hr-people-ops",
    icon: "⚙️",
    label: "HR / People Ops",
    content: {
      summary:
        "Broader organization/process reporting with definitions, cohorts, lifecycle/process health and data quality.",
      items: [
        "Workforce overview across approved entities",
        "Lifecycle movement and reason-data completeness",
        "Process health queues and aging buckets",
        "Data-quality exceptions and source health",
        "Metric catalog with definition management",
      ],
      limit:
        "Still scoped by role, purpose, entity and jurisdiction. Cannot grant itself broader source access.",
    },
  },
  { id: "manager", icon: "👷", label: "Manager", content: null },
  { id: "executive-finance", icon: "📊", label: "Executive / Finance", content: null },
  { id: "people-analytics", icon: "🔬", label: "People Analytics", content: null },
];

export function RoleExperiencesSection() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const active = ROLES.find((role) => role.id === activeId) ?? ROLES[0];

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Role experiences"
          title="Different views for different roles — same governed data model."
          className="max-w-[640px]"
        >
          Tabs describe default experiences and scope emphasis. Real
          authorization is determined by approved role configuration, not by
          which tab you read.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div role="tablist" aria-label="Role" className="mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
            {ROLES.map((role) => {
              const selected = role.id === activeId;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  id={`insights-role-tab-${role.id}`}
                  aria-selected={selected}
                  aria-controls="insights-role-panel"
                  disabled={!role.content}
                  onClick={() => setActiveId(role.id)}
                  className={`inline-flex flex-none items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "border border-slate-200 bg-white/60 text-slate-600 enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed"
                  }`}
                >
                  <span aria-hidden>{role.icon}</span>
                  {role.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active.content && (
          <div
            id="insights-role-panel"
            role="tabpanel"
            aria-labelledby={`insights-role-tab-${active.id}`}
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >
            <Reveal className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-primary">
                  Default experience
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{active.content.summary}</p>
                <CheckList className="mt-4" items={active.content.items} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-100/60 p-5">
                <p className="text-xs font-semibold leading-5 text-slate-600">Explicit limit</p>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{active.content.limit}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:h-full">
              <PlaceholderImage
                src="/images/zoiko-insights/role-experiences.png"
                alt="Three colleagues smiling and shaking hands"
                label="Colleagues meeting together"
                loading="lazy"
                className="aspect-[589/394] w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  );
}
