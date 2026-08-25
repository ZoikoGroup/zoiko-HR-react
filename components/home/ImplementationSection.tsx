"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";

const STAGES = [
  {
    label: "Discovery",
    description:
      "Confirm scope, entities, jurisdictions and required capabilities.",
  },
  {
    label: "Configuration",
    description:
      "Configure policies, fields, workflows and access to match operating requirements.",
  },
  {
    label: "Data",
    description:
      "Migrate and validate employee and organizational data before go-live.",
  },
  {
    label: "Integration",
    description:
      "Connect approved time, payroll and identity systems where required.",
  },
  {
    label: "Validation",
    description:
      "Verify configuration, data and workflows against sign-off criteria.",
  },
  {
    label: "Launch",
    description:
      "Roll out to employees and managers with structured communication and support.",
  },
  {
    label: "Adoption",
    description:
      "Monitor usage, gather feedback and refine configuration post-launch.",
  },
];

const PROOF_POINTS = [
  {
    label: "Design-partner result",
    description:
      "A 200-employee, 6-country group consolidated three regional spreadsheets into one governed record set during a phased rollout.",
  },
  {
    label: "Verified migration",
    description:
      "Employee and organizational data migrated with a documented validation and sign-off checkpoint before go-live.",
  },
];

export function ImplementationSection() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Implemented with structure. Proven through evidence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Move from discovery to adoption through a controlled
              implementation with clear responsibilities, validation and
              post-launch support.
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
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "border border-slate-200 bg-white text-ink/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="font-semibold text-ink">{stage.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {stage.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PROOF_POINTS.map((point, i) => (
            <Reveal key={point.label} delay={0.26 + i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {point.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Link
              href="/implementation-guide"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View implementation approach
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
