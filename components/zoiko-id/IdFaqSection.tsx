import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design publishes the eight questions collapsed, with no answer text.
 * Every answer below is assembled from claims this page already makes — the
 * separation panel, the access-decision stage, the identity-mapping table, the
 * optionality cards and the lifecycle table — so none introduces a provider,
 * protocol, MFA, session or recovery capability claim of its own.
 */
const FAQS = [
  {
    question: "What is ZoikoID in Zoiko HR?",
    answer:
      "ZoikoID is an approved ecosystem identity and authentication relationship with Zoiko HR. It connects external identity to a Zoiko HR identity under approved configuration, scope and access policy — it is not the source of workforce truth.",
  },
  {
    question: "Is ZoikoID required to use Zoiko HR?",
    answer:
      "No. ZoikoID is an optional ecosystem identity option, never mandatory and never exclusive. Controlled Interoperability allows heterogeneous environments, and existing identity and access management practices may coexist where supported.",
  },
  {
    question: "Does signing in give me access to all of Zoiko HR?",
    answer:
      "No. Authentication proves identity under the current configured method, scope and version — nothing more. What an identity may do is a separate access decision, with deny, restriction and sensitivity precedence explicit and unknown required input denying or routing review.",
  },
  {
    question: "Does ZoikoID determine who is a manager or employee?",
    answer:
      "No. A manager or group claim is a reference or mapping input only; it cannot create manager authority or auto-become an HR role. Employee Records and Organization Management own workforce truth.",
  },
  {
    question: "Which SSO providers or protocols are supported?",
    answer:
      "Exact provider and protocol support is source-controlled and is not claimed here without current source authority. The authentication states on this page apply regardless of which approved method is configured.",
  },
  {
    question: "Does ZoikoID support MFA or passwordless sign-in?",
    answer:
      "MFA and passwordless capability is source-governed and is described only where a current approved source establishes it. No MFA, provisioning or assurance capability is claimed without that authority.",
  },
  {
    question: "How is access revoked?",
    answer:
      "Relationship, account, session and access revocation are four distinct outcomes and are never collapsed. Revoking an access grant does not invalidate a session, and disabling an account does not by itself revoke sessions or grants — each has a separate authority and reconciliation path.",
  },
  {
    question: "Can recovery override my access policy?",
    answer:
      "No. Recovery capability is source-governed, and recovery does not override the access policy in force. Access remains a separate decision with deny, restriction and sensitivity precedence explicit.",
  },
];

export function IdFaqSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ / AEO"
          title="Eight qualified answers — no provider, protocol, MFA or assurance claim without current source authority"
          tone="dark"
        >
          Each answer starts with a current-source qualifier for capability
          claims. Provider/protocol/MFA/provisioning/session/recovery/availability
          answers are bounded to approved source only.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,370px)]">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(0.04 + i * 0.04, 0.3)}>
                <details className="group rounded-xl border border-white/10 bg-white/5 transition-colors open:bg-white/[0.07] hover:border-white/20">
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
                    <span className="font-mono text-xs leading-4 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold leading-5 text-white">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-xs text-white/40 transition-transform group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-xs leading-5 text-white/50 sm:pl-13">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/zoiko-id/faq.webp"
              alt="Two colleagues talking over a laptop"
              label="Questions"
              className="aspect-video w-full rounded-xl bg-white/5 lg:aspect-[370/490]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
