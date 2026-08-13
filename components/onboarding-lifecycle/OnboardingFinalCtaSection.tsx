"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";

const FIELDS = [
  { name: "email", label: "Work email", type: "email" },
  { name: "organization", label: "Organization name", type: "text" },
  { name: "country", label: "Country or region", type: "text" },
];

export function OnboardingFinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Bring structure and evidence to every employee event.
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              See how Zoiko HR coordinates onboarding, changes,
              transitions, leave, separation and post-employment record
              handling with clear ownership.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href="/resources/product-tour"
                className="font-semibold text-primary hover:text-white"
              >
                Take the Product Tour
              </a>
              <a
                href="/trust-center"
                className="font-semibold text-primary hover:text-white"
              >
                Visit the Trust Center
              </a>
              <a
                href="/sign-in"
                className="font-semibold text-primary hover:text-white"
              >
                Sign In
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl shadow-black/40">
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
                    className="space-y-3"
                  >
                    {FIELDS.map((field) => (
                      <input
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.label}
                        aria-label={field.label}
                        required
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
                      />
                    ))}

                    <div className="flex flex-wrap gap-3 pt-1">
                      <Button
                        href="/book-a-demo"
                        variant="outline"
                        className="flex-1"
                      >
                        Book a Demo
                      </Button>
                      <Button type="submit" className="flex-1">
                        Request Pricing
                      </Button>
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
