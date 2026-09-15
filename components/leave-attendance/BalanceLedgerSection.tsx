import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COMPONENTS = [
  { label: "Opening / prior balance", description: "As carried from prior effective period per approved formula", value: "+15d", bar: "bg-sky-500", width: "100%" },
  { label: "Earned / allocated", description: "Approved credits per formula version — exact label from product taxonomy", value: "+10d", bar: "bg-emerald-500", width: "67%" },
  { label: "Used / finalized", description: "Finalized approved usage — separate from pending", value: "-7d", bar: "bg-rose-500", width: "47%" },
  { label: "Pending / reserved", description: "Pending requests — whether this affects available is product-rule defined", value: "-3d", bar: "bg-amber-500", width: "20%" },
  { label: "Adjustments", description: "Manual adjustments with reason, actor role, effective date and supersession reference", value: "+2d", bar: "bg-violet-500", width: "13%" },
];

export function BalanceLedgerSection() {
  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:items-stretch">
          <div className="flex flex-col">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Balance ledger
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Every balance is source-specific, time-specific, and
                formula-versioned
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                A displayed balance without as-of-date, source, formula
                version and pending-treatment context is not safe to act
                on. All ledger values in mockups are synthetic.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={30} className="mt-6 lg:mt-auto">
              <PlaceholderImage
                src="/images/leave-attendance/balance-ledger.png"
                alt="Two colleagues reviewing a laptop together"
                label="Source-specific, time-specific balances"
                fit="contain"
                className="w-full rounded-2xl"
              />
            </Reveal>
          </div>

          <Reveal delay={0.14} y={30}>
            <div className="rounded-2xl bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Ledger components — synthetic values
              </p>
              <div className="mt-4 space-y-4">
                {COMPONENTS.map((component) => (
                  <div key={component.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-semibold">{component.label}</p>
                      <p className={`text-sm font-semibold ${component.value.startsWith("-") ? "text-rose-400" : "text-emerald-400"}`}>
                        {component.value}
                      </p>
                    </div>
                    <p className="mt-0.5 text-xs text-white/40">{component.description}</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                      <div className={`h-1.5 rounded-full ${component.bar}`} style={{ width: component.width }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white/70">Available balance</p>
                <p className="text-2xl font-bold">17 days</p>
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3.5 py-2.5 text-xs text-amber-200">
                <span aria-hidden>⚠</span>
                Carryover and expiry render only where supported and with
                an exact effective date and source rule. No generic
                jurisdiction assumption. Formula version controls
                rounding and pending treatment.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
