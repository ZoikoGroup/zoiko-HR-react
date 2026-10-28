"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";

const CONCEPTS = [
  {
    label: "Structure",
    icon: "⬡",
    description: "An organization contains governed structural units with explicit type, label, parent path, state, and identifier.",
    proof: "Type chip + breadcrumb path + state in tree/table/detail",
  },
  {
    label: "Relationships",
    icon: "↔",
    description: "Hierarchy, reporting, ownership, and assignment reference are distinct relationship types with their own semantics and authority.",
    proof: "Labeled connector type + relationship detail panel",
  },
  {
    label: "Ownership",
    icon: "◇",
    description: "Administrative accountability and delegated scope are represented only where the product model defines an ownership concept.",
    proof: "Scope chip + delegated-access indicator",
  },
  {
    label: "Effective Context",
    icon: "🕐",
    description: "Current and scheduled structure remain distinct until an approved effective date is reached.",
    proof: "Effective-date badge + current/scheduled toggle",
  },
  {
    label: "Change",
    icon: "⇄",
    description: "Structural changes move through a governed flow of validation, review, and approval before becoming effective.",
    proof: "Change-state timeline + approval trail",
  },
  {
    label: "Source / Sync",
    icon: "↻",
    description: "Local and synced records carry an explicit source and reconciliation state, never a silent merge.",
    proof: "Source badge + sync-health indicator",
  },
];

export function OrganizationModelSection() {
  const [active, setActive] = useState(0);
  const concept = CONCEPTS[active];

  return (
    <section id="organization-model" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2.1fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Organization model
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Six governed concepts underpin every structure
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Each concept has explicit product-proof treatment.
                Meaning does not depend on visual lines or indentation
                alone.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.12}>
              <div className="flex flex-nowrap gap-1.5 overflow-x-auto border-b border-slate-200 pb-4">
                {CONCEPTS.map((c, i) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex flex-none items-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-semibold transition-all duration-200 ${
                      active === i
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    <span aria-hidden>{c.icon}</span>
                    {c.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} y={20}>
              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-50/60 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={concept.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-lg text-primary" aria-hidden>
                      {concept.icon}
                    </span>
                    <p className="mt-3 font-semibold text-ink">{concept.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {concept.description}
                    </p>
                    <Link
                      href="#overview-proof"
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      UI proof
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      <span className="ml-1 text-ink/40">{concept.proof}</span>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
