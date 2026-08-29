import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CRITERIA = [
  {
    title: "Active relationship",
    description:
      "The partner holds a current published relationship record at time of publication.",
  },
  {
    title: "Approved quote or metric",
    description:
      "Every claim, outcome, or excerpt is sourced from an approved Evidence Registry record with owner and review date.",
  },
  {
    title: "Source attribution",
    description:
      "The originating organization, context, and date are explicitly identified and approved for public use.",
  },
  {
    title: "Media rights",
    description:
      "Logo, photography, or co-brand assets have current approved usage rights — expired rights automatically remove the asset.",
  },
  {
    title: "Relationship active at publication",
    description:
      "Evidence tied to an ended or paused relationship is withdrawn from public display.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-emerald-600">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PartnerEvidenceSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-ink">
                Evidence standard
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Partner evidence &amp; stories — publication criteria.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 leading-relaxed text-ink/60">
                Partner outcomes, case evidence, and story excerpts appear on
                this page only when every eligibility gate is met. No
                testimonials, metrics, customer names, or case excerpts are
                published without a corresponding approved Evidence Registry
                record.
              </p>
            </Reveal>

            <div className="mt-6 space-y-3">
              {CRITERIA.map((criterion, i) => (
                <Reveal key={criterion.title} delay={0.2 + i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100">
                      <CheckIcon />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">
                        {criterion.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink/50">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16} y={36}>
            <PlaceholderImage
              src="/images/partners/evidence-stories.png"
              alt="A person presenting charts on a large display screen"
              label="Partner evidence and stories"
              className="h-full min-h-80 w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
