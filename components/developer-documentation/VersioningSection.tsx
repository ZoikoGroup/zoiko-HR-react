import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STATES = [
  {
    label: "Current",
    dot: "bg-emerald-400",
    chip: "bg-emerald-400/10 text-emerald-600",
    description:
      "Approved and authoritative for the stated version and scope. Source and review context available.",
  },
  {
    label: "Preview / Beta",
    dot: "bg-blue-500",
    chip: "bg-blue-400/10 text-blue-600",
    description:
      "Published but not generally current. Limitations and instability qualifications apply from technical registry.",
  },
  {
    label: "Deprecated",
    dot: "bg-amber-400",
    chip: "bg-amber-400/10 text-amber-600",
    description:
      "Still documented. Replacement or migration expected. Persistent warning with lifecycle date only when approved.",
  },
  {
    label: "Sunset Scheduled",
    dot: "bg-rose-400",
    chip: "bg-rose-400/10 text-rose-500",
    description: "Removal date approved. Date and migration path are prominent.",
  },
  {
    label: "Removed / Unsupported",
    dot: "bg-slate-400",
    chip: "bg-slate-100 text-slate-500",
    description:
      "No longer usable. Historical route available. Copy controls omitted for invalid examples unless needed for migration.",
  },
];

export function VersioningSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 13"
          title="Versioning, deprecation and authority handoffs."
        >
          Product Updates owns release change announcements. Service Status owns
          live availability. Developer Docs owns the current technical contract
          and cross-links to those authorities.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Documentation state vocabulary
            </p>

            <div className="relative mt-4 pl-10">
              {/* One continuous rail sits behind the dots — in the design the
                  line runs through them rather than being broken by a ring. */}
              <span
                aria-hidden
                className="absolute left-2 top-5 bottom-8 w-px bg-slate-200"
              />
              {STATES.map((state, i) => (
                <Reveal key={state.label} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="relative pb-3">
                    <span
                      aria-hidden
                      className={`absolute -left-10 top-3 size-4 rounded-full ${state.dot}`}
                    />
                    <div className="rounded-xl bg-slate-50 px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${state.chip}`}
                      >
                        {state.label}
                      </span>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {state.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/versioning.png"
              alt="Colleagues discussing a migration plan at a desk"
              label="Discussing a migration plan"
              className="w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
