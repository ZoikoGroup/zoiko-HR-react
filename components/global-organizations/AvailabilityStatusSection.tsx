import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STATUS_PILLS = [
  { label: "Configured", className: "bg-emerald-400/10 text-emerald-600" },
  { label: "Available by contract", className: "bg-slate-200 text-slate-500" },
  { label: "Market dependent", className: "bg-amber-400/10 text-amber-600" },
  { label: "Review required", className: "bg-amber-400/10 text-amber-600" },
  {
    label: "Professional review required",
    className: "bg-slate-200 text-slate-500",
  },
  { label: "Not configured", className: "bg-slate-200 text-slate-500" },
  { label: "Unavailable", className: "bg-slate-200 text-slate-500" },
];

const COLUMNS = [
  "Scope / market",
  "Capability",
  "Status",
  "Source",
  "Owner",
  "Last reviewed",
  "Next review",
  "Limitation",
  "Dependency",
];

const ROWS = [
  {
    scope: "EMEA — Core HR",
    capability: { label: "Organization & records", tone: "text-slate-500" },
    status: { label: "Configured", tone: "text-emerald-500" },
    source: "Contract",
    owner: "EMEA HR",
    lastReviewed: "2026-08-01",
    nextReview: "2027-02-01",
    limitation: { label: "None", tone: "text-slate-400" },
    dependency: "None",
  },
  {
    scope: "APAC — Localization",
    capability: { label: "Language / document set", tone: "text-slate-500" },
    status: { label: "Market dependent", tone: "text-amber-500" },
    source: "Product registry",
    owner: "Product Ops",
    lastReviewed: "2026-07-15",
    nextReview: "2026-10-15",
    limitation: { label: "Verify for specific market", tone: "text-amber-500" },
    dependency: "Regional review",
  },
  {
    scope: "LATAM — Payroll integration",
    capability: { label: "HR → payroll handoff", tone: "text-primary" },
    status: { label: "Review required", tone: "text-amber-500" },
    source: "Integration team",
    owner: "Integration Admin",
    lastReviewed: "2026-08-10",
    nextReview: "2026-09-10",
    limitation: {
      label: "Provider availability varies",
      tone: "text-amber-500",
    },
    dependency: "Contract",
  },
  {
    scope: "MEA — Data residency",
    capability: { label: "Regional hosting option", tone: "text-slate-500" },
    status: { label: "Not published", tone: "text-slate-400" },
    source: "—",
    owner: "—",
    lastReviewed: "—",
    nextReview: "—",
    limitation: {
      label: "Contact sales for current information",
      tone: "text-amber-500",
    },
    dependency: "Contract / market",
  },
];

const LINKS = [
  { label: "Contact Sales for market information", href: "/contact-sales" },
  { label: "Contact Support", href: "/contact-support" },
];

export function AvailabilityStatusSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Availability, Jurisdiction and Review Status
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Explicit status — not a coverage map.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            Market, configuration, and professional-review status is shown
            without presenting a map as evidence of product or legal coverage.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {STATUS_PILLS.map((pill) => (
              <span
                key={pill.label}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${pill.className}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} y={30}>
          <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Availability Registry — Illustrative
            </span>
            <div className="mt-3.5 overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left">
                <thead>
                  <tr className="border-b border-black/10 text-[10px] font-semibold uppercase text-slate-400">
                    {COLUMNS.map((column) => (
                      <th key={column} className="px-2.5 py-1 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-xs">
                  {ROWS.map((row) => (
                    <tr key={row.scope}>
                      <td className="px-2.5 py-2.5 font-medium text-sky-950">
                        {row.scope}
                      </td>
                      <td className={`px-2.5 py-2.5 ${row.capability.tone}`}>
                        {row.capability.label}
                      </td>
                      <td
                        className={`px-2.5 py-2.5 font-semibold ${row.status.tone}`}
                      >
                        {row.status.label}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.source}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.owner}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.lastReviewed}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.nextReview}
                      </td>
                      <td className={`px-2.5 py-2.5 ${row.limitation.tone}`}>
                        {row.limitation.label}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.dependency}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-4 rounded-xl border border-black/10 bg-white/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Status communicates product / configuration / review state — not a
              legal conclusion or compliance verdict. No green = compliant, red
              = noncompliant mapping is used.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-5 flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {link.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
