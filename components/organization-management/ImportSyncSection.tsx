import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DRY_RUN_ITEMS = [
  { title: "Choose source / file type", description: "Only approved source types and formats where supported. Privacy guidance shown before upload." },
  { title: "Map fields", description: "Source field → organization field; requiredness; transformation rules only if product-approved." },
  { title: "Preview counts", description: "New / update / conflict / skip counts; representative synthetic rows; issues by severity." },
  { title: "Validate", description: "Hierarchy, identifier, required fields, permission, date, and mapping checks run before any commit." },
];

const RESULTS_ITEMS = [
  { title: "Results artifact", description: "Succeeded / failed / skipped / conflict counts. Downloadable error artifact only if authorized and safe." },
  { title: "Sync health dashboard", description: "Source, direction, last successful sync, last attempt, issue count, current state, and next action. No false 'healthy' from stale status." },
  { title: "Conflict resolution", description: "Object/field category, local vs external state, source authority, and approved resolution choices. No auto-pick on timestamp alone." },
];

export function ImportSyncSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Import / sync
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Structured import with mandatory dry-run, validation, and
              one approved commit model
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Source direction, connector names, sync frequency, and
              commit semantics are never invented. All details require
              approved integration contract before public use.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-white/5 p-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px]">1</span>
                Class C — Dry-run
              </span>
              <div className="mt-3 space-y-3">
                {DRY_RUN_ITEMS.map((item) => (
                  <div key={item.title} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/organization-management/import-sync.png"
              alt="Team high-fiving near a whiteboard"
              label="Import and sync"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={0.22}>
            <div className="h-full rounded-2xl bg-white/5 p-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[10px]">2</span>
                Results &amp; Sync Health
              </span>
              <div className="mt-3 space-y-3">
                {RESULTS_ITEMS.map((item) => (
                  <div key={item.title} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.32}>
          <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-3.5 text-sm text-amber-200">
            <span aria-hidden>⚠</span>
            Connector names, source-of-record direction, and integration
            credentials are never shown in public mockups or marketing
            copy. All sync behavior requires an approved integration
            contract before public use.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
