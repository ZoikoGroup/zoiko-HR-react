import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  {
    number: "01",
    ghost: "01",
    title: "Discover",
    done: true,
    items: [
      "HR operating model mapped",
      "Data sources identified",
      "Role/scope inventory drafted",
    ],
  },
  {
    number: "02",
    ghost: "02",
    title: "Model",
    done: true,
    items: [
      "Object model reviewed",
      "Sensitive fields classified",
      "Source authority defined",
    ],
  },
  {
    number: "05",
    ghost: "03",
    title: "Integrate",
    done: false,
    items: [
      "Connectors configured",
      "Source authority set",
      "Reconciliation tested",
    ],
  },
  {
    number: "06",
    ghost: "04",
    title: "Validate",
    done: false,
    items: [
      "Permission tests passing",
      "Data quality verified",
      "Exception flows tested",
    ],
  },
];

export function ImplementationReadinessSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Implementation and Change Readiness
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Discovery to stabilization — realistic adoption path for HR teams.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            No fixed implementation time, migration success, adoption rate or
            outcome guarantee without approved evidence.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-amber-100 bg-amber-50/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Checklist status requires owner and evidence. Launch gate cannot
              be marked ready if P0 validation items remain unresolved.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,640px)_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {STAGES.map((stage, i) => (
              <Reveal key={stage.title} delay={0.16 + i * 0.06}>
                <div
                  className={`relative h-full overflow-hidden rounded-xl bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${
                    stage.done ? "border-t-2 border-emerald-400" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute -top-1 right-3 font-heading text-5xl font-extrabold leading-none text-black/5"
                  >
                    {stage.ghost}
                  </span>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="text-xs font-semibold text-sky-500">
                      {stage.number}
                    </span>
                    {stage.title}
                    {stage.done && (
                      <span className="ml-auto text-[10px] font-semibold text-emerald-500">
                        ✓ Done
                      </span>
                    )}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <span
                          aria-hidden
                          className={`mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-sm text-[9px] ${
                            stage.done
                              ? "bg-emerald-100 text-emerald-500"
                              : "bg-slate-200 text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/implementation.png"
              alt="Colleagues planning together in a meeting room"
              label="Implementation readiness"
              className="h-full min-h-64 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/resources/implementation-guide"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600"
          >
            View Implementation Guide
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
