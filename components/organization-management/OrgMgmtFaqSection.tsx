import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FAQS = [
  { question: "What is Organization Management in Zoiko HR?", answer: "Organization Management is the governed model for representing entities, business units, departments, teams, and location references — with explicit structure, relationships, ownership, and auditability." },
  { question: "Can Zoiko HR manage entities, departments, teams, and locations?", answer: "Yes. These are taxonomy-approved structural unit types, each with its own field contract and authority notes." },
  { question: "How are reporting lines handled?", answer: "Reporting is treated as a distinct relationship type from hierarchy — a structural parent-child path does not itself imply a reporting relationship." },
  { question: "Can organizational changes be scheduled?", answer: "Yes. Changes can be scheduled to a target effective date; current and scheduled structure remain distinct until that date is reached." },
  { question: "What happens to history after a reorganization?", answer: "History is immutable. Corrections and supersessions are recorded as new traceable audit events, not edits to prior records." },
  { question: "How does Organization Management connect to Payroll, Time, or Reporting?", answer: "Adjacent modules may reference organization identifiers and effective state, but Organization Management does not duplicate or own their calculations, policies, or report definitions." },
  { question: "Can I import or sync an existing organization structure?", answer: "Yes, through a structured import with mandatory dry-run, field mapping, validation, and one approved commit model." },
];

export function OrgMgmtFaqSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              FAQ / AEO
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions about Organization Management
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-stretch">
          <div className="space-y-3 lg:flex-1">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
                <details className="group rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-200 open:bg-white/[0.08]" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="flex items-start gap-3 font-semibold">
                      <span className="font-mono text-xs text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                      {faq.question}
                    </span>
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 flex-none text-white/40 transition-transform duration-200 group-open:rotate-180">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-white/60">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30} className="mx-auto flex w-full max-w-[280px] flex-none lg:mx-0">
            <PlaceholderImage
              src="/images/organization-management/faq.png"
              alt="Colleague presenting to a smiling team"
              label="Common questions"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
