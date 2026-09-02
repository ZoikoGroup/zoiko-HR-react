import type { CSSProperties } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel } from "./shared";

const LAYERS = [
  {
    name: "Active identity",
    detail: "Authenticated, current — not delegated beyond granted scope.",
  },
  {
    name: "Valid grant / delegation",
    detail: "Time-bound and scope-bound; cannot expand beyond delegator.",
  },
  {
    name: "Role",
    detail: "Organizational role as configured — no implicit broad authority.",
  },
  {
    name: "Object / action",
    detail: "Specific AI-enabled action on a specific record or scope.",
  },
  {
    name: "Purpose / sensitivity",
    detail: "Intended use and data sensitivity class must match grant.",
  },
  {
    name: "State",
    detail: "Prohibited or paused governance states block regardless of role.",
  },
  { name: "Policy", detail: "Higher-priority deny wins over any grant." },
];

/**
 * The stack steps inward one layer at a time from xl up. The step index rides
 * on a custom property so the inset can stay responsive — inline margins
 * couldn't be. Below xl the column is too narrow for seven steps, so the rows
 * stay flush.
 */
function stepStyle(index: number) {
  return { "--step": index } as CSSProperties;
}

const STEP_INSET =
  "xl:ml-[calc(var(--step)*38px)] xl:mr-[calc(var(--step)*42px)]";

export function PermissionControlsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 6"
          title="Permission controls and administrative governance."
        >
          Effective access requires every layer simultaneously. Any deny at any
          level blocks the action regardless of other grants. Configuration
          changes are versioned, owned and effective-dated.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <BlockLabel>
              Access stack — all layers required simultaneously
            </BlockLabel>

            <div className="mt-2.5 flex flex-col gap-2">
              {LAYERS.map((layer, i) => (
                <div key={layer.name} style={stepStyle(i)} className={STEP_INSET}>
                  <Reveal delay={Math.min(i * 0.05, 0.3)}>
                    <div
                      className={`flex flex-col gap-1 rounded-xl border border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] text-slate-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold text-ink">
                          {layer.name}
                        </span>
                      </span>
                      <span className="text-xs leading-4 text-slate-500 sm:max-w-64 sm:text-right">
                        {layer.detail}
                      </span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

            <div style={stepStyle(7)} className={STEP_INSET}>
              <Reveal delay={0.3}>
                <div className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
                  → Current authorization
                </div>
                <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
                  All layers active simultaneously. Any deny at any level blocks
                  the action.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.14} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/permission-controls.png"
              alt="A person looking up outside an office building"
              label="Considering an access request"
              className="aspect-[320/432] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
