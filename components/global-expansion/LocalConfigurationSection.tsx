import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { domain: "Workflow routing", global: "Common lifecycle or request process", local: "Different approver or HR owner for an entity or location" },
  { domain: "Policy acknowledgement", global: "Group policy requirement", local: "Local supplement or separately governed policy where applicable" },
  { domain: "Calendars & dates", global: "Common working convention", local: "Local holiday or calendar configuration where supported" },
  { domain: "Terminology", global: "Shared product vocabulary", local: "Approved locale terminology or language variant where supported" },
  { domain: "Fields / forms", global: "Common minimum worker data", local: "Additional supported fields needed for a configured operating context" },
  { domain: "Notifications", global: "Common event triggers", local: "Localized recipient, routing or approved messaging variant" },
];

export function LocalConfigurationSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Jurisdiction-aware configuration
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Configure what changes locally — keep the difference
              visible.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              &ldquo;Jurisdiction-aware&rdquo; means configuration can
              reflect approved local operating requirements. This is not
              a promise of automatic legal compliance. Legal requirements
              remain subject to the organization&apos;s own counsel,
              policies and implementation decisions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10">
            <div className="grid grid-cols-[1fr_1.1fr_1.3fr] gap-6 border-b border-slate-200 pb-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Configuration domain</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Global default</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Controlled local variant</p>
            </div>
            <div className="divide-y divide-slate-200">
              {ROWS.map((row, i) => (
                <Reveal key={row.domain} delay={0.04 + i * 0.04}>
                  <div className="grid grid-cols-[1fr_1.1fr_1.3fr] items-baseline gap-6 py-4">
                    <p className="font-semibold text-ink">{row.domain}</p>
                    <p className="flex items-baseline gap-2 text-sm leading-relaxed text-ink/60">
                      <span className="size-1.5 flex-none translate-y-[-2px] rounded-full bg-emerald-500" />
                      {row.global}
                    </p>
                    <p className="flex items-baseline gap-2 text-sm leading-relaxed text-ink/60">
                      <span className="size-1.5 flex-none translate-y-[-2px] rounded-full bg-primary" />
                      {row.local}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
