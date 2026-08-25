import { Container, Reveal } from "@/components/ui";

const HISTORY = [
  {
    id: "APR-2026-0701",
    title: "Approved — position change",
    actor: "You (Manager — M. Schmidt)",
    timestamp: "01 Aug 2026 14:32 CEST",
    effective: "01 Sep 2026",
  },
  {
    id: "APR-2026-0654",
    title: "Rejected — leave request",
    actor: "You (Manager — M. Schmidt)",
    timestamp: "12 Jul 2026 09:15 CEST",
    effective: "—",
  },
  {
    id: "DEL-2026-0201",
    title: "Delegation — granted",
    actor: "You (Grantor — M. Schmidt)",
    timestamp: "05 Aug 2026 11:44 CEST",
    effective: "09 Aug 2026 – 23 Aug 2026",
  },
];

export function DecisionEvidenceSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Decision Evidence and Action History
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Attributable, immutable and scoped to what the manager is authorized
            to see.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Manager-visible history covers authorized work only. Full
            audit/security logs remain separately permissioned. History is
            immutable — corrections create subsequent records rather than
            rewriting prior decisions.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
            <p className="text-xs leading-5 text-slate-500">
              No manager export by default. Any export is separately
              permissioned, logged, scoped, purpose-bound and privacy-reviewed.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {HISTORY.map((entry, i) => (
            <Reveal key={entry.id} delay={0.16 + i * 0.06}>
              <div className="flex items-start justify-between gap-4 rounded-xl border-l-[3px] border-slate-300 bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <div>
                  <p className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {entry.id}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {entry.title}
                    </span>
                  </p>
                  <p className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                    <span>
                      <span className="font-semibold text-slate-400">
                        Actor:
                      </span>{" "}
                      {entry.actor}
                    </span>
                    <span>
                      <span className="font-semibold text-slate-400">
                        Timestamp:
                      </span>{" "}
                      {entry.timestamp}
                    </span>
                    <span>
                      <span className="font-semibold text-slate-400">
                        Effective:
                      </span>{" "}
                      {entry.effective}
                    </span>
                  </p>
                </div>
                <span aria-hidden className="text-xs text-slate-400">
                  ▼
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
