import { Container, Reveal } from "@/components/ui";

const ROWS = [
  {
    domain: "Workflow routing",
    global: "Common lifecycle or request process",
    local: "Different approver or HR owner for an entity or location",
  },
  {
    domain: "Policy acknowledgement",
    global: "Group policy requirement",
    local: "Local supplement or separately governed policy where applicable",
  },
  {
    domain: "Calendars & dates",
    global: "Common working convention",
    local: "Local holiday or calendar configuration where supported",
  },
  {
    domain: "Terminology",
    global: "Shared product vocabulary",
    local: "Approved locale terminology or language variant where supported",
  },
  {
    domain: "Fields / forms",
    global: "Common minimum worker data",
    local: "Additional supported fields needed for a configured operating context",
  },
  {
    domain: "Notifications",
    global: "Common event triggers",
    local: "Localized recipient, routing or approved messaging variant",
  },
];

export function ConfigurationDomainsSection() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Jurisdiction-Aware Configuration
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Configure what changes locally — keep the difference visible.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/50">
            &ldquo;Jurisdiction-aware&rdquo; means configuration can reflect
            approved local operating requirements. This is not a promise of
            automatic legal compliance. Legal requirements remain subject to
            the organization&apos;s own counsel, policies and implementation
            decisions.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <div className="hidden border-b border-ink/10 pb-3 lg:grid lg:grid-cols-[1fr_1.6fr_1.6fr] lg:gap-x-6">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/40">
                Configuration Domain
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-emerald-600">
                Global Default
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
                Controlled Local Variant
              </p>
            </div>

            <div className="divide-y divide-ink/[0.08]">
              {ROWS.map((row) => (
                <div
                  key={row.domain}
                  className="grid grid-cols-1 gap-3 py-5 lg:grid-cols-[1fr_1.6fr_1.6fr] lg:gap-x-6 lg:py-4"
                >
                  <p className="text-sm font-semibold text-ink">
                    {row.domain}
                  </p>
                  <div>
                    <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-emerald-600 lg:hidden">
                      Global Default
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                      <p className="text-sm leading-relaxed text-ink/60">
                        {row.global}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-primary lg:hidden">
                      Controlled Local Variant
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <p className="text-sm leading-relaxed text-ink/60">
                        {row.local}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
