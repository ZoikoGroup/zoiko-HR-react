import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CONCEPTS = [
  {
    title: "Employee Record",
    description:
      "The canonical profile and document set for a person, including effective-dated changes.",
    lifecycle: "Lifecycle: Draft → Current → Corrected → Archived",
  },
  {
    title: "Effective-Dated Change",
    description:
      "A change to a record that takes effect on a specific date without discarding prior history.",
    lifecycle: "Lifecycle: Pending → Effective → Historical",
  },
  {
    title: "Organization & Entity",
    description:
      "The structural grouping of teams, locations, and legal entities.",
    lifecycle: "Lifecycle: Configured → Active → Archived",
  },
  {
    title: "Role & Permission",
    description:
      "The approved label controlling what a user can view or perform.",
    lifecycle: "Lifecycle: Assigned → Active → Revoked",
  },
];

export function CoreConceptsSection() {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Core product concepts.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Canonical objects, terminology, and lifecycle boundaries — no
            inferred relationships.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {CONCEPTS.map((concept, i) => (
              <Reveal key={concept.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl bg-white p-6">
                  <h3 className="font-bold text-ink">{concept.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {concept.description}
                  </p>
                  <p className="mt-auto border-t border-gray-100 pt-3 text-xs text-slate-400">
                    {concept.lifecycle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <PlaceholderImage
              src="/images/documentation/core-concepts.png"
              alt="An operations team monitoring data across multiple screens"
              label="Core product concepts"
              className="aspect-[16/10] w-full rounded-xl border border-white/10 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
