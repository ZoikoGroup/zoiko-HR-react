import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowLink, SectionHeading } from "./shared";

const LEFT = [
  {
    title: "Fragmented goals",
    problem: "Objectives live in spreadsheets, docs or manager notes.",
    answer: "Structured goals with owner, dates, status, visibility and source context.",
  },
  {
    title: "Opaque ratings",
    problem: "A number appears without evidence or explanation.",
    answer: "Criteria, evidence, comments and review history visible before finalization.",
  },
];

const RIGHT = [
  {
    title: "Feedback without context",
    problem: "Comments arrive late or cannot be traced to an agreed expectation.",
    answer:
      "Attributable, time-bounded feedback linked to goals, check-ins or review criteria where configured.",
  },
  {
    title: "No follow-through",
    problem: "Reviews close but development actions disappear.",
    answer: "Development actions carry owner, target date, status and review cadence.",
  },
];

function ChallengeCard({ card }: { card: (typeof LEFT)[number] }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6">
      <div>
        <h3 className="text-base font-extrabold leading-6 text-ink">{card.title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-400">{card.problem}</p>
      </div>
      <p className="border-t border-slate-100 pt-3 text-xs leading-5 text-slate-600">
        <span className="font-semibold text-primary">Zoiko HR: </span>
        {card.answer}
      </p>
    </div>
  );
}

export function ChallengeSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The challenge"
          title="Performance management breaks down when expectations, evidence and ownership live in different places."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,389px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <ChallengeCard card={card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="order-last md:col-span-2 lg:order-none lg:col-span-1 lg:h-full">
            <PlaceholderImage
              src="/images/performance-management/challenge.png"
              alt="Two colleagues reviewing a process dashboard on a monitor"
              label="Reviewing a process dashboard"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div className="grid gap-4">
            {RIGHT.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <ChallengeCard card={card} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <ArrowLink href="#operating-model" className="mt-10">
            See how the performance workflow works
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
