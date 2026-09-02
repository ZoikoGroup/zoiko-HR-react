import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel, NonControllingBanner, CheckIcon } from "./shared";

const CRITERIA = [
  {
    title: "Approved current AIUseCase record",
    detail: "Draft, private, under review or withdrawn records fail closed.",
  },
  {
    title: "All required fields present",
    detail:
      "useCaseId, publicName, purpose, decisionRightClass, owner, reviewedAt.",
  },
  {
    title: "Decision right class defined",
    detail:
      "Advisory, review-required, approval-required or prohibited — not undefined.",
  },
  {
    title: "Limitations documented",
    detail: "Known limitations must be visible and scope-linked before publication.",
  },
  {
    title: "Review date current",
    detail: "Overdue records enter Under Review state automatically.",
  },
  {
    title: "No prohibited-field content",
    detail: "No prompts, model secrets, employee data or proprietary classifiers.",
  },
];

const DATA_MODEL_FIELDS = [
  "useCaseId",
  "publicName",
  "purpose",
  "intendedUse",
  "excludedUses",
  "affectedContext",
  "decisionRightClass",
  "dataUseRef",
  "evaluationRefs",
  "limitations",
  "owner",
  "publicState",
  "reviewedAt",
];

export function UseCaseRegistrySection() {
  return (
    <section
      id="use-case-registry"
      className="border-b border-slate-200 bg-white py-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Section 4"
          title="AI use-case and intended-use registry."
        >
          Only source-approved current records render. Draft, private and
          withdrawn records fail closed from this page, search, schema and
          sitemap.
        </SectionHeading>

        <div className="mt-7">
          <NonControllingBanner />
        </div>

        <Reveal delay={0.08}>
          <PlaceholderImage
            src="/images/ai-governance/use-case-registry.png"
            alt="Colleagues clasping hands across a table"
            label="Agreeing on intended use"
            className="mt-6 aspect-[1216/296] w-full rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xs font-semibold text-ink">
              Publication eligibility — all criteria required for a record to
              appear
            </h3>

            <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {CRITERIA.map((criterion) => (
                <div
                  key={criterion.title}
                  className="h-full rounded-[10px] border border-slate-200 bg-white px-3 py-2.5"
                >
                  <div className="flex items-start gap-1.5">
                    <CheckIcon className="mt-0.5 size-3 flex-none text-emerald-400" />
                    <span className="text-xs font-semibold text-ink">
                      {criterion.title}
                    </span>
                  </div>
                  <p className="mt-1 pl-4 text-[10px] leading-4 text-slate-400">
                    {criterion.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-slate-200 pt-3">
              <BlockLabel className="!tracking-tight">
                Data model fields
              </BlockLabel>
              <div className="mt-1.5 flex flex-wrap gap-[5px]">
                {DATA_MODEL_FIELDS.map((field) => (
                  <span
                    key={field}
                    className="rounded-[5px] border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] leading-4 text-slate-700"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
