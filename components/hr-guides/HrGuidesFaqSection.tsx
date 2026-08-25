import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

/**
 * Questions come from the approved design, which shows the accordion closed and
 * therefore carries no answer copy. The answers below are drafts pending
 * approval — each restates claims already approved elsewhere on this page.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What are Zoiko HR Guides?",
    answer:
      "Practical HR guidance for structured, accountable people operations — core guides, references and explainers covering the eight core HR operating tasks, from organizing workforce information through preparing implementation and adoption.",
  },
  {
    question: "Who are guides written for?",
    answer:
      "HR Leaders, HR Admins, Managers, IT / Integration, Security / Privacy, Finance / Payroll, Implementation teams and evaluators. Every guide carries task and audience tags so you can filter to the ones written for your role.",
  },
  {
    question: "Do guides replace product documentation?",
    answer:
      "No. Guides describe platform concepts. Zoiko Product Documentation remains the authoritative source for configuration, field behavior, states and current product truth.",
  },
  {
    question: "Are guides free to access?",
    answer: "Core guides are public — no signup required.",
  },
  {
    question: "How often are guides reviewed?",
    answer:
      "On an editorial review cycle. Every guide card shows its last reviewed date and a status badge — Current, Review Due, Superseded or Withdrawn — so you can see how fresh it is before relying on it.",
  },
  {
    question: "What does 'Current' status mean?",
    answer:
      "The guide was reviewed within its cycle and its content reflects the platform.",
  },
  {
    question: "What does 'Review Due' mean?",
    answer:
      "The guide is approaching or past its review date. Verify the content against product documentation before relying on it.",
  },
  {
    question: "Can guides be used as legal or compliance evidence?",
    answer:
      "No. Guides cover Zoiko platform concepts only — not local employment law or tax advice — and are not a substitute for SOC 2, DPA or security evidence. Security, privacy and compliance documentation is maintained in the Zoiko Trust Center.",
  },
  {
    question: "Where do I find implementation guidance?",
    answer:
      "Guides support readiness and concept understanding. For the full step-by-step implementation plan, access the Implementation Guide through your account team.",
  },
  {
    question: "Where do I find pricing?",
    answer:
      "On the Pricing page, or by using Request Pricing — pricing is never covered in a guide.",
  },
  {
    question: "How do I report a guide that seems outdated?",
    answer:
      "Contact Support with the guide title and its reviewed date. Guides flagged Review Due, Superseded or Withdrawn already carry that state on the card, and superseded guides link to the newer guide.",
  },
  {
    question: "Where do I get account-specific help?",
    answer:
      "Through the Help Center or Contact Support. Guides describe platform concepts only — they contain no personal employee data, account records or compliance evidence, and data subject or DPA queries go to your Data Protection representative.",
  },
];

const TASK_CHIPS = [
  "Organize records",
  "Plan onboarding",
  "Route approvals",
  "Manage global context",
  "Support managers",
  "Review operations",
];

export function HrGuidesFaqSection() {
  return (
    <section className="bg-[#0a1220] py-18 text-white">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-indigo-400">
            FAQ
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10">
            Common questions about HR Guides
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-white/10 border-b border-white/10">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="text-indigo-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                {faq.answer ? (
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {faq.answer}
                  </p>
                ) : null}
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <p className="mt-10 text-sm text-slate-300">Jump to a task</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {TASK_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium text-indigo-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#122a45] px-8 py-7">
            <div className="max-w-sm">
              <p className="font-heading text-lg font-bold text-white">
                Ready to see Zoiko in action?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Explore the platform with your team or get a tailored
                walkthrough.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/book-a-demo" className="px-7 py-3">
                Book a Demo
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="!border-white/20 px-7 py-3 !text-white hover:!border-white/40 hover:!text-white"
              >
                Request Pricing
              </Button>
              <Link
                href="/product-tour"
                className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-indigo-400 hover:text-white"
              >
                Product Tour
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-6 text-center text-xs text-slate-500">
            No spam. Your contact details are used only to respond to your
            request per our Privacy Policy.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
