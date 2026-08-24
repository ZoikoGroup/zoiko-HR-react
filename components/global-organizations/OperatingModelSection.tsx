import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LIFECYCLE: { label: string; note?: string }[] = [
  { label: "Propose" },
  { label: "Assess impact" },
  {
    label: "Verify source / professional-review need",
    note: "Professional review may be required",
  },
  { label: "Approve" },
  { label: "Schedule effective date" },
  { label: "Apply" },
  { label: "Validate / reconcile" },
  { label: "Review / supersede" },
];

export function OperatingModelSection() {
  return (
    <section className="border-t border-black/10 bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Global + Local Operating Model
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Five-layer model: shared baseline to visible evidence.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            A product configuration record can document customer decisions and
            review status; it does not itself establish legal correctness.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal y={36}>
            <PlaceholderImage
              src="/images/global-organizations/operating-model.png"
              alt="A presenter walking a team through a dashboard of global charts"
              label="Shared baseline to visible evidence"
              className="h-96 w-full rounded-lg bg-slate-100"
            />
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Configuration Lifecycle
              </span>
            </Reveal>

            <ol className="mt-4 space-y-3">
              {LIFECYCLE.map((step, i) => (
                <Reveal key={step.label} delay={0.1 + i * 0.04}>
                  <li className="flex items-start gap-3">
                    <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-xs font-medium leading-5 text-sky-950">
                        {step.label}
                      </span>
                      {step.note && (
                        <span className="mt-0.5 block text-xs leading-4 text-violet-400">
                          {step.note}
                        </span>
                      )}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.4}>
              <div className="mt-4 rounded-lg border border-black/10 bg-primary/5 px-4 py-3">
                <p className="text-xs leading-4 text-slate-500">
                  <strong className="font-bold text-sky-950">Example:</strong>{" "}
                  A shared onboarding template receives an approved
                  entity-specific document step, local HR owner, effective
                  date, and review requirement before activation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
