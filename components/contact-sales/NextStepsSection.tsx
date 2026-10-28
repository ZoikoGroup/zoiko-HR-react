import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    title: "We receive your inquiry",
    body: "Shown only after the system durably accepts your submission. Receipt does not equal sales assignment or response.",
  },
  {
    title: "We route it by topic and context",
    body: "Your selected topic and optional context are used to route the inquiry to the appropriate commercial team. If routing is pending, it is labeled pending.",
  },
  {
    title: "The commercial team can follow up",
    body: "No named representative, response channel, or timing is promised unless an approved sales policy supplies it. Timing varies.",
  },
  {
    title: "Specialists may join the evaluation",
    body: "Security, implementation, integrations, product or procurement coordination may involve additional teams. This is conditional, not guaranteed.",
  },
];

export function NextStepsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What happens next · E9"
              title="Truthful next steps"
            >
              These steps are conditional and source-controlled. No
              response-time guarantee, demo promise, or named rep is published
              here.
            </SectionHeading>

            <Reveal delay={0.12}>
              <PlaceholderImage
                src="/images/contact-sales/next-steps.png"
                alt="Colleagues gathered around a table in discussion"
                label="What happens next"
                className="mt-8 aspect-[371/177] w-full rounded-lg bg-red-300"
              />
            </Reveal>
          </div>

          {/* The rule starts at the centre of the first marker and runs the
              full height of the step block, centred under the 20px dots. */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute bottom-0 left-[9px] top-[10px] w-0.5 bg-slate-200"
            />
            <div className="flex flex-col gap-9">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={0.06 + i * 0.06}>
                  <div className="flex gap-5">
                    <span className="relative z-10 flex size-5 flex-none items-center justify-center rounded-full bg-primary text-xs font-extrabold leading-4 text-white">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-6 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="pt-1 text-xs leading-5 text-slate-500">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
