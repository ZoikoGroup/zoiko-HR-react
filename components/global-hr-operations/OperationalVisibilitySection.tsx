import { Container, Reveal } from "@/components/ui";

const VIEWS = [
  {
    name: "Entity view",
    description:
      "Headcount and workforce records, open HR actions, workflow status, manager and HR ownership and configured operating context.",
    note: "Always show current scope prominently.",
  },
  {
    name: "Regional view",
    description: "Authorized roll-up across selected entities and locations.",
    note: "Filters must not silently broaden the viewer's permission scope.",
  },
  {
    name: "Group view",
    description:
      "Consolidated workforce structure, operational trends and configuration coverage where supported.",
    note: 'Use clear definitions and "as of" timestamps for material metrics.',
  },
  {
    name: "Comparison view",
    description: "Compare selected entities on shared measures only.",
    note: "Do not compare metrics with materially different definitions without warning.",
  },
  {
    name: "Export / reporting",
    description:
      "Permission-aware export and report access where supported.",
    note: 'Exports inherit or enforce authorization; no "export all" shortcut around access controls.',
  },
];

export function OperationalVisibilitySection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Operational Visibility
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            See the organization locally and as a whole.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {VIEWS.map((view, i) => (
            <Reveal key={view.name} delay={0.1 + i * 0.05}>
              <div className="grid gap-3 rounded-xl border border-ink/[0.08] bg-[#f8fafc] p-5 lg:grid-cols-[200px_1fr_1fr] lg:gap-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-ink">
                    {view.name}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/60">
                  {view.description}
                </p>
                <p className="text-xs leading-relaxed text-ink/40">
                  {view.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
