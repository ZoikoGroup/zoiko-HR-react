"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

// No approved concern-category list is established, so the control offers the
// placeholder only rather than inventing options.
const CONCERN_CATEGORIES: string[] = [];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function ConcernEscalationSection() {
  return (
    <section
      id="report-concern"
      className="border-b border-slate-200 bg-slate-50 py-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Section 13"
          title="AI concern, incident, correction and escalation."
        >
          Route your concern to the correct authority. Security vulnerabilities
          go to Security Reporting only — not to a general form.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/concern-escalation.png"
              alt="A presenter taking questions from an audience"
              label="Raising a governance concern"
              className="aspect-[816/501] w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.12} className="min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
              <h3 className="font-heading text-lg font-extrabold text-ink">
                Report a governance concern
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-slate-400">
                General AI governance concerns only. No employee records,
                prompts, credentials or sensitive attachments. Does not replace
                Security Reporting for vulnerabilities.
              </p>

              <form
                // No approved concern intake endpoint is wired up yet, so
                // submission stays inert rather than dropping a report.
                onSubmit={(event) => event.preventDefault()}
                className="mt-4"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="aig-email"
                      className="block pb-1 text-xs font-semibold text-ink"
                    >
                      Work email
                      <RequiredMark />
                    </label>
                    <input
                      id="aig-email"
                      name="aig-email"
                      type="email"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="aig-org"
                      className="block pb-1 text-xs font-semibold text-ink"
                    >
                      Organization
                      <RequiredMark />
                    </label>
                    <input
                      id="aig-org"
                      name="aig-org"
                      type="text"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="aig-category"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Concern category
                    <RequiredMark />
                  </label>
                  <select
                    id="aig-category"
                    name="aig-category"
                    required
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select category</option>
                    {CONCERN_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="aig-area"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Affected product area
                  </label>
                  <input
                    id="aig-area"
                    name="aig-area"
                    type="text"
                    placeholder="Approximate area — no sensitive data"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="aig-description"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Brief description
                    <RequiredMark />
                  </label>
                  <textarea
                    id="aig-description"
                    name="aig-description"
                    required
                    rows={3}
                    placeholder="No employee records, prompts, credentials or sensitive data"
                    className={FIELD_CLASSES}
                  />
                </div>

                <p className="mt-2.5 text-[10px] leading-4 text-slate-400">
                  Route category only is recorded in analytics. Concern
                  narrative excluded. No SLA commitment. Security
                  vulnerabilities must use{" "}
                  <Link
                    href="/security-reporting"
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Security Reporting
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  className="mt-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit Concern
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
