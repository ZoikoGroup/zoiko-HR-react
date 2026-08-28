"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const ROLES = [
  {
    key: "Employee",
    description:
      "Find help with your own records, documents, leave requests and assigned tasks.",
    actions: ["Update my profile", "Request leave", "Find a document", "Complete a task"],
  },
  {
    key: "Manager",
    description:
      "Find help with team approvals, records you oversee, and the evidence behind them.",
    actions: ["Review an approval", "Check team leave", "Open a team report", "Track a request"],
  },
  {
    key: "HR Administrator",
    description:
      "Find configuration, governance and organization-wide record guidance.",
    actions: ["Configure a policy", "Manage entities", "Correct a record", "Run an audit report"],
  },
  {
    key: "Implementation / Operations",
    description:
      "Find approved setup, migration and rollout guidance for a controlled launch.",
    actions: ["Plan a rollout", "Migrate data", "Validate a configuration", "Prepare go-live"],
  },
  {
    key: "IT / Developer",
    description:
      "Find integration, authentication and API reference entry points.",
    actions: ["Connect an integration", "Review API reference", "Configure a webhook", "Check authentication"],
  },
];

export function RolePathwaysSection() {
  const [active, setActive] = useState(ROLES[0].key);
  const role = ROLES.find((item) => item.key === active) ?? ROLES[0];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Role-based pathways.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Choosing a role changes ranking and emphasis, not product
            permissions.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2">
            {ROLES.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                aria-pressed={active === item.key}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active === item.key
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-ink hover:bg-slate-200"
                }`}
              >
                {item.key}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-100 p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              This content is intended for {role.key}
            </p>
            <p className="mt-2 leading-relaxed text-slate-600">
              {role.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {role.actions.map((action) => (
                <span
                  key={action}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-ink"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
