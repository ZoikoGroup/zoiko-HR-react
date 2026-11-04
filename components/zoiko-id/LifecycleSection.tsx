import { Container, Reveal } from "@/components/ui";
import { SectionHeading, RefTable } from "./shared";

const ROWS = [
  [
    "Disable request sent",
    "Unchanged",
    "Unconfirmed — pending observed target",
    "Unchanged — may still be active",
    "Unchanged until separately revoked",
  ],
  [
    "Account disabled (confirmed target)",
    "Link may remain",
    "Confirmed disabled",
    "May still need revocation",
    "May need separate revocation step",
  ],
  [
    "Identity relationship revoked",
    "Link invalidated for new use",
    "Unchanged (source governs)",
    "May still be valid",
    "Access re-evaluated at next request",
  ],
  [
    "Session revoked",
    "Unchanged",
    "Unchanged",
    "Current auth context invalid",
    "Next request must re-authenticate",
  ],
  [
    "Access grant revoked",
    "Unchanged",
    "Unchanged",
    "May still be valid",
    "Authorization removed — sign-in may succeed",
  ],
  [
    "Source account removed",
    "Review required",
    "Source event — target follows approved policy",
    "Review required",
    "Review required",
  ],
  [
    "Reactivation",
    "New version/review required",
    "New current review required",
    "New authentication required",
    "New access review required — no old grant reuse",
  ],
  [
    "Mismatch / open",
    "Open until reconciled",
    "Open until observed",
    "Open until reconciled",
    "Open until accepted exception",
  ],
];

export function LifecycleSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Lifecycle & Revocation"
          title="Relationship, account, session and access revocation — four distinct outcomes, never collapsed"
        >
          A disable request is not confirmed completion. An account disable does
          not revoke sessions or access grants. Revoking access does not mean
          authentication becomes impossible. Each state has a separate authority
          and reconciliation path.
        </SectionHeading>

        <Reveal delay={0.1} amount={0}>
          <div className="mt-9">
            <RefTable
              columns={[
                "Action / state",
                "Identity relationship",
                "Target account",
                "Session",
                "Access / authorization",
              ]}
              gridClass="lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.1fr)]"
              headerToneClass={[
                "text-slate-600",
                "text-primary",
                "text-sky-700",
                "text-violet-600",
                "text-red-600",
              ]}
              rows={ROWS}
              footnote="Lifecycle Reconciliation Registry records requested action, source state, target account, session state, access state and observed time. Request ≠ completion."
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
