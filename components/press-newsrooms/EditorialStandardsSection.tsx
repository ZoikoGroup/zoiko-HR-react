import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const STANDARDS = [
  {
    icon: "✓",
    title: "Official source",
    body: "Zoiko HR-authored and approved items are sourced from the News Item Registry. Entity scope is identified in every item.",
  },
  {
    icon: "↗",
    title: "External attribution",
    body: "Third-party items are clearly labeled External Coverage and link to the original publisher. Content is not reproduced.",
  },
  {
    icon: "⚠",
    title: "Corrections",
    body: "Material corrections appear on affected articles with a correction date and concise description. The prior version remains auditable.",
  },
  {
    icon: "⊗",
    title: "Withdrawals",
    body: "Withdrawn items are not silently repurposed. URL behavior follows an approved editorial and legal policy with audit history retained.",
  },
];

const MODEL = [
  { field: "correction_id", body: "Immutable unique identifier attached to each correction record." },
  { field: "published_at", body: "Public correction timestamp, always visible on the affected article." },
  {
    field: "summary",
    body: "Concise description of what changed, without unnecessary repetition of erroneous content.",
  },
  {
    field: "approval_owner",
    body: "Authorized communications or legal owner who approved the correction publication.",
  },
];

export function EditorialStandardsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Verification, corrections & editorial standards." />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STANDARDS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.05} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <span aria-hidden className="text-base leading-6 text-ink">
                  {s.icon}
                </span>
                <h3 className="text-base font-semibold leading-6 text-ink">{s.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold leading-6 text-yellow-800">Correction model</h3>
            <dl className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {MODEL.map((m) => (
                <div key={m.field}>
                  <dt className="font-mono text-xs font-semibold text-yellow-900">{m.field}</dt>
                  <dd className="mt-2 text-sm leading-5 text-yellow-800/90">{m.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
