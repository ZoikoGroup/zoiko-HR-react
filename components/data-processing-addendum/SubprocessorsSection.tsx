import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CHAIN = [
  { label: "Customer (Controller role if applicable)" },
  { label: "Zoiko HR (Processor role if applicable)", accent: true },
  { label: "Authorized Subprocessors" },
  { label: "End-service delivery" },
];

export function SubprocessorsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading eyebrow="Section 9" title="Subprocessors and change relationship.">
          The DPA governs the contractual relationship. Current approved vendor
          list, change notifications and objection mechanics belong to
          Subprocessors.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
          <Reveal delay={0.08} className="min-w-0">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Contract relationship — from approved DPA clause
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
                {CHAIN.map((node, i) => (
                  <span key={node.label} className="flex items-center gap-2">
                    <span
                      className={`rounded-lg border px-3 py-2 text-xs font-medium ${
                        node.accent
                          ? "border-primary/40 bg-blue-50 text-ink"
                          : "border-slate-200 bg-white text-ink"
                      }`}
                    >
                      {node.label}
                    </span>
                    {i < CHAIN.length - 1 && (
                      <span aria-hidden className="text-xs text-slate-300">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[10px] leading-4 text-slate-400">
                Role assignment from approved DPA clause only. Authorization,
                flow-down, notice and objection terms are source-controlled. No
                provider names, counts or notice periods are maintained on this
                page.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/data-processing-addendum/subprocessors.png"
              alt="Colleagues mapping a vendor relationship on a whiteboard"
              label="Mapping a vendor relationship"
              className="aspect-[240/262] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
