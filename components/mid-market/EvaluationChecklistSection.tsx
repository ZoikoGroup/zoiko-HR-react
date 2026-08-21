import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ITEMS = [
  {
    label: "Standardization",
    question:
      "Are common data definitions, policy/process baselines and effective dates documented?",
  },
  {
    label: "Ownership",
    question:
      "Does each key record/process/configuration area have an accountable owner and reviewer?",
  },
  {
    label: "Delegation",
    question:
      "Are distributed responsibilities explicit, scoped, time-bounded and revocable?",
  },
];

export function EvaluationChecklistSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            Mid-market evaluation checklist.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Structured questions, no maturity or eligibility score.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5">
                <div className="min-w-0 flex-1 sm:min-w-[18rem]">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.question}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-sky-950">
                    Review internally
                  </span>
                  <Link
                    href="/book-a-demo"
                    className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-sky-950 transition-colors duration-150 hover:border-primary hover:text-primary"
                  >
                    Discuss with Zoiko
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} y={36}>
          <PlaceholderImage
            src="/images/mid-market-organizations/checklist.png"
            alt="A team discussing evaluation questions around a table"
            label="Mid-market evaluation checklist"
            fit="contain"
            className="mt-3 w-full rounded-xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
