"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const ROLES = [
  {
    label: "Employee",
    description:
      "Personal details, documents, leave, assigned tasks, policy acknowledgments, performance actions and HR requests — all scoped to the employee's own record.",
  },
  {
    label: "Manager",
    description:
      "Team roster, approvals, leave requests, performance reviews and reporting-line changes — scoped to the manager's direct and indirect reports.",
  },
  {
    label: "HR Administrator",
    description:
      "Full workforce configuration, cross-entity reporting, policy administration and approval oversight — scoped to the administrator's assigned entities and permissions.",
  },
];

export function RoleExperienceSection() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Give every person the right HR experience for their role.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Deliver focused self-service and action views without exposing
              information outside the user&apos;s authorized scope.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-8 inline-flex flex-wrap gap-2 rounded-full border border-slate-200 bg-slate-100 p-1">
            {ROLES.map((r, i) => (
              <button
                key={r.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-primary text-white shadow"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={role.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-ink/70"
              >
                {role.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/solutions/managers"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore employee and manager self-service
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
