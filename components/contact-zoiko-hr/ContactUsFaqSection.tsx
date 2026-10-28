import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate routing rules already published in sections 02-09 of this
 * page. Nothing here promises a response time, publishes a contact fact the
 * registry has not verified, or accepts sensitive data on this route.
 */
const FAQS = [
  {
    question: "How do I contact Zoiko HR?",
    answer:
      "Start with the contact intent router above and pick the reason that matches your inquiry — sales, current customer help, partner, media, careers, or privacy and security. Each route reaches its approved owner directly. If nothing fits, use the general inquiry form.",
  },
  {
    question: "I'm already a customer. Where should I go?",
    answer:
      "Use the approved customer support or account-access path rather than this form. It is the faster route for product, implementation, billing, access, and technical assistance, and it reaches the support team directly.",
  },
  {
    question: "How do I contact Zoiko HR sales?",
    answer:
      "Use the Contact Sales route for product fit, pricing, rollout, procurement, or enterprise requirements. The general inquiry form is not the right path for commercial discussions and will only add a routing step.",
  },
  {
    question: "How can I discuss a partnership?",
    answer:
      "Use the Partner With Us route for business, services, integration, referral, or ecosystem relationships. It reaches the partnerships owner rather than the general inquiry queue.",
  },
  {
    question: "Where should media requests go?",
    answer:
      "Use the Media Inquiries route for press questions, interview requests, company comment, and approved media resources. Media requests sent through the general form are re-routed rather than answered there.",
  },
  {
    question: "Can I send confidential or sensitive information through this form?",
    answer:
      "No. Do not include passwords, payment card details, government identifiers, payroll files, or other sensitive records in a general inquiry. Privacy-rights requests and security reports have their own governed routes — this page explains where to go, but is not the system of record for them.",
  },
  {
    question: "When will I receive a response?",
    answer:
      "Response timing varies by inquiry type, and no guaranteed response window is published. Your submission is routed to the approved owner for the contact reason you select, and any follow-up needing additional or sensitive information will use an approved secure channel.",
  },
];

export function ContactUsFaqSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12">
          <SectionHeading eyebrow="10 / FAQ" title="Common questions about contacting us.">
            Each answer directs you to the right route — no padding, no keyword
            filler.
          </SectionHeading>

          <div className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.05, 0.3)}>
                <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                    <span className="text-sm font-semibold text-ink">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-lg text-primary transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
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
