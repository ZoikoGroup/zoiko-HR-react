import { Container, Reveal } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "global")!;

export function GlobalFaqSection() {
  return (
    <section id="global" className="bg-[#F1F5F9] py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Global, multi-entity &amp; local use.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">{topic.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {topic.entries.map((entry, i) => (
            <Reveal key={entry.question} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-semibold text-ink">{entry.question}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {entry.answer}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <a href={entry.authorityHref} className="group inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
                    {entry.authorityLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                  <span className="text-xs text-ink/40">Reviewed {entry.reviewed}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {topic.boundary && (
          <Reveal delay={0.4}>
            <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-900">{topic.boundary.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-amber-800">{topic.boundary.text}</p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
