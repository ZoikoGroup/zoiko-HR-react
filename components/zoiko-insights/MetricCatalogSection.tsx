import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

type Metric = {
  label: string;
  status: "Verified" | "Partial";
  value: string;
  change: string;
  changeClass: string;
  asOf: string;
  source: string;
  /** Decorative trend shape (viewBox 0 0 80 28) — values are illustrative. */
  sparkline: string;
  sparklineClass: string;
};

const METRICS: Metric[] = [
  {
    label: "Active Workforce",
    status: "Verified",
    value: "4,218",
    change: "↑ +1.8%",
    changeClass: "text-green-800",
    asOf: "As of 31 Aug 2026 · 12 entities",
    source: "Source: Core HR · Employment Records v2.1",
    sparkline: "2,26 14,16 24,22 36,17 46,11 56,13 66,7 78,3",
    sparklineClass: "text-primary",
  },
  {
    label: "New Joiners",
    status: "Verified",
    value: "38",
    change: "↓ −5 vs prior",
    changeClass: "text-slate-600",
    asOf: "Aug 2026 · 12 entities",
    source: "Source: Core HR · Lifecycle Events",
    sparkline: "2,26 14,16 24,22 36,17 46,11 56,13 66,7 78,3",
    sparklineClass: "text-primary",
  },
  {
    label: "Open Exceptions",
    status: "Partial",
    value: "14",
    change: "⚠ Requires attention",
    changeClass: "text-yellow-800",
    asOf: "As of 15 Sep 2026 · All owned workflows",
    // The design truncates this line; full wording to be confirmed.
    source: "Source: Workflows & Approvals · Exception Register",
    sparkline: "2,24 12,19 22,23 34,19 46,15 56,17 66,13 78,3",
    sparklineClass: "text-amber-500",
  },
];

const STATUS_STYLES = {
  Verified: "border-green-300 bg-emerald-50 text-green-800",
  Partial: "border-indigo-200 bg-indigo-50 text-blue-900",
};

export function MetricCatalogSection() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Metric catalog"
          title="Know what every metric means before you act on it."
          className="max-w-[640px]"
        >
          One click from any dashboard, the definition drawer shows business
          meaning, calculation, denominator, source objects, owner, version,
          caveats and privacy thresholds.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-white p-5 ${
                  metric.status === "Partial" ? "border-indigo-200" : "border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold leading-5 text-slate-500">{metric.label}</p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-semibold leading-4 ${STATUS_STYLES[metric.status]}`}
                  >
                    {metric.status}
                  </span>
                </div>

                <div className="mt-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-heading text-3xl font-extrabold leading-9 text-ink">{metric.value}</p>
                    <p className={`text-xs font-medium leading-5 ${metric.changeClass}`}>{metric.change}</p>
                  </div>
                  <svg
                    aria-hidden
                    viewBox="0 0 80 28"
                    className={`h-7 w-20 flex-none ${metric.sparklineClass}`}
                    fill="none"
                  >
                    <polyline
                      points={metric.sparkline}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-3">
                  <p className="text-xs leading-4 text-slate-400">{metric.asOf}</p>
                  <p className="truncate text-xs leading-4 text-slate-300" title={metric.source}>
                    {metric.source}
                  </p>
                </div>

                {/* No definition drawer exists on the marketing site yet, so this
                    stays non-interactive rather than linking nowhere. */}
                <p className="mt-4 text-xs font-semibold leading-4 text-primary">View definition →</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18} className="sm:h-full">
            <PlaceholderImage
              src="/images/zoiko-insights/metric-catalog.png"
              alt="Colleagues laughing together around a laptop"
              label="Colleagues reviewing metrics together"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 sm:aspect-auto sm:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            All values are illustrative. A metric is publishable only when status
            = approved and required catalog fields are complete.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
