"use client";

import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ISSUE_TYPES = [
  "Outdated information",
  "Inaccurate claim",
  "Missing or wrong qualifier",
  "Broken or incorrect source link",
  "Other",
];

const FIELD_CLASSES =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-600">
      {" "}
      *
    </span>
  );
}

export function LimitationsReportSection() {
  return (
    <section id="report" className="scroll-mt-24 border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                Understand what this comparison cannot tell you.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <PlaceholderImage
                src="/images/compare-zoikohr/limitations.png"
                alt="Three colleagues walking and talking through an office corridor"
                label="Colleagues discussing a comparison"
                loading="lazy"
                className="mt-6 aspect-[576/599] w-full rounded-2xl border border-slate-200"
              />
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              Report an outdated or inaccurate comparison.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Reports are reviewed against qualifying sources. Submission does not
              automatically change published status. No marketing consent is
              required.
            </p>

            <form
              // No approved intake endpoint is wired up yet, so submission stays
              // inert rather than silently dropping a report.
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex flex-col gap-5"
            >
              <div>
                <label htmlFor="report-issue-type" className="block pb-2 text-sm font-semibold text-ink">
                  Issue type
                  <RequiredMark />
                </label>
                <select id="report-issue-type" name="issue-type" required className={FIELD_CLASSES}>
                  <option value="">Select an issue type…</option>
                  {ISSUE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="report-explanation" className="block text-sm font-semibold text-ink">
                  Brief explanation
                  <RequiredMark />
                </label>
                <p className="pb-2 pt-1 text-xs leading-5 text-slate-400">
                  Do not include employee records, credentials, personal data, or
                  sensitive HR information.
                </p>
                <textarea
                  id="report-explanation"
                  name="explanation"
                  required
                  rows={4}
                  placeholder="Describe the inaccuracy or issue briefly…"
                  className={`${FIELD_CLASSES} resize-y`}
                />
              </div>

              <div>
                <label htmlFor="report-source-url" className="block pb-2 text-sm font-semibold text-ink">
                  Optional source URL
                </label>
                <input
                  id="report-source-url"
                  name="source-url"
                  type="url"
                  placeholder="https://"
                  className={FIELD_CLASSES}
                />
                <p className="pt-2 text-xs leading-5 text-slate-400">
                  Link to an authoritative public source that supports your report.
                  Not published automatically.
                </p>
              </div>

              <div>
                <label htmlFor="report-email" className="block pb-2 text-sm font-semibold text-ink">
                  Contact email (optional)
                </label>
                <input
                  id="report-email"
                  name="email"
                  type="email"
                  placeholder="For factual follow-up only"
                  className={FIELD_CLASSES}
                />
                <p className="pt-2 text-xs leading-5 text-slate-400">
                  Used for factual follow-up only. Not a marketing opt-in.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
                >
                  Submit report
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
