"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const FACTORS = [
  "Organization size",
  "Entity/location complexity",
  "Required product areas",
  "User populations",
  "Integrations",
  "Security/privacy review",
  "Contract and jurisdiction",
];

const FIELDS = [
  { name: "email", label: "Work email", type: "email" },
  { name: "name", label: "Name", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "role", label: "Role", type: "text" },
  { name: "country", label: "Country / region", type: "text" },
  { name: "size", label: "Organization size", type: "text" },
];

export function PlatformPricingSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Pricing & evaluation
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Evaluate Zoiko HR for your organization.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Prices, packages, implementation, support, integrations, and
                availability require approved commercial content and may
                vary by contract, configuration, and jurisdiction.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink/40">
                Evaluation factors
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {FACTORS.map((factor) => (
                  <span
                    key={factor}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24} y={30}>
              <PlaceholderImage
                src="/images/platform/pricing.png"
                alt="Person reviewing a dashboard at a desk"
                label="Evaluate for your organization"
                fit="contain"
                className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
              />
            </Reveal>
          </div>

          <Reveal delay={0.16} y={30}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/[0.03]">
              <p className="font-semibold text-ink">Request Pricing</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800"
                  >
                    Thanks — your request has been received. A member of
                    our team will follow up shortly.
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
                    className="mt-5 space-y-4"
                  >
                    {FIELDS.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-xs font-semibold text-ink/60"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required
                          className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                    ))}

                    <Button type="submit" className="mt-2 w-full">
                      Request Pricing
                    </Button>

                    <div className="flex items-center justify-center gap-4 pt-1 text-sm">
                      <a
                        href="/book-a-demo"
                        className="font-semibold text-primary hover:text-primary-dark"
                      >
                        Book a Demo
                      </a>
                      <a
                        href="/resources/product-tour"
                        className="group inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark"
                      >
                        Take the Product Tour
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
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
