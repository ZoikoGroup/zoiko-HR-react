import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, MarkedItem } from "./shared";

const POSTURES = [
  {
    icon: "⊞",
    accent: "text-primary",
    name: "Zoiko ecosystem only",
    body: "Selected Zoiko products participating in Zoiko One for all governed domains in scope.",
    items: [
      "Per-product authority still separate for each domain",
      "Suite navigation shows accessible products for the viewer",
      "Cross-product handoffs use approved minimum reference metadata",
      "Product-specific access policies remain independent",
    ],
    footer: "Not required — this is one valid operating posture, not the default outcome.",
    footerClass: "text-primary",
  },
  {
    icon: "◈",
    accent: "text-sky-400",
    name: "Mixed stack (Zoiko + external)",
    body: "One or more domains governed by a non-Zoiko authoritative system; selected Zoiko products participate where approved.",
    items: [
      "Coexistence Mode defines read/write/reference roles per system",
      "External systems are not downgraded visually to push Zoiko adoption",
      "Compatibility governed by Coexistence Mode Registry — not assumed",
      "Migration is never the default consequence of adding a Zoiko product",
    ],
    footer:
      "Supported as a stable operating posture where approved flows exist. Not an upsell problem.",
    footerClass: "text-sky-400",
  },
];

export function MixedStackSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Mixed Stack & Coexistence"
          title="Three valid operating postures — external systems and standalone paths are first-class, not an upsell problem"
          tone="dark"
        >
          Coexistence is a stable planning posture. Migration requires a separate
          Data Import &amp; Export decision and is never the default consequence
          of participating in Zoiko One.
        </SectionHeading>

        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTURES.map((posture, i) => (
            <Reveal key={posture.name} delay={0.06 + i * 0.06} className="h-full" amount={0}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
                  <span aria-hidden className={`text-sm ${posture.accent}`}>
                    {posture.icon}
                  </span>
                  <p className="break-words text-sm font-bold text-white">
                    {posture.name}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="break-words text-xs leading-5 text-white/60">
                    {posture.body}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {posture.items.map((item) => (
                      <MarkedItem
                        key={item}
                        mark="→"
                        markClass={posture.accent}
                        tone="dark"
                      >
                        {item}
                      </MarkedItem>
                    ))}
                  </ul>
                </div>

                <p
                  className={`break-words border-t border-white/10 px-5 py-3.5 text-[11px] font-medium leading-4 ${posture.footerClass}`}
                >
                  {posture.footer}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18} className="h-full md:col-span-2 lg:col-span-1">
            <PlaceholderImage
              src="/images/zoiko-one/mixed-stack.webp"
              alt="Two colleagues in conversation across a meeting-room table"
              label="Mixed stack and coexistence"
              className="aspect-video w-full rounded-xl bg-white/5 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-5 rounded-xl border border-white/10 px-4 py-3.5">
            <p className="break-words text-[11px] leading-4 text-white/40">
              Vendor and product compatibility must come from the current
              approved Coexistence Mode Registry catalog — not inferred from
              brand proximity or suite membership. Failure in one
              product/handoff is contained — unrelated products retain
              independent state where architecture permits.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
