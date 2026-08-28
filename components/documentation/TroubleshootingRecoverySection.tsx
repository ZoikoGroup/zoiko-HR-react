import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ISSUES = [
  {
    symptom: "An approval isn't moving forward",
    checks:
      "Confirm the request is assigned to the expected approver and has not expired.",
    recovery:
      "Resubmit or reassign only through the approved workflow — no bypass is documented.",
  },
  {
    symptom: "A document upload fails to save",
    checks:
      "Confirm the file type and size are within the approved upload limits, and that the record is not locked by another change.",
    recovery:
      "Retry from a stable connection; a partially saved document is never treated as complete.",
  },
  {
    symptom: "An employee record shows outdated information",
    checks:
      "Confirm which effective date you are viewing, and whether a later effective-dated change is still pending approval.",
    recovery:
      "Correct the record through an effective-dated change so prior history is preserved.",
  },
];

export function TroubleshootingRecoverySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Troubleshooting &amp; recovery.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Safe diagnostic steps first. Live availability always routes to
            Service Status; unresolved issues route to Contact Support.
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
                      Check{" "}
                      <Link
                        href="/help-center#service-status"
                        className="text-primary hover:text-primary-dark"
                      >
                        Service Status
                      </Link>{" "}
                      for related incidents, or{" "}
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
