import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ACTIONS = [
  { label: "Approve", description: "Confirm a request within permitted scope" },
  { label: "Request information", description: "Return for clarification or additional evidence" },
  { label: "Reassign", description: "Route to another authorized approver" },
  { label: "Escalate", description: "Elevate to a higher authority" },
  { label: "Reject", description: "Decline with documented reason" },
];

export function WorkflowsApprovalsSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Section 10 — Workflows & approvals
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Route people operations through clear responsibility and
                approval.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Controlled forms, routing, responsibility, approvals,
                decisions, exceptions, and evidence for HR administration —
                with full audit trail and separation of roles.
              </p>
            </Reveal>

            <div className="mt-6 space-y-3">
              {ACTIONS.map((action, i) => (
                <Reveal key={action.label} delay={0.12 + i * 0.05}>
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex flex-none items-center rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: "#0A1B2E", color: "#93C5FD" }}
                    >
                      {action.label}
                    </span>
                    <span className="text-sm text-ink/60">
                      {action.description}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <Link
                href="/platform/workflows-approvals"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Workflows & Approvals
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-hr/workflows-approvals.png"
              alt="Two colleagues reviewing a document together"
              label="Clear responsibility, clear approvals"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
