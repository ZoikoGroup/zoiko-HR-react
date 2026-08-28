import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const JOURNEYS = [
  {
    symptom: "An approval isn't moving forward",
    before: "Confirm you have the correct permission to view or act on this request.",
    checks: "Verify the request is assigned to the expected approver and has not expired.",
  },
  {
    symptom: "A document upload fails to save",
    before: "Confirm the file type and size are within the approved upload limits.",
    checks: "Retry from a stable connection and confirm the record is not locked by another change.",
  },
  {
    symptom: "An employee record shows outdated information",
    before: "Confirm which effective date you are viewing the record at.",
    checks: "Check whether a later effective-dated change is pending approval.",
  },
  {
    symptom: "A report is missing expected data",
    before: "Confirm your permissions cover every record the report should return.",
    checks: "Verify the date range, entity scope and filters match what you expect.",
  },
];

export function TroubleshootingSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Troubleshooting journeys.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Symptom → checks → resolution → escalation, with no destructive step
            taken without warning.
          </p>
        </Reveal>

        <div className="mt-10 space-y-2.5">
          {JOURNEYS.map((journey, i) => (
            <Reveal key={journey.symptom} delay={Math.min(i * 0.05, 0.3)}>
              <details
                open={i === 0}
                className="group overflow-hidden rounded-[10px] border border-slate-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-slate-100 px-4 py-4 sm:gap-6 sm:px-5">
                  <span className="font-semibold text-ink">
                    {journey.symptom}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none font-semibold text-ink group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden
                    className="hidden flex-none font-semibold text-ink group-open:block"
                  >
                    −
                  </span>
                </summary>

                <div className="space-y-3.5 bg-white p-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Before you start
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {journey.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Checks
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {journey.checks}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      If unresolved
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Check Service Status for related incidents, or{" "}
                      <Link
                        href="#contact-support"
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
