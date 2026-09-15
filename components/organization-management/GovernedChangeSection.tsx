import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  { label: "Create change set", description: "Identify change scope, proposer role, target effective date where supported, and reason/category. The change is identifiable and recoverable." },
  { label: "Add actions", description: "Add, rename, move/reparent, activate, archive, or update relationships — only approved verbs. Every action names the affected object and before/after state." },
  { label: "Impact preview", description: "Show known registered dependencies (child units, assignments, mappings, permissions, integrations). Unknown or unverified dependency state is explicit — not hidden." },
  { label: "Validate", description: "Check cycles, duplicates, orphan risks, inactive-parent, required relationships, effective-date conflicts, and permission scope. Blocking vs warning states are explicit." },
  { label: "Review", description: "Human-readable change summary with object count, high-impact flags, unresolved issues, and authoritative approver/confirmation semantics." },
  { label: "Approve / Confirm", description: "Only show Approve if an actual approval model is configured; otherwise use Review/Confirm. UI wording matches the configured governance model." },
  { label: "Schedule / Apply", description: "Current structure remains distinct from scheduled structure until the effective date. No future state masquerades as current." },
  { label: "Reconcile", description: "Downstream sync outcomes, conflicts, partial failure/rollback, retry, and exception owner are resolved. No false success when downstream handling is unresolved." },
  { label: "Audit", description: "Before/after summary, actor role, source, timestamps, effective date, result, correction/supersession. History is immutable and traceable." },
];

export function GovernedChangeSection() {
  return (
    <section id="governed-change" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2.3fr] lg:items-stretch">
          <div className="flex flex-col">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Governed change
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Structural changes go through a governed flow — never
                unreviewed drag-and-drop
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Three change classes route work to deterministic review
                paths. Classification thresholds and exact verbs are
                product-owned.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={30} className="mt-6 lg:mt-auto">
              <PlaceholderImage
                src="/images/organization-management/governed-change.webp"
                alt="Team reviewing charts and data together at a table"
                label="A governed change flow"
                className="h-[453px] w-[340px] max-w-full rounded-2xl"
              />
            </Reveal>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute left-4 top-4 bottom-4 w-px bg-slate-200" />
            {STEPS.map((step, i) => (
              <Reveal key={step.label} delay={0.04 + i * 0.04}>
                <div className="flex gap-4 py-4 first:pt-0">
                  <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
