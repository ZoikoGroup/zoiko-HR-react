import { Container, Reveal } from "@/components/ui";

const FACTS = [
  { title: "Global SaaS platform", description: "Zoiko HR is positioned as a global software-as-a-service platform." },
  { title: "Commercially independent", description: "The platform operates with a standalone commercial identity within the wider group context." },
  { title: "Within Zoiko Group", description: "Zoiko HR sits within Zoiko Group, with deeper parent-group information available separately." },
  { title: "Corporate + product profile", description: "This page gives stakeholders the high-level company and product context before they choose a deeper route." },
];

export function PlatformFactsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.title} delay={0.05 + i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <p className="mt-4 font-semibold text-ink">{fact.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{fact.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
