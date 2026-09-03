import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SourceDependencyNotice, StatePill } from "./shared";

const EVENTS = [
  {
    id: "EVT-003",
    badge: "Added",
    badgeClass: "bg-emerald-50 text-emerald-600",
    bar: "bg-emerald-400",
    current: true,
    entity: "[Legal Entity — Source Required]",
    summary:
      "[Approved public summary — source required. No internal rationale.]",
  },
  {
    id: "EVT-002",
    badge: "Location Updated",
    badgeClass: "bg-blue-50 text-blue-600",
    bar: "bg-blue-400",
    entity: "[Legal Entity — Source Required]",
    summary:
      "[Approved location change summary — before/after geography from source. No transfer-mechanism inference.]",
  },
  {
    id: "EVT-001",
    badge: "Legal Name Changed",
    badgeClass: "bg-violet-50 text-violet-600",
    bar: "bg-violet-300",
    entity: "[Legal Entity — Source Required]",
    summary:
      "[Former legal entity name preserved. Approved continuity record. No unexplained new record.]",
  },
];

export function ChangeLedgerSection() {
  return (
    <section id="change-history" className="scroll-mt-24 bg-gray-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="09 / Changes, Snapshots & Version History"
          title="Append-only event ledger."
        >
          Material change events are appended — never silently overwritten. Each
          event preserves before/after state, effective date where sourced and a
          link to the current record.
        </SectionHeading>

        <SourceDependencyNotice className="mt-10" />

        <Reveal delay={0.06}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Registry snapshot
                </p>
                <p className="mt-1 font-mono text-xs text-slate-700">
                  ZHR-SP-SNAP-001
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Snapshot date
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Pending — source required
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Source health
                </p>
                <StatePill state="Under Review" className="mt-1" />
              </div>
            </div>

            <span className="rounded-md border border-primary/30 px-3.5 py-2 text-xs font-semibold text-primary">
              Print / Share snapshot
            </span>
          </div>
        </Reveal>

        <div className="mt-4 flex flex-col gap-3">
          {EVENTS.map((event, i) => (
            <Reveal key={event.id} delay={Math.min(0.06 + i * 0.06, 0.3)}>
              <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-200 bg-white">
                <span aria-hidden className={`w-1 flex-none ${event.bar}`} />
                <div className="min-w-0 flex-1 px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs text-slate-500">
                        {event.id}
                      </span>
                      <span
                        className={`rounded px-2 py-0.5 text-[11px] font-medium ${event.badgeClass}`}
                      >
                        {event.badge}
                      </span>
                      {event.current && <StatePill state="Current" />}
                    </div>
                    <span className="text-xs text-slate-400">
                      [Approved date — source required]
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold leading-5 text-slate-900">
                    {event.entity}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {event.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-5">
                    <p className="text-xs text-slate-400">
                      Effective:{" "}
                      <em className="not-italic text-slate-500">
                        [Source-approved effective date]
                      </em>
                    </p>
                    <Link
                      href="#current-registry"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      → Current record
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-4 text-xs leading-4 text-slate-400">
            Events above use synthetic placeholder labels only. Material
            correction events are append-only — no silent overwrite of history.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
