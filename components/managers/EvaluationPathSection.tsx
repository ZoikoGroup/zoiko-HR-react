"use client";

import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const FIELDS = [
  { id: "work-email", label: "Work email", type: "email" },
  { id: "full-name", label: "Full name", type: "text" },
  { id: "company", label: "Company", type: "text" },
  { id: "your-role", label: "Your role", type: "text" },
];

const FACTORS = [
  "Manager populations and organization/entity scope",
  "Approval and workflow types",
  "Lifecycle responsibilities",
  "Permissions and delegation model",
  "Integrations — identity, HR, time, payroll",
  "Privacy, security and audit requirements",
  "Implementation, training and support needs",
];

export function EvaluationPathSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Evaluation and Commercial Path
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Evaluate Zoiko HR for manager approvals and authorized team actions.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            Core evaluation, Trust, Documentation and Support are never gated.
            The form collects only business-critical information.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.1}>
            {/* No submission endpoint is wired yet — the handler keeps the
                page from reloading until one is approved. */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-4"
            >
              {FIELDS.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.label}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="company-size"
                  className="block text-sm font-medium"
                >
                  Company size
                </label>
                {/* Ranges are not specified in the approved design — pending copy. */}
                <select
                  id="company-size"
                  name="company-size"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-500 focus:border-primary focus:outline-none"
                >
                  <option value="" disabled>
                    Select range
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="workflow-need"
                  className="block text-sm font-medium"
                >
                  Primary workflow need
                </label>
                <input
                  id="workflow-need"
                  name="workflow-need"
                  type="text"
                  placeholder="Primary workflow need"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none"
                />
              </div>

              <p className="text-xs leading-5 text-slate-500">
                No preselected marketing consent. No forced calendar before
                qualification. Employee names, HR case details, credentials and
                sensitive personnel information are prohibited from this form.
              </p>

              <Button type="submit" className="px-7 py-3.5">
                Book a Demo
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="font-semibold">Evaluation factors</p>
            <ul className="mt-4 space-y-2.5">
              {FACTORS.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {factor}
                </li>
              ))}
            </ul>

            <Link
              href="/pricing"
              className="mt-8 block rounded-lg border border-primary/30 bg-primary/10 px-6 py-3.5 text-center text-sm font-semibold text-indigo-400 hover:border-primary hover:text-primary"
            >
              Request Pricing
            </Link>

            <Link
              href="/product-tour"
              className="group mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-white hover:text-primary"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Pricing, packages, implementation, support, integrations and
              availability vary by contract, configuration and market.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
