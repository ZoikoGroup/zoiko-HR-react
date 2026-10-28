"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { label: "Queued", icon: "○", description: "Local state complete. Handoff packet prepared. Awaiting transmission to target system." },
  { label: "Sent", icon: "→", description: "Handoff packet transmitted to target system. Awaiting acknowledgment receipt." },
  { label: "Acknowledged", icon: "✓", description: "Target system confirmed receipt of the handoff packet. Processing has not yet completed." },
  { label: "Processed", icon: "●", description: "Target system has applied the handoff packet within its own processing rules." },
  { label: "Reconciled", icon: "◎", description: "Local and target state have been compared and confirmed consistent, or a documented resolution has been recorded." },
];

const STEP_COLORS = ["bg-slate-500", "bg-primary", "bg-violet-500", "bg-emerald-500", "bg-emerald-400"];

const SYSTEMS = [
  { name: "Time system", route: "Leave → Time", statusIndex: 2 },
  { name: "Payroll system", route: "Leave → Payroll", statusIndex: 1 },
  { name: "Calendar provider", route: "Leave → Calendar", statusIndex: 4 },
];

export function IntegrationsHandoffsSection() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Integrations &amp; handoffs
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Queued, sent, acknowledged, processed, and reconciled —
              never collapsed into a single &quot;synced&quot; badge
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Approved leave is not payroll acceptance or time-system
              finalization. Source direction, connector names, sync
              frequency and conflict rules are never invented — they
              come from approved integration contracts only.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-8 flex items-start justify-between overflow-x-auto pb-2">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex flex-none flex-col items-center gap-2 px-1 text-center"
                >
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm transition-colors duration-200 ${
                      active === i ? `${STEP_COLORS[i]} text-white` : "border border-white/20 text-white/40"
                    }`}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <span className={`whitespace-nowrap text-xs font-medium ${active === i ? "text-white" : "text-white/40"}`}>
                    {s.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && <span className="mt-[-20px] h-px flex-1 bg-white/10" aria-hidden />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} y={20}>
          <div className="mt-4 overflow-hidden rounded-2xl bg-white/5 p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="font-semibold">{step.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
            System handoff status — synthetic example
          </p>
          <div className="mt-3 space-y-3">
            {SYSTEMS.map((system, i) => (
              <Reveal key={system.name} delay={0.06 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold">{system.name}</p>
                      <p className="text-xs text-white/40">{system.route}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STEP_COLORS[system.statusIndex]} text-white`}>
                      {STEPS[system.statusIndex].label}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-1">
                    {STEPS.map((s, si) => (
                      <div key={s.label} className={`h-1.5 flex-1 rounded-full ${si <= system.statusIndex ? STEP_COLORS[si] : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.36}>
          <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-3.5 text-sm text-amber-200">
            <span aria-hidden>⚠</span>
            Connector names, source-of-record direction and integration
            credentials are never shown in public mockups or marketing
            copy. Conflict/rejected/stale/unknown handoff states have
            separate resolution paths. No auto-pick of latest timestamp
            as conflict resolution unless integration contract
            explicitly allows it.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
