import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SectionFootnote, StatusChip } from "./shared";

const LIMITATIONS = [
  {
    id: "LIM-001",
    title: "PDF accessibility status not yet audited",
    affected: "Documentation site — downloadable PDF assets",
    status: "Workaround Available",
  },
  {
    id: "LIM-002",
    title: "Mobile application scope not yet established",
    affected: "iOS and Android mobile applications",
    status: "Open",
  },
  {
    id: "LIM-003",
    title: "Screen reader testing evidence not yet published",
    affected: "All product and public surfaces",
    status: "Open",
  },
];

export function KnownLimitationsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="09 / Known Limitations & Workarounds"
          title="Current open limitations."
        >
          Material limitations are visible in HTML — not hidden in a PDF or
          tooltip. Workarounds are published only when they are accessible, safe
          and current. Fix dates are shown only when approved.
        </SectionHeading>

        <div className="mt-10 flex flex-col gap-4">
          {LIMITATIONS.map((limitation, i) => (
            <Reveal key={limitation.id} delay={Math.min(i * 0.06, 0.24)}>
              <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-200 bg-white">
                <span aria-hidden className="w-1 flex-none bg-amber-400" />
                <div className="flex flex-1 flex-col gap-3 px-6 py-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-baseline gap-2.5">
                      <span className="font-mono text-[11px] uppercase text-slate-400">
                        {limitation.id}
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        {limitation.title}
                      </span>
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      Affected: {limitation.affected}
                    </p>
                  </div>
                  <div className="flex flex-none items-center gap-3">
                    <StatusChip status={limitation.status} />
                    {/* No per-limitation detail record is published yet, so
                        the control stays on the page rather than routing
                        somewhere that does not exist. */}
                    <span className="text-xs font-medium text-primary">
                      Details ↓
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionFootnote>
          A resolved limitation is verified before removal from this list.
          Resolved items are preserved in the change history (Section 14).
        </SectionFootnote>
      </Container>
    </section>
  );
}
