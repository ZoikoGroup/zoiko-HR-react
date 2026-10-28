import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CLASSES = [
  {
    glyph: "OK",
    kicker: "No suite dependency",
    chip: "bg-emerald-50 text-teal-600",
    kickerText: "text-teal-600",
    title: "No dependency",
    body: "Zoiko HR capability operates without the related system within approved scope — suite adoption is never mentioned as a prerequisite.",
  },
  {
    glyph: "+",
    kicker: "Optional benefit",
    chip: "bg-emerald-50 text-teal-600",
    kickerText: "text-teal-600",
    title: "Optional enrichment",
    body: "The related system adds approved context, but the core flow continues without it. Fallback is shown explicitly.",
  },
  {
    glyph: "ALT",
    kicker: "Customer choice",
    chip: "bg-indigo-50 text-primary",
    kickerText: "text-primary",
    title: "Alternative path",
    body: "The customer may use one of several approved source/target approaches. Capability class is shown; no vendor is invented.",
  },
  {
    glyph: "Z",
    kicker: "Customer choice",
    chip: "bg-indigo-50 text-primary",
    kickerText: "text-primary",
    title: "Customer-selected Zoiko product",
    body: "The customer may choose a Zoiko ecosystem path. Benefit may be shown, but adoption is never forced or defaulted.",
  },
  {
    glyph: "!",
    kicker: "Required",
    chip: "bg-orange-100 text-yellow-700",
    kickerText: "text-yellow-700",
    title: "Required technical dependency",
    body: "The capability genuinely requires a current source-approved dependency, stated exactly with reason and scope.",
  },
  {
    glyph: "×",
    kicker: "Not supported",
    chip: "bg-rose-100 text-rose-600",
    kickerText: "text-rose-600",
    title: "Unavailable / not supported",
    body: "A known unsupported combination is stated as unavailable, with a route to architecture review — no workaround promise.",
  },
  {
    glyph: "?",
    kicker: "Source-needed",
    chip: "bg-slate-200 text-slate-500",
    kickerText: "text-slate-500",
    title: "Unknown / source-needed",
    body: 'No current authoritative compatibility answer exists. The page says "confirm compatibility," never an optimistic yes.',
  },
];

export function OptionalitySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title={'"Optional" is a registry entry, not a marketing word.'}
          className="max-w-[700px]"
        >
          Every dependency is classified, with its reason, fallback and scope
          stated — direct and transitive dependencies are never hidden from
          review.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(0.06 + i * 0.04, 0.3)}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-extrabold ${item.chip}`}
                  >
                    {item.glyph}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${item.kickerText}`}
                  >
                    {item.kicker}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-sky-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.34} className="h-full">
            <PlaceholderImage
              src="/images/controlled-interoperability/optionality.webp"
              alt="Colleagues in discussion at a desk with dashboards behind"
              label="Dependency classes"
              className="aspect-video w-full rounded-xl bg-slate-100 sm:aspect-auto sm:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
