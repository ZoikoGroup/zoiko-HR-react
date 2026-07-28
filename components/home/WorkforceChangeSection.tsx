"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const STAGES = [
  {
    label: "Prepare",
    description:
      "Define roles, approvals and documentation requirements before a change begins.",
    evidence: [
      "Owner assigned",
      "Effective date set",
      "Approval logged",
      "Document retained",
    ],
  },
  {
    label: "Onboard",
    description:
      "Provision access, assign tasks and issue required documents from day one.",
    evidence: [
      "Access provisioned",
      "Tasks assigned",
      "Documents issued",
      "Checklist completed",
    ],
  },
  {
    label: "Manage",
    description:
      "Maintain accurate role, reporting and location data as it changes.",
    evidence: [
      "Record updated",
      "Manager confirmed",
      "Location verified",
      "Change timestamped",
    ],
  },
  {
    label: "Change",
    description:
      "Route promotions, transfers and compensation changes through approval.",
    evidence: [
      "Approval requested",
      "Manager sign-off",
      "Effective date set",
      "Change logged",
    ],
  },
  {
    label: "Develop",
    description: "Track goals, reviews and growth with a structured history.",
    evidence: [
      "Goals recorded",
      "Review completed",
      "Feedback logged",
      "History retained",
    ],
  },
  {
    label: "Transition",
    description:
      "Manage offboarding with structured, auditable offboarding steps.",
    evidence: [
      "Access revoked",
      "Assets returned",
      "Exit interview logged",
      "Record archived",
    ],
  },
];

export function WorkforceChangeSection() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Manage every material workforce change with structure and
              evidence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Coordinate responsibilities, approvals, documents, effective
              dates and retained records from onboarding through change and
              transition.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap gap-2">
            {STAGES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-ink text-white shadow-md"
                    : "border border-slate-200 bg-white text-ink/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/[0.03]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center"
              >
                <div>
                  <p className="font-semibold text-ink">{stage.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {stage.description}
                  </p>
                </div>

                <div className="rounded-xl bg-primary-light p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Evidence trail
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    {stage.evidence.join(" · ")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/platform/onboarding-lifecycle"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore employee lifecycle management
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
