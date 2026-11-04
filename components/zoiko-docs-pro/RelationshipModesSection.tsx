import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const MODES = [
  {
    glyph: "⊡",
    accent: "text-primary",
    headerBg: "bg-primary/5",
    border: "border-primary/20",
    chip: "bg-gray-500/10 text-gray-500",
    arrow: "text-primary",
    title: "Reference / link",
    chipLabel: "Reference / link",
    summary:
      "Zoiko HR points to approved source content. The file is not copied or stored in Zoiko HR.",
    facts: [
      {
        label: "Version / currentness",
        value:
          "Pinned or current-policy relationship is explicit. Stale reference never shown as current.",
      },
      {
        label: "Write authority",
        value: "Read only — no implied write-back or local copy.",
      },
    ],
    notes: [
      "Source withdrawal marks reference not-current; review required.",
      "Repository permission does not automatically grant Zoiko HR access.",
      "Source unavailability is separate from relationship state.",
    ],
  },
  {
    glyph: "⊞",
    accent: "text-sky-700",
    headerBg: "bg-sky-700/5",
    border: "border-sky-700/20",
    chip: "bg-sky-700/10 text-sky-700",
    arrow: "text-sky-700",
    title: "Approved copy",
    chipLabel: "Approved copy",
    summary:
      "A governed copy or artifact is created in Zoiko HR. Source and copy are tracked independently.",
    facts: [
      {
        label: "Version / currentness",
        value:
          "Copied source version is permanently recorded. Later source changes require review — no silent overwrite.",
      },
      {
        label: "Write authority",
        value: "Read from source; governed write within HR copy under HR authority.",
      },
    ],
    notes: [
      "Source version change marks copy update-available, not auto-replaced.",
      "Template update does not rewrite already-issued copies.",
      "Partial copy shows material success/failure scope.",
    ],
  },
  {
    glyph: "◈",
    accent: "text-violet-600",
    headerBg: "bg-violet-600/5",
    border: "border-violet-600/20",
    chip: "bg-violet-600/10 text-violet-600",
    arrow: "text-violet-600",
    title: "Managed artifact",
    chipLabel: "Managed artifact",
    summary:
      "Zoiko HR governs a distinct artifact with its own lifecycle, linked to source by provenance.",
    facts: [
      {
        label: "Version / currentness",
        value:
          "Own object version with provenance to source template or origin. Source and target authority are separate.",
      },
      {
        label: "Write authority",
        value:
          "HR artifact has its own authority; source authority governs source changes only.",
      },
    ],
    notes: [
      "Artifact identity is not derived from filename/title alone.",
      "HR lifecycle does not dictate source repository lifecycle.",
      "Acknowledgment, retention and hold remain with governing authorities.",
    ],
  },
];

export function RelationshipModesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Content relationship modes"
          title={'Four distinct modes — "sync" is not a default label for any of them'}
        >
          Reference, approved copy, managed artifact and template source are
          structurally different relationships with different version semantics,
          write authority and lifecycle consequences. Each must be explicit.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {MODES.map((mode, i) => (
            <Reveal key={mode.title} delay={0.06 + i * 0.06} className="h-full">
              <div
                className={`flex h-full flex-col overflow-hidden rounded-xl border ${mode.border}`}
              >
                <div
                  className={`flex items-center gap-3 px-5 py-4 ${mode.headerBg}`}
                >
                  <span aria-hidden className={`text-xl leading-8 ${mode.accent}`}>
                    {mode.glyph}
                  </span>
                  <div>
                    <p className="text-base font-extrabold leading-6 text-slate-950">
                      {mode.title}
                    </p>
                    <span
                      className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium leading-4 ${mode.chip}`}
                    >
                      {mode.chipLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col bg-white p-5">
                  <p className="text-xs leading-5 text-slate-600">
                    {mode.summary}
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    {mode.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-lg border border-slate-100 bg-slate-50 p-2.5"
                      >
                        <p className="text-xs font-medium leading-4 text-slate-950">
                          {fact.label}
                        </p>
                        <p className="pt-0.5 text-xs leading-4 text-slate-600">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {mode.notes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span
                          aria-hidden
                          className={`text-xs font-medium leading-4 ${mode.arrow}`}
                        >
                          →
                        </span>
                        <span className="text-xs font-medium leading-4 text-gray-500">
                          {note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.24} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-green-700/20">
              <div className="flex items-center gap-3 bg-green-700/5 px-5 py-4">
                <span aria-hidden className="text-xl leading-8 text-green-700">
                  ◷
                </span>
                <div>
                  <p className="text-base font-extrabold leading-6 text-slate-950">
                    Template source
                  </p>
                  <span className="mt-1 inline-flex rounded-full bg-green-700/10 px-2 py-0.5 text-[10px] font-medium leading-4 text-green-700">
                    Template source
                  </span>
                </div>
              </div>
              <PlaceholderImage
                src="/images/zoiko-docs-pro/relationship-modes.webp"
                alt="Colleagues working through a diagram at a whiteboard"
                label="Template source"
                className="aspect-video w-full flex-1 bg-slate-100 lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
