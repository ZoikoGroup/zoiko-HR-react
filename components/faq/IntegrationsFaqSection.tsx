import { Container, Reveal } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "integrations")!;

const BORDER_COLORS = ["border-emerald-400", "border-violet-400", "border-primary", "border-amber-400", "border-cyan-400", "border-rose-400"];

export function IntegrationsFaqSection() {
  return (
    <section id="integrations" className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Integrations &amp; connected operations.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-white/60">{topic.description}</p>
        </Reveal>

        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {topic.entries.map((entry, i) => (
            <Reveal key={entry.question} delay={0.05 + i * 0.05}>
              <div className={`border-l-4 ${BORDER_COLORS[i % BORDER_COLORS.length]} bg-white/[0.03] px-6 py-4 transition-colors duration-200 hover:bg-white/[0.06]`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{entry.question}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{entry.answer}</p>
                  </div>
                  <div className="flex-none text-right">
                    <a href={entry.authorityHref} className="text-sm font-semibold text-primary hover:text-white">
                      {entry.authorityLabel} →
                    </a>
                    <p className="mt-1 text-xs text-white/40">Reviewed {entry.reviewed}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {topic.boundary && (
          <Reveal delay={0.4}>
            <div className="mt-6 rounded-2xl bg-primary/10 p-6">
              <p className="font-semibold text-white">{topic.boundary.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{topic.boundary.text}</p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
