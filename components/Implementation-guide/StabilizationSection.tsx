import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const healthChecks = [
  "Config version current",
  "Data currentness verified",
  "Workflow tests passed",
  "Integration health nominal",
  "Support ownership confirmed",
];

export function StabilizationSection() {
  return (
    <section className="bg-white py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Title */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Stabilization and operational handover.
            </h2>
          </Reveal>

          {/* Content Area: Health Checks + Image Panel */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Production Health Checks List */}
            <Reveal delay={0.08}>
              <div className="flex w-full flex-col lg:w-1/2">
                <h3 className="whitespace-nowrap text-base font-bold text-sky-950">
                  Production health checks
                </h3>

                <div className="mt-4 flex flex-col gap-3">
                  {healthChecks.map((check, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-[10px] bg-slate-50 px-4 py-3"
                    >
                      <span className="text-base font-bold leading-none text-emerald-400">
                        ✓
                      </span>
                      <span className="whitespace-nowrap text-sm text-sky-950">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal delay={0.14}>
              <div className="flex w-full lg:w-1/2">
                <PlaceholderImage
                  src="/images/implementation-guide/Stabilization.png"
                  alt="Operational handover and team collaboration"
                  label="Operational Handover"
                  className="aspect-[4/3] w-full rounded-2xl bg-slate-100"
                />
              </div>
            </Reveal>
          </div>

          {/* Callout Banner */}
          <Reveal delay={0.2}>
            <div className="rounded-xl bg-amber-500/10 px-5 py-3.5 ring-1 ring-inset ring-amber-500/25">
              <p className="text-sm leading-5 text-amber-800">
                Implementation does not end at go-live. Stabilization and
                adoption monitoring continue post-activation.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
