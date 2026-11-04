import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckList, Eyebrow } from "./shared";

const SUPPORTS = [
  "Permission-sensitive workforce dashboards and reports",
  "Metric definitions with source, scope, period and owner context",
  "Data quality, freshness and exception states",
  "Lifecycle, process health and performance process reporting",
  "Governed AI-assisted explanation where enabled",
];

const DOES_NOT = [
  "Assign universal productivity or behavior scores to employees",
  "Autonomously make promotion, termination or compensation decisions",
  "Predict named-employee attrition or performance without approved capability",
  "Claim payroll, time-clock or financial accounting authority",
  "Generate causation narratives beyond the evidence baseline",
];

export function DirectAnswerSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,800px)_minmax(0,391px)] lg:justify-between lg:gap-6">
          <div>
            <Reveal>
              <Eyebrow>Direct answer</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                What is Zoiko Insights?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Zoiko Insights is the workforce reporting and insight experience
                in Zoiko HR. It helps authorized users analyze approved workforce
                records and HR process evidence through dashboards, reports and
                defined metrics — while preserving source context, data quality,
                permission boundaries and human accountability.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="h-full rounded-2xl border border-green-300 bg-green-50 p-5">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-green-800">
                    What Zoiko Insights supports
                  </p>
                  <CheckList
                    className="mt-3"
                    items={SUPPORTS}
                    iconClassName="text-green-800"
                    textClassName="text-green-900"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-slate-500">
                    What Zoiko Insights does not do
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {DOES_NOT.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden className="w-4 flex-none text-slate-300">
                          —
                        </span>
                        <span className="text-xs leading-5 text-slate-400 sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/zoiko-insights/direct-answer.png"
              alt="A team reviewing notes on a glass wall together"
              label="Team reviewing notes together"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl sm:aspect-video lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
