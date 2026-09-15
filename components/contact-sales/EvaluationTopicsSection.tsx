import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Topic numbers follow the design's own sequence (01, 03, 04, 06) rather than
 * renumbering — the intermediate topics are not published on this page.
 */
export const TOPICS = [
  {
    number: "01",
    badge: "bg-primary/10 text-primary",
    title: "Product and solution fit",
    description:
      "Evaluate how Zoiko HR addresses your HR operations, people management, or organizational workflows.",
  },
  {
    number: "03",
    badge: "bg-green-500/10 text-green-500",
    title: "Implementation or migration",
    description:
      "Explore implementation scope, timing, and current-system context. No delivery dates or fees implied.",
  },
  {
    number: "04",
    badge: "bg-yellow-500/10 text-yellow-500",
    title: "Integrations and connected systems",
    description:
      "Identify relevant integration categories. No credentials, tenant IDs, or configuration data.",
  },
  {
    number: "06",
    badge: "bg-orange-400/10 text-orange-400",
    title: "Pricing, commercial or other sales",
    description:
      "Route a commercial or pricing question. No prices, discounts, minimums or terms are shown here.",
  },
];

function TopicCard({
  number,
  badge,
  title,
  description,
}: (typeof TOPICS)[number]) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-blue-950 bg-slate-900 py-4 pl-5 pr-4">
      <span
        className={`inline-flex rounded-[5px] px-1.5 py-0.5 font-mono text-xs leading-4 ${badge}`}
      >
        {number}
      </span>
      <h3 className="pt-2 text-sm font-semibold leading-5 text-slate-300">
        {title}
      </h3>
      <p className="pt-1.5 text-xs leading-4 text-slate-500">{description}</p>
    </div>
  );
}

export function EvaluationTopicsSection() {
  return (
    <section id="evaluation-topics" className="scroll-mt-24 bg-slate-950 py-16">
      <Container>
        <SectionHeading
          eyebrow="Evaluation topics · E4"
          title="What would you like to discuss?"
          tone="dark"
          className="max-w-[800px]"
        >
          Select a topic to see relevant context fields. Topics are routing
          intents only — selection does not imply entitlement, availability,
          pricing, or compliance.
        </SectionHeading>

        {/* Two card columns with the image spanning both rows between them;
            once the grid collapses the image drops below all four cards. */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <TopicCard {...TOPICS[0]} />
          </Reveal>

          <Reveal
            delay={0.12}
            className="order-last sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2"
          >
            <PlaceholderImage
              src="/images/contact-sales/evaluation-topics.png"
              alt="A team in an evening discussion around a meeting table"
              label="Evaluation topics"
              className="aspect-[16/9] w-full rounded-xl border border-blue-950 bg-slate-900 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <TopicCard {...TOPICS[1]} />
          </Reveal>

          <Reveal delay={0.24}>
            <TopicCard {...TOPICS[2]} />
          </Reveal>

          <Reveal delay={0.3}>
            <TopicCard {...TOPICS[3]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
