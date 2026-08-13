import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STATUS_STYLES: Record<string, string> = {
  Connected: "text-emerald-600",
  "Requires setup": "text-amber-600",
  "Not connected": "text-ink/40",
};

const CONNECTORS = [
  { connector: "ZoikoID", category: "Identity", source: "ZoikoID", status: "Connected" },
  { connector: "ZoikoTime", category: "Time & attendance", source: "ZoikoTime", status: "Connected" },
  { connector: "Zoiko Payroll", category: "Payroll", source: "Zoiko Payroll", status: "Requires setup" },
  { connector: "Zoiko Docs Pro", category: "Documents", source: "Zoiko Docs Pro", status: "Connected" },
  { connector: "Approved SSO provider", category: "Identity", source: "Customer IdP", status: "Not connected" },
];

export function IntegrationsAuthoritativeSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Integrations & authoritative sources
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every field knows which system owns it.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              For each field or event, the platform identifies which
              system creates, approves, owns, and updates the
              authoritative value.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-ink/40">
                  <th className="px-6 py-3 font-medium">Connector</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Authoritative Source</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CONNECTORS.map((row) => (
                  <tr key={row.connector} className="transition-colors duration-150 hover:bg-slate-50">
                    <td className="px-6 py-3.5 font-medium text-ink">{row.connector}</td>
                    <td className="px-6 py-3.5 text-ink/50">{row.category}</td>
                    <td className="px-6 py-3.5 text-ink/50">{row.source}</td>
                    <td className={`px-6 py-3.5 font-semibold ${STATUS_STYLES[row.status]}`}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/integrations"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore Integrations
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
