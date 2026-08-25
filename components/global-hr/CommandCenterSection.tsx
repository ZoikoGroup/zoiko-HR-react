"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const NAV_TABS = [
  "Overview",
  "People",
  "Organization",
  "Onboarding",
  "Lifecycle",
  "Workflows",
  "Documents",
  "Reporting",
  "Integrations",
  "Administration",
];

const STATS = [
  { value: "1,247", label: "Active Employees" },
  { value: "34", label: "New Starters" },
  { value: "18", label: "Lifecycle Changes" },
  { value: "9", label: "Manager Approvals" },
  { value: "23", label: "Data Quality Items" },
  { value: "41", label: "Policy Acknowledgments" },
];

const STATUS_STYLES: Record<string, string> = {
  Pending: "bg-rose-400/15 text-rose-300",
  "Approval pending": "bg-amber-400/15 text-amber-300",
  "In review": "bg-sky-400/15 text-sky-300",
  "Awaiting data": "bg-amber-400/15 text-amber-300",
  Scheduled: "bg-emerald-400/15 text-emerald-300",
};

const WORK_QUEUE = [
  { priority: "High", priorityColor: "bg-rose-500", task: "Onboarding — Alex Chen", entity: "US / New York", owner: "HR Ops", due: "22 Jan", status: "Pending" },
  { priority: "High", priorityColor: "bg-rose-500", task: "Promotion — Riya Patel", entity: "UK / London", owner: "HR Admin", due: "24 Jan", status: "Approval pending" },
  { priority: "Med", priorityColor: "bg-amber-500", task: "Contract renewal — J. Müller", entity: "DE / Berlin", owner: "HR Ops", due: "28 Jan", status: "In review" },
  { priority: "Med", priorityColor: "bg-amber-500", task: "Leave return — S. Okonkwo", entity: "NG / Lagos", owner: "Manager", due: "30 Jan", status: "Awaiting data" },
  { priority: "Low", priorityColor: "bg-emerald-500", task: "Separation — T. Yamamoto", entity: "JP / Tokyo", owner: "HR Admin", due: "31 Jan", status: "Scheduled" },
];

export function CommandCenterSection() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product proof — section 5
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              People Operations Command Center
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              A role-aware operational home for HR administrators, managers,
              and authorized leaders — with workforce scope, work queue,
              lifecycle summary, and data-quality panels.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1730] shadow-2xl shadow-black/40">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold">
                  People Operations Command Center
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  Zoiko Group · All Entities
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span>Eff. Jan 2026</span>
                <span>HR Administrator</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <nav className="flex flex-none gap-1 overflow-x-auto border-b border-white/10 px-3 py-3 lg:w-48 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:px-3 lg:py-4">
                {NAV_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                      activeTab === tab
                        ? "bg-primary/20 text-primary"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              <div className="flex-1 p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors duration-200 hover:border-primary/30 hover:bg-white/[0.08]"
                    >
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="mt-0.5 text-xs text-white/50">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <p className="text-sm font-semibold">Work Queue</p>
                    <span className="text-xs text-white/40">
                      {WORK_QUEUE.length} items
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="text-xs uppercase tracking-wide text-white/40">
                          <th className="px-4 py-2.5 font-medium">Priority</th>
                          <th className="px-4 py-2.5 font-medium">Task / Event</th>
                          <th className="px-4 py-2.5 font-medium">Entity / Location</th>
                          <th className="px-4 py-2.5 font-medium">Owner</th>
                          <th className="px-4 py-2.5 font-medium">Due</th>
                          <th className="px-4 py-2.5 font-medium">Status</th>
                          <th className="px-4 py-2.5 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {WORK_QUEUE.map((row) => (
                          <tr
                            key={row.task}
                            className="transition-colors duration-150 hover:bg-white/[0.04]"
                          >
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-white ${row.priorityColor}`}
                              >
                                {row.priority}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-medium">{row.task}</td>
                            <td className="px-4 py-3 text-white/60">{row.entity}</td>
                            <td className="px-4 py-3 text-white/60">{row.owner}</td>
                            <td className="px-4 py-3 text-white/60">{row.due}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[row.status] ?? "bg-white/10 text-white/70"}`}
                              >
                                {row.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                type="button"
                                className="group inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-white"
                              >
                                Review
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                  →
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/product-tour"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
