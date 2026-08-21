"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const CHECKLIST = [
  "Pricing request processing is separate from optional marketing consent.",
  "Do not include employee records, credentials, or sensitive HR data.",
  "A member of the commercial team will be in touch to discuss your evaluation.",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function RequestPricingFormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="request-pricing" className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Request pricing
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Start a commercial evaluation.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Share business-level information to receive current
                approved package, scope, implementation, support, and
                commercial information for your organization.
              </p>
            </Reveal>

            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((item, i) => (
                <Reveal key={item} delay={0.14 + i * 0.06}>
                  <li className="flex items-start gap-3 text-sm text-ink/70">
                    <CheckIcon />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3} y={30}>
              <PlaceholderImage
                src="/images/pricing/request-pricing.png"
                alt="Team greeting each other with a handshake"
                label="Start the conversation"
                fit="contain"
                className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
              />
            </Reveal>
          </div>

          <Reveal delay={0.16} y={30}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/[0.03]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800"
                  >
                    Thanks — your request has been received. A member of
                    our commercial team will follow up shortly.
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-ink/60">
                        Work email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-ink/60">
                          Full name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-ink/60">
                          Company <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-semibold text-ink/60">
                        Role / title <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="orgSize" className="block text-xs font-semibold text-ink/60">
                        Organization size range <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="orgSize"
                        name="orgSize"
                        required
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="1-50">1–50 employees</option>
                        <option value="51-250">51–250 employees</option>
                        <option value="251-1000">251–1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-semibold text-ink/60">
                        Country / region <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="need" className="block text-xs font-semibold text-ink/60">
                        Primary need
                      </label>
                      <select
                        id="need"
                        name="need"
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="new-implementation">New implementation</option>
                        <option value="add-product-area">Add a product area</option>
                        <option value="renewal-expansion">Renewal / expansion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3.5">
                      <p className="text-xs leading-relaxed text-amber-900">
                        Do not include employee names, IDs, salaries,
                        health data, credentials, files, or other
                        sensitive HR information in any field.
                      </p>
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-ink/60">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        className="mt-0.5 h-4 w-4 flex-none rounded border-slate-300 text-primary focus:ring-primary/30"
                      />
                      Optional: I consent to receive product news,
                      guides, and commercial updates from Zoiko HR. This
                      is separate from pricing request processing and can
                      be withdrawn at any time.
                    </label>

                    <Button type="submit" className="w-full">
                      Request Pricing
                    </Button>

                    <p className="text-xs text-ink/40">
                      By submitting, you agree to the{" "}
                      <a href="/privacy-notice" className="font-semibold text-primary hover:text-primary-dark">
                        Privacy Notice
                      </a>
                      . Pricing request processing does not depend on
                      marketing consent.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
