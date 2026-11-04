import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatusChip } from "./shared";

const ROWS = [
  {
    label: "Exact wording",
    value:
      "No current public conformance claim is established. WCAG 2.2 Level AA is the approved implementation target for this public page.",
    highlight: true,
  },
  {
    label: "Standard / Version",
    value: "WCAG 2.2 (W3C Recommendation, October 2023)",
  },
  {
    label: "Level / Status",
    value: "AA — Implementation Target, not an approved conformance claim",
  },
  {
    label: "Scope",
    value:
      "Zoiko HR public-facing marketing site, /accessibility/ and sibling Legal & Trust pages. Authenticated product, admin console, mobile application and API documentation have separate scope not covered by this record.",
  },
  {
    label: "Evidence status",
    value:
      "No current testing evidence record approved for public publication. Evidence-gated.",
  },
  {
    label: "Reviewed",
    value: "Pending — review due upon approval of this document",
  },
  { label: "Limitations", value: "3 known open limitations — see Section 9" },
  { label: "Owner", value: "Accessibility Program Owner — Zoiko HR" },
  {
    label: "Legal frameworks",
    value:
      "ADA, Section 508, EN 301 549 — not established. No legal framework applicability is inferred from this implementation target.",
  },
];

export function ConformanceRecordSection() {
  return (
    <section id="conformance" className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="04 / Current Conformance Information"
          title="What the current record shows."
        >
          A conformance claim requires approved scope, standard/version,
          reviewed date, evidence and limitation references. The implementation
          target for this page is WCAG 2.2 AA; that target is not automatically
          a public claim of conformance.
        </SectionHeading>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-100 px-7 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="text-xs font-medium uppercase leading-4 tracking-wide text-slate-600">
                  Conformance Claim Record — ZHR-A11Y-CLAIM-001
                </p>
                <StatusChip status="Not Established" className="self-start" />
              </div>

              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-stretch ${
                    i < ROWS.length - 1 ? "border-b border-slate-100" : ""
                  } ${row.highlight ? "bg-orange-50" : ""}`}
                >
                  <p className="px-7 pb-1 pt-4 text-xs font-medium leading-4 tracking-wide text-slate-500 sm:w-48 sm:flex-none sm:border-r sm:border-slate-100 sm:py-4 sm:pb-4">
                    {row.label}
                  </p>
                  <p
                    className={`min-w-0 flex-1 px-7 pb-4 pt-1 text-xs leading-5 sm:px-6 sm:py-4 ${
                      row.highlight ? "text-yellow-800" : "text-slate-700"
                    }`}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/accessibility/conformance-review.png"
                alt="Two colleagues talking across a desk with a laptop"
                label="Reviewing the current record"
                className="aspect-[360/321] w-full rounded-xl border border-slate-200"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PlaceholderImage
                src="/images/accessibility/conformance-team.png"
                alt="Three colleagues reviewing documents around a laptop"
                label="Reviewing evidence together"
                className="aspect-[360/322] w-full rounded-xl border border-slate-200"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
