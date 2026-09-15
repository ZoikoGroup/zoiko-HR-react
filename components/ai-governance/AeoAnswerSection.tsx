import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { NonControllingBanner, BlockLabel } from "./shared";

const PROVES = [
  "Current approved governance records, scope, state and limitations.",
  "Where changing product, security, privacy, provider and legal details are owned.",
  "Decision-right classes, human authority requirements and escalation paths.",
  "Prohibited and restricted uses and their enforcement states.",
];

const DOES_NOT_PROVE = [
  "Does not prove every feature uses AI or that any specific AI exists.",
  "Does not guarantee outcomes, establish legal compliance or certify fairness.",
  "Does not authorize autonomous employment decisions.",
  "Does not create obligations or override approved DPA / Privacy / Security authorities.",
];

// Subprocessors has no route in this app yet, so it stays on "#" rather than
// pointing at a page that would 404.
const AUTHORITY_LINKS = [
  { label: "Trust Center →", href: "/trust-center" },
  { label: "Security & Privacy →", href: "/security-privacy" },
  { label: "Accessibility →", href: "/accessibility" },
  { label: "Data Processing Addendum →", href: "/data-processing-addendum" },
  { label: "Subprocessors →", href: "#" },
  { label: "Documentation →", href: "/documentation" },
];

function Bullets({
  items,
  dotClass,
  textClass,
}: {
  items: string[];
  dotClass: string;
  textClass: string;
}) {
  return (
    <ul className="mt-3 flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            aria-hidden
            className={`mt-2 size-1 flex-none rounded-full ${dotClass}`}
          />
          <span className={`text-xs leading-5 ${textClass}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AeoAnswerSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <NonControllingBanner />

        <div className="mt-7">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
              Section 2 — AEO Direct Answer
            </p>
            <p className="mt-2 max-w-3xl leading-6 text-slate-700">
              Zoiko HR AI Governance is the public authority for explaining how
              approved AI-related behavior is governed through human review,
              permission controls, transparency, logging and prohibited-use
              boundaries. The page publishes only source-approved,
              scope-specific records and links changing product, security,
              privacy, provider and legal details to their owning authorities.
              It does not imply that every Zoiko HR feature uses AI, that AI can
              make autonomous employment decisions, or that governance controls
              guarantee legal compliance or error-free outcomes.
            </p>
          </Reveal>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_200px] lg:gap-0">
          <Reveal className="min-w-0 lg:pr-8">
            <BlockLabel className="!text-emerald-500">
              ✓ What this page proves
            </BlockLabel>
            <Bullets
              items={PROVES}
              dotClass="bg-emerald-400"
              textClass="text-slate-700"
            />
          </Reveal>

          <Reveal
            delay={0.08}
            className="min-w-0 lg:border-l lg:border-slate-200 lg:px-8"
          >
            <BlockLabel className="!text-rose-400">
              ✕ What this page does not prove
            </BlockLabel>
            <Bullets
              items={DOES_NOT_PROVE}
              dotClass="bg-rose-400"
              textClass="text-slate-500"
            />
          </Reveal>

          <Reveal
            delay={0.14}
            className="min-w-0 lg:border-l lg:border-slate-200 lg:pl-8"
          >
            <BlockLabel>Authority links</BlockLabel>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {AUTHORITY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold leading-4 text-primary hover:text-primary-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
