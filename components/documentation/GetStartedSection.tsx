import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PATHWAYS = [
  {
    title: "New HR administrator setup",
    audience: "For HR Administrator",
    stages: ["Prerequisites", "Initial setup", "Configure", "Validate"],
    note: "Elevated permissions required; broader governance routes to the Administrator Guide.",
  },
  {
    title: "Manager enablement",
    audience: "For Manager",
    stages: ["Prerequisites", "Configure", "Validate"],
    note: "Scoped to manager-level actions on direct reports only.",
  },
];

function PathwayCard({ pathway }: { pathway: (typeof PATHWAYS)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 p-6">
      <h3 className="font-bold text-ink">{pathway.title}</h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">
        {pathway.audience}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {pathway.stages.map((stage) => (
          <span
            key={stage}
            className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-teal-600"
          >
            {stage}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        {pathway.note}
      </p>
    </div>
  );
}

export function GetStartedSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Get started &amp; setup pathways.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Prerequisites → initial setup → configure → validate → next step. No
            invented onboarding milestones.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          <Reveal>
            <PathwayCard pathway={PATHWAYS[0]} />
          </Reveal>

          <Reveal delay={0.08}>
            <PlaceholderImage
              src="/images/documentation/get-started.png"
              alt="A colleague on a call reviewing an employee profile on a laptop"
              label="Get started pathways"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 sm:aspect-[21/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <PathwayCard pathway={PATHWAYS[1]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
