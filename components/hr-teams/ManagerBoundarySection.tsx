import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    title: "Manager confirms context",
    body: "Manager confirms approved organization/role context for a new starter or change event.",
    points: [
      "Task-essential context only",
      "No HR notes or restricted fields",
      "Timestamp + role recorded",
    ],
    accent: "border-l-sky-500",
    dotClass: "bg-sky-500",
  },
  {
    title: "Manager provides required approval",
    body: "Manager completes an assigned approval task under configured decision authority.",
    points: [
      "Decision scope explicit",
      "Rationale required where configured",
      "Evidence preserved",
    ],
    accent: "border-l-primary",
    dotClass: "bg-primary",
  },
];

export function ManagerBoundarySection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Manager Collaboration Boundary
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Authorized manager inputs and approvals — without pre-building the
            Managers solution.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            Corporate reporting line alone is not permission inheritance.
            Manager-specific dashboards and self-service belong to the separate
            Managers destination.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <div
                className={`h-full rounded-xl border-l-[3px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${card.accent}`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs text-slate-500"
                    >
                      <span
                        aria-hidden
                        className={`mt-1.5 size-1 shrink-0 rounded-full ${card.dotClass}`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.24} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/manager-boundary.png"
              alt="Three colleagues looking at a laptop together"
              label="Manager collaboration boundary"
              className="h-full min-h-56 w-full rounded-xl border-l-[3px] border-violet-400 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Manager-specific dashboards, self-service, team administration and
              role-specific product narrative belong to the later Managers
              destination — not this page.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
