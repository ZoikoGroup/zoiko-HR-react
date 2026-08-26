import { Container, Reveal } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "implementation")!;

const STEPS = ["Discovery", "Configuration", "Data", "Integration", "Validation", "Launch", "Adoption"];

export function ImplementationFaqSection() {
  return (
    <section id="implementation" className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Implementation &amp; adoption.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">{topic.description}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex items-start justify-between overflow-x-auto pb-2">
            {STEPS.map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-none flex-col items-center gap-2 px-1 text-center">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="whitespace-nowrap text-xs font-medium text-ink/60">{step}</span>
                </div>
                {i < STEPS.length - 1 && <span className="mt-[-20px] h-px flex-1 bg-slate-200" aria-hidden />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
            No universal duration — timing depends on approved scope,
            systems, services, contract and jurisdiction.
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {topic.entries.map((entry, i) => (
            <Reveal key={entry.question} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-ink">{entry.question}</p>
                  <span className="flex-none rounded-full bg-primary-light px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {entry.phase}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {entry.answer}
                </p>
                <a href={entry.authorityHref} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
                  {entry.authorityLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
