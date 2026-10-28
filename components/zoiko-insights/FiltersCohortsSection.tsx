import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckList, SectionHeading } from "./shared";

const COMPARISON_RULES = [
  "Always label baseline and comparison period/cohort.",
  "Show denominator changes between periods.",
  "Do not use better/worse unless metric interpretation defines directionality.",
  "Do not infer causation from correlation — use 'changed / associated / observed' language.",
  "If methodology changed between periods, show a comparability warning.",
];

export function FiltersCohortsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Filters, cohorts & comparisons"
              title="Filters define scope — they never expand authorization."
            >
              Every filter option is constrained to the viewer&apos;s permitted
              scope. Sensitive attributes require explicit permission. Cohort
              suppression runs after every filter combination — not just at the
              default view.
            </SectionHeading>

            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/zoiko-insights/filters-cohorts.png"
                alt="Two colleagues smiling while working together"
                label="Colleagues working together"
                loading="lazy"
                className="mt-8 aspect-[568/311] w-full rounded-2xl border border-slate-200"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.06}>
              <div className="rounded-2xl bg-slate-950 p-6">
                <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-indigo-400">
                  Cohort suppression pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  When a combination of filters produces a cohort below the
                  configured minimum, replace the exact value with:
                </p>
                <p className="mt-4 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold leading-5 text-indigo-400">
                  &quot;Not shown — cohort below reporting threshold.&quot;
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Do not leak the value through chart labels, tooltips, exports,
                  accessible text, URL parameters, API responses, or comparison
                  arithmetic.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-slate-600">
                  Comparison rules
                </p>
                <CheckList className="mt-4" items={COMPARISON_RULES} />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
