import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "Does Onboarding & Lifecycle cover more than new-hire onboarding?",
    answer:
      "Yes. It coordinates the full employee journey — preboarding, onboarding, active changes, transfers, leave and return, separation, and approved post-employment record handling.",
  },
  {
    question: "Can changes overwrite an employee's current record?",
    answer:
      "No. Proposed and approved-future changes remain distinct from the current record until the approved effective date arrives.",
  },
  {
    question: "Can templates vary by entity or location?",
    answer:
      "Yes. A shared global baseline template can carry approved entity, location, language, and professional-review overlays without weakening governance.",
  },
  {
    question: "Does the platform make legal, payroll, or immigration decisions?",
    answer:
      "No. Zoiko HR coordinates the workflow and evidence; qualified professionals and approved systems remain responsible for legal, payroll, and immigration decisions.",
  },
  {
    question: "How is sensitive information, like leave reasons, protected?",
    answer:
      "Through field-level sensitivity classification, permission-scoped views, and access limited to participants with a defined role in the event.",
  },
  {
    question: "Can this connect with time and payroll systems?",
    answer:
      "Yes. Approved leave and attendance data flows to and from time tracking, and employee data feeds payroll while calculation stays in the payroll system of record.",
  },
];

export function OnboardingFaqSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-200 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
