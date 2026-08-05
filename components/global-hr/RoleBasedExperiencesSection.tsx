"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    label: "Employee",
    image: "/images/global-hr/role-experiences.png",
    description:
      "Personal details, documents, leave, assigned tasks, policy acknowledgments, and HR requests — scoped to the employee's own record.",
  },
  {
    label: "Manager",
    image: "/images/global-hr/role-experiences.png",
    description:
      "Team roster, approvals, leave requests, and lifecycle changes — scoped to the manager's direct and indirect reports.",
  },
  {
    label: "HR Administrator",
    image: "/images/global-hr/role-experiences.png",
    description:
      "Full workforce configuration, cross-entity reporting, policy administration, and approval oversight — scoped to assigned entities and permissions.",
  },
  {
    label: "Executive / HR Leader",
    image: "/images/global-hr/role-experiences.png",
    description:
      "Consolidated, permission-appropriate visibility into workforce health, lifecycle activity, and data quality across the organization.",
  },
];

export function RoleBasedExperiencesSection() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 11 — Role-based experiences
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One platform. Role-appropriate information and action.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Visibility and action are separate permissions. A user may
              view a record without being permitted to change, approve,
              export, or administer it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ROLES.map((r, i) => (
              <button
                key={r.label}
                type="button"
                onClick={() => setActive(i)}
                className="rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200"
                style={
                  active === i
                    ? { backgroundColor: "#0A1B2E", borderColor: "#0A1B2E", color: "#FFFFFF" }
                    : { backgroundColor: "#FFFFFF", borderColor: "#E2E8F0", color: "#334155" }
                }
              >
                {r.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24} y={30}>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={role.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <PlaceholderImage
                  src={role.image}
                  alt={`${role.label} experience of Zoiko HR`}
                  label={`${role.label} view`}
                  fit="contain"
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-xl bg-slate-50/60 p-6 text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={role.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-sm text-ink/60"
              >
                {role.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
