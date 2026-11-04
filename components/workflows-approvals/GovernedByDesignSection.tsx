import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    title: "Routing",
    description: "Send work to the right next step based on approved organizational and policy context.",
    proof: "Branch/route summary with source label and fallback state.",
  },
  {
    title: "Audit evidence",
    description: "Preserve who changed, routed, reviewed and decided each workflow step.",
    proof: "Instance timeline + definition version + evidence event references.",
  },
];

export function GovernedByDesignSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Governed by design
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Four pillars keep workflow decisions explainable.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every workflow is built from the same accountable
              primitives — nothing routes, decides or executes without a
              traceable reason.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          <Reveal delay={0.1} className="flex">
            <div className="w-full rounded-2xl border-t-2 border-primary bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="font-semibold text-ink">{PILLARS[0].title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{PILLARS[0].description}</p>
              <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700">{PILLARS[0].proof}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30} className="flex">
            <PlaceholderImage
              src="/images/workflows-approvals/governed-by-design.png"
              alt="Team collaborating around a laptop in an office"
              label="Governed by design"
              className="h-full min-h-[200px] w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={0.22} className="flex">
            <div className="w-full rounded-2xl border-t-2 border-primary bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="font-semibold text-ink">{PILLARS[1].title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{PILLARS[1].description}</p>
              <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700">{PILLARS[1].proof}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
