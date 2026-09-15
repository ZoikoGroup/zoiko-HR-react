import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StateChip } from "./shared";

const STATES = [
  "Before cutoff",
  "Cutoff pending",
  "After cutoff",
  "Future period",
  "Prior period",
  "Period unknown",
  "Payroll review required",
];

export function CutoffTimingSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pay periods, cutoffs & timing"
          title="No universal cutoff window is assumed — ever."
          className="max-w-[700px]"
        >
          Timing decisions are current, rule-versioned and evidenced. Unknown or
          late timing becomes a review state, not automatic current-period
          processing.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-slate-100 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
                Cutoff impact states
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {STATES.map((state) => (
                  <StateChip key={state}>{state}</StateChip>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-payroll/cutoffs-timing.webp"
              alt="A presenter walking a boardroom through period reporting"
              label="Pay periods and cutoffs"
              className="aspect-video w-full rounded-xl border border-slate-200 bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
