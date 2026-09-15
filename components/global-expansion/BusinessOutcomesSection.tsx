import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { title: "Faster organizational setup", description: "Configured entity and location structure with reusable operating patterns.", note: "Time-to-launch figures not published without measured evidence." },
  { title: "Less fragmented administration", description: "More HR work handled in the governed Zoiko HR environment instead of disconnected local files or tools.", note: "Customer proof used only when documented and permissioned." },
  { title: "Clearer ownership", description: "Visible workflow owners, approvers and scoped HR responsibilities.", note: "Capability claim is acceptable if demonstrable in product." },
  { title: "Controlled local differences", description: "Approved variants are explicit rather than hidden in informal local practice.", note: "Universal legal coverage is not claimed." },
  { title: "Stronger group visibility", description: "Authorized roll-ups can help reduce manual reconciliation and separate reporting chains.", note: "Capability language: “can help” rather than guaranteed outcome." },
];

export function BusinessOutcomesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Business outcomes
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              What better global HR operations should make easier.
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
