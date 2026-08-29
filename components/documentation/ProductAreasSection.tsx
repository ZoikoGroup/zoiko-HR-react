import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  {
    title: "Employee Records",
    description: "Profiles, documents and effective-dated changes.",
    tags: ["How-to", "Reference"],
  },
  {
    title: "Onboarding & Lifecycle",
    description: "Tasks, documents and transitions.",
    tags: ["Get started", "How-to"],
  },
  {
    title: "Workflows & Approvals",
    description: "Routing, approvals and audit evidence.",
    tags: ["How-to", "Troubleshooting"],
  },
  {
    title: "Organization Management",
    description: "Entities, teams and reporting structures.",
    tags: ["Configuration", "Concept"],
  },
];

export function ProductAreasSection() {
  return (
    <section id="product-areas" className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Browse by product area.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Approved product/module taxonomy only. If an area has no published
            documentation yet, we say so rather than invent a guide.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                  <h3 className="text-sm font-bold text-ink">{area.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {area.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/documentation/product-areas.png"
              alt="Two support specialists working through paperwork at their desks"
              label="Documentation product areas"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
