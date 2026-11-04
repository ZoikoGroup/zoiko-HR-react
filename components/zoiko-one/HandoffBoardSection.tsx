import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, Dot } from "./shared";

const COLUMNS = [
  {
    state: "Prepared",
    count: 1,
    dot: "bg-sky-700",
    header: "bg-sky-700/5 border-sky-700/20 text-sky-700",
    from: "ZoikoTime",
    fromTint: "bg-primary/5 text-primary",
    to: "Zoiko HR",
    title: "Approved timesheet context for pay period",
    note: "Reference only. Zoiko HR validates access before action.",
  },
  {
    state: "Requested",
    count: 1,
    dot: "bg-amber-700",
    header: "bg-amber-700/5 border-amber-700/20 text-amber-700",
    from: "Zoiko HR",
    fromTint: "bg-sky-700/5 text-sky-700",
    to: "Zoiko Payroll",
    title: "Payroll-preparation reference for current period",
    note: "Handoff request recorded. Target completion unconfirmed.",
  },
  {
    state: "Accepted",
    count: 1,
    dot: "bg-violet-600",
    header: "bg-violet-600/5 border-violet-600/20 text-violet-600",
    from: "Zoiko Comply",
    fromTint: "bg-amber-700/5 text-amber-700",
    to: "Zoiko HR",
    title: "Policy version acknowledgment reference",
    note: "Target acknowledged receipt. Action still source-owned.",
  },
  {
    state: "Completed",
    count: 2,
    dot: "bg-green-700",
    header: "bg-green-700/5 border-green-700/20 text-green-700",
    from: "Zoiko Docs Pro",
    fromTint: "bg-violet-600/5 text-violet-600",
    to: "Zoiko HR",
    title: "Onboarding document version link for HR record",
    note: "Completed and reconciled. Source version bound at v3.0.",
  },
  {
    state: "Rejected / stale",
    count: 1,
    dot: "bg-red-600",
    header: "bg-red-600/5 border-red-600/20 text-red-600",
    from: "Zoiko HR",
    fromTint: "bg-red-600/5 text-red-600",
    to: "Zoiko Comply",
    title: "HR record reference for audit evidence flow",
    note: "Target rejected — dependency version stale. Review required.",
  },
];

export function HandoffBoardSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Cross-Product Handoffs"
          title="Handoff state board — request and observed target completion are always distinct"
        >
          A deep link, task card or handoff request is not completed
          cross-product action. Each target product reauthorizes before action.
          Handoffs carry minimum reference metadata — not copied sensitive
          payloads.
        </SectionHeading>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COLUMNS.map((column, i) => (
            <Reveal key={column.state} delay={Math.min(0.04 + i * 0.04, 0.2)} amount={0}>
              <div className="flex flex-col gap-2">
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${column.header}`}
                >
                  <Dot className={column.dot} />
                  <span className="text-xs font-medium leading-4">
                    {column.state}
                  </span>
                  <span className="ml-auto font-mono text-[10px] leading-4 text-gray-400">
                    {column.count}
                  </span>
                </div>

                <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`rounded-sm px-1.5 py-0.5 text-[10px] font-medium leading-4 ${column.fromTint}`}
                    >
                      {column.from}
                    </span>
                    <span aria-hidden className="text-[10px] text-slate-300">
                      →
                    </span>
                    <span className="text-[10px] font-medium leading-4 text-gray-500">
                      {column.to}
                    </span>
                  </div>
                  <p className="break-words text-xs font-semibold leading-4 text-slate-950">
                    {column.title}
                  </p>
                  <p className="break-words text-[10px] font-medium leading-4 text-gray-400">
                    {column.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <PlaceholderImage
            src="/images/zoiko-one/handoffs.webp"
            alt="Colleagues gathered around a boardroom table mid-discussion"
            label="Cross-product handoffs"
            className="mt-6 aspect-video w-full rounded-xl bg-slate-100 lg:aspect-[1280/300]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
