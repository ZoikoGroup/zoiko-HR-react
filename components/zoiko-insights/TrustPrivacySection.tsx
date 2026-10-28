import { Container, Reveal } from "@/components/ui";
import { ArrowLink, SectionHeading } from "./shared";

const QUESTIONS = [
  {
    question: "Who can see workforce data?",
    answer:
      "Role- and purpose-sensitive access. Viewers see only data authorized by their role, assigned scope, purpose and field sensitivity.",
    link: { label: "Security & Privacy", href: "/security-privacy" },
  },
  {
    question: "Is this employee surveillance?",
    answer:
      "No hidden productivity, behavior or commitment tracking. Zoiko Insights reports on approved HR records and process states, not covert monitoring.",
    link: { label: "AI Governance", href: "/ai-governance" },
  },
  {
    question: "How are small groups protected?",
    answer:
      "Configurable cohort suppression. Sensitive dimensions are permission-gated. Suppressed values are never exposed through any surface or export.",
    link: { label: "Trust Center", href: "/trust-center" },
  },
  {
    question: "Does AI make HR decisions?",
    answer:
      "No autonomous consequential decision. Governed AI assists with approved summaries or explanations where enabled. Human authority remains.",
    link: { label: "AI Governance", href: "/ai-governance" },
  },
  {
    question: "Can data be exported?",
    answer:
      "Where enabled, export preserves the same permissions as the live view — including cohort suppression and field masking. No bypass.",
    link: { label: "Trust Center", href: "/trust-center" },
  },
  {
    question: "How is data made accessible?",
    answer:
      "Charts include text summaries and data tables. All interactive components are keyboard operable. Suppressed values announced as suppressed.",
    link: { label: "Accessibility", href: "/accessibility" },
  },
];

export function TrustPrivacySection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Trust & privacy"
          title="Governed reporting — not employee surveillance."
          className="max-w-[640px]"
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {QUESTIONS.map((item, i) => (
            <li key={item.question}>
              <Reveal
                delay={Math.min(i * 0.05, 0.25)}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-sm font-semibold leading-5 text-white">{item.question}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{item.answer}</p>
                <ArrowLink href={item.link.href} tone="dark" className="mt-4 text-xs">
                  {item.link.label}
                </ArrowLink>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 max-w-[760px] rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Zoiko Insights supports authorized reporting and decision support. It
            does not secretly monitor employee behavior, assign a universal
            productivity score, or autonomously make consequential employment
            decisions. Any forecast, recommendation or AI-assisted explanation
            must be explicitly approved, source-grounded, labeled and subject to
            human review.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
