import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatePill } from "./shared";

const STATES = [
  {
    pill: "Current",
    bar: "bg-emerald-400",
    title: "Healthy / Current",
    body: "Approved source health and registry release confirm current state. Provider records are tied to approved snapshot.",
  },
  {
    pill: "Under Review",
    bar: "bg-violet-300",
    title: "Under Review",
    body: "Last approved snapshot available if policy permits. Review state shown — does not imply list invalidity. High-risk state withheld per policy.",
  },
  {
    pill: "Degraded Source",
    bar: "bg-amber-400",
    title: "Degraded Source",
    body: "Registry source cannot be verified. Last verified date and currentness warning shown. Green current badge is not displayed.",
  },
  {
    pill: "Unavailable",
    bar: "bg-rose-400",
    title: "Unavailable",
    body: "Registry service unavailable. Stale provider list is not served as current. No false 'no subprocessors' statement.",
  },
  {
    pill: "Correction Pending",
    bar: "bg-orange-400",
    title: "Correction Pending",
    body: "Material correction creates explicit change event and updated snapshot. Public history retains lineage — no silent overwrite.",
  },
];

export function FreshnessSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="13 / Registry Freshness, Corrections & Degraded States"
          title="Source health governs currentness claims."
        >
          The registry current badge reflects approved source health. Degraded
          source never shows a green current badge. Cache, search, schema and
          sitemap are invalidated after any update, removal or correction.
        </SectionHeading>

        {/* Figma runs the state list to 918px against a 281px image, both
            ending level — kept as a ratio so it holds at every width. */}
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[minmax(0,918fr)_minmax(0,281fr)]">
          <div className="flex flex-col justify-between">
            {STATES.map((state, i) => (
              <Reveal key={state.pill} delay={Math.min(0.06 + i * 0.05, 0.3)}>
                {/* The pill sits beside the copy from sm up; on narrow screens
                    it stacks above it so neither column gets squeezed. */}
                <div className="flex items-stretch gap-4 py-4 sm:gap-5">
                  <span aria-hidden className={`w-0.5 flex-none ${state.bar}`} />
                  <div className="min-w-0 flex-1 sm:flex sm:items-stretch sm:gap-5">
                    <div className="sm:w-36 sm:flex-none sm:pt-0.5">
                      <StatePill state={state.pill} />
                    </div>
                    <div className="mt-3 min-w-0 sm:mt-0 sm:flex-1 sm:border-l sm:border-slate-200 sm:pl-6">
                      <p className="text-sm font-semibold text-slate-900">
                        {state.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-600">
                        {state.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/subprocessors/freshness.png"
              alt="A team working through a process diagram on a whiteboard"
              label="Source health review"
              className="h-full min-h-56 w-full rounded-xl border border-slate-200 bg-gray-50"
            />
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <p className="mt-6 text-xs leading-4 text-slate-400">
            Source failure never becomes a zero-records statement. Unfiltered
            empty state appears only when the authoritative current registry is
            genuinely empty.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
