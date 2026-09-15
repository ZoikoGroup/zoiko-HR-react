import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STAGES = [
  {
    title: "Template",
    body: "A document starts from an approved template or a blank governed draft.",
  },
  {
    title: "Draft",
    body: "Content is authored with an explicit owner, source and change reason.",
  },
  {
    title: "Review",
    body: "A named reviewer compares proposed content against the current version.",
  },
  {
    title: "Publish",
    body: "An approved version becomes current on its effective date — the prior version is never overwritten.",
  },
  {
    title: "Distribute",
    body: "An assignment freezes an exact version to a defined audience and channel.",
  },
  {
    title: "Acknowledge",
    body: "Recipients access accessible content and take an explicit, version-bound action.",
  },
  {
    title: "Review / Supersede",
    body: "Ownership reviews currentness on schedule; a new version supersedes the old one, which stays traceable.",
  },
];

export function ContentLifecycleSection() {
  return (
    <section id="document-lifecycle" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Governed content lifecycle"
          title="Seven stages, from template to supersession."
          className="max-w-[720px]"
        >
          A document is never one file. It has identity, owner, version lineage,
          access class, distribution and acknowledgment evidence — nothing skips
          a stage.
        </SectionHeading>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,666px)_minmax(0,514px)] lg:gap-16">
          <div>
            {STAGES.map((stage, i) => (
              <Reveal key={stage.title} delay={Math.min(0.06 + i * 0.04, 0.3)}>
                <div className="flex gap-6 border-t border-slate-200 py-6">
                  <span className="w-11 flex-none text-xl font-extrabold text-primary">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-sky-950">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-bold leading-5 text-slate-600">
                      {stage.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the stage list sets the height. */}
          <div className="relative min-h-64 lg:min-h-0 lg:self-stretch">
            <Reveal delay={0.16} className="absolute inset-0">
              <PlaceholderImage
                src="/images/documents-policies/lifecycle.webp"
                alt="Colleagues reviewing printed documents together"
                label="Governed content lifecycle"
                className="h-full w-full rounded-[10px] bg-slate-100"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
