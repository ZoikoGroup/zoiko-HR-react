import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { pressure: "New legal entity", breaks: "Records, ownership and reporting may split across tools or duplicate spreadsheets." },
  { pressure: "New country or location", breaks: "Local policies and processes become hard to distinguish from global standards." },
  { pressure: "Distributed team", breaks: "Managers and employees may not know which process, policy or approval route applies." },
  { pressure: "Acquisition or reorganization", breaks: "Legacy structures and data need controlled mapping into the target operating model." },
  { pressure: "More leadership layers", breaks: "Group leaders need consolidated visibility while local teams still require appropriately scoped access." },
];

export function ExpansionPressureSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every new market adds structure. It should not add another
              HR silo.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              The problem is unmanaged variation, duplicated systems and
              unclear ownership — not local difference itself. The
              solution is explicit structure plus governed local
              configuration.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10">
            <div className="grid grid-cols-[1fr_1.4fr] gap-6 border-b border-slate-200 pb-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Expansion pressure
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                What breaks without a governed model
              </p>
            </div>
            <div className="divide-y divide-slate-200">
              {ROWS.map((row, i) => (
                <Reveal key={row.pressure} delay={0.06 + i * 0.05}>
                  <div className="grid grid-cols-[1fr_1.4fr] items-baseline gap-6 py-4">
                    <p className="flex items-baseline gap-2 font-semibold text-ink">
                      <span className="size-1.5 flex-none translate-y-[-2px] rounded-full bg-primary" />
                      {row.pressure}
                    </p>
                    <p className="text-sm leading-relaxed text-ink/60">{row.breaks}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
