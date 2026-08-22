"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const WORKFLOWS = [
  {
    title: "Time and Attendance Operations",
    description:
      "Review attendance status, late or missing records, schedule context and approvals from one operational view.",
    linkLabel: "Time Tracking",
  },
  {
    title: "Review, Corrections and Employee Questions",
    description:
      "Let authorized workers and managers add context, request correction and resolve discrepancies before downstream use.",
    linkLabel: "Human-in-Command Controls",
  },
  {
    title: "Payroll-Ready Handoff",
    description:
      "Send approved, traceable records into payroll preparation and retain the source, changes and approver history.",
    linkLabel: "Improve Payroll Accuracy",
  },
  {
    title: "Worker Transparency and Communication",
    description:
      "Make the record, status, reason and review path understandable to the worker; support employee communications.",
    linkLabel: "Anti-Surveillance Principles",
  },
];

function WorkflowLink({ label }: { label: string }) {
  return (
    <span className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
      {label}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </span>
  );
}

export function CoreWorkflowsSection() {
  const [view, setView] = useState<"cards" | "tabs">("cards");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Core workflows
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Core Workflows for HR and People Teams
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1">
              {(["Cards", "Tabs"] as const).map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setView(label.toLowerCase() as "cards" | "tabs")}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                    view === label.toLowerCase()
                      ? "bg-ink text-white shadow"
                      : "text-ink/50 hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          {view === "cards" ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center"
            >
              <div className="flex flex-col gap-4">
                {WORKFLOWS.slice(0, 2).map((workflow, i) => (
                  <Reveal key={workflow.title} delay={0.06 + i * 0.06}>
                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <p className="font-semibold text-ink">{workflow.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {workflow.description}
                      </p>
                      <WorkflowLink label={workflow.linkLabel} />
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.14} y={30}>
                <PlaceholderImage
                  src="/images/hr-people-teams/core-workflows.png"
                  alt="Two colleagues high-fiving in an office"
                  label="Core workflows, connected"
                  fit="contain"
                  className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
                />
              </Reveal>

              <div className="flex flex-col gap-4">
                {WORKFLOWS.slice(2, 4).map((workflow, i) => (
                  <Reveal key={workflow.title} delay={0.1 + i * 0.06}>
                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <p className="font-semibold text-ink">{workflow.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {workflow.description}
                      </p>
                      <WorkflowLink label={workflow.linkLabel} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tabs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-10"
            >
              <div className="flex flex-wrap gap-2">
                {WORKFLOWS.map((workflow, i) => (
                  <button
                    key={workflow.title}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeTab === i
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                        : "border border-slate-200 bg-white text-ink/60 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                  >
                    {workflow.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={WORKFLOWS[activeTab].title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p className="font-semibold text-ink">{WORKFLOWS[activeTab].title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {WORKFLOWS[activeTab].description}
                    </p>
                    <WorkflowLink label={WORKFLOWS[activeTab].linkLabel} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
