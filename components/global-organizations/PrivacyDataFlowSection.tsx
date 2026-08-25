import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Category",
  "Purpose",
  "Source",
  "Destination",
  "Direction",
  "Scope",
  "Access",
  "Transfer",
  "Status",
];

const ROWS = [
  {
    category: "Workforce records",
    purpose: "HR administration",
    source: "HR system",
    destination: "Identity provider",
    direction: "HR → Identity",
    scope: "Global",
    access: "HR Admin + Sec Admin",
    transfer: { label: "Approved safeguard", tone: "text-primary" },
    status: { label: "Verified", tone: "text-emerald-500" },
  },
  {
    category: "Time / schedule",
    purpose: "Time coordination",
    source: "Time system",
    destination: "HR context",
    direction: "Time → HR",
    scope: "NORAM/EMEA",
    access: "HR Admin + Time Admin",
    transfer: { label: "Internal", tone: "text-emerald-500" },
    status: { label: "Verified", tone: "text-emerald-500" },
  },
  {
    category: "Payroll handoff",
    purpose: "Approved context supply",
    source: "HR system",
    destination: "Payroll system",
    direction: "HR → Payroll",
    scope: "Contracted markets",
    access: "HR Admin + Payroll liaison",
    transfer: { label: "Review required", tone: "text-amber-500" },
    status: { label: "Review due", tone: "text-amber-500" },
  },
  {
    category: "Documents",
    purpose: "Worker communication",
    source: "HR system",
    destination: "Worker",
    direction: "HR → Worker",
    scope: "Per locale",
    access: "HR Admin + Local HR",
    transfer: { label: "Locale-specific", tone: "text-slate-500" },
    status: { label: "Configured", tone: "text-emerald-500" },
  },
];

const LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "DPA", href: "/dpa" },
  { label: "Subprocessors", href: "/subprocessors" },
];

export function PrivacyDataFlowSection() {
  return (
    <section className="border-t border-black/10 bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Privacy, Data Flow, Residency and Transfer Boundaries
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            What moves, why, who owns it, what still requires review.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            No real employee data. Residency/transfer statements render only
            from approved sources and never as automatic legal conclusions.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <div className="mt-8 rounded-2xl border border-black/10 bg-slate-50 p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Data Flow — Illustrative (Text Equivalent)
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
                    <tr key={row.category}>
                      <td className="px-2.5 py-2.5 font-medium text-sky-950">
                        {row.category}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.purpose}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.source}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.destination}
                      </td>
                      <td className="px-2.5 py-2.5 font-semibold text-primary">
                        {row.direction}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.scope}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.access}
                      </td>
                      <td
                        className={`px-2.5 py-2.5 font-semibold ${row.transfer.tone}`}
                      >
                        {row.transfer.label}
                      </td>
                      <td
                        className={`px-2.5 py-2.5 font-semibold ${row.status.tone}`}
                      >
                        {row.status.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-6">
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
