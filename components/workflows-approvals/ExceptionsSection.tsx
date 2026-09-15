import { Container, Reveal } from "@/components/ui";

const EXCEPTIONS = [
  { title: "No eligible approver", answer: "Routing resolves to zero eligible approvers or owners; the workflow follows its configured fallback rather than stalling silently." },
  { title: "Approver inactive / permission lost", answer: "An assigned approver who is no longer active or authorized is reassigned according to the configured fallback rule, with the change recorded." },
  { title: "Condition source unavailable", answer: "A condition cannot resolve because its source is unavailable; the instance routes to an explicit blocked or unresolved state, never a guessed value." },
  { title: "Integration/action failure", answer: "A downstream action fails to execute; the failure, retry attempts and outcome are recorded against the instance evidence timeline." },
  { title: "Timeout / overdue", answer: "A step exceeds its configured due state; escalation or reassignment follows the approved policy, and the overdue state remains visible." },
  { title: "Duplicate submission", answer: "A repeated submission is detected and handled according to the configured idempotency rule rather than creating a second instance." },
  { title: "Version changed while editing", answer: "A concurrent version check prevents an edit from being saved over a newer definition version without explicit review." },
  { title: "Workflow paused", answer: "A paused workflow definition stops accepting new instances while in-flight instances continue under their originating version." },
];

export function ExceptionsSection() {
  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Exceptions get an explicit path — never a silent guess.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              A missing approver, an unavailable source or a timeout each
              has a defined, visible recovery route.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-3">
          {EXCEPTIONS.map((exception, i) => (
            <Reveal key={exception.title} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group rounded-full border border-white/10 bg-primary/10 px-6 py-3.5 open:rounded-2xl open:bg-white/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold">{exception.title}</span>
                  <span className="flex h-5 w-5 flex-none items-center justify-center text-white/60 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{exception.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
