import { Container, Reveal, Button } from "@/components/ui";

const STAGES = [
  { label: "Apply", description: "Submit your application through the registered apply link on the role page." },
  { label: "Initial Review", description: "The recruiting team reviews applications against the role criteria." },
  { label: "Conversation", description: "An initial conversation to discuss your background and the role context." },
  { label: "Role Assessment", description: "A role-relevant exercise or structured discussion to evaluate fit." },
  { label: "Final Discussion", description: "A final conversation with key stakeholders or hiring decision-makers." },
  { label: "Decision", description: "A hiring decision is communicated to all candidates who reached this stage." },
];

export function HowWeHireSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How We Hire
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              A typical six-stage process. Stages and timing may vary by
              role and are defined in approved Hiring Process records.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex items-start justify-between overflow-x-auto pb-2">
            {STAGES.map((stage, i) => (
              <div key={stage.label} className="flex flex-1 items-start">
                <div className="flex w-32 flex-none flex-col items-center gap-2 px-1 text-center sm:w-auto sm:flex-1">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-ink">{stage.label}</p>
                  <p className="text-xs leading-relaxed text-ink/50">{stage.description}</p>
                </div>
                {i < STAGES.length - 1 && <span className="mt-4 h-px flex-1 bg-slate-200" aria-hidden />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
            Stages and timing may vary by role. Timing details appear
            only from approved Hiring Process records.
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#open-roles">View open roles</Button>
            <Button href="#accommodations" variant="outline">
              Request an accommodation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
