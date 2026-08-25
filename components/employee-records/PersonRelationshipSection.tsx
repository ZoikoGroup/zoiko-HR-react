"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const TABS = [
  {
    label: "Person",
    description:
      "Persistent identity record subject to privacy and correction controls — independent of any single employment relationship.",
  },
  {
    label: "Employment relationship",
    description:
      "A specific position, entity, and set of dates tied to a person — one person can hold more than one relationship over time.",
  },
  {
    label: "Assignment",
    description:
      "A worker's specific task, project, or temporary work assignment within an employment relationship, with its own scope and dates.",
  },
  {
    label: "Position / job context",
    description:
      "The job, level, department, and reporting line associated with an employment relationship at a point in time.",
  },
  {
    label: "Concurrent / change scenarios",
    description:
      "Multiple active relationships, transfers, and overlapping assignments remain distinguishable rather than merged into one record.",
  },
];

export function PersonRelationshipSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Person, relationship, assignment, and organization stay
              distinct.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Identity can persist while employment relationships change
              or coexist — merging these would create reporting, privacy,
              and historical errors.
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
                    ? "bg-ink text-white shadow-md"
                    : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22} y={20}>
          <div className="mt-5 overflow-hidden rounded-xl bg-slate-50/60 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="font-semibold text-ink">{tab.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {tab.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/core-hr"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore Core HR
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
