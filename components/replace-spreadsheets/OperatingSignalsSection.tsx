import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SIGNALS = [
  {
    title: "Multiple versions",
    description: "Different teams rely on different spreadsheets, copies or folders.",
    proof: "One governed record structure with controlled access and clearer ownership.",
  },
  {
    title: "Manual handoffs",
    description: "Approvals and updates move through inboxes, messages and reminders.",
    proof: "Structured workflows with defined actions and visible status.",
  },
  {
    title: "Reporting friction",
    description: "Teams spend time assembling data before they can use it.",
    proof: "Standardized records and report-ready workforce information.",
  },
];

export function OperatingSignalsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              When HR starts outgrowing the workaround.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Recognizable operating signals — not a countdown, a risk
              score or a reason to worry.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1.1fr] lg:items-stretch">
          {SIGNALS.map((signal, i) => (
            <Reveal key={signal.title} delay={0.06 + i * 0.06} className="flex">
              <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="h-9 w-9 flex-none rounded-lg bg-primary-light" />
                <p className="mt-4 font-semibold text-ink">{signal.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{signal.description}</p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-sm font-semibold leading-relaxed text-ink">
                  {signal.proof}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} y={30} className="flex">
            <PlaceholderImage
              src="/images/replace-spreadsheets/operating-signals.png"
              alt="A presenter reviewing operating signals with a team in a meeting room"
              label="Recognizable operating signals"
              className="h-full min-h-[220px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
