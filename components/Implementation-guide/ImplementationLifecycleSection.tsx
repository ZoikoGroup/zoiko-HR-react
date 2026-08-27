import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const phases = [
  {
    step: 1,
    title: "Discovery",
    description: "Scope, authority, data inventory",
    color: "bg-blue-600/10 text-blue-600 outline-blue-600",
  },
  {
    step: 2,
    title: "Configuration",
    description: "Org model, workflows, permissions",
    color: "bg-violet-400/10 text-violet-400 outline-violet-400",
  },
  {
    step: 3,
    title: "Data",
    description: "Extract, transform, validate",
    color: "bg-amber-500/10 text-amber-500 outline-amber-500",
  },
  {
    step: 4,
    title: "Integration",
    description: "Connect, auth, test flows",
    color: "bg-emerald-400/10 text-emerald-400 outline-emerald-400",
  },
  {
    step: 5,
    title: "Validation",
    description: "Functional, access, recovery tests",
    color: "bg-indigo-400/10 text-indigo-400 outline-indigo-400",
  },
  {
    step: 6,
    title: "Launch",
    description: "Gate decision, authorized go-live",
    color: "bg-emerald-400/10 text-emerald-400 outline-emerald-400",
  },
  {
    step: 7,
    title: "Adoption",
    description: "Training, health, stabilization",
    color: "bg-teal-400/10 text-teal-400 outline-teal-400",
  },
];

export function ImplementationLifecycleSection() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Seven-phase implementation lifecycle.
            </h2>
          </Reveal>

          {/* Horizontal Timeline Steps */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
              {phases.map((phase) => (
                <div key={phase.step} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div
                    className={`flex size-12 items-center justify-center rounded-full outline outline-1 outline-offset-[-1px] ${phase.color}`}
                  >
                    <span className="text-base font-extrabold leading-6">
                      {phase.step}
                    </span>
                  </div>

                  {/* Step Label & Description */}
                  <div className="mt-3 text-center">
                    <h3 className="text-xs font-bold leading-5 text-slate-200">
                      {phase.title}
                    </h3>
                    <p className="mt-1 max-w-[100px] text-xs leading-4 text-slate-500">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.18}>
            <p className="text-xs leading-5 text-slate-500">
              Logical sequence only — no fixed duration is implied.
            </p>
          </Reveal>

          {/* Lifecycle Diagram Image */}
          <Reveal delay={0.24} y={20}>
            <PlaceholderImage
              src="/images/implementation-guide/Lifecycle.png"
              alt="Implementation lifecycle diagram"
              label="Implementation Lifecycle"
              className="aspect-[2/1] w-full rounded-2xl bg-slate-800"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
