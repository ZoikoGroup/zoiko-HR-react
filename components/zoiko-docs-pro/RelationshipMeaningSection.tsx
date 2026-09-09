import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COVERED = [
  "Document/template relationships and approved modes",
  "Source authority, version binding and currentness",
  "Permission, sensitivity and purpose intersection",
  "Lifecycle, retention/hold and reconciliation semantics",
  "Distribution and acknowledgment handoff to Documents & Policies",
];

export function RelationshipMeaningSection() {
  return (
    <section
      id="connection-model"
      className="scroll-mt-24 border-b border-slate-200 bg-white py-16"
    >
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
            What Zoiko Docs Pro means in this relationship
          </p>
        </Reveal>

        {/* items-stretch so the covers card and photo match each other's height
            (they are equal in the design); the heading opts out with self-start.
            At sm the card and photo pair up beneath the full-width heading. */}
        <div className="mt-6 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,608px)_minmax(0,320px)_minmax(0,304px)]">
          <Reveal delay={0.06} className="self-start sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-extrabold leading-8 text-slate-950">
              A connected document is trustworthy only when its source
              authority, object identity, exact version, permission, purpose and
              lifecycle state are explicit.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Connection must never flatten document governance into &quot;file
              synced.&quot; Each approved relationship has a defined mode,
              version binding, access rule and lifecycle — not a generic
              bi-directional copy.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <div className="h-full rounded-xl border border-green-100 bg-green-50 p-5">
              <p className="text-[10px] font-medium uppercase tracking-wide text-green-700">
                This page covers
              </p>
              <ul className="mt-3 space-y-2">
                {COVERED.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-xs leading-4 text-green-700">
                      ✓
                    </span>
                    <span className="text-xs leading-4 text-green-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-docs-pro/relationship-meaning.webp"
              alt="Colleagues reviewing documents around a table"
              label="Connected document governance"
              className="aspect-square w-full rounded-xl border border-red-100 bg-red-50 sm:aspect-auto sm:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
