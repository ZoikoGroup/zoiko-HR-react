"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";

const TABS = [
  {
    label: "Workforce Overview",
    description:
      "Counts for complete records, pending review, missing approval and policy exception. No individual productivity leaderboard.",
    pills: ["Complete records", "Pending review", "Missing approval", "Policy exceptions"],
  },
  {
    label: "Review Queue",
    description:
      "Items awaiting worker, manager, or HR action — ordered by age and required reviewer, not by inferred urgency.",
    pills: ["Awaiting worker", "Awaiting manager", "Awaiting HR", "Overdue"],
  },
  {
    label: "Record Detail",
    description:
      "A single worker's approved time events, breaks, corrections, and approval history for a selected pay period.",
    pills: ["Time events", "Breaks", "Corrections", "Approvals"],
  },
  {
    label: "Audit History",
    description:
      "Every change to a record with actor, reason, timestamp, and prior value — retained for the configured retention period.",
    pills: ["Actor", "Reason", "Timestamp", "Prior value"],
  },
];

export function HrPeopleTeamsProductProofSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Product proof
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              See the Workforce Record Before You Rely on It
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              HR can review attendance, exceptions, break states,
              corrections, approvals, and export readiness without
              monitoring private worker activity.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-white text-ink shadow-md"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22} y={20}>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                  {tab.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {tab.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tab.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button
              href="/book-a-demo"
              className="!bg-emerald-600 shadow-emerald-600/30 hover:!bg-emerald-700"
            >
              Request Enterprise Demo
            </Button>
            <p className="text-sm text-white/50">
              See this workflow with your policies and roles.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
