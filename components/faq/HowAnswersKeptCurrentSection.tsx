import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROWS = [
  { source: "FAQ", owns: "Direct, reviewed answers", doesNotOwn: "Not own commercial, legal, or compliance truth" },
  { source: "Product / Docs", owns: "Current feature behaviour", doesNotOwn: "Not own pricing or legal advice" },
  { source: "Trust", owns: "Security, privacy, AI governance", doesNotOwn: "Not own implementation scope" },
  { source: "Pricing", owns: "Current commercial terms", doesNotOwn: "Not own product configuration detail" },
  { source: "Implementation", owns: "Project scope and timeline", doesNotOwn: "Not own pricing or legal obligations" },
  { source: "Support / Status", owns: "Live issues and history", doesNotOwn: "Not own product roadmap" },
];

export function HowAnswersKeptCurrentSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How answers are kept current.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">Answer lifecycle and source interpretation.</p>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <PlaceholderImage
              src="/images/faq/how-answers-kept-current.png"
              alt="Two colleagues shaking hands"
              label="Answer lifecycle"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <div>
            <Reveal delay={0.14}>
              <p className="font-semibold text-ink">Source interpretation</p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-ink/40">
                      <th className="px-4 py-3 font-medium">Source</th>
                      <th className="px-4 py-3 font-medium">Owns</th>
                      <th className="px-4 py-3 font-medium">FAQ does not own</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {ROWS.map((row) => (
                      <tr key={row.source} className="transition-colors duration-150 hover:bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-ink">{row.source}</td>
                        <td className="px-4 py-3 text-ink/60">{row.owns}</td>
                        <td className="px-4 py-3 text-ink/40">{row.doesNotOwn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-4 rounded-xl bg-primary-light p-5">
                <p className="font-semibold text-primary">Correction path</p>
                <p className="mt-1 text-sm leading-relaxed text-primary/80">
                  Report an outdated answer → sends stable question ID and
                  context. No sensitive free text required.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
