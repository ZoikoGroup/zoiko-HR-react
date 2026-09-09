import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StateChip, RuledCard } from "./shared";

const CATEGORIES = [
  "Missing evidence",
  "Insufficient evidence",
  "Failed control step",
  "Source unavailable",
  "Policy conflict",
  "Access issue",
  "Mapping / currentness issue",
  "Other approved category",
];

const LEFT = [
  {
    eyebrow: "Case",
    eyebrowClass: "text-primary",
    borderClass: "border-t-primary",
    title: "Stable case reference",
    body: "Affected policy, control and evidence versions and scope are explicit; no case exists without exact references.",
  },
  {
    eyebrow: "Closure",
    eyebrowClass: "text-red-500",
    borderClass: "border-t-red-500",
    title: "Closure guard",
    body: "Closure requires explicit criteria and current evidence; a workflow moving forward or a date passing alone never closes a case.",
  },
];

const RIGHT = [
  {
    eyebrow: "Owner",
    eyebrowClass: "text-violet-600",
    borderClass: "border-t-violet-600",
    title: "Named accountability",
    body: "Owner is the accountable role or user per governance — never inferred from job title alone.",
  },
  {
    eyebrow: "Reopen",
    eyebrowClass: "text-blue-950",
    borderClass: "border-t-blue-950",
    title: "Reopen trigger",
    body: "Late correction, source withdrawal, version change, expired evidence or an invalidated decision can reopen a closed case.",
  },
];

export function ExceptionsSection() {
  return (
    <section id="exceptions" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Exceptions & remediation"
          title="An open case is scoped, owned and closed on evidence — never on a date alone."
          className="max-w-[700px]"
        >
          Accepted exceptions are bounded and expiring, not implicit permanent
          waivers.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-9">
            <p className="text-sm font-bold text-sky-950">Issue categories</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <StateChip key={category}>{category}</StateChip>
              ))}
            </div>
          </div>
        </Reveal>

        {/*
          Three columns at lg: two stacked cards, the photo, two stacked cards.
          Below lg the photo drops to the end so the four cards read in order.
        */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {LEFT.map((card, i) => (
              <Reveal key={card.title} delay={0.1 + i * 0.05}>
                <RuledCard {...card}>{card.body}</RuledCard>
              </Reveal>
            ))}
          </div>

          <div className="order-last flex flex-col gap-6 md:col-span-2 lg:order-none lg:col-span-1">
            <Reveal delay={0.14} className="h-full">
              <PlaceholderImage
                src="/images/zoiko-comply/exceptions-remediation.webp"
                alt="A presenter being applauded after a review meeting"
                label="Exceptions and remediation"
                className="aspect-video w-full rounded-xl border border-slate-200 border-t-[2.4px] border-t-teal-600 bg-slate-100 lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {RIGHT.map((card, i) => (
              <Reveal key={card.title} delay={0.1 + i * 0.05}>
                <RuledCard {...card}>{card.body}</RuledCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
