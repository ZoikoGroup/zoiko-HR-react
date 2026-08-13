"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const USE_CASES = [
  {
    label: "Identity & access",
    description:
      "Approved employee/assignment/lifecycle events may trigger an authorized access request. Zoiko HR provides context or a configured trigger; the identity platform and customer policy govern account behavior.",
    note: "No access action is guaranteed. Cancellation and supersession follow governed recovery.",
  },
  {
    label: "HR, Time & Payroll",
    description:
      "Approved worker, position, and schedule data flows to time tracking; approved time and attendance results flow to payroll. Calculation and filing remain with the payroll system and provider.",
    note: "No payroll calculation occurs within Zoiko HR.",
  },
  {
    label: "Recruiting to Core HR",
    description:
      "An approved hire decision creates or links a Core HR record with duplicate-prevention checks. Recruiting and offer decisions remain with the hiring system and authorized approvers.",
    note: "No hiring decision is made or implied by the integration.",
  },
  {
    label: "Benefits & Learning",
    description:
      "Approved eligibility and enrollment status synchronize between Core HR and benefits or learning platforms. Enrollment decisions and eligibility rules remain with the provider and plan administrator.",
    note: "No benefits eligibility determination occurs within Zoiko HR.",
  },
  {
    label: "Documents & Analytics",
    description:
      "Approved documents and workforce data flow to e-signature, document, and analytics systems with retention and access controls preserved.",
    note: "No legal or compliance interpretation is performed by the integration.",
  },
];

export function UseCasesSection() {
  const [active, setActive] = useState(0);
  const useCase = USE_CASES[active];

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Use cases
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Coordinated use cases, with explicit professional boundaries.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Zoiko HR coordinates configured handoffs. Calculation, filing,
              eligibility, legal, and hiring decisions remain with
              authorized systems and professionals.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
            <div className="flex flex-col gap-1">
              {USE_CASES.map((uc, i) => (
                <button
                  key={uc.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "border-l-2 border-primary bg-white/5 text-white"
                      : "border-l-2 border-transparent text-white/50 hover:text-white/80"
                  }`}
                >
                  {uc.label}
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={useCase.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="font-semibold">{useCase.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {useCase.description}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/40">
                    {useCase.note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/integrations"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore Connect HR, Time & Payroll
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
