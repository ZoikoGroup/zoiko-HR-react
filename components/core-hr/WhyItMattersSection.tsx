import { Container, Reveal } from "@/components/ui";

const COMPARISONS = [
  {
    problem: "Duplicate identities and inconsistent employee details across systems.",
    solution: "Defined person and employment model with authoritative source, validation, and deduplication.",
  },
  {
    problem: "Organization and manager changes silently overwrite records and history.",
    solution: "Effective-dated position, organization, and reporting relationships — nothing is silently erased.",
  },
  {
    problem: "Self-service or bulk imports bypass approvals and source-of-record rules.",
    solution: "Permission-aware requests, preview, validation, approval workflow, and full audit trail.",
  },
  {
    problem: "Reports cannot explain data source, time period, scope, or completeness.",
    solution: "Defined metrics, data-quality status, and ownership-aware operational reporting.",
  },
];

export function WhyItMattersSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Why it matters
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Reliable people operations start with reliable workforce{" "}
                <span style={{ color: "#93A9FF" }}>information</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Employee and organizational information often spreads across
                spreadsheets, inboxes, payroll systems, time tools,
                documents, and local processes. Core HR establishes clear
                records, ownership, change control, permissions, and
                history.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
                <p className="text-sm leading-relaxed text-amber-200">
                  <span className="font-semibold">Scope note:</span> Core HR
                  supports workforce administration. It does not itself
                  guarantee payroll, tax, employment-law, or regulatory
                  compliance.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {COMPARISONS.map((item, i) => (
              <Reveal key={item.problem} delay={0.12 + i * 0.06}>
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                      <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5">
                        <path
                          d="M6 6l8 8M14 6l-8 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <p className="text-xs leading-relaxed text-white/60">
                      {item.problem}
                    </p>
                  </div>
                  <div className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3">
                    <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                      <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5">
                        <path
                          d="M4 10l4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-xs leading-relaxed text-white/80">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
