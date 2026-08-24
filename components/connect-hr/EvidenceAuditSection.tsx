import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function EvidenceAuditSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            Section 21 — Evidence and Audit Trail
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">
            Attributable, immutable evidence — corrections append rather than
            overwrite historical records.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            Read-only evidence. Export requires explicit purpose and permission.
            Legal or operational holds preserve evidence beyond standard
            retention.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-[700px] rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs leading-5 text-slate-400">
              Evidence records here use synthetic illustrative data only. No
              real employee identifiers, compensation, bank or payroll values
              are displayed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <div className="mt-8 border-l-2 border-sky-500 pl-5">
            <PlaceholderImage
              src="/images/connect-hr/evidence-audit.png"
              alt="A team reviewing records together on laptops"
              label="Evidence and audit trail"
              className="aspect-[1229/338] min-h-48 w-full rounded-xl border border-white/10 bg-slate-900"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
