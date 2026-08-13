import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const REQUESTS = [
  {
    title: "Correction requests",
    description:
      "Submitted requests are checked against current record state, evidence provided, and required approver before a corrected value becomes effective.",
  },
  {
    title: "Access & export requests",
    description:
      "Requests to view or export a record are checked against role, purpose, and data-sensitivity policy before being granted or logged as denied.",
  },
  {
    title: "Deletion & restriction requests",
    description:
      "Deletion and restriction requests are checked against legal hold, retention schedule, and active obligations before a decision is recorded.",
  },
  {
    title: "Retention & archival",
    description:
      "Retention periods and archival rules are configured by record type and jurisdiction, with evidence of the applied schedule retained.",
  },
];

export function CorrectionRequestsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Correction, access, and deletion requests, resolved with
              evidence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Requests are checked against retention, legal hold, payroll,
              and other obligations before a decision is recorded.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-3">
          {REQUESTS.map((request, i) => (
            <Reveal key={request.title} delay={0.08 + i * 0.06}>
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-200 open:bg-white/[0.08]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold">{request.title}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-white/60 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {request.description}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <Link
            href="/security-privacy"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            View Security & Privacy
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
