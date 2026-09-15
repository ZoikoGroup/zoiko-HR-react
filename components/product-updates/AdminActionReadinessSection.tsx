import { Container, Reveal } from "@/components/ui";

const ACTION_CLASSES = [
  {
    label: "Required action",
    card: "border-rose-400/30 bg-rose-400/5",
    chip: "bg-rose-400/10 text-rose-400",
    description:
      "Who must act, what category of action, effective or deadline context, and authoritative Administrator Guide or Documentation link. Prominent placement at top of update detail.",
  },
  {
    label: "Recommended action",
    card: "border-amber-400/30 bg-amber-400/5",
    chip: "bg-amber-400/10 text-amber-400",
    description:
      "Clearly distinguished from mandatory. Explains purpose and approved audience without urgency styling.",
  },
  {
    label: "Optional action",
    card: "border-blue-400/30 bg-blue-400/5",
    chip: "bg-blue-400/10 text-blue-400",
    description:
      "Routes to current enablement or configuration guidance. No urgency framing.",
  },
  {
    label: "No action required",
    card: "border-black/10 bg-white",
    chip: "bg-slate-100 text-slate-500",
    description:
      "Shown only when approved source explicitly establishes it. Never inferred from the absence of instructions.",
  },
  {
    label: "Not established",
    card: "border-black/5 bg-neutral-50",
    chip: "bg-slate-100 text-slate-400",
    description:
      "Action advice not synthesized. Routes to current Documentation or Help Center as appropriate.",
  },
];

export function AdminActionReadinessSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Administrator action and change readiness.
          </h2>
          <p className="mt-1.5 max-w-2xl text-slate-500">
            Each update carries a source-backed action class. Required and
            recommended actions are prioritized and linked to the authoritative
            Administrator Guide or Documentation.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {ACTION_CLASSES.map((actionClass, i) => (
            <Reveal key={actionClass.label} delay={Math.min(i * 0.06, 0.3)}>
              <div
                className={`flex flex-col gap-3 rounded-2xl border px-6 py-4 sm:flex-row sm:items-start sm:gap-4 ${actionClass.card}`}
              >
                <span
                  className={`inline-flex flex-none self-start rounded-full px-2.5 py-1 text-xs font-semibold sm:mt-0.5 ${actionClass.chip}`}
                >
                  {actionClass.label}
                </span>
                <p className="text-sm leading-relaxed text-slate-700">
                  {actionClass.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
