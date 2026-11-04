import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is published verbatim by the design. The rest restate
 * commitments already made elsewhere on this page — the hero promises, the
 * three-step process and the good-faith cards — and add no new one.
 */
const FAQS = [
  {
    question: "How long does a demo take?",
    answer:
      "Most sessions run 30–45 minutes, tailored to the areas you want to see.",
  },
  {
    question: "Who should join the call?",
    answer:
      "Whoever will actually judge the fit — usually HR or People Ops, plus IT or security if access and integration questions matter to you. Sessions can include your wider team.",
  },
  {
    question: "Is there a cost to book a demo?",
    answer:
      "No. There is no cost, no contract and no obligation to buy, and no credit card is required to request one.",
  },
  {
    question: "Can I see security and privacy details before the call?",
    answer:
      "Yes. The Trust Center is open to you at any time, and we can loop relevant documentation into scheduling so you have it before we speak.",
  },
  {
    question: "What if I want pricing instead of a demo?",
    answer:
      "You can request pricing directly without booking a session. If it is useful, pricing information can also be included in the summary after a demo.",
  },
  {
    question: "I'm already a Zoiko HR customer — should I book a demo?",
    answer:
      "Usually not. Skip the queue and go straight to the Help Center, Documentation or Contact Support, which will reach the right team faster.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We use what you shared to scope the session to the records, workflows, access and reporting you named, then arrange a time that works for you. There is no pressure to decide anything on the call.",
  },
];

export function DemoFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* A centred ~800px column with its text left aligned inside. */}
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about booking a demo."
          />

          <div className="mt-8 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details open={i === 0} className="group border-b border-slate-200">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                    <span className="text-base font-semibold leading-6 text-gray-800">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="pt-0.5 text-sm leading-none text-slate-500"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="max-w-[700px] pb-5 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
