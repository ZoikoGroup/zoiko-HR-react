import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    title: "Add teams and business units",
    body: "Extend organizational structure without rebuilding HR processes from scratch.",
  },
  {
    title: "Maintain role-based access and responsibilities",
    body: "As the organization grows, keep visibility and ownership aligned with operating scope.",
  },
  {
    title: "Adapt processes without returning to disconnected systems",
    body: "Configure HR operations by entity, team and jurisdiction within one governed environment.",
  },
];

export function GrowthReadinessSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Growth readiness"
              title="Build an HR foundation that can grow with the organization."
            >
              As teams, entities and locations expand, Zoiko HR can help preserve
              a consistent workforce structure while allowing authorized
              configuration for different operating contexts.
            </SectionHeading>

            <Reveal delay={0.1}>
              <ul className="mt-7 flex flex-col gap-4">
                {STEPS.map((step) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="flex-none pt-0.5 text-base leading-6 text-primary"
                    >
                      →
                    </span>
                    <div>
                      <p className="break-words text-sm font-semibold leading-5 text-slate-950">
                        {step.title}
                      </p>
                      <p className="pt-0.5 break-words text-xs leading-5 text-gray-500">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase leading-4 tracking-wide text-gray-400">
                Relevant solutions
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/business-leaders/growth-readiness.webp"
                alt="Two colleagues in conversation across a meeting table"
                label="Relevant solutions"
                className="mt-4 aspect-[592/360] w-full rounded-xl border border-slate-200 bg-slate-100"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
