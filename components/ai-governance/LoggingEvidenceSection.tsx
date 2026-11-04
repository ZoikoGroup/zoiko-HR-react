import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StatusBadge } from "./shared";

const EVENTS = [
  {
    access: "Public",
    name: "Capability / config change",
    detail: "AI capability enabled, disabled or configuration updated.",
  },
  {
    access: "Controlled",
    name: "Permission change",
    detail: "Role grant, delegation or permission record updated.",
  },
  {
    access: "Restricted",
    name: "Review / approval",
    detail: "Human reviewer action on AI output or governance decision.",
  },
  {
    access: "Public",
    name: "Decision-right change",
    detail: "Advisory → Review Required or Prohibited reclassification.",
  },
  {
    access: "Controlled",
    name: "Evaluation record",
    detail: "New evaluation, re-evaluation or evaluation state change.",
  },
  {
    access: "Public",
    name: "Limitation record",
    detail: "New limitation surfaced, corrected or superseded.",
  },
  {
    access: "Restricted",
    name: "Incident / concern",
    detail: "AI governance concern routed, reviewed or corrected.",
  },
  {
    access: "Public",
    name: "Correction",
    detail: "Public record corrected; prior version superseded (transparent).",
  },
  {
    access: "Controlled",
    name: "Publication review",
    detail: "Record moved to published, paused, superseded or withdrawn.",
  },
];

const LEGEND = ["Public", "Controlled", "Restricted"];

export function LoggingEvidenceSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="Section 11"
          title="Logging, auditability and evidence."
          tone="dark"
        >
          Public pages show approved summaries only. Internal security
          telemetry, prompts, model secrets, employee data and reviewer
          rationale are never disclosed publicly.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
              Governance event categories
            </p>
            <div className="flex flex-wrap gap-1.5">
              {LEGEND.map((access) => (
                <StatusBadge key={access} status={access} dot />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
          {EVENTS.map((event, i) => (
            <Reveal key={event.name} delay={Math.min(i * 0.04, 0.3)}>
              <div
                // Reveal wraps every row, so `last:` can't reach the final one
                // — the divider is dropped by index instead.
                className={`flex flex-col gap-2 px-5 py-3 sm:flex-row sm:items-start sm:gap-4 ${
                  i < EVENTS.length - 1 ? "border-b border-white/5" : ""
                } ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                <StatusBadge
                  status={event.access}
                  className="mt-0.5 self-start sm:w-24 sm:flex-none sm:justify-center"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {event.name}
                  </p>
                  <p className="mt-1 text-xs leading-4 text-slate-500">
                    {event.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
