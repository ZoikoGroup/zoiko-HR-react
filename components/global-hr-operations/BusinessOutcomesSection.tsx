import { Container, Reveal } from "@/components/ui";

const OUTCOMES = [
  {
    title: "Faster organizational setup",
    description:
      "Configured entity and location structure with reusable operating patterns.",
    note: "Time-to-launch figures not published without measured evidence.",
  },
  {
    title: "Less fragmented administration",
    description:
      "More HR work handled in the governed Zoiko HR environment instead of disconnected local files or tools.",
    note: "Customer proof used only when documented and permissioned.",
  },
  {
    title: "Clearer ownership",
    description:
      "Visible workflow owners, approvers and scoped HR responsibilities.",
    note: "Capability claim is acceptable if demonstrable in product.",
  },
  {
    title: "Controlled local differences",
    description:
      "Approved variants are explicit rather than hidden in informal local practice.",
    note: "Universal legal coverage is not claimed.",
  },
  {
    title: "Stronger group visibility",
    description:
      "Authorized roll-ups can help reduce manual reconciliation and separate reporting chains.",
    note: 'Capability language: "can help" rather than guaranteed outcome.',
  },
];

export function BusinessOutcomesSection() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Business Outcomes
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            What better global HR operations should make easier.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {OUTCOMES.map((outcome, i) => (
            <Reveal key={outcome.title} delay={0.1 + i * 0.05}>
              <div className="grid gap-2 rounded-xl border border-ink/[0.08] bg-white p-5 lg:grid-cols-[220px_1fr_200px] lg:gap-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-ink">
                    {outcome.title}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/60">
                  {outcome.description}
                </p>
                <p className="text-xs leading-relaxed text-ink/35 lg:text-right">
                  {outcome.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
