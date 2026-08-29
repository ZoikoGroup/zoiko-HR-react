import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is the Zoiko HR Trust Center?",
    answer:
      "The public hub for verified security, privacy, governance and assurance information. It routes visitors to the authority that owns each changing detail and distinguishes public information from materials that require controlled access.",
  },
  {
    question: "Does the Trust Center mean Zoiko HR is compliant with every law or standard?",
    answer:
      "No. Trust statements remain scope- and evidence-dependent. Zoiko HR does not provide legal or compliance advice or guarantee compliance, and this page does not display certification badges, audit names or compliance conclusions unless an approved source establishes them.",
  },
  {
    question: "Where can I review security and privacy information?",
    answer:
      "In the Security & Privacy authority, which covers access controls, data protection, secure development and incident management. Encryption algorithms, hosting regions, certification lists, pen-test cadence and incident timelines are not published here.",
  },
  {
    question: "Where can I review AI governance?",
    answer:
      "In the AI Governance authority, which owns human review, permission controls, transparency, logging and prohibited AI uses.",
  },
  {
    question: "Where are the DPA and subprocessors?",
    answer:
      "The Data Processing Addendum owns approved data-processing terms, and the Subprocessors authority owns the current approved list and the change-notification process. This hub may summarize availability and status, but does not reinterpret binding terms, roles or retention obligations.",
  },
  {
    question: "How do I report a security vulnerability?",
    answer:
      "Through the responsible Security Reporting route — not through general sales or support forms.",
  },
  {
    question: "Can I request restricted reports?",
    answer:
      "Yes, through the procurement request form for artifacts that cannot be published openly. A request is received, not approved; access decisions follow a separate eligibility review.",
  },
  {
    question: "Where do I check current service availability?",
    answer:
      "On the Service Status page. Assurance evidence is distinct from live operational truth, and status, updates, documentation and support routes are never gated.",
  },
];

export function TrustCenterFaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Direct answers with routes to the owning authority.
          </p>
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group border-b border-slate-200 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 sm:gap-6">
                  <span className="text-sm font-bold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-ink/40 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
