"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    label: "Employee",
    description:
      "Personal details, documents, leave, assigned tasks, policy acknowledgments, and lifecycle status — scoped to the employee's own record.",
  },
  {
    label: "Manager",
    description:
      "Team roster, pending approvals, and lifecycle status for direct and indirect reports — without unrestricted access to sensitive fields.",
  },
  {
    label: "HR Operations",
    description:
      "Manage event tasks, documents, communications, and dependency tracking across assigned entities and populations.",
  },
  {
    label: "IT / Integration",
    description:
      "Provision and revoke system access aligned to approved lifecycle events and identity system handoffs.",
  },
  {
    label: "Specialist",
    description:
      "Complete assigned professional-review tasks, such as immigration or benefits steps, within a defined event scope.",
  },
  {
    label: "Auditor",
    description:
      "Read-only visibility into event history, approvals, and evidence for compliance and audit review.",
  },
];

export function ParticipantRolesSection() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Every participant sees only what their role requires.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Employees, managers, HR, IT, specialists and auditors work
                from the same event — through different, permission-scoped
                views.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap gap-2">
                {ROLES.map((r, i) => (
                  <button
                    key={r.label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      active === i
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24} y={20}>
              <div className="mt-5 overflow-hidden rounded-xl bg-slate-50/60 p-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={role.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-sm leading-relaxed text-ink/70"
                  >
                    {role.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/solutions/managers"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore employee and manager self-service
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/participant-roles.png"
              alt="Two colleagues reviewing information on a tablet"
              label="Permission-scoped views"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
