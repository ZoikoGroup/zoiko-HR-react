import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate boundaries already established elsewhere on this page. No
 * real-time, automatic or write-back claim is made, and no answer turns time
 * context into a behavioral or payroll conclusion.
 */
const FAQS = [
  {
    question: "What information can Zoiko HR use from ZoikoTime?",
    answer:
      "Three approved high-level classes: schedule, attendance and timesheet. Exact objects remain registry-backed, and no class automatically implies any other — exact information flow and availability depend on current approved configuration.",
  },
  {
    question: "Is ZoikoTime required to use Zoiko HR?",
    answer:
      "No. The connection is an approved optional relationship governed by Controlled Interoperability. Availability is configuration, market and plan dependent.",
  },
  {
    question: "Does Zoiko HR automatically sync attendance?",
    answer:
      "No automatic or real-time sync is claimed. Direction, cadence and availability come from current approved configuration rather than a default, and an active connection is not assumed.",
  },
  {
    question: "Can Zoiko HR change time records?",
    answer:
      "No. ZoikoTime holds scheduling, attendance and timesheet authority. Connection does not erase source ownership, and no write-back is implied without an approved source.",
  },
  {
    question: "Does an approved timesheet mean payroll is complete?",
    answer:
      "No. Timesheet or time-entry state does not equal payability, payroll calculation, payment or filing truth. Payroll calculation, payment, tax filing and payslip authority belong to Zoiko Payroll.",
  },
  {
    question: "Does Zoiko HR use attendance to score employees?",
    answer:
      "No. Time context is for approved operational purposes only — never a productivity metric, reliability assessment, behavioral signal, disciplinary evidence or employment decision driver. Connection does not authorize surveillance.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "Corrections append or supersede and preserve prior evidence with version lineage — there is no silent overwrite and no last-write-wins. Conflict resolution uses property-level authority, and reconciliation closure requires defined criteria.",
  },
  {
    question: "Can external time systems coexist with ZoikoTime?",
    answer:
      "Coexistence is governed by Controlled Interoperability, which owns optionality and permission-controlled ecosystem flow policy. What is supported in your case depends on current approved configuration rather than anything asserted here.",
  },
];

export function ZoikoTimeFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ / AEO"
          title="Eight qualified answers about ZoikoTime integration"
        >
          Each answer states that exact information, direction, cadence and
          availability depend on current approved configuration. No real-time,
          automatic or write-back claim is made without an approved source.
        </SectionHeading>

        {/* items-stretch so the image matches the full height of the question
            list — the design top- and bottom-aligns them. */}
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,384px)]">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details className="group rounded-xl border border-slate-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-slate-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-slate-400 transition-transform duration-200 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>
                  <p className="px-5 pb-4 pl-[52px] text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the question list sets the height. */}
          <div className="relative hidden lg:block">
            <Reveal delay={0.16} className="absolute inset-0">
              <PlaceholderImage
                src="/images/zoikotime/faq.webp"
                alt="Two colleagues reviewing information at a laptop"
                label="Common questions"
                className="h-full w-full rounded-xl bg-slate-100"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
