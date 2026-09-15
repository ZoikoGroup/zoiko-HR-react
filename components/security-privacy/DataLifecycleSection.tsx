import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  {
    label: "Classify",
    description: "Data category and sensitivity assignment. Synthetic label only.",
  },
  {
    label: "Minimize",
    description: "Collect only what is authorized for the stated purpose.",
  },
  {
    label: "Purpose / access",
    description: "Access tied to authorized purpose and approved sensitivity.",
  },
  {
    label: "Store / transfer",
    description: "Retention, hosting, residency and transfer are source-gated.",
  },
  {
    label: "Retain / delete",
    description: "Governed by applicable law, contract and approved policy.",
  },
  {
    label: "Audit / correct",
    description: "Correction and audit routes where approved and supported.",
  },
];

export function DataLifecycleSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
            Section 03
          </span>
        </Reveal>

        {/* The heading and the source-gating note sit on one baseline row. */}
        <Reveal delay={0.06}>
          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Data protection, classification and lifecycle.
            </h2>
            <p className="max-w-xs text-xs leading-5 text-slate-500">
              This page does not rewrite the Privacy Notice or DPA. Exact
              retention, residency and transfer facts are source-gated.
            </p>
          </div>
        </Reveal>

        {/* Six across only at xl — at lg the chips ("Purpose / access",
            "Store / transfer") are too wide for a sixth of the container. */}
        <div className="mt-10 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.label} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex items-center">
                <span className="rounded-[10px] border border-primary/40 bg-primary/20 px-3 py-2 text-xs font-semibold text-indigo-400">
                  {stage.label}
                </span>
                {/* The connector only reads as a flow on one unbroken row. */}
                {i < STAGES.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-0.5 flex-1 bg-primary/25 xl:block"
                  />
                )}
              </div>
              <p className="mt-2.5 pr-2.5 text-xs leading-4 text-slate-500">
                {stage.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <PlaceholderImage
            src="/images/security-privacy/data-lifecycle.png"
            alt="A team walking through a data lifecycle diagram on screen"
            label="Reviewing a data lifecycle diagram"
            className="mt-10 w-full rounded-2xl border border-white/5 bg-white/5"
          />
        </Reveal>
      </Container>
    </section>
  );
}
