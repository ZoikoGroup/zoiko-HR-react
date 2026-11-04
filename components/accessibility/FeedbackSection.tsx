"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, CheckIcon, CrossIcon } from "./shared";

const ALLOWANCES = [
  "No login required",
  "No marketing consent",
  "No diagnosis or disability category",
  "No sales gate",
];

const EXCLUSIONS = [
  "Do not upload credentials or sensitive HR documents",
  "Do not include sensitive medical information",
];

// No approved issue-category list is established, so the control offers the
// placeholder only rather than inventing options.
const ISSUE_CATEGORIES: string[] = [];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function FeedbackSection() {
  return (
    <section id="feedback" className="bg-white py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="10 / Feedback & Barrier Reporting"
              title="Report a barrier or request help."
            >
              Use this form to report an accessibility barrier, ask for help or
              request an alternative format. No login, marketing consent or
              disability category is required.
            </SectionHeading>

            <Reveal delay={0.08}>
              <ul className="mt-6 flex flex-col gap-2.5">
                {ALLOWANCES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-3.5 flex-none text-emerald-500" />
                    <span className="text-xs leading-5 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
                {EXCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CrossIcon className="mt-0.5 size-3.5 flex-none text-amber-500" />
                    <span className="text-xs leading-5 text-amber-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  Alternative contact
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">
                  If this form is inaccessible, reach support through the{" "}
                  <Link
                    href="/help-center"
                    className="font-medium text-primary underline hover:text-primary-dark"
                  >
                    Help Center
                  </Link>
                  . Response time is not guaranteed — no SLA is published.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="min-w-0">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-6 sm:px-8 sm:py-8">
              <form
                // No approved accessibility intake endpoint is wired up yet, so
                // submission stays inert rather than dropping a report.
                onSubmit={(event) => event.preventDefault()}
              >
                <label
                  htmlFor="a11y-category"
                  className="block pb-1.5 text-sm font-semibold text-slate-900"
                >
                  Issue category
                  <RequiredMark />
                </label>
                <select
                  id="a11y-category"
                  name="a11y-category"
                  required
                  defaultValue=""
                  className={FIELD_CLASSES}
                >
                  <option value="">Select category...</option>
                  {ISSUE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="a11y-area"
                  className="mt-5 block pb-1.5 text-sm font-semibold text-slate-900"
                >
                  Affected page or product area
                </label>
                <input
                  id="a11y-area"
                  name="a11y-area"
                  type="text"
                  placeholder="e.g. /accessibility/, feedback form, HR platform — leave blank if unsure"
                  className={FIELD_CLASSES}
                />

                <label
                  htmlFor="a11y-description"
                  className="mt-5 block text-sm font-semibold text-slate-900"
                >
                  Description
                  <RequiredMark />
                </label>
                <p className="pb-1.5 pt-1 text-xs leading-5 text-slate-500">
                  Describe the barrier or feedback. Do not include credentials,
                  sensitive medical information or sensitive HR documents.
                </p>
                <textarea
                  id="a11y-description"
                  name="a11y-description"
                  required
                  rows={5}
                  className={FIELD_CLASSES}
                />

                <label
                  htmlFor="a11y-contact"
                  className="mt-5 block pb-1.5 text-sm font-semibold text-slate-900"
                >
                  Contact preference (optional)
                </label>
                <input
                  id="a11y-contact"
                  name="a11y-contact"
                  type="text"
                  placeholder="Email or preferred format — only if you want a follow-up"
                  className={FIELD_CLASSES}
                />

                <button
                  type="submit"
                  className="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit Accessibility Feedback
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
