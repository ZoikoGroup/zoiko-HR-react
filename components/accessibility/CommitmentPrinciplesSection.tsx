import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SectionFootnote } from "./shared";

const PRINCIPLES = [
  {
    name: "Perceivable",
    description:
      "Text alternatives for non-text content; captions and alternatives for time-based media; content presentable in multiple ways without losing meaning; content made easier to see and hear.",
    note: "Applies to public website and product content surfaces within approved scope.",
    accent: "bg-blue-600",
  },
  {
    name: "Operable",
    description:
      "All functionality available from keyboard; sufficient time to read and use content; no seizure-inducing content; navigation mechanisms to locate and bypass content.",
    note: "Keyboard access and focus management are release-blocking requirements for this public page.",
    accent: "bg-indigo-400",
  },
  {
    name: "Understandable",
    description:
      "Text readable and understandable; content operates in predictable ways; input assistance for errors and corrections.",
    note: "Plain language, persistent labels and clear error messages are implementation requirements.",
    accent: "bg-blue-400",
  },
  {
    name: "Robust",
    description:
      "Content can be interpreted reliably by a wide variety of assistive technologies including current and future user agents.",
    note: "Semantic markup, roles, names and values governed by implementation standard within approved scope.",
    accent: "bg-green-400",
  },
  {
    name: "Flexible Presentation",
    description:
      "320 CSS px reflow; 200% and 400% zoom without horizontal scroll or content loss; text-spacing resilience; no fixed-height clipping.",
    note: "Reflow and zoom are release-blocking QA requirements for this public page.",
    accent: "bg-violet-400",
  },
  {
    name: "Accessible Media & Documents",
    description:
      "HTML primary for accessibility statement and critical limitations; captions, transcripts and alternatives only where source evidence and requirements exist; no autoplay for essential content.",
    note: "Critical accessibility information is not available only as a download.",
    accent: "bg-amber-500",
  },
  {
    name: "Feedback & Correction",
    description:
      "Accessible, ungated barrier reporting route; no marketing consent or login required; minimum-data intake; privacy-safe handling; visible correction history where material.",
    note: "Feedback form is release-blocked by WCAG 2.2 AA implementation requirements.",
    accent: "bg-emerald-400",
  },
];

export function CommitmentPrinciplesSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="03 / Commitment & Principles"
          title="Accessibility as a maintained operating practice."
        >
          These principle categories structure our public commitment. Each links
          to observable implementation requirements within approved scope — not
          slogans.
        </SectionHeading>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.name} delay={Math.min(i * 0.05, 0.3)}>
              <div
                // Reveal wraps every row, so `last:` can't reach the final one
                // — the divider is dropped by index instead.
                className={`flex items-stretch ${
                  i < PRINCIPLES.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <span
                  aria-hidden
                  className={`w-1 flex-none ${principle.accent}`}
                />
                <div className="grid flex-1 gap-3 px-7 py-5 lg:grid-cols-[180px_minmax(0,1fr)_260px] lg:gap-0">
                  <h3 className="pr-6 text-sm font-semibold leading-5 text-slate-900">
                    {principle.name}
                  </h3>
                  <p className="text-xs leading-5 text-slate-600 lg:pr-8">
                    {principle.description}
                  </p>
                  <p className="text-xs font-medium leading-4 text-primary lg:border-l lg:border-slate-200 lg:pl-8">
                    {principle.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionFootnote>
          Exact product-level commitments require approved ConformanceClaim
          records and evidence. This page is not a declaration of legal
          compliance.
        </SectionFootnote>
      </Container>
    </section>
  );
}
