import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const LEFT_CARDS = [
  {
    icon: "🗂",
    title: "What the tour shows",
    body: "Approved product concepts, representative screens, synthetic data and example decision flows.",
  },
  {
    icon: "⚙️",
    title: "What can be configured",
    body: "Org structures, workflow triggers, approval chains, field visibility, integrations and access rules.",
  },
];

const RIGHT_CARDS = [
  {
    icon: "🔒",
    title: "What permission controls",
    body: "Role-based visibility and action gates shown with explicit read, edit and restricted labels.",
  },
  {
    icon: "📊",
    title: "What reporting reveals",
    body: "Operational dashboards, exception queues and compliance-adjacent views with example data.",
  },
];

export function InsideTheTourSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Inside the Tour
          </span>
          <h2 className="mt-3 max-w-[520px] font-heading text-3xl font-bold leading-10">
            What you see, what you can configure, and what the boundaries are.
          </h2>
          <p className="mt-5 max-w-[580px] leading-6 text-slate-400">
            Each chapter is annotated to distinguish approved product behavior
            from configuration options and jurisdictional variables. Nothing
            requires signup.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            {LEFT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.08 + i * 0.06} className="h-full">
                <InsideCard {...card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/product-tour/inside-the-tour.png"
              alt="A colleague guiding another through a screen on a laptop"
              label="Inside the tour"
              className="h-full min-h-72 w-full rounded-xl border border-white/10 bg-white"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {RIGHT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.2 + i * 0.06} className="h-full">
                <InsideCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
            <p className="text-sm leading-6 text-slate-300">
              After completing the tour, you will have seen{" "}
              <strong className="font-semibold text-white">
                10 representative product chapters
              </strong>{" "}
              covering the full Zoiko HR operational surface — with no data
              submitted and no account created.
            </p>
            <Button href="#tour-chapters" className="mt-4 px-6 py-2.5">
              Begin Tour →
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function InsideCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-slate-950/60 p-5">
      <span aria-hidden className="block text-xl leading-8">
        {icon}
      </span>
      <p className="mt-3 font-heading font-bold text-white">{title}</p>
      <p className="mt-1.5 text-xs leading-5 text-slate-400">{body}</p>
    </div>
  );
}
