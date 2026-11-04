import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design publishes the eight questions collapsed, with no answer text.
 * Every answer below is assembled from claims this page already makes — the
 * is/coordinates/never-becomes bands, the authority contract, the dependency
 * tree, the coexistence postures and the add/remove phases — so none introduces
 * a shared-database, one-login, bundling or migration claim of its own.
 */
const FAQS = [
  {
    question: "What is Zoiko One with Zoiko HR?",
    answer:
      "Zoiko One is an optional wider-suite context for using Zoiko HR alongside selected Zoiko products — each keeping its own source authority, permissions and lifecycle. It coordinates navigation, handoff references and dependency visibility; it does not become a source of truth for any domain.",
  },
  {
    question: "Do I need Zoiko One to use Zoiko HR?",
    answer:
      "No. Zoiko One is not mandatory for Zoiko HR. Product participation is explicit rather than assumed, and standalone Zoiko HR remains a valid operating posture.",
  },
  {
    question: "Do I need all Zoiko products to use Zoiko One?",
    answer:
      "No. Participation is per product and explicit. Selected Zoiko products can participate while other domains stay with external or standalone systems.",
  },
  {
    question: "Does Zoiko One use one shared database or data model?",
    answer:
      "No shared database or unified data model is claimed without current source authority. Each domain keeps its authoritative source, and cross-product references carry minimum reference metadata rather than copied sensitive payloads.",
  },
  {
    question: "Does one suite login give access to every product?",
    answer:
      "No. A suite context token is never a privilege-bearing credential. Authentication proves identity; each product boundary re-evaluates access, and a suite session or Zoiko HR admin role does not grant downstream product rights.",
  },
  {
    question: "Are all Zoiko products included in one plan?",
    answer:
      "Technical dependency does not imply commercial bundling, entitlement or pricing. Plan and entitlement truth comes from the Commercial Dependency Registry only.",
  },
  {
    question: "Can I keep external systems alongside Zoiko products?",
    answer:
      "Yes. Mixed stack is a first-class, stable operating posture governed by the Coexistence Mode Registry. External systems are not downgraded to push adoption, and migration is never the default consequence of adding a Zoiko product.",
  },
  {
    question: "Can I remove a product later?",
    answer:
      "Yes, through the governed remove path — impact review, authorization, observed-state verification and reconciliation, with the Exit Readiness Snapshot complete before removal proceeds. No orphaned items and no silent migration; a perfect reversal is not guaranteed.",
  },
];

export function OneFaqSection() {
  return (
    <section className="bg-[#040D18] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ / AEO"
          title="Eight qualified answers — no shared database, one login, universal admin or bundle claim without current source"
          tone="dark"
        >
          Each answer qualifies one-login, shared-data, included-products,
          unified-admin, bundle and seamless claims with a current-source scope
          qualifier.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,375px)]">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(0.04 + i * 0.04, 0.3)}>
                <details className="group rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-white/20">
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
                    <span className="font-mono text-xs leading-4 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 break-words text-sm font-semibold leading-5 text-white">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-xs text-white/40 transition-transform group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>
                  <p className="break-words px-5 pb-4 text-xs leading-5 text-white/50 sm:pl-13">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/zoiko-one/faq.webp"
              alt="Two colleagues in conversation over printed charts"
              label="Questions"
              className="aspect-video w-full rounded-xl bg-white/5 lg:aspect-[375/490]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
