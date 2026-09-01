import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const ERRORS = [
  {
    label: "Authentication",
    summary: "Credential missing, expired, or invalid for requested scope.",
    guidance:
      "Verify credential setup against the approved Authentication section. Rotate if expired.",
    retry: "No",
    retryTone: "text-rose-400",
  },
  {
    label: "Authorization",
    summary:
      "Credential does not have the required scope for the requested operation.",
    guidance:
      "Review required scopes and request appropriate access per Authentication section.",
    retry: "No",
    retryTone: "text-rose-400",
  },
  {
    label: "Not Found",
    summary:
      "Resource identifier does not exist or is not accessible from current scope.",
    guidance:
      "Verify identifier against a list operation. Do not retry on a known-bad identifier.",
    retry: "No",
    retryTone: "text-rose-400",
  },
  {
    label: "Validation",
    summary: "Request payload does not meet schema requirements for the stated version.",
    guidance:
      "Validate payload against the current Schema section. Check required fields and enums.",
    retry: "After fix",
    retryTone: "text-emerald-500",
  },
  {
    label: "Rate Limited",
    summary:
      "Request rate exceeds approved operational limits for current scope and window.",
    guidance:
      "Apply approved backoff strategy from Operational Limits contract. Do not retry immediately.",
    retry: "After backoff",
    retryTone: "text-emerald-500",
  },
  {
    label: "Server Error",
    summary:
      "Server encountered a condition preventing completion. Check Service Status if persistent.",
    guidance:
      "Check Service Status. Submit request with safe correlation ID if retry fails.",
    retry: "With backoff",
    retryTone: "text-emerald-500",
  },
];

export function ErrorsAndLimitsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 10"
          title="Errors, pagination, retries, limits and idempotency."
        >
          Each contract is version and environment scoped. No HTTP codes, retry
          timing, or rate-limit windows are inferred from ecosystem standards.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-3">
            {ERRORS.map((error, i) => (
              <Reveal key={error.label} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-start sm:gap-5">
                  <span className="inline-flex flex-none self-start rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {error.label}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ink">{error.summary}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {error.guidance}
                    </p>
                  </div>
                  <div className="flex-none text-left sm:text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Retry
                    </p>
                    <p className={`mt-0.5 text-xs font-medium ${error.retryTone}`}>
                      {error.retry}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/errors.png"
              alt="A team troubleshooting together around a table"
              label="Team troubleshooting together"
              className="w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
