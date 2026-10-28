import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const TIERS = [
  {
    label: "Advisory",
    card: "border-indigo-200 bg-blue-50",
    badge: "border-indigo-200 bg-indigo-50 text-blue-900",
    ai: "Provides information or draft support only.",
    human: "Authorized person interprets and uses output.",
  },
  {
    label: "Review required",
    card: "border-amber-200 bg-amber-50",
    badge: "border-amber-200 bg-orange-50 text-yellow-800",
    ai: "Output cannot be treated as final until confirmed.",
    human: "Named eligible reviewer confirms, edits or rejects.",
  },
  {
    label: "Approval required",
    card: "border-red-200 bg-orange-50",
    badge: "border-red-200 bg-red-50 text-amber-800",
    ai: "Supports context and preparation only.",
    human: "Authorized approver controls the downstream action.",
  },
  {
    label: "Prohibited",
    card: "border-slate-200 bg-slate-50",
    badge: "border-slate-300 bg-slate-100 text-slate-600",
    ai: "Use case must not execute or produce the outcome.",
    human: "Route to approved human or process authority.",
  },
];

export function DecisionRightsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Human review & decision rights"
          title="What AI may assist with — and where human authority is non-negotiable."
          className="max-w-[640px]"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <li key={tier.label}>
              <Reveal delay={i * 0.06} className={`flex h-full flex-col gap-3 rounded-2xl border p-5 ${tier.card}`}>
                <span
                  className={`self-start rounded-full border px-2.5 py-1 text-xs font-bold leading-4 ${tier.badge}`}
                >
                  {tier.label}
                </span>
                <dl className="flex flex-col gap-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">
                      AI behavior
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{tier.ai}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">
                      Human authority
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{tier.human}</dd>
                  </div>
                </dl>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-10 max-w-[860px] rounded-2xl bg-slate-950 px-6 py-7">
            <p className="text-sm font-bold uppercase leading-5 tracking-wide text-indigo-400">
              Non-negotiable boundary
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
              AI Assistance must not autonomously make, execute or present itself
              as the authority for consequential hiring, termination, promotion,
              compensation, disciplinary, grievance, health, leave or similar
              high-impact employment decisions. Human responsibility and
              configured approval authority remain explicit.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
