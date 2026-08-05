"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const TABS = [
  "Overview",
  "Personal",
  "Contact",
  "Employment",
  "Positions",
  "Organization",
  "Documents",
  "Lifecycle",
  "Access & Audit",
];

const SENSITIVITY_STYLES: Record<string, string> = {
  Internal: "bg-sky-100 text-sky-700",
  "Work/Public": "bg-emerald-100 text-emerald-700",
};

const FIELD_ROWS = [
  { field: "Person ID", value: "PER-00041", source: "System", sensitivity: "Internal", effective: "14 Mar 2022", owner: "System" },
  { field: "Preferred Name", value: "Jordan", source: "Employee (self-service)", sensitivity: "Internal", effective: "01 Jun 2023", owner: "Jordan A." },
  { field: "Primary Position", value: "Senior HR Business Partner", source: "HR Administrator", sensitivity: "Work/Public", effective: "14 Mar 2022", owner: "HR Ops" },
  { field: "Primary Entity", value: "Zoiko UK Ltd", source: "HR Administrator", sensitivity: "Internal", effective: "14 Mar 2022", owner: "HR Admin" },
  { field: "Manager", value: "Casey Park — VP People Operations", source: "HR Administrator", sensitivity: "Work/Public", effective: "01 Jan 2024", owner: "HR Admin" },
  { field: "Employment Status", value: "Active", source: "Workflow — Onboarding Approval", sensitivity: "Internal", effective: "14 Mar 2022", owner: "HR Ops" },
];

export function EmployeeMasterRecordSection() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 07 — Employee master record
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Structured, sensitive, and effective-dated records.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every field carries source, owner, sensitivity classification,
              effective date, and access context. No field is ambiguous.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-slate-900/10">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-ink px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold">
                  JA
                </span>
                <div>
                  <p className="font-semibold">Jordan Alvarez</p>
                  <p className="text-xs text-white/50">
                    Jordan · PER-00041 · EMP-0041 · Record Owner: HR Admin
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Active
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  Senior HR Business Partner
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  Zoiko UK Ltd · London
                </span>
                <Button
                  variant="outline"
                  className="!border-white/30 !px-4 !py-1.5 !text-xs !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Correction
                </Button>
                <Button className="!px-4 !py-1.5 !text-xs">
                  Propose Change
                </Button>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-slate-100 bg-white px-6 py-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    activeTab === tab
                      ? "bg-primary-light text-primary"
                      : "text-ink/50 hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-ink/40">
                    <th className="px-6 py-3 font-medium">Field</th>
                    <th className="px-6 py-3 font-medium">Current Value</th>
                    <th className="px-6 py-3 font-medium">Source</th>
                    <th className="px-6 py-3 font-medium">Sensitivity</th>
                    <th className="px-6 py-3 font-medium">Effective From</th>
                    <th className="px-6 py-3 font-medium">Owner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FIELD_ROWS.map((row) => (
                    <tr
                      key={row.field}
                      className="transition-colors duration-150 hover:bg-slate-50"
                    >
                      <td className="px-6 py-3.5 text-ink/50">{row.field}</td>
                      <td className="px-6 py-3.5 font-medium text-ink">{row.value}</td>
                      <td className="px-6 py-3.5 text-ink/50">{row.source}</td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${SENSITIVITY_STYLES[row.sensitivity]}`}
                        >
                          {row.sensitivity}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-ink/40">{row.effective}</td>
                      <td className="px-6 py-3.5 text-ink/50">{row.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-100 bg-primary-light/40 px-6 py-4">
              <p className="text-sm font-semibold text-primary">
                Approved future value — not yet effective
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Manager will change to{" "}
                <span className="font-semibold text-ink">
                  A. Kim — Director, People Operations
                </span>{" "}
                effective <span className="font-semibold text-ink">01 Oct 2025</span>.
                Current value remains authoritative until then.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 text-right">
            <Link
              href="/platform/employee-records"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View Employee Records
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
