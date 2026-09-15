import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CorrectionsAdjustmentsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Corrections &amp; adjustments
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Supersession rather than silent history rewrite
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every correction creates a new versioned record with
              before/after values, reason category, actor role,
              effective date and audit reference. Prior history is never
              deleted. Downstream reconciliation is a separate state.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <Reveal delay={0.14} className="flex">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-ink/40">COR-001 <span className="ml-1 font-sans font-semibold text-ink">Balance adjustment</span></p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Applied
                </span>
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <p><span className="text-ink/40">Target:</span> <span className="text-ink/70">Annual Leave — A. Chen (synthetic)</span></p>
                <p><span className="text-ink/40">Reason:</span> <span className="text-ink/70">System import discrepancy</span></p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-rose-50 p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Before</p>
                  <p className="mt-1 text-lg font-bold text-ink">12 days</p>
                  <p className="text-xs text-ink/40">As of 2025-09-01</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">After (corrected)</p>
                  <p className="mt-1 text-lg font-bold text-ink">15 days</p>
                  <p className="text-xs text-ink/40">Effective 2025-09-01 — corrected</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-ink/40">
                <span>Actor: Leave Admin (synthetic)</span>
                <span>Synthetic</span>
              </div>
              <p className="mt-1 text-xs text-ink/40">Superseding record COR-001 — prior version retained</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/leave-attendance/corrections-adjustments.png"
              alt="Colleagues reviewing documents together at a table"
              label="Supersession, not silent rewrite"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
