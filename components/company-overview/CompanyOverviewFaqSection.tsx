import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FAQS = [
  { question: "What is Zoiko HR?", answer: "Zoiko HR is presented as a commercially independent global SaaS platform within Zoiko Group." },
  { question: "What is the Zoiko HR Company Overview page?", answer: "An executive-summary page that explains Zoiko HR's corporate identity, platform context, group relationship, and the right next step for a given evaluation." },
  { question: "Is Zoiko HR part of Zoiko Group?", answer: "Yes. Zoiko HR sits within Zoiko Group while operating with a standalone commercial identity." },
  { question: "Where can I learn more about Zoiko HR's mission and commercial model?", answer: "Visit the About Zoiko HR page for the mission, scope, and standalone commercial model." },
  { question: "Where can I learn about Zoiko Group?", answer: "Visit the About Zoiko Group page to understand the parent group and its wider product portfolio." },
  { question: "Where can I find company leadership information?", answer: "The Leadership page lists approved executive and governance leadership." },
  { question: "How can I contact Zoiko HR?", answer: "Use the Contact page for general, media, partnership, and privacy inquiries, or Talk to Sales for a commercial conversation." },
];

export function CompanyOverviewFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Claim-safe answers about Zoiko HR.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every answer reflects approved company information only.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-stretch">
          <Reveal delay={0.16} y={30} className="flex">
            <PlaceholderImage
              src="/images/company-overview/faq.png"
              alt="A presenter reviewing a chart with a team in a meeting room"
              label="Claim-safe company answers"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
                <details className="group py-4" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="font-semibold text-ink">{faq.question}</span>
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
