import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatusBadge, ProhibitedIcon } from "./shared";

const RECORDS = [
  {
    id: "PRH-001",
    title:
      "Autonomous consequential employment decisions without human review and explicit approval authority.",
    category: "Employment decisions",
    scope: "All contexts, all use cases",
    enforcement: "Blocked",
    owner: "AI Governance / Legal / HR Policy",
  },
  {
    id: "PRH-002",
    title:
      "Hidden scoring of employees, candidates or workers on sentiment, productivity, risk, health, grievance or protected attributes.",
    category: "Hidden scoring",
    scope: "All employee / candidate contexts",
    enforcement: "Blocked",
    owner: "AI Governance / Privacy / Legal",
  },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xs leading-4 text-slate-600">{value}</p>
    </div>
  );
}

export function ProhibitedUsesSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 10"
          title="Prohibited and restricted AI uses."
        >
          Non-permitted or review-required AI behavior is visible, source-owned
          and enforceable. Critical prohibited content is always expanded —
          never hidden by default.
        </SectionHeading>

        <Reveal delay={0.06}>
          <div className="mt-7 flex items-start gap-2.5 rounded-[10px] border border-rose-200 bg-rose-50/60 px-3.5 py-2.5">
            <ProhibitedIcon className="mt-0.5 size-4 flex-none text-rose-400" />
            <p className="text-xs leading-4 text-slate-600">
              The following records are always visible by governance
              requirement. They cannot be hidden in a tooltip, collapsed element
              or low-contrast presentation.
            </p>
          </div>
        </Reveal>

        <div className="mt-4 flex flex-col gap-3">
          {RECORDS.map((record, i) => (
            <Reveal key={record.id} delay={Math.min(0.1 + i * 0.06, 0.3)}>
              {/* The rose outline thickens into an accent stripe down the
                  left edge of each prohibited record. */}
              <div className="rounded-xl border border-l-[3px] border-rose-300 border-l-rose-400 bg-white px-5 py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <p className="min-w-0 text-sm font-semibold text-ink">
                    <span className="mr-2 font-mono text-[10px] uppercase text-slate-400">
                      {record.id}
                    </span>
                    {record.title}
                  </p>
                  <StatusBadge status="Prohibited" className="flex-none" />
                </div>

                <div className="mt-3.5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label="Category" value={record.category} />
                  <Field label="Scope" value={record.scope} />
                  <Field label="Enforcement" value={record.enforcement} />
                  <Field label="Owner" value={record.owner} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <PlaceholderImage
            src="/images/ai-governance/prohibited-uses.png"
            alt="A presenter briefing colleagues in a high-rise meeting room"
            label="Briefing on prohibited uses"
            className="mt-3 aspect-[1216/302] w-full rounded-xl border border-rose-300"
          />
          <p className="mt-3 text-[10px] leading-4 text-slate-400">
            Prohibited use registry is source-owned and review-dated. Exceptions
            require formal re-review and explicit policy approval. These are
            governance categories, not confirmed production features.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
