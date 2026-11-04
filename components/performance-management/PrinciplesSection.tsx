import { Container, Reveal } from "@/components/ui";

const PRINCIPLES = [
  {
    icon: "👤",
    title: "Human accountable",
    body: "Material performance decisions stay with authorized people.",
  },
  {
    icon: "🔒",
    title: "Permission-aware",
    body: "Employees, managers and HR see only the context their role and purpose permit.",
  },
  {
    icon: "📋",
    title: "Evidence-preserving",
    body: "Goals, feedback, review inputs and state changes remain attributable and traceable.",
  },
  {
    icon: "⚙️",
    title: "Configurable",
    body: "Cycles, criteria, visibility and workflows adapt to approved organizational requirements.",
  },
  {
    icon: "🌐",
    title: "Global/local",
    body: "Shared standards can coexist with approved entity, location and jurisdiction rules.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-10">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {PRINCIPLES.map((principle, i) => (
            <li key={principle.title}>
              <Reveal delay={i * 0.06} className="flex flex-col gap-2">
                <span aria-hidden className="text-2xl leading-8">
                  {principle.icon}
                </span>
                <h2 className="text-sm font-semibold leading-5 text-ink">
                  {principle.title}
                </h2>
                <p className="text-xs leading-5 text-slate-500">{principle.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
