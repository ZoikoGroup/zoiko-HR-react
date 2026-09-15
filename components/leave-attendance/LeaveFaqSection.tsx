import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FAQS = [
  { question: "What is Zoiko HR Leave & Attendance?", answer: "Leave & Attendance coordinates configured leave policies, requests, balance context, human approvals, calendars and attendance exceptions with clear source, effective-time, privacy and audit boundaries." },
  { question: "Does Zoiko HR calculate statutory leave entitlement?", answer: "No. Configured policy behavior is not legal or statutory advice. Statutory entitlement calculation requires approved jurisdiction-specific Product Truth." },
  { question: "How are leave balances calculated?", answer: "Every balance is source-specific, time-specific and formula-versioned — combining opening balance, earned/allocated credits, used/finalized usage, pending/reserved amounts and manual adjustments." },
  { question: "Can employees request partial days or hours?", answer: "Where a leave type's configured unit supports it. Requested units are part of the approved request fields for that category." },
  { question: "Can managers see the reason for leave?", answer: "Only where the privacy class for that reason permits it. Managers receive the minimum necessary context for their decision — not full restricted-HR detail." },
  { question: "Does approved leave automatically update payroll or time systems?", answer: "Approved leave is queued, sent, acknowledged, processed and reconciled through a defined handoff — never collapsed into a single \"synced\" badge, and never treated as payroll acceptance." },
  { question: "Is attendance used to measure productivity?", answer: "No. This is not a time-clock or monitoring dashboard. Attendance context must not infer productivity, misconduct, engagement, health, location or intent." },
];

export function LeaveFaqSection() {
  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              FAQ / AEO
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions about Leave &amp; Attendance
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 text-sm text-white/40">
              All answers carry a qualifier in the first sentence where
              capability depends on configuration, product truth or
              jurisdiction.
            </p>
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

          <Reveal delay={0.16} y={30} className="mx-auto flex w-full max-w-[340px] flex-none lg:mx-0">
            <PlaceholderImage
              src="/images/leave-attendance/faq.png"
              alt="Colleagues chatting together at an event"
              label="Common questions"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
