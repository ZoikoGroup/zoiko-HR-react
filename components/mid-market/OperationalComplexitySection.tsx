import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_CARDS = [
  {
    title: "More owners",
    description:
      "HR work is distributed across specialists, administrators, managers, IT or regional owners.",
  },
  {
    title: "More systems",
    description:
      "Identity, payroll, time, recruiting, finance, documents or analytics may exchange governed data.",
  },
];

const RIGHT_CARDS = [
  {
    title: "More exceptions",
    description:
      "Edge cases and corrections require traceable review instead of informal handling.",
  },
  {
    title: "More change",
    description:
      "Configuration and process changes need versioning, rollout, validation and communication.",
  },
];

function SignalCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
      <p className="font-bold text-sky-950">{title}</p>
      <p className="mt-2 text-sm leading-5 text-slate-500">{description}</p>
    </div>
  );
}

export function OperationalComplexitySection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Where operational complexity shows up.
          </h2>
          <p className="mt-3 max-w-[700px] leading-6 text-slate-600">
            Recognizable operating signals — not company-size or maturity
            bands.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {LEFT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <SignalCard {...card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/complexity.png"
              alt="A team lead explaining a process to colleagues"
              label="Operating signals"
              className="h-full min-h-64 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {RIGHT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <SignalCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
