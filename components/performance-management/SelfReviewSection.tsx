import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CautionNote, SectionHeading } from "./shared";

const EMPLOYEE_VIEW = [
  {
    label: "Cycle context",
    value: "Framework v3.2 · Dates, criteria and visibility shown before input",
  },
  { label: "My goals", value: "Authorized goals and evidence — no cross-employee data" },
  { label: "Self-assessment", value: "Draft → submit; reopen via configured path only" },
  {
    label: "Manager assessment",
    value: "Visible at configured stage — cannot be edited by employee",
  },
  { label: "My rating", value: "Explanation and scale anchors shown if rating is configured" },
  { label: "Response", value: "Comment, acknowledge or request clarification where configured" },
];

export function SelfReviewSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Employee self-review & manager review"
          title="Two distinct records — neither silently replaces the other."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-indigo-200 bg-indigo-50 px-5 py-3.5">
                <span aria-hidden className="text-lg leading-7">
                  👤
                </span>
                <h3 className="text-sm font-semibold leading-5 text-blue-900">
                  Employee view — Jordan Alvarez
                </h3>
              </div>
              <dl className="flex flex-col gap-4 p-5">
                {EMPLOYEE_VIEW.map((row) => (
                  <div key={row.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">
                      {row.label}
                    </dt>
                    <dd className="text-xs leading-5 text-slate-600 sm:text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/performance-management/self-review.png"
              alt="A team reviewing performance charts on a tablet around a meeting table"
              label="Reviewing performance together"
              loading="lazy"
              className="aspect-[589/412] w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <CautionNote className="mt-8">
            Original employee and manager submissions are preserved as separate
            records. Calibration proposals and finalized outcomes are recorded
            as distinct state transitions — no silent overwrite.
          </CautionNote>
        </Reveal>
      </Container>
    </section>
  );
}
