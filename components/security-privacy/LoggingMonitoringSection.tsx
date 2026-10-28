import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { WarningIcon } from "./icons";

const STAGES = [
  {
    label: "Events / signals",
    status: "Restricted",
    description: "Signal classes are evidence-gated and not described publicly.",
  },
  {
    label: "Collection",
    status: "Restricted",
    description: "Scope and tooling are not disclosed without approved evidence.",
  },
  {
    label: "Detection / review",
    status: "Restricted",
    description: "Detection coverage and methods are internal.",
  },
  {
    label: "Investigation",
    status: "Restricted",
    description: "Internal investigation detail is restricted.",
  },
  {
    label: "Response / escalation",
    status: "Current",
    description: "Routes to Security/Privacy/Legal as applicable.",
  },
  {
    label: "Evidence / learning",
    status: "Restricted",
    description: "Post-event evidence is source and authorization controlled.",
  },
];

const ROUTES = [
  { label: "Service Status — availability →", href: "/service-status" },
  { label: "Contact Support — customer issues →", href: "/contact-support" },
  { label: "Security Reporting — vulnerability reports →", href: "/security-reporting" },
];

export function LoggingMonitoringSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 06"
          title="Logging, monitoring, detection and security operations."
          tone="dark"
        >
          Public-safe model only. No 24/7 SOC, SIEM vendor, log-retention
          period, detection coverage, MTTD or monitoring-location claim without
          approved evidence.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 grid overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STAGES.map((stage) => (
              <div
                key={stage.label}
                className="border-b border-white/10 p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0"
              >
                <h3 className="text-sm font-semibold text-white">
                  {stage.label}
                </h3>
                <span
                  className={`mt-3 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                    stage.status === "Current"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                      : "border-rose-400/30 bg-rose-400/10 text-rose-400"
                  }`}
                >
                  {stage.status}
                </span>
                <p className="mt-2.5 text-xs leading-4 text-slate-400">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-start">
          <Reveal delay={0.14} className="min-w-0">
            <div className="flex max-w-lg items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-400/5 px-4 py-3">
              <WarningIcon className="mt-0.5 size-4 flex-none text-amber-400" />
              <p className="text-xs leading-5 text-amber-300">
                Customer-visible audit logs and internal security telemetry are
                different artifacts. Customers do not receive internal security
                telemetry.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {ROUTES.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-primary hover:text-white"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
