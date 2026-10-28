import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel } from "./shared";

const TRIGGERS = [
  {
    name: "Model / provider change",
    detail:
      "Revalidate data-use disclosure, security/privacy, evaluations, limitations and public record.",
  },
  {
    name: "Decision-right change",
    detail: "Requires governance / legal / product re-review and clear effective date.",
  },
  {
    name: "Prompt / policy / tool change",
    detail: "Review if it materially changes use, outputs, data, safety or decision rights.",
  },
  {
    name: "Data-source change",
    detail: "Review purpose, sensitivity, access, retention, evaluation and transparency.",
  },
  {
    name: "New geography / contract",
    detail: "Review availability, privacy / legal / provider disclosures and localization.",
  },
  {
    name: "Material limitation / incident",
    detail: "Correct public record and reevaluate related claims where appropriate.",
  },
];

export function ChangeGovernanceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 12"
          title="Change, versioning and material-change governance."
        >
          Material AI changes invalidate public disclosures and require
          re-review. Superseded and withdrawn records are removed from current
          schema, search and sitemap — history remains governed.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">
            <BlockLabel>Material-change triggers and required re-review</BlockLabel>
            <div className="mt-2.5 flex flex-col gap-2">
              {TRIGGERS.map((trigger, i) => (
                <Reveal key={trigger.name} delay={Math.min(i * 0.05, 0.3)}>
                  <div
                    className={`rounded-xl border border-slate-200 px-4 py-3 ${
                      i % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <span aria-hidden className="text-[10px] text-primary">
                        ▸
                      </span>
                      {trigger.name}
                    </p>
                    <p className="mt-1 pl-4 text-xs leading-4 text-slate-500">
                      {trigger.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.14} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/change-governance.png"
              alt="A facilitator working through a change at a whiteboard"
              label="Walking through a material change"
              className="aspect-[300/420] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
