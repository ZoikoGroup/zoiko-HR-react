import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    number: "01",
    title: "We receive your inquiry",
    body: "Zoiko HR records your submission and its selected contact reason through the governed inquiry system.",
  },
  {
    number: "02",
    title: "It is routed to the appropriate owner",
    body: "Routing follows the approved business ownership map, not an ungoverned shared inbox.",
  },
  {
    number: "03",
    title: "Follow-up uses your contact method",
    body: "Any request for additional or sensitive information will use an approved secure channel. No unsupported response-time promise is made.",
  },
];

export function WhatHappensNextSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <SectionHeading
            eyebrow="04 / What Happens Next"
            title="Accurate expectations, no promises."
            className="lg:max-w-md"
          />
          <Reveal delay={0.08}>
            <p className="max-w-72 text-xs leading-4 text-slate-400">
              Response timing varies by inquiry type. We do not publish a
              guaranteed response window.
            </p>
          </Reveal>
        </div>

        {/* The rule threading the three cards is decorative and only appears
            once they sit on one row. */}
        <div className="relative mt-9">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-slate-200 lg:block"
          />
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={0.06 + i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-indigo-200 bg-blue-50 font-mono text-sm leading-5 text-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-6 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
