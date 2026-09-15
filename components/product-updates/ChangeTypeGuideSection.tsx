import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHANGE_TYPES = [
  {
    label: "New Capability",
    dot: "bg-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    description:
      "A newly available product capability established by an approved source record.",
    usedWhen:
      "Used when: Approved Product Update source confirms new availability.",
  },
  {
    label: "Fix",
    dot: "bg-primary",
    chip: "border-primary/20 bg-primary/10 text-primary",
    description:
      "A resolved product defect confirmed by an approved release record.",
    usedWhen: "Used when: Approved source confirms product defect resolution.",
  },
  {
    label: "Developer Change",
    dot: "bg-violet-400",
    chip: "border-violet-400/20 bg-violet-400/10 text-violet-400",
    description:
      "A technical surface — API, webhook, schema, SDK — behavior changed.",
    usedWhen:
      "Used when: Developer Documentation authority confirms technical change.",
  },
  {
    label: "Security / Compliance",
    dot: "bg-amber-500",
    chip: "border-amber-500/20 bg-amber-500/10 text-amber-500",
    description:
      "Public-safe summary of a specialist-approved security or compliance change.",
    usedWhen:
      "Used when: Security / Privacy / Legal owner approves public classification and disclosure scope.",
  },
];

export function ChangeTypeGuideSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Change type guide.
          </h2>
          <p className="mt-1.5 text-slate-500">
            Each update is classified by a governed taxonomy. Classification
            requires approved source authority.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {CHANGE_TYPES.map((changeType, i) => (
              <Reveal key={changeType.label} delay={Math.min(i * 0.06, 0.3)}>
                <div className="rounded-2xl border border-black/10 p-5 transition-shadow duration-200 hover:shadow-md">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs font-semibold ${changeType.chip}`}
                  >
                    <span
                      aria-hidden
                      className={`size-1.5 rounded-full ${changeType.dot}`}
                    />
                    {changeType.label}
                  </span>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {changeType.description}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {changeType.usedWhen}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/product-updates/change-types.png"
              alt="Colleagues reviewing a technical change together at a desk"
              label="Colleagues reviewing a technical change"
              className="aspect-[594/560] w-full rounded-2xl border border-black/10 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
