import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StepNumber } from "./shared";

const STEPS = [
  { title: "Detect", body: "Classify request against approved use-case and prohibited-use controls." },
  { title: "Stop", body: "Do not generate the prohibited outcome or reveal restricted context." },
  { title: "Explain", body: "Give a concise, non-accusatory reason category." },
  {
    title: "Route",
    body: "Offer approved alternative: source view, human reviewer, policy owner, support or AI Governance.",
  },
  { title: "Record", body: "Log the governed event only as required by approved policy." },
];

export function RefusalPatternsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Prohibited use boundary"
              title="Safe refusal patterns — as product proof, not a footnote."
            >
              When a request falls outside approved use-case or prohibited-use
              controls, the assistant refuses narrowly, explains a safe reason
              category, and routes to an appropriate human, process authority or
              AI Governance.
            </SectionHeading>

            <ol className="mt-6 flex flex-col gap-4">
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 0.05} className="flex items-start gap-3">
                    <StepNumber n={i + 1} />
                    <span>
                      <span className="block text-sm font-semibold leading-5 text-ink">{step.title}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-500 sm:text-sm">
                        {step.body}
                      </span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={0.12}>
            <p className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-slate-400">
              Live refusal example
            </p>
            <PlaceholderImage
              src="/images/ai-assistance/refusal-example.png"
              alt="An employee shaking hands with an adviser across a desk"
              label="Routing a request to the right person"
              loading="lazy"
              className="mt-3 aspect-[4/3] w-full rounded-2xl border border-slate-200 sm:aspect-video lg:aspect-[568/500]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
