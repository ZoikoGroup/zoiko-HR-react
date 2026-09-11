import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TARGET_STATE = [
  "Structured employee records with defined ownership and role-aware access.",
  "Configured workflows with explicit actions, status and accountability.",
  "Controlled document and policy access within the HR experience.",
  "More standardized workforce information for configured reports and operational visibility.",
  "Repeatable processes and visible responsibility across authorized users.",
  "Organizational structures and workflows are configured in the platform rather than duplicated as new files.",
];

export function BeforeAfterSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Move from fragmented administration to governed HR.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Spreadsheets are useful tools. The limitation appears when
              they become the de facto system for records, permissions,
              approvals, status and multi-user HR operations.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1fr_1.6fr] border-b border-slate-200">
              <p className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-ink/40">
                Before
              </p>
              <p className="border-l border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Zoiko HR Target State
              </p>
            </div>

            <div className="grid grid-cols-[1fr_1.6fr] items-stretch">
              <PlaceholderImage
                src="/images/replace-spreadsheets/before-after.webp"
                alt="A team reviewing scattered documents together in a glass-walled office"
                label="Fragmented administration"
                className="h-full min-h-[280px] w-full"
              />

              <div className="divide-y divide-slate-200 border-l border-slate-200 px-6">
                {TARGET_STATE.map((item) => (
                  <p key={item} className="py-4 text-sm leading-relaxed text-ink/70">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
