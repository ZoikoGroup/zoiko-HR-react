import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DEFINITIONS = [
  {
    label: "Component status",
    description:
      "The current public state of one approved component, defined in plain language.",
  },
  {
    label: "Incident lifecycle",
    description:
      "Investigating → identified → mitigating → monitoring → resolved, only once the taxonomy is adopted.",
  },
  {
    label: "Impact vs. severity",
    description:
      "Customer impact is public; internal incident severity may stay unpublished.",
  },
  {
    label: "Operational vs. maintenance",
    description:
      "Maintenance is planned work; incidents are unplanned operational events.",
  },
  {
    label: "Time semantics",
    description:
      "Detected, published, updated, and resolved times are each labeled precisely and never merged.",
  },
];

function DefinitionCard({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="h-full rounded-[10px] border border-slate-200 p-5">
      <p className="text-sm font-bold text-ink">{label}</p>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

export function StatusDefinitionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Status &amp; incident definitions.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            Vocabulary for reading this page — internal severity labels are
            never converted into customer promises.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEFINITIONS.slice(0, 4).map((definition, i) => (
            <Reveal key={definition.label} delay={Math.min(i * 0.05, 0.3)}>
              <DefinitionCard {...definition} />
            </Reveal>
          ))}

          <Reveal delay={0.2} className="sm:col-span-2 lg:row-span-2">
            <PlaceholderImage
              src="/images/service-status/definitions.png"
              alt="Two colleagues comparing notes at a laptop"
              label="Colleagues comparing notes"
              className="h-full min-h-[12rem] w-full rounded-[10px] border border-slate-200"
            />
          </Reveal>

          <Reveal delay={0.25}>
            <DefinitionCard {...DEFINITIONS[4]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
