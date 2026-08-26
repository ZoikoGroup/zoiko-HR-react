import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  { question: "What is / how does it work", owns: "Core product answer", authority: "Product / Documentation" },
  { question: "Can it support our global context", owns: "General capability", authority: "Zoiko HR for your region" },
  { question: "Which integrations / providers", owns: "Integration categories", authority: "Integration documentation" },
  { question: "Is it secure / compliant", owns: "Framework overview", authority: "Trust Center / DPA" },
  { question: "How long / how much", owns: "Factors + process", authority: "Implementation Guide / Pricing" },
];

export function FaqScopeSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What this FAQ covers — and where it routes.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 rounded-r-xl border-l-4 border-primary bg-slate-50 px-5 py-4">
            <p className="text-sm leading-relaxed text-ink/70">
              This FAQ provides direct, reviewed answers to common
              questions about Zoiko HR. Where detail changes by
              configuration, region, or contract, it routes you to the
              authoritative source rather than overstating a fixed answer.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route, i) => (
            <Reveal key={route.question} delay={0.1 + i * 0.06}>
              <div className="h-full overflow-hidden rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="px-4 py-3 text-sm font-semibold text-ink">
                  {route.question}
                </p>
                <p className="bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
                  FAQ owns: {route.owns}
                </p>
                <p className="bg-primary-light px-4 py-2 text-xs text-primary">
                  Authority: {route.authority}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-6 text-xs italic text-ink/40">
            Professional boundary: Zoiko HR software does not provide
            legal, tax, payroll, employment, or compliance advice.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
