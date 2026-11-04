import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

type Question = { icon: string; title: string; body: string };

const LEFT: Question[] = [
  {
    icon: "🗂️",
    title: "Workforce & organization information",
    body: "How does each platform structure workforce, entity, team, role, position, manager, and reporting information?",
  },
  {
    icon: "⚙️",
    title: "Integrations & source authority",
    body: "How are data direction, authority, failures, retries, reconciliation, and revocation handled?",
  },
];

const RIGHT: Question[] = [
  {
    icon: "🔐",
    title: "Roles, permissions & evidence",
    body: "How are access, delegation, audit evidence, and sensitive fields governed?",
  },
  {
    icon: "🛡️",
    title: "Trust, support & commercial",
    body: "What security, privacy, AI governance, support, SLA, pricing, and contractual evidence is public?",
  },
];

function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
      <span aria-hidden className="text-xl leading-7">
        {question.icon}
      </span>
      <div>
        <h3 className="text-sm font-semibold leading-5 text-ink">{question.title}</h3>
        <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{question.body}</p>
      </div>
    </div>
  );
}

export function EvaluationQuestionsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Start with your evaluation question.">
          Select a question to filter relevant comparison criteria. No account or
          personal information required.
        </SectionHeading>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,591px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.06}>
                <QuestionCard question={q} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/compare-zoikohr/evaluation-questions.png"
              alt="Two colleagues with coffee reviewing a clipboard together"
              label="Colleagues reviewing an evaluation"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>

          <div className="grid gap-4">
            {RIGHT.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.06}>
                <QuestionCard question={q} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
