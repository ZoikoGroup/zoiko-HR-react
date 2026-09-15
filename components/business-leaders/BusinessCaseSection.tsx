import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CASES = [
  {
    question: "Can leaders get answers faster?",
    answer:
      "When approved workforce data and workflow status are structured and available through role-aware views, leaders can access answers without routing every question through HR administration.",
  },
  {
    question: "Can we add complexity without losing control?",
    answer:
      "A consistent data and workflow model can provide a stronger operating foundation when adding new teams, entities and locations—without returning to improvised local systems.",
  },
];

export function BusinessCaseSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Business case"
          title="What changes when HR is structured."
          className="max-w-[600px]"
        >
          Each answer is self-contained. No numeric ROI claims are made without
          independent substantiation.
        </SectionHeading>

        <div className="mt-9 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {CASES.map((item, i) => (
              <Reveal key={item.question} delay={0.06 + i * 0.06}>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <p className="break-words text-sm font-medium leading-5 text-primary">
                    {item.question}
                  </p>
                  <p className="mt-3 break-words text-sm font-bold leading-6 text-slate-950">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/business-leaders/business-case.webp"
              alt="Two colleagues laughing during a discussion at a laptop"
              label="Business case"
              className="aspect-[610/306] w-full rounded-xl bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
