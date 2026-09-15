import { Container, Reveal } from "@/components/ui";

const ROWS = [
  {
    pressure: "New legal entity",
    impact:
      "Records, ownership and reporting may split across tools or duplicate spreadsheets.",
  },
  {
    pressure: "New country or location",
    impact:
      "Local policies and processes become hard to distinguish from global standards.",
  },
  {
    pressure: "Distributed team",
    impact:
      "Managers and employees may not know which process, policy or approval route applies.",
  },
  {
    pressure: "Acquisition or reorganization",
    impact:
      "Legacy structures and data need controlled mapping into the target operating model.",
  },
  {
    pressure: "More leadership layers",
    impact:
      "Group leaders need consolidated visibility while local teams still require appropriately scoped access.",
  },
];

export function ExpansionPressureSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Every new market adds structure. It should not add another HR
            silo.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/55">
            The problem is unmanaged variation, duplicated systems and
            unclear ownership — not local difference itself. The solution is
            explicit structure plus governed local configuration.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 overflow-hidden">
            <div className="grid grid-cols-1 gap-x-8 border-b border-ink/10 pb-3 sm:grid-cols-[2fr_3fr]">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
                Expansion Pressure
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-ink/40 sm:mt-0">
                What Breaks Without a Governed Model
              </p>
            </div>

            <div className="divide-y divide-ink/[0.08]">
              {ROWS.map((row) => (
                <div
                  key={row.pressure}
                  className="grid grid-cols-1 gap-x-8 gap-y-2 py-4 sm:grid-cols-[2fr_3fr]"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <p className="text-sm font-semibold text-ink">
                      {row.pressure}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {row.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
