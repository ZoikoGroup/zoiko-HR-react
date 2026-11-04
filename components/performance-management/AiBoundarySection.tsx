import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowLink, CheckIcon, SectionHeading } from "./shared";

const ALLOWED = [
  {
    title: "Draft a review summary",
    body: "Only from content the user is authorized to access; user reviews and edits before saving.",
  },
  {
    title: "Summarize goal or check-in history",
    body: "Scoped records; generated summary distinguished from source facts; drillback allowed.",
  },
  {
    title: "Draft feedback wording",
    body: "User provides context and remains author and approver; no fabricated evidence.",
  },
  {
    title: "Surface incomplete sections",
    body: "Rule-based or AI-assisted prompt for missing required fields; does not determine performance outcome.",
  },
  {
    title: "Answer 'what is due?'",
    body: "Permission-aware retrieval from workflow state; cites the relevant task and cycle.",
  },
];

export function AiBoundarySection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="AI assistance boundary"
          title="Use AI to assist approved HR work — never to hide who made the decision."
          className="max-w-[640px]"
        >
          Where enabled, governed AI assistance can support drafting,
          summarization and workflow tasks. Human review is mandatory. AI does
          not autonomously make high-impact employment decisions.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.08em] text-indigo-400">
                Allowed where approved and enabled
              </p>
              <ul className="mt-5 flex flex-col gap-5">
                {ALLOWED.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 flex-none text-indigo-400" />
                    <span>
                      <span className="block text-sm font-semibold leading-5 text-white">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/performance-management/ai-assistance.png"
              alt="A group collaborating over laptops and notes at a shared table"
              label="Team collaborating over laptops"
              loading="lazy"
              className="aspect-[584/366] w-full rounded-2xl border border-white/10 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <ArrowLink href="/ai-governance" tone="dark" className="mt-10">
            Explore AI Governance
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
