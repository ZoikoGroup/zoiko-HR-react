import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHECKLIST = [
  "Confirm your technical setup meets the platform requirements for video stages",
  "Review the full role description, including scope, team context, and work mode",
  "Prepare role-relevant professional examples aligned to the stated responsibilities",
  "Read the candidate privacy notice before submitting your application",
  "Contact the accommodations route if you require any adjustments to participate",
];

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function InterviewExpectationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Interview &amp; Candidate Expectations
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              What to prepare — and what to expect throughout the
              process.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <PlaceholderImage
              src="/images/careers/interview-expectations.png"
              alt="A presenter speaking to colleagues seated at a table"
              label="Interview and candidate expectations"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="font-semibold text-emerald-700">Candidate Checklist</p>
              <ul className="mt-3 space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
            All guidance derives from approved Hiring Process records.
            Specific stage formats and requirements are communicated to
            candidates prior to each stage.
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <p id="accommodations" className="mt-6 text-center text-sm">
            <a href="/contact-us" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">
              Need an adjustment to participate? Use the accommodations pathway →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
