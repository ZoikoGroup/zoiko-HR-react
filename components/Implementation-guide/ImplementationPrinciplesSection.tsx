import { Container, Reveal } from "@/components/ui";

const principles = [
  {
    number: "01",
    title: "Scope before schedule",
    description: "Agree what is included before committing to any timeline.",
  },
  {
    number: "02",
    title: "Authority before movement",
    description:
      "Decision rights are established before work begins in each phase.",
  },
  {
    number: "03",
    title: "Evidence before approval",
    description:
      "Gate decisions require documented, reviewed evidence — not assertions.",
  },
  {
    number: "04",
    title: "Exceptions stay visible",
    description:
      "Unresolved items are tracked openly, not closed without resolution.",
  },
  {
    number: "05",
    title: "Privacy by design",
    description:
      "Data handling controls are applied from the earliest phase.",
  },
  {
    number: "06",
    title: "Operational handoff",
    description:
      "Implementation transfers with documented owners, issues and schedules.",
  },
];

export function ImplementationPrinciplesSection() {
  return (
    <section className="bg-slate-50 py-20 text-slate-900 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
            Six implementation principles.
          </h2>
        </Reveal>

        {/* 6-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, idx) => (
            <Reveal key={item.number} delay={idx * 0.06}>
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/10 transition-shadow hover:shadow-md">
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-start pr-12">
                  <span className="font-mono text-xs tracking-wide text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-base font-bold leading-6 text-sky-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>

                {/* Background Watermark Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 right-6 select-none font-heading text-6xl font-black leading-none text-blue-600/10"
                >
                  {item.number}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
