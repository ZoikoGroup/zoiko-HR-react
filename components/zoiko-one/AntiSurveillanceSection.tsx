import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/*
 * Exact colours from the design:
 *   section        #0C2036
 *   prohibited     #DC2626 (red-600) fill/border, #F87171 (red-400) mark,
 *                  #FCA5A5 (red-300) body
 *   permitted      #15803D (green-700) fill/border, #86EFAC (green-300) mark,
 *                  #BBF7D0 (green-200) body
 *   purpose rule   #7AA3FF label
 */
const PROHIBITED = [
  "Deriving employee productivity scores from suite navigation or task-open patterns",
  "Ranking reliability or engagement from cross-product handoff activity",
  "Classifying employee risk from document access, payroll lookups or compliance check sequences",
  "Using cross-product activity for disciplinary evidence or performance review input",
  "Capturing customer stack topology or enabled-product list in marketing analytics",
  "Building employee cross-product activity trails in marketing analytics",
  "Revealing inaccessible product names or routes through switcher, search, counts or errors",
  "Copying sensitive payroll, document, compliance or identity values into suite-layer cards or notifications",
  "Session replay or DOM capture on authenticated suite-context surfaces exposing workforce or architecture data",
];

const PERMITTED = [
  "Coarse product/relationship class IDs for component-level analytics (never product names if sensitive)",
  "Handoff state categories (prepared/accepted/stale) without source/target payloads",
  "Failed handoff counts without user IDs, cross-product trails or product topology",
  "Dependency currentness and access-denied transition counts for operational health",
  "Offboarding gap identification without sensitive artifact content",
  "Safe correlation IDs across products for diagnostic tracing — never business payloads",
];

function Item({
  mark,
  markClass,
  textClass,
  children,
}: {
  mark: string;
  markClass: string;
  textClass: string;
  children: string;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span aria-hidden className={`flex-none text-xs leading-5 ${markClass}`}>
        {mark}
      </span>
      <span className={`break-words text-xs leading-5 ${textClass}`}>
        {children}
      </span>
    </li>
  );
}

export function AntiSurveillanceSection() {
  return (
    <section className="bg-[#0C2036] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Privacy & Anti-Surveillance"
          title="Suite activity cannot become employee scoring — prohibited and permitted analytics are explicit"
          tone="dark"
        >
          Cross-product navigation and handoff activity is for coordination — not
          productivity measurement, reliability ranking, risk classification or
          disciplinary evidence. Marketing analytics and operational telemetry
          remain purpose-separated.
        </SectionHeading>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          <Reveal amount={0} className="h-full">
            <div className="h-full rounded-xl border border-red-600/25 bg-red-600/5 p-6">
              <p className="text-xs font-medium uppercase leading-4 tracking-wide text-red-400">
                Prohibited — these uses are not permitted
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {PROHIBITED.map((item) => (
                  <Item
                    key={item}
                    mark="✗"
                    markClass="text-red-400"
                    textClass="text-red-300"
                  >
                    {item}
                  </Item>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.08} amount={0}>
              <div className="rounded-xl border border-green-700/25 bg-green-700/10 p-6">
                <p className="text-xs font-medium uppercase leading-4 tracking-wide text-green-300">
                  Permitted — with appropriate controls
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {PERMITTED.map((item) => (
                    <Item
                      key={item}
                      mark="✓"
                      markClass="text-green-300"
                      textClass="text-green-200"
                    >
                      {item}
                    </Item>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-medium leading-4 text-[#7AA3FF]">
                  Purpose separation rule
                </p>
                <p className="mt-3 break-words text-xs leading-5 text-white/60">
                  Marketing analytics and operational identity/product logs
                  remain separate purposes with separate data classes. Context
                  minimization applies across all surfaces — no cross-product
                  context carries more than the minimum approved reference for
                  the stated purpose.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
