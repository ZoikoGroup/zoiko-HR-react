"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const CATEGORIES = [
  "Security documentation",
  "Privacy / data processing",
  "AI governance",
  "Accessibility",
  "Operational assurance",
  "Other",
];

const ROLES = [
  "Security / IT",
  "Procurement",
  "Legal / Privacy",
  "HR / Business owner",
  "Other",
];

export function ProcurementRequestSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (category: string) =>
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );

  return (
    <section id="procurement-request" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Procurement review &amp; request materials.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              For artifacts that cannot be published openly. A request is
              received, not approved — access decisions follow a separate
              eligibility review.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              // No procurement intake endpoint is wired up yet — submission is
              // intentionally inert until an approved route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 rounded-2xl border border-slate-200 bg-slate-100 p-5 sm:p-8"
            >
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-wide text-teal-600">
                  Step 1 — select material categories
                </legend>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggle(category)}
                      aria-pressed={selected.includes(category)}
                      className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors duration-200 ${
                        selected.includes(category)
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="text-xs font-bold uppercase tracking-wide text-teal-600">
                  Step 2 — business identity
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="procurement-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="procurement-name"
                      name="procurement-name"
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="procurement-email" className="sr-only">
                      Work email
                    </label>
                    <input
                      id="procurement-email"
                      name="procurement-email"
                      type="email"
                      placeholder="Work email"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="procurement-org" className="sr-only">
                      Organization
                    </label>
                    <input
                      id="procurement-org"
                      name="procurement-org"
                      type="text"
                      placeholder="Organization"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="procurement-role" className="sr-only">
                      Requester role
                    </label>
                    <select
                      id="procurement-role"
                      name="procurement-role"
                      defaultValue={ROLES[0]}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    >
                      {ROLES.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="text-xs font-bold uppercase tracking-wide text-teal-600">
                  Step 3 — context (optional)
                </legend>
                <label htmlFor="procurement-context" className="sr-only">
                  Procurement stage or review purpose
                </label>
                <textarea
                  id="procurement-context"
                  name="procurement-context"
                  rows={4}
                  placeholder="Procurement stage or review purpose"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                />
              </fieldset>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Do not include employee data, credentials, vulnerabilities,
                secrets or confidential architecture.
              </p>

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Submit request
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
