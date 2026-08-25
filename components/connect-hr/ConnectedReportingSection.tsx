import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const METRICS = [
  {
    value: "312",
    unit: "handoffs",
    label: "Handoffs released (Aug 2026)",
    tags: ["Live snapshot", "Operational only"],
  },
  {
    value: "96%",
    unit: "of released",
    label: "Acceptance rate",
    tags: ["Calculated at end of period", "Operational only"],
  },
  {
    value: "3",
    unit: "items",
    label: "Exceptions open",
    tags: ["Live snapshot", "Operational only"],
  },
  {
    value: "2",
    unit: "cases",
    label: "Reconciliation cases open",
    tags: ["Live snapshot", "Operational only"],
  },
];

export function ConnectedReportingSection() {
  return (
    <section className="bg-[#F0F5F9] py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 22 — Connected Reporting and Operational Review
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Operational metrics with explicit definitions, scope and exclusions
            — not payroll outcome proxies.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Missing data is not rendered as zero. Scope changes update labels
            before values. No employee productivity, behavior or sentiment
            scoring.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-[720px] rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3">
            <p className="text-xs font-semibold leading-4 text-red-400">
              Excluded from this specification
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              Employee productivity ranking; behavior analysis; sentiment
              scoring; pay equity conclusions; payroll financial totals;
              statutory compliance claims; surveillance metrics.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={0.14 + i * 0.05}>
              <div className="flex h-full flex-col rounded-xl border border-black/5 border-b-[3px] border-b-sky-500 bg-white px-5 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <p className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold leading-none text-sky-500">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400">{metric.unit}</span>
                </p>
                <p className="mt-3 text-sm font-medium leading-5 text-slate-900">
                  {metric.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {metric.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium leading-4 text-emerald-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/platform/reporting"
                  className="mt-4 text-xs font-semibold text-sky-500 hover:text-sky-600"
                >
                  View definition
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
