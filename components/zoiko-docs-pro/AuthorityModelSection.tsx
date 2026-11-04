import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, FactRow } from "./shared";

const SOURCE = [
  { label: "Object identity", value: "Stable ID — not filename/title alone" },
  { label: "Source authority", value: "Docs Pro repository owner" },
  { label: "Current version", value: "Source-versioned record" },
  {
    label: "Lifecycle state",
    value: "Draft / Published / Withdrawn / Archived",
  },
  { label: "Sensitivity", value: "Classified at source" },
];

const MODE = [
  { label: "Mode", value: "Reference / Copy / Managed / Template" },
  { label: "Version binding", value: "Pinned version or update-available policy" },
  { label: "Direction/action", value: "Read / create / distribute / reference" },
  { label: "Permission", value: "Source and HR access intersected" },
  { label: "Purpose", value: "Approved purpose from contract" },
];

function Arrow() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center py-2 text-2xl text-white/30 lg:py-0"
    >
      <span className="lg:hidden">↓</span>
      <span className="hidden lg:inline">→</span>
    </div>
  );
}

export function AuthorityModelSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Document authority model"
          title="Source repository → relationship mode → Zoiko HR purpose — authority never transfers silently"
          tone="dark"
        >
          Zoiko HR does not become the source authority for a document simply by
          displaying, copying or templating it. Each step in the chain has a
          defined owner, boundary and behavior.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Reveal delay={0.06} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-slate-900">
              <div className="border-b border-primary/10 bg-primary/5 px-5 pb-3 pt-4">
                <p className="font-mono text-xs leading-4 text-primary">01</p>
                <p className="pt-0.5 text-base font-extrabold leading-6 text-white">
                  Source repository
                </p>
              </div>
              <div className="flex-1 p-4">
                {SOURCE.map((fact) => (
                  <FactRow key={fact.label} {...fact} />
                ))}
              </div>
              <p className="border-t border-white/5 px-4 py-3 text-xs font-medium leading-4 text-primary">
                Zoiko HR does not own or alter source authority for objects it
                references or copies.
              </p>
            </div>
          </Reveal>

          <Arrow />

          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-violet-600/20 bg-slate-900">
              <div className="border-b border-violet-600/10 bg-violet-600/5 px-5 pb-3 pt-4">
                <p className="font-mono text-xs leading-4 text-violet-500">02</p>
                <p className="pt-0.5 text-base font-extrabold leading-6 text-white">
                  Relationship mode
                </p>
              </div>
              <div className="flex-1 p-4">
                {MODE.map((fact) => (
                  <FactRow key={fact.label} {...fact} />
                ))}
              </div>
              <p className="border-t border-white/5 px-4 py-3 text-xs font-medium leading-4 text-violet-500">
                Mode determines version behavior, copy semantics and write
                authority. &apos;Sync&apos; is not a default label.
              </p>
            </div>
          </Reveal>

          <Arrow />

          <Reveal delay={0.18} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-green-700/20 bg-slate-900">
              <div className="border-b border-green-700/10 bg-green-700/5 px-5 pb-3 pt-4">
                <p className="font-mono text-xs leading-4 text-green-600">03</p>
                <p className="pt-0.5 text-base font-extrabold leading-6 text-white">
                  Zoiko HR purpose
                </p>
              </div>
              <PlaceholderImage
                src="/images/zoiko-docs-pro/authority-model.webp"
                alt="A manager handing documents to seated colleagues"
                label="Zoiko HR purpose"
                className="aspect-video w-full flex-1 bg-slate-900 lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
