import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STATS = [
  { value: "18", label: "Open Lifecycle Events", description: "Events with tasks pending or overdue" },
  { value: "9", label: "Approvals Pending", description: "Requests awaiting authorized decision" },
  { value: "23", label: "Data Quality Items", description: "Records with missing or conflicting data" },
  { value: "3", label: "Integration Exceptions", description: "Sync failures or source conflicts requiring review" },
];

export function ReportingInsightsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 13 — Reporting & people operations insights
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Understand the health of people operations without turning
              reporting into surveillance.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-rose-400/30 bg-rose-400/5 px-5 py-3.5 text-center text-sm text-rose-200">
            No hidden productivity scores, behavior policing, keystroke
            monitoring, or unqualified performance predictions.
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="grid gap-4">
            {STATS.slice(0, 2).map((stat, i) => (
              <Reveal key={stat.label} delay={0.14 + i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/global-hr/reporting-insights.png"
              alt="Two colleagues reviewing a report together"
              label="Reporting, not surveillance"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>

          <div className="grid gap-4">
            {STATS.slice(2, 4).map((stat, i) => (
              <Reveal key={stat.label} delay={0.26 + i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact-sales"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Contact Sales for reporting requirements
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
