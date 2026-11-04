import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate the routing rules this page establishes — which path reaches
 * which team. No response time is promised and no contact fact is invented.
 */
const FAQS = [
  {
    question: "How do I contact Zoiko HR?",
    answer:
      "Pick the route that matches your reason. Existing customers should use the Customer Help path for account, product, or administrator support; sales, partnerships, careers, and security reports each have their own route listed below. Each one reaches the team best placed to help.",
  },
  {
    question: "What should I use the general inquiry form for?",
    answer:
      "Questions that do not fit one of the dedicated routes. If your question is about your account, pricing, a partnership, a role, or a security issue, the specific route will reach the right team faster than the general form.",
  },
  {
    question:
      "Can I send sensitive employee or account information through the general form?",
    answer:
      "No. Do not include passwords, credentials, employee or payroll records, government identifiers, or other sensitive personal data. If a secure exchange is needed, the team will provide an approved method after contact. Security issues should go through the Security Reporting route instead.",
  },
  {
    question: "When will Zoiko HR respond?",
    answer:
      "No guaranteed response time is published. Your message is routed to the owner for the path you choose, and choosing the closest matching route is the fastest way to reach the right team.",
  },
];

function Chevron() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-4 flex-none text-slate-500 transition-transform duration-200 group-open:rotate-180"
      fill="none"
    >
      <path
        d="M3.5 6l4.5 4.5L12.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        {/* The heading spans full width; the image starts level with the top of
            the question list, as the design places it. */}
        <SectionHeading eyebrow="FAQ" title="Common questions" />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,390px)] lg:gap-16">
          <div>
            <div className="border-t border-slate-200">
              {FAQS.map((faq, i) => (
                <Reveal key={faq.question} delay={Math.min(i * 0.06, 0.3)}>
                  <details className="group border-b border-slate-200">
                    <summary className="flex cursor-pointer list-none items-start gap-3 py-5 sm:items-center sm:gap-5">
                      <span className="w-8 flex-none pt-1 font-mono text-xs leading-4 text-primary sm:pt-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-base font-semibold leading-6 text-slate-900">
                        {faq.question}
                      </span>
                      <span className="pt-1 sm:pt-0">
                        <Chevron />
                      </span>
                    </summary>
                    {/* Indent matches the number column + gap so answers line up
                        under their question at each breakpoint. */}
                    <p className="pb-5 pl-11 text-sm leading-6 text-slate-500 sm:pl-13">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16} className="hidden lg:block">
            <PlaceholderImage
              src="/images/contact-us/faq.png"
              alt="Two colleagues reviewing work together at a laptop"
              label="Common questions"
              className="aspect-[390/256] w-full rounded-lg bg-rose-300"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
