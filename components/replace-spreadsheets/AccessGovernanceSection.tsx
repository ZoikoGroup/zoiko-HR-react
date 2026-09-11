import { Container, Reveal } from "@/components/ui";

const CONTROLS = [
  {
    title: "Least-privilege access",
    answer: "People see only the records and actions their role is authorized to access. Permissions are applied server-side; UI hiding alone is insufficient.",
  },
  {
    title: "Sensitive data handling",
    answer: "Sensitive HR fields are subject to stricter access rules and are never exposed by default across roles or reports.",
  },
  {
    title: "Change accountability",
    answer: "Record and workflow changes are attributable to an authorized user, with a traceable history of what changed and when.",
  },
  {
    title: "Migration confidentiality",
    answer: "Legacy files and imported data are handled under the same access and confidentiality controls as records created in Zoiko HR.",
  },
  {
    title: "Session & access controls",
    answer: "Authentication, session handling and access reviews follow the practices described in the Trust Center.",
  },
];

export function AccessGovernanceSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Protect sensitive workforce information through deliberate
              access and governance.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Permissions are applied server-side. All marketing visuals
              use synthetic data.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-3">
          {CONTROLS.map((control, i) => (
            <Reveal key={control.title} delay={Math.min(i * 0.06, 0.3)}>
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold">{control.title}</span>
                  <span className="flex h-5 w-5 flex-none items-center justify-center text-white/60 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{control.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
            <a
              href="/trust-center"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Visit the Trust Center
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/security-reporting"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Request security information
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
