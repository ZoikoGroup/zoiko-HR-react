import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "How do I contact Zoiko HR support?",
    answer:
      "Start by choosing a support path above. Your choice routes you to self-service guidance, Service Status, a specialist reporting path, or a support request — whichever route is approved for that type of issue.",
  },
  {
    question: "What should I include in a support request?",
    answer:
      "What happened, what you expected, when it occurred, and how many users are affected. Never include passwords, MFA or OTP codes, secret keys, payment-card data, health or payroll records, or unrestricted employee exports.",
  },
  {
    question: "Can I call or chat with Zoiko HR support?",
    answer:
      "Channel availability is shown only from approved support sources. No phone or chat channel is established for public display, so this page does not list one.",
  },
  {
    question: "How quickly will Zoiko HR respond?",
    answer:
      "Response commitments are published only from approved support sources, and none is established here. Selecting a business impact level does not imply a specific response time or priority commitment.",
  },
  {
    question: "Where do I report an outage or service issue?",
    answer:
      "Service Status is the authoritative destination for live availability and operational incidents. Contact Support and Product Updates do not reflect live operational state.",
  },
  {
    question: "Where do I report a security vulnerability?",
    answer:
      "Through the specialist security route rather than a general support request. Security reports are handled by their own approved authority.",
  },
  {
    question: "Where do I make a privacy or legal request?",
    answer:
      "Through the same specialist route as security reports. Privacy and legal requests go to the approved specialist authority, not to general support.",
  },
  {
    question: "Can I attach screenshots or log files?",
    answer:
      "Only where the approved Attachment Policy permits. Redact passwords, tokens, employee names, health data, and payroll values before attaching — file types, size limits, and retention are governed by that policy.",
  },
  {
    question: "Do I need to sign in to submit a request?",
    answer:
      "Support intake collects the minimum information needed for the selected issue. A reply email address is required so the request can be answered; a sign-in requirement is not established for public display.",
  },
];

export function ContactSupportFaqSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Frequently asked questions.
          </h2>
          <p className="mt-1.5 max-w-xl leading-relaxed text-slate-500">
            Answers are sourced from approved registries. Where a channel,
            commitment, or contact detail is not established, this page does not
            invent one.
          </p>
        </Reveal>

        {/* Independent columns so opening one card cannot resize its neighbour;
            `display:contents` below lg keeps the cards in 1..n order there. */}
        <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          {[0, 1].map((column) => (
            <div
              key={column}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2"
            >
              {FAQS.map((faq, i) => ({ faq, i }))
                .filter(({ i }) => i % 2 === column)
                .map(({ faq, i }) => (
                  <div key={faq.question} style={{ order: i }}>
                    <Reveal delay={Math.min(i * 0.04, 0.3)}>
                      <details className="group overflow-hidden rounded-xl border border-black/10 bg-white">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                          <span className="text-sm font-semibold text-ink">
                            {faq.question}
                          </span>
                          <span
                            aria-hidden
                            className="flex-none text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </details>
                    </Reveal>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
