"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const SCOPES = [
  "Portfolio",
  "Acme Global GmbH",
  "Acme DE GmbH",
  "Acme APAC Pte Ltd",
  "Shared Services",
];

const SUMMARIES = [
  {
    title: "Entity registry health",
    body: "3 records need owner or effective-date review",
  },
  { title: "Configuration reviews", body: "5 overrides pending approval" },
  { title: "Access reviews", body: "2 delegations expiring this week" },
  { title: "Integration exceptions", body: "1 source conflict unresolved" },
];

const ROWS = [
  {
    priority: "P0",
    priorityTone: "text-yellow-600",
    entity: "Acme DE GmbH",
    scope: "Acme DE GmbH",
    change: "Configuration override — works-council step",
    status: "Approval pending",
    statusTone: "text-yellow-600",
  },
  {
    priority: "P1",
    priorityTone: "text-blue-900",
    entity: "Acme APAC Pte Ltd",
    scope: "Acme APAC Pte Ltd",
    change: "Relationship conflict — regional hub reassignment",
    status: "Needs review",
    statusTone: "text-blue-900",
  },
  {
    priority: "P1",
    priorityTone: "text-blue-900",
    entity: "Finance Shared Services",
    scope: "Shared Services",
    change: "Access exception — cross-entity export request",
    status: "Unresolved",
    statusTone: "text-yellow-600",
  },
  {
    priority: "P2",
    priorityTone: "text-slate-500",
    entity: "Acme Global GmbH",
    scope: "Acme Global GmbH",
    change: "Integration source conflict — payroll field",
    status: "On track",
    statusTone: "text-teal-600",
  },
];

export function PortfolioWorkspaceSection() {
  const [scope, setScope] = useState("Portfolio");
  const rows =
    scope === "Portfolio" ? ROWS : ROWS.filter((row) => row.scope === scope);

  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Product Proof
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold text-sky-950">
            A portfolio-level workspace for scoped administration.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Every visible summary opens to traceable detail — there is no
            unexplained health score.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {SCOPES.map((option) => {
              const active = option === scope;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setScope(option)}
                  aria-pressed={active}
                  className={`rounded-lg border px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                    active
                      ? "border-sky-950 bg-sky-950 text-white"
                      : "border-zinc-200 bg-white text-sky-950 hover:border-primary hover:text-primary"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {SUMMARIES.map((summary, i) => (
            <Reveal key={summary.title} delay={0.12 + i * 0.06}>
              <div className="h-full rounded-[10px] border border-slate-200 bg-slate-100 p-4">
                <p className="text-sm font-bold text-sky-950">
                  {summary.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{summary.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} y={30}>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left">
                <thead>
                  <tr className="bg-slate-100 text-xs font-semibold text-slate-400">
                    <th className="w-32 px-4 py-2.5 font-semibold">Priority</th>
                    <th className="w-72 px-4 py-2.5 font-semibold">
                      Entity / unit
                    </th>
                    <th className="px-4 py-2.5 font-semibold">
                      Object / change
                    </th>
                    <th className="w-56 px-4 py-2.5 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {rows.map((row) => (
                    <tr key={row.change}>
                      <td
                        className={`px-4 py-3 font-semibold ${row.priorityTone}`}
                      >
                        {row.priority}
                      </td>
                      <td className="px-4 py-3 font-semibold text-sky-950">
                        {row.entity}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.change}</td>
                      <td
                        className={`px-4 py-3 font-semibold ${row.statusTone}`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
