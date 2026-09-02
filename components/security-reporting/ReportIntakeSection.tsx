"use client";

import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

// The taxonomy shown here is the same one this page already establishes
// nowhere else — no category is invented beyond a neutral placeholder list.
const VULNERABILITY_CATEGORIES = [
  "Authentication / authorization",
  "Injection",
  "Data exposure",
  "Access control",
  "Configuration",
  "Other",
];

const FIELD_CLASSES =
  "w-full rounded-lg border border-black/10 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/30";

function OptionalTag({ children = "optional" }: { children?: string }) {
  return (
    <span className="ml-1.5 text-xs font-semibold text-slate-400">
      ({children})
    </span>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function ReportIntakeSection() {
  return (
    <section id="report-intake" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 08"
          title="Protected vulnerability report intake."
        >
          Minimum necessary fields. This form does not route to sales, CRM, or
          marketing systems. Core form works without optional cookies.
        </SectionHeading>

        {/* The images start level with the first field, not with the heading. */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_400px]">
          <div>
            <Reveal delay={0.1}>
              <form
                // No approved security intake endpoint is wired up yet, so
                // submission stays inert rather than silently dropping a report.
                onSubmit={(event) => event.preventDefault()}
                className="flex flex-col gap-6"
              >
                <div>
                  <label
                    htmlFor="report-title"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Report title
                    <RequiredMark />
                  </label>
                  <input
                    id="report-title"
                    name="report-title"
                    type="text"
                    required
                    placeholder="Brief, clear title — do not include credentials or secrets"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="affected-asset"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Affected asset
                    <OptionalTag>if known from approved scope</OptionalTag>
                  </label>
                  <input
                    id="affected-asset"
                    name="affected-asset"
                    type="text"
                    placeholder="Approved public asset name or identifier"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vulnerability-category"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Vulnerability category
                    <OptionalTag />
                  </label>
                  <select
                    id="vulnerability-category"
                    name="vulnerability-category"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="" disabled>
                      Select if applicable
                    </option>
                    {VULNERABILITY_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Description
                    <RequiredMark />
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    placeholder="Observed behavior, expected behavior, and brief impact hypothesis. No passwords, tokens, keys, or customer data."
                    className={`${FIELD_CLASSES} min-h-28 resize-y`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="steps-to-reproduce"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Steps to reproduce
                    <RequiredMark />
                  </label>
                  <textarea
                    id="steps-to-reproduce"
                    name="steps-to-reproduce"
                    required
                    rows={5}
                    placeholder="Minimal, clear steps. Stop at the point of demonstration — do not maximize access or exfiltrate data."
                    className={`${FIELD_CLASSES} min-h-28 resize-y`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="impact"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Impact
                    <OptionalTag />
                  </label>
                  <input
                    id="impact"
                    name="impact"
                    type="text"
                    placeholder="Potential security impact — no live customer data examples"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-method"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Preferred contact method
                    <RequiredMark />
                  </label>
                  <input
                    id="contact-method"
                    name="contact-method"
                    type="text"
                    required
                    placeholder="How we may follow up securely (minimum necessary)"
                    className={FIELD_CLASSES}
                  />
                  <p className="mt-1 text-xs leading-4 text-slate-400">
                    Independent researchers are not required to provide
                    organization/company unless operationally necessary.
                  </p>
                </div>

                <label className="flex items-start gap-3 rounded-xl border border-black/10 bg-slate-50 px-4 py-3.5 text-sm text-ink">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 size-4 flex-none rounded border-slate-300 text-primary focus:ring-primary/30"
                  />
                  I confirm this report does not include passwords, API keys,
                  private keys, secrets, full employee/customer records, or
                  unnecessary personal data. I have redacted sensitive data
                  from any attached evidence.
                </label>

                <p className="text-xs leading-5 text-slate-400">
                  Report content is handled by the Security team for triage
                  purposes only. No marketing consent is collected. See{" "}
                  <a
                    href="/trust-center"
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Privacy Policy
                  </a>{" "}
                  for handling details. No invented retention period.
                </p>

                <button
                  type="submit"
                  className="mt-1 self-start rounded-xl bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit Report
                </button>
              </form>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <Reveal delay={0.14} className="flex-1">
              <PlaceholderImage
                src="/images/security-reporting/report-form-top.png"
                alt="Colleagues reviewing a vulnerability finding together on a laptop"
                label="Reviewing a finding together"
                className="w-full rounded-2xl"
              />
            </Reveal>
            <Reveal delay={0.2} className="flex-1">
              <PlaceholderImage
                src="/images/security-reporting/report-form-bottom.png"
                alt="A researcher documenting a report in an open office"
                label="Documenting a report"
                className="w-full rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
