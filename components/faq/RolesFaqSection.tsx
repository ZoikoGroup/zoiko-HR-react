"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { ROLE_FAQS } from "./faqData";

export function RolesFaqSection() {
  const [active, setActive] = useState(0);
  const role = ROLE_FAQS[active];

  return (
    <section id="roles" className="bg-[#F1F5F9] py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Employee, manager &amp; HR role questions.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">What each role can see and do in Zoiko HR.</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex flex-wrap gap-2">
            {ROLE_FAQS.map((r, i) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-ink text-white shadow-md"
                    : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${r.dotClass}`} />
                {r.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={role.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-3"
            >
              {role.entries.map((entry) => (
                <div
                  key={entry.question}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="font-semibold text-ink">{entry.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {entry.answer}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
            A role title does not equal unrestricted permission. Access is
            always scope, configuration and context dependent.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
