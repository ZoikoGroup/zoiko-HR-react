"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { StatusBadge } from "./StatusBadge";

const COLUMNS = [
  "Type",
  "Title",
  "Scope",
  "Current as of",
  "Access",
  "Status",
  "Limitations",
  "Action",
];

const EVIDENCE = [
  {
    type: "Security overview",
    title: "Zoiko HR Security & Privacy Public Overview",
    scope: "Zoiko HR platform",
    currentAsOf: "[From record]",
    access: "Public",
    status: "Current",
    limitations: "Summary — controlled detail requires request.",
    action: "Open →",
    accent: true,
  },
  {
    type: "Independent test summary",
    title: "[From approved record]",
    scope: "[From record]",
    currentAsOf: "[From record]",
    access: "Request Required",
    status: "Request Required",
    limitations: "Controlled. Vendor/result/frequency source-gated.",
    action: "Request →",
  },
  {
    type: "Policy / statement",
    title: "[From approved record]",
    scope: "[From record]",
    currentAsOf: "[From record]",
    access: "Public",
    status: "Current",
    limitations: "Scope-qualified. See exclusions in record.",
    action: "Open →",
    accent: true,
  },
  {
    type: "Assurance summary",
    title: "[From approved record if applicable]",
    scope: "[From record]",
    currentAsOf: "[From record]",
    access: "Request Required",
    status: "Request Required",
    limitations: "Issuer/scope/period/limitations from approved record only.",
    action: "Request →",
  },
];

// The design shows the placeholder only; no approved purpose list is
// established, so the control offers nothing beyond it.
const REVIEW_PURPOSES: string[] = [];

const EVIDENCE_CATEGORIES = [
  "Security overview",
  "Independent testing",
  "Policy / statements",
  "Assurance summary",
];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function AssuranceEvidenceSection() {
  return (
    <section
      id="security-review"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Section 10"
          title="Assurance evidence, security review and freshness."
        >
          Governed route to current evidence for procurement and security
          reviewers. Expired and superseded evidence is not promoted as current.
          Source conflict fails closed.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-275 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {EVIDENCE.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 text-left text-xs font-medium text-slate-700"
                      >
                        {row.type}
                      </th>
                      <td className="px-4 py-4 text-xs leading-5 text-slate-600">
                        {row.title}
                      </td>
                      <td className="px-4 py-4 font-mono text-[10px] text-slate-400">
                        {row.scope}
                      </td>
                      <td className="px-4 py-4 font-mono text-[10px] text-slate-400">
                        {row.currentAsOf}
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={row.access} />
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-4 py-4 text-xs leading-4 text-slate-400">
                        {row.limitations}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`whitespace-nowrap text-xs font-semibold ${
                            row.accent ? "text-primary" : "text-slate-600"
                          }`}
                        >
                          {row.action}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6">
              <h3 className="font-heading text-xl font-bold text-ink">
                Request Security Review
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Minimum business data only. No vulnerability findings,
                credentials or employee data.
              </p>

              <form
                // No approved security-review intake endpoint is wired up yet,
                // so submission stays inert rather than dropping a request.
                onSubmit={(event) => event.preventDefault()}
                className="mt-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="review-email"
                      className="block pb-1.5 text-xs font-semibold text-ink"
                    >
                      Work email
                      <RequiredMark />
                    </label>
                    <input
                      id="review-email"
                      name="review-email"
                      type="email"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="review-name"
                      className="block pb-1.5 text-xs font-semibold text-ink"
                    >
                      Name
                      <RequiredMark />
                    </label>
                    <input
                      id="review-name"
                      name="review-name"
                      type="text"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="review-org"
                      className="block pb-1.5 text-xs font-semibold text-ink"
                    >
                      Organization
                      <RequiredMark />
                    </label>
                    <input
                      id="review-org"
                      name="review-org"
                      type="text"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="review-role"
                      className="block pb-1.5 text-xs font-semibold text-ink"
                    >
                      Role
                      <RequiredMark />
                    </label>
                    <input
                      id="review-role"
                      name="review-role"
                      type="text"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="review-purpose"
                    className="block pb-1.5 text-xs font-semibold text-ink"
                  >
                    Review purpose
                    <RequiredMark />
                  </label>
                  <select
                    id="review-purpose"
                    name="review-purpose"
                    required
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select purpose</option>
                    {REVIEW_PURPOSES.map((purpose) => (
                      <option key={purpose} value={purpose}>
                        {purpose}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset className="mt-4">
                  <legend className="pb-2 text-xs font-semibold text-ink">
                    Evidence categories
                  </legend>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {EVIDENCE_CATEGORIES.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 text-xs text-slate-600"
                      >
                        <input
                          type="checkbox"
                          name="evidence-categories"
                          value={category}
                          className="size-3.5 rounded border-slate-300 text-primary focus:ring-primary/30"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <p className="mt-3 text-[10px] leading-4 text-slate-400">
                  No vulnerability findings, employee data or credentials. See{" "}
                  <Link
                    href="/trust-center"
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit Review Request
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <PlaceholderImage
              src="/images/security-privacy/assurance-review.png"
              alt="A security reviewer walking colleagues through evidence"
              label="Walking through evidence"
              className="aspect-[280/424] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
