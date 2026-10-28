import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { title: "Entity view", description: "Headcount and workforce records, open HR actions, workflow status, manager and HR ownership and configured operating context.", note: "Always show current scope prominently." },
  { title: "Regional view", description: "Authorized roll-up across selected entities and locations.", note: "Filters must not silently broaden the viewer's permission scope." },
  { title: "Group view", description: "Consolidated workforce structure, operational trends and configuration coverage where supported.", note: "Use clear definitions and “as of” timestamps for material metrics." },
  { title: "Comparison view", description: "Compare selected entities on shared measures only.", note: "Do not compare metrics with materially different definitions without warning." },
  { title: "Export / reporting", description: "Permission-aware export and report access where supported.", note: "Exports inherit or enforce authorization; no “export all” shortcut around access controls." },
];

export function OperationalVisibilitySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Operational visibility
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              See the organization locally and as a whole.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {ROWS.map((row, i) => (
            <Reveal key={row.title} delay={0.05 + i * 0.05}>
              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[0.9fr_1.6fr_1.1fr] sm:items-center">
                <p className="flex items-baseline gap-2 font-semibold text-ink">
                  <span className="size-1.5 flex-none translate-y-[-2px] rounded-full bg-primary" />
                  {row.title}
                </p>
                <p className="text-sm leading-relaxed text-ink/60">{row.description}</p>
                <p className="text-xs leading-relaxed text-ink/40">{row.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
