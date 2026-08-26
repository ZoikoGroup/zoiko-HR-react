import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STATUS_STYLES: Record<string, string> = {
  Healthy: "bg-emerald-100 text-emerald-700",
  "Credential expiring": "bg-amber-100 text-amber-700",
  "Mapping review": "bg-sky-100 text-sky-700",
  Failed: "bg-rose-100 text-rose-700",
};

const CONNECTIONS = [
  { title: "ZoikoTime — Acme US", meta: "Last success Today, 06:12 · D. Okafor", status: "Healthy" },
  { title: "Zoiko Payroll — Acme UK", meta: "Last success Yesterday, 22:40 · S. Patel", status: "Credential expiring" },
  { title: "Identity provider — All entities", meta: "Last success Today, 05:03 · IT Ops", status: "Mapping review" },
  { title: "Analytics extract — Acme DE", meta: "Last success 3 days ago · L. Hoffmann", status: "Failed" },
];

export function RecoveryReliabilitySection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Recovery without silent overwrite or data loss.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Health, exceptions, and reconciliation stay actionable and
              privacy-safe — with no implied contractual SLA.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CONNECTIONS.map((conn, i) => (
            <Reveal key={conn.title} delay={0.1 + i * 0.06}>
              <div className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <p className="font-semibold text-ink">{conn.title}</p>
                  <p className="mt-1 text-xs text-ink/40">{conn.meta}</p>
                </div>
                <span className={`flex-none rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[conn.status]}`}>
                  {conn.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.34}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/service-status"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View Service Status
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/product-updates"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View Product Updates
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
