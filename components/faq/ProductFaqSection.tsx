import { Container, Reveal } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "product")!;

export function ProductFaqSection() {
  return (
    <section id="product" className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Product &amp; platform questions.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">{topic.description}</p>
        </Reveal>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {topic.entries.map((entry, i) => (
            <Reveal key={entry.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group px-6 py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{entry.question}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 flex-none text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {entry.answer}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={entry.authorityHref}
                    className="text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Authority: {entry.authorityLabel} →
                  </a>
                  <span className="text-xs text-ink/40">Reviewed {entry.reviewed}</span>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
