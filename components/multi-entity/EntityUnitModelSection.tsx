import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CONCEPTS = [
  { title: "Legal entity", body: "A distinct legal registration." },
  { title: "Business unit", body: "An operating division." },
  { title: "Management node", body: "Reporting relationships." },
  { title: "Shared-service unit", body: "A team serving multiple entities." },
];

export function EntityUnitModelSection() {
  return (
    <section className="bg-sky-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            The Entity &amp; Unit Operating Model
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold">
            Define each organizational boundary before you govern it.
          </h2>
          <p className="mt-4 max-w-[700px] leading-6 text-slate-300">
            Each concept carries its own type, owner, source and status. Click a
            card for how it relates to the others.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,700px)_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {CONCEPTS.map((concept, i) => (
              <Reveal key={concept.title} delay={0.08 + i * 0.06}>
                <div className="h-full rounded-xl border border-blue-950 bg-slate-900 p-5">
                  <p className="font-heading font-bold">{concept.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {concept.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/operating-model.png"
              alt="A facilitator presenting to colleagues at a whiteboard"
              label="Entity and unit operating model"
              className="h-48 w-full rounded-xl border border-blue-950 bg-slate-900 lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-7 text-xs leading-5 text-slate-400">
            The same two objects may have multiple different relationships.
            Legal, tax, payroll, financial or regulatory meaning is never
            derived from an administrative relationship alone.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
