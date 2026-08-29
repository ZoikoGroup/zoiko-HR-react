"use client";

import { Container, Reveal } from "@/components/ui";

const PROMISES = [
  "Always discoverable, never a required first step.",
  "Shown with relevant article and status options before you submit.",
  "Only minimum safe context is collected.",
  "No sales gating on essential support routes.",
];

const ISSUE_CATEGORIES = [
  "Account & access",
  "Employee records",
  "Leave & attendance",
  "Documents & policies",
  "Workflows & approvals",
  "Reporting & insights",
  "Integrations",
];

export function ContactSupportSection() {
  return (
    <section id="contact-support" className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Contact Support.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-slate-600">
                Reachable at any time — emphasized here after unresolved search
                or troubleshooting, never as the default first action or a sales
                gate.
              </p>
            </Reveal>

            <ul className="mt-6 space-y-3">
              {PROMISES.map((promise, i) => (
                <Reveal key={promise} delay={0.14 + i * 0.05}>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <span aria-hidden className="flex-none text-teal-600">
                      ✓
                    </span>
                    {promise}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.16}>
            <form
              // No support intake endpoint is wired up yet — submission is
              // intentionally inert until an approved route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Minimum context
              </p>

              <div className="mt-5">
                <label htmlFor="support-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="support-email"
                  name="support-email"
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="support-category" className="sr-only">
                  Issue category
                </label>
                <select
                  id="support-category"
                  name="support-category"
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    Issue category
                  </option>
                  {ISSUE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="support-tried" className="sr-only">
                  What have you already tried?
                </label>
                <textarea
                  id="support-tried"
                  name="support-tried"
                  rows={3}
                  placeholder="What have you already tried?"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Do not include passwords, MFA codes, bank or card data,
                government IDs, medical information, full payroll records, or
                API secrets.
              </p>

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Submit to Contact Support
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
