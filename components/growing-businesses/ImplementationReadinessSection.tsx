import { Container, Reveal } from "@/components/ui";

type Stage = {
  number: number;
  title: string;
  /** Empty for stages whose copy is not yet supplied — see note in page docs. */
  description?: string;
  owner?: string;
  dependencies?: string;
};

const STAGES: Stage[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "Confirm goals, current processes, governance needs, approved product scope, stakeholders and constraints.",
    owner: "Customer + Zoiko",
    dependencies: "Business goals, stakeholders",
  },
  { number: 2, title: "Prepare" },
  { number: 3, title: "Configure" },
  { number: 4, title: "Validate" },
  { number: 5, title: "Launch" },
  { number: 6, title: "Adopt & Improve" },
];

export function ImplementationReadinessSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Implementation &amp; Readiness
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            A realistic, owner-based readiness path.
          </h2>
          <p className="mt-3 max-w-[640px] text-ink/50">
            Six stages with dependencies, owners and exit criteria. No stage
            duration or go-live date is guaranteed on this page.
          </p>
          <p className="mt-3 text-xs leading-5 text-ink/40">
            Timing rule: scope depends on approved product areas, data,
            configuration, integrations, testing and customer decisions.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={Math.min(i * 0.05, 0.25)}>
              <details
                className="group rounded-xl border border-slate-200 bg-white"
                open={stage.number === 1}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                  <span className="flex items-center gap-4">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary">
                      {stage.number}
                    </span>
                    <span className="font-semibold text-ink">
                      {stage.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-sm text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  >
                    ▼
                  </span>
                </summary>

                {stage.description && (
                  <div className="border-t border-slate-200 px-5 py-4">
                    <p className="text-sm text-ink/70">{stage.description}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                        <p className="text-xs text-ink/40">Owner</p>
                        <p className="mt-1 text-sm text-ink">{stage.owner}</p>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                        <p className="text-xs text-ink/40">
                          Key dependencies
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {stage.dependencies}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
