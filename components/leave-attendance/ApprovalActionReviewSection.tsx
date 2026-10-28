"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const STATUS_STYLES: Record<string, string> = {
  "Pending decision": "bg-amber-400/20 text-amber-300",
  "Information requested": "bg-violet-400/20 text-violet-300",
  "Routing pending": "bg-primary/20 text-primary",
};

const QUEUE = [
  {
    name: "A. Chen (synthetic)",
    due: "Due Oct 18",
    status: "Pending decision",
    leaveType: "Annual Leave · Oct 14–18 · 5 days",
    image: "/images/leave-attendance/approval-a-chen.png",
    coverage: "Team coverage — 1 other absence",
    balance: "17 days available as of Oct 01",
  },
  {
    name: "M. Santos (synthetic)",
    due: "Due Oct 14",
    status: "Information requested",
    leaveType: "Leave — configured type · Oct 21",
    image: "/images/leave-attendance/approval-m-santos.png",
    coverage: "No overlapping team absence recorded",
    balance: "9 days available as of Oct 01",
  },
  {
    name: "R. Okonkwo (synthetic)",
    due: "Due Oct 24",
    status: "Routing pending",
    leaveType: "Annual Leave · Nov 3–7",
    image: "/images/leave-attendance/approval-r-okonkwo.png",
    coverage: "Team coverage — 2 other absences",
    balance: "22 days available as of Oct 01",
  },
];

export function ApprovalActionReviewSection() {
  const [active, setActive] = useState(0);
  const item = QUEUE[active];

  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Approval action review
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Minimum necessary context for accountable human decisions
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Managers see only fields needed for the assigned decision
              and operational coverage. Sensitive reason or supporting
              evidence is not visible by default — only a generalized
              documented state where applicable.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.7fr] lg:items-stretch">
          <Reveal delay={0.14} className="flex">
            <div className="flex h-full w-full flex-col rounded-2xl bg-white/5 p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/40">
                Approval queue — {QUEUE.length} assigned
              </p>
              <div className="space-y-1">
                {QUEUE.map((q, i) => (
                  <button
                    key={q.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full rounded-xl px-3 py-3 text-left transition-colors duration-200 ${
                      active === i ? "bg-primary/20" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">{q.name}</p>
                      <span className="text-xs text-white/40">{q.due}</span>
                    </div>
                    <span className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[q.status]}`}>
                      {q.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={20}>
            <div className="overflow-hidden rounded-2xl bg-white/5 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">{item.name}</p>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/50">{item.leaveType}</p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:items-stretch">
                    <PlaceholderImage
                      src={item.image}
                      alt={item.name}
                      label={item.name}
                      className="h-full min-h-[180px] w-full rounded-xl"
                    />
                    <div className="flex flex-col gap-3">
                      <div className="flex-1 rounded-lg bg-white/5 p-3.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Coverage / Conflict</p>
                        <p className="mt-1 text-sm text-white/70">{item.coverage}</p>
                        <p className="mt-1 text-xs text-white/40">Operational context only — not performance judgment</p>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/5 p-3.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Balance snapshot</p>
                        <p className="mt-1 text-sm text-white/70">{item.balance}</p>
                        <p className="mt-1 text-xs text-white/40">Formula BAL-FRM-001 v2.3 · Synthetic value</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                    <button type="button" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                      Approve
                    </button>
                    <button type="button" className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                      Decline
                    </button>
                    <button type="button" className="rounded-full border border-violet-400/40 px-4 py-2 text-sm font-semibold text-violet-300 transition-colors duration-200 hover:bg-violet-400/10">
                      Request information
                    </button>
                    <Button variant="outline" className="!border-white/20 !px-4 !py-2 !text-white hover:!border-primary hover:!text-primary">
                      Delegate
                    </Button>
                  </div>

                  <p className="mt-3 text-xs text-white/40">
                    All decisions are human-accountable. Delegation is
                    scope-bounded and does not expand underlying
                    permission. Concurrent version check prevents stale
                    decision override.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
