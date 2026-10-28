import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const PROBLEMS = [
  {
    icon: "📊",
    title: "Fragmented data",
    before:
      "Headcount figures pulled from separate spreadsheets, refreshed manually, with no agreed effective-date rule or worker-status definition.",
    after:
      "A single governed metric definition with approved source objects, inclusion/exclusion logic, effective date, and freshness state — always visible, never implied.",
  },
  {
    icon: "🔍",
    title: "Opaque definitions",
    before:
      "A headcount number looks precise while hiding effective dates, worker-status rules, excluded entities and stale source data.",
    after:
      "Every metric card includes definition, period, scope, denominator, source and quality state — one click from the dashboard, not buried in documentation.",
  },
];

export function ProblemFramingSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Problem framing"
          title="Reporting breaks when the number is separated from its definition, source and scope."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="flex items-center gap-3 text-base font-extrabold leading-6 text-ink">
                  <span aria-hidden className="text-2xl leading-8">
                    {problem.icon}
                  </span>
                  {problem.title}
                </h3>
                <div className="rounded-xl border border-red-200 bg-orange-50 p-3">
                  <p className="text-xs font-semibold leading-4 text-amber-800">Before</p>
                  <p className="mt-1 text-xs leading-5 text-amber-800 sm:text-sm">{problem.before}</p>
                </div>
                <div className="rounded-xl border border-green-300 bg-green-50 p-3">
                  <p className="text-xs font-semibold leading-4 text-green-800">With Zoiko Insights</p>
                  <p className="mt-1 text-xs leading-5 text-green-800 sm:text-sm">{problem.after}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.12} className="md:col-span-2 lg:col-span-1 lg:h-full">
            <PlaceholderImage
              src="/images/zoiko-insights/problem-framing.png"
              alt="Four colleagues walking and talking through an office corridor"
              label="Colleagues walking through the office"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <blockquote className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 text-base italic leading-7 text-slate-600">
            &quot;A headcount number in a spreadsheet can look precise while hiding
            effective dates, worker status rules, excluded entities and stale
            source data. Zoiko Insights makes those rules part of the
            experience.&quot;
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
