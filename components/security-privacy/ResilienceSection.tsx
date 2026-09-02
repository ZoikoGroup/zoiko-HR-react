import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { StatusBadge } from "./StatusBadge";

const TOPICS = [
  {
    label: "Infrastructure / cloud boundary",
    status: "Request Required",
    detail:
      "Hosting provider, region and architecture detail are evidence-gated and released only under an approved access class.",
  },
  {
    label: "Secure configuration / hardening",
    status: "Request Required",
    detail:
      "Baseline and hardening standards are described only from current approved evidence, never from general industry practice.",
  },
  {
    label: "Backup / recovery evidence",
    status: "Request Required",
    detail:
      "Backup frequency, retention and restore-test evidence require an approved record. No RPO or RTO is asserted here.",
  },
  {
    label: "Continuity / disaster recovery",
    status: "Request Required",
    detail:
      "Continuity and disaster-recovery documentation is controlled and provided through a security review request.",
  },
  {
    label: "Capacity / resilience",
    status: "Current",
    detail:
      "Operating model only. Current availability belongs to Service Status — no uptime or SLA figure is published here.",
  },
  {
    label: "Supplier / subprocessor security",
    status: "Current",
    detail:
      "The approved subprocessor list is the authoritative source for supplier scope and responsibilities.",
  },
];

export function ResilienceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <div>
            <SectionHeading
              eyebrow="Section 08"
              title="Resilience, backups, infrastructure and third-party boundaries."
            >
              No uptime, SLA, RTO, RPO, hosting location or provider name
              without current approved evidence. Service Status owns current
              availability data.
            </SectionHeading>

            <Reveal delay={0.12}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/service-status"
                  className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary"
                >
                  Service Status →
                </Link>
                <Link
                  href="/trust-center"
                  className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary"
                >
                  Subprocessors →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="space-y-2.5">
            {TOPICS.map((topic, i) => (
              <Reveal key={topic.label} delay={Math.min(i * 0.05, 0.3)}>
                <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
                    <span
                      aria-hidden
                      className={`size-1.5 flex-none rounded-full ${
                        topic.status === "Current"
                          ? "bg-emerald-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <span className="flex-1 text-sm font-semibold text-ink">
                      {topic.label}
                    </span>
                    <StatusBadge status={topic.status} />
                    <span
                      aria-hidden
                      className="flex-none text-slate-400 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 pl-[2.1rem] text-xs leading-5 text-slate-500">
                    {topic.detail}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
