import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design shows step 01 of a seven-step walkthrough. Only this step's
 * record is in the design, so it renders as a static card rather than a
 * stepper with six empty states.
 */
const GOAL_RECORD = [
  { label: "Goal", value: "Improve enterprise onboarding handoff quality" },
  { label: "Owner", value: "Jordan Alvarez" },
  { label: "Period", value: "01 Jul – 31 Dec 2026" },
  { label: "Alignment", value: "Product Operations → Customer Implementation" },
  { label: "Progress", value: "On track · 72% — Manager-confirmed · 12 Sep 2026" },
  { label: "Visibility", value: "Employee + direct manager + scoped HRBP" },
  { label: "Next check-in", value: "30 Sep 2026" },
];

export function OperatingModelSection() {
  return (
    <section
      id="operating-model"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Operating model"
          title="One governed process from expectations to development — without collapsing everything into a score."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
          <Reveal className="lg:h-full">
            <PlaceholderImage
              src="/images/performance-management/operating-model.png"
              alt="Someone working on a goal plan at a desktop monitor"
              label="Working on a goal plan"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl shadow-md shadow-primary/20 sm:aspect-video lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3.5">
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold leading-4 text-white">
                  01
                </span>
                <h3 className="text-base font-extrabold leading-6 text-ink">Goal record</h3>
              </div>

              <dl>
                {GOAL_RECORD.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid gap-1 border-b border-slate-100 px-5 py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4 ${
                      i % 2 === 1 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <dt className="text-xs font-semibold leading-5 text-slate-500">{row.label}</dt>
                    <dd className="text-xs leading-5 text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs leading-4 text-slate-400">
                Step 01 of 07 — Set goals · All fields are configurable and
                source-governed.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
