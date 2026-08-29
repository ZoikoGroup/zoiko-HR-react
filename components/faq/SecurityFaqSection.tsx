import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "security")!;

export function SecurityFaqSection() {
  return (
    <section id="security" className="bg-[#F1F5F9] py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Security, privacy &amp; access.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">{topic.description}</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white lg:flex-1">
            {topic.entries.map((entry, i) => (
              <Reveal key={entry.question} delay={Math.min(i * 0.03, 0.3)}>
                <details className="group px-6 py-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="font-semibold text-ink">{entry.question}</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 flex-none text-ink/40 transition-transform duration-200 group-open:rotate-90"
                    >
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {entry.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30} className="mx-auto flex w-full max-w-[280px] flex-none lg:mx-0">
            <PlaceholderImage
              src="/images/faq/security.png"
              alt="Two colleagues talking near a reception desk"
              label="Security, privacy, access"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
