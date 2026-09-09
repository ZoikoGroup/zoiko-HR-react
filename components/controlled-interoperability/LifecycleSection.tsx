import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const GROUPS = [
  {
    label: "Setup & review",
    states: ["Proposed", "Configured", "Tested", "Reviewed", "Activation snapshot"],
  },
  {
    label: "Operation",
    states: ["Active", "Degraded / conflict", "Paused", "Resume"],
  },
  {
    label: "Exit",
    states: ["Revoked", "Retired", "Offboarded"],
  },
];

export function LifecycleSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="A flow can always be paused or removed — never silently restarted."
          className="max-w-[700px]"
        >
          Setup, operation and exit are tracked as separate lifecycle groups,
          each with its own explicit states.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,535px)]">
          <div className="flex flex-col gap-4">
            {GROUPS.map((group, i) => (
              <Reveal key={group.label} delay={0.06 + i * 0.06} className="flex-1">
                <div className="flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:gap-5">
                  <p className="text-sm font-bold text-sky-950 sm:w-40 sm:flex-none">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.states.map((state) => (
                      <span
                        key={state}
                        className="rounded-md border border-slate-200 px-2.5 py-1.5 text-xs text-slate-600"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the lifecycle groups set the height. */}
          <div className="relative min-h-56 lg:min-h-0">
            <Reveal delay={0.16} className="absolute inset-0">
              <PlaceholderImage
                src="/images/controlled-interoperability/lifecycle.webp"
                alt="Colleagues reviewing a decision together at a table"
                label="Flow lifecycle"
                className="h-full w-full rounded-xl bg-slate-100"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
