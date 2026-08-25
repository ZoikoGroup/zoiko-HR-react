"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const JOURNEYS = [
  {
    label: "Preboarding",
    description:
      "Prepare authorized information, documentation, communications, and equipment/access requests before start — without collecting excessive data or implying employment finality before authorization.",
    participants: "Employee, HR operations, manager, IT/identity, facilities, document owner.",
  },
  {
    label: "Onboarding",
    description:
      "Complete first-day access, orientation, verification, and initial policy acknowledgments within defined scope and evidence requirements.",
    participants: "Employee, HR operations, manager, IT/identity, document owner.",
  },
  {
    label: "Active Changes",
    description:
      "Coordinate promotions, transfers, compensation, and reporting-line changes with dependency-aware sequencing and approvals.",
    participants: "Employee, manager, HR operations, HR administrator.",
  },
  {
    label: "Transfers & Promotions",
    description:
      "Track cross-entity or cross-location moves with effective-dated record updates and required professional review.",
    participants: "Employee, manager, HR administrator, receiving manager.",
  },
  {
    label: "Leave & Return",
    description:
      "Plan leave requests, approvals, and return-to-work steps while preserving role, access, and reporting continuity.",
    participants: "Employee, manager, HR operations.",
  },
  {
    label: "Separation & Offboarding",
    description:
      "Coordinate access revocation, document retrieval, final tasks, and audit-ready closure on a defined timeline.",
    participants: "Employee, manager, HR operations, IT/identity, facilities.",
  },
  {
    label: "Post-Employment",
    description:
      "Retain required records and respond to authorized post-employment requests within retention and access policy.",
    participants: "HR operations, HR administrator, document owner.",
  },
];

export function JourneyTypesSection() {
  const [active, setActive] = useState(0);
  const journey = JOURNEYS[active];

  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every journey type, coordinated with the same discipline.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              From readiness before day one to retained records after
              departure — each journey keeps ownership, evidence and
              professional boundaries explicit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-2">
            {JOURNEYS.map((j, i) => (
              <button
                key={j.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-ink text-white shadow-md"
                    : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24} y={30}>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={journey.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="font-semibold text-ink">{journey.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {journey.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary-light/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Typical participants
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={journey.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-2 text-sm leading-relaxed text-ink/60"
                >
                  {journey.participants}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <Link
            href="/onboarding-lifecycle"
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
