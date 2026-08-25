"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const VIEWS = [
  {
    label: "Employee view",
    bullets: [
      "View approved own information",
      "Request correction or propose permitted update",
      "Upload permitted document and acknowledge",
      "Track request status and reach support",
    ],
  },
  {
    label: "Manager view",
    bullets: [
      "View permitted team member information",
      "Review and action team requests within scope",
      "Propose team changes for approval",
      "Track team request status and escalations",
    ],
  },
];

export function SelfServiceViewSection() {
  const [active, setActive] = useState(0);
  const view = VIEWS[active];

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              View, request, and propose stay separate from direct edit.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Employees and managers reach appropriate self-service without
              implying unrestricted access.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-6 inline-flex gap-2 rounded-full border border-slate-200 bg-slate-100 p-1">
            {VIEWS.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-primary text-white shadow"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24} y={30}>
          <div className="mt-6 grid gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-2">
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="font-semibold text-ink">{view.label}</p>
                  <ul className="mt-3 space-y-2">
                    {view.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <PlaceholderImage
              src="/images/employee-records/self-service.png"
              alt="Team discussing notes at a whiteboard"
              label="Appropriate self-service"
              className="h-full min-h-[200px] w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <Link
            href="/product-tour"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Take the Product Tour
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
