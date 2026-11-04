import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

// Only the first group's requirements are shown in the design. The remaining
// five panels are collapsed there with no visible copy, so they carry the
// page's own placeholder rather than invented requirements.
const PLACEHOLDER = "[From approved implementation standard]";

const GROUPS = [
  {
    name: "Keyboard & Focus",
    requirements: [
      "All functionality operable without pointer-only or drag-only interaction",
      "Visible focus indicator on every interactive control",
      "Programmatic focus restoration after dialogs, errors and navigation changes",
      "No keyboard traps; focus order follows logical DOM order",
      "44×44 CSS px touch targets where practical",
    ],
  },
  { name: "Visual & Reflow", requirements: [PLACEHOLDER] },
  { name: "Semantics & Structure", requirements: [PLACEHOLDER] },
  { name: "Motion & Time", requirements: [PLACEHOLDER] },
  { name: "Forms & Errors", requirements: [PLACEHOLDER] },
  { name: "Media & Documents", requirements: [PLACEHOLDER] },
];

export function ImplementationContractSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="07 / Core Interaction & Content Requirements"
          title="Implementation contract for this public page."
        >
          These requirements govern this Accessibility page and Zoiko HR&apos;s
          shared design standard. Product-specific achieved support still
          requires scope and evidence records.
        </SectionHeading>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          {GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={Math.min(i * 0.05, 0.3)}>
              <details
                open={i === 0}
                className={`group ${
                  i < GROUPS.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-7 py-5">
                  <span className="text-sm font-semibold text-slate-900">
                    {group.name}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-lg text-primary transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <ul className="flex flex-col gap-2 px-7 pb-5">
                  {group.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1 flex-none rounded-full bg-primary"
                      />
                      <span
                        className={
                          requirement === PLACEHOLDER
                            ? "font-mono text-xs leading-5 text-slate-400"
                            : "text-xs leading-5 text-slate-600"
                        }
                      >
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
