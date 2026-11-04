import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design lists the eight phases with a disclosure chevron but publishes no
 * body copy for any of them, so the rows are rendered flat rather than as empty
 * expanders.
 */
const PHASES = [
  { id: "01", icon: "◉", accent: "text-primary", numberClass: "text-primary", name: "Eligibility / decision review" },
  { id: "02", icon: "◷", accent: "text-sky-700", numberClass: "text-sky-700", name: "Impact preview" },
  { id: "03", icon: "⊞", accent: "text-violet-600", numberClass: "text-violet-600", name: "Authorization check" },
  { id: "04", icon: "⊟", accent: "text-amber-700", numberClass: "text-amber-700", name: "Change execution" },
  { id: "05", icon: "⊙", accent: "text-green-700", numberClass: "text-green-700", name: "Observed state review" },
  { id: "06", icon: "◈", accent: "text-slate-500", numberClass: "text-slate-500", name: "Outstanding work assignment" },
  { id: "07", icon: "⊡", accent: "text-red-600", numberClass: "text-red-600", name: "Reconciliation and closure" },
  { id: "08", icon: "✦", accent: "text-slate-900", numberClass: "text-slate-900", name: "Recovery / reversibility" },
];

export function AddRemoveSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Add / Remove Product"
          title="Eight governed phases — no orphaned items, no silent migration, no guaranteed perfect reversal"
        >
          Adding or removing a product follows impact review, authorization,
          observed-state verification and reconciliation. The Exit Readiness
          Snapshot must be complete before governed removal proceeds.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <Reveal amount={0}>
            <ol className="flex flex-col gap-3">
              {PHASES.map((phase) => (
                <li
                  key={phase.id}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5"
                >
                  <span
                    className={`flex-none font-mono text-xs leading-4 ${phase.numberClass}`}
                  >
                    {phase.id}
                  </span>
                  <span aria-hidden className={`flex-none text-sm ${phase.accent}`}>
                    {phase.icon}
                  </span>
                  <span className="break-words text-sm font-bold text-slate-950">
                    {phase.name}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-one/add-remove-product.webp"
              alt="Two colleagues shaking hands across a desk"
              label="Add or remove product"
              className="aspect-video w-full rounded-xl bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
