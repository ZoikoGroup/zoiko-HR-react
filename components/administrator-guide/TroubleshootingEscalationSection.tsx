import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ISSUES = [
  {
    symptom: "An admin change didn't take effect",
    checks:
      "Confirm the change was saved within your role scope and that no effective date defers it.",
    recovery:
      "Re-apply only through the approved configuration path; no bypass exists.",
  },
  {
    symptom: "A permission or approval is blocking a task",
    checks:
      "Confirm the assigned role and scope actually cover the object you are acting on.",
    recovery:
      "Request the approved permission through your administrator — the block is not overridden here.",
  },
  {
    symptom: "An import or export failed partway",
    checks:
      "Confirm the template, scope and permission match what the product source establishes.",
    recovery:
      "Correction or retry behavior is shown only where supported — never assumed.",
  },
  {
    symptom: "An integration shows a connection issue",
    checks:
      "Confirm connection state and admin-level prerequisites before changing credentials.",
    recovery:
      "Authentication and token detail belong to Developer Documentation.",
  },
];

export function TroubleshootingEscalationSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Troubleshooting &amp; escalation.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            No bypass guidance. Recovery uses only source-approved correction,
            retry, or rollback.
          </p>
        </Reveal>

        <div className="mt-10 space-y-2.5">
          {ISSUES.map((issue, i) => (
            <Reveal key={issue.symptom} delay={Math.min(i * 0.05, 0.3)}>
              <details className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-5">
                  <span className="text-sm font-bold text-ink">
                    {issue.symptom}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none font-semibold text-ink transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="space-y-3.5 px-4 pb-5 sm:px-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Checks
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {issue.checks}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Recovery
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {issue.recovery}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      If unresolved
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Check Service Status for related incidents, or{" "}
                      <Link
                        href="/help-center#contact-support"
                        className="text-primary hover:text-primary-dark"
                      >
                        Contact Support →
                      </Link>
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
