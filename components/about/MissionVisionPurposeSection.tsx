import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    label: "Mission",
    text: "To make people operations structured, secure, and accountable — so organizations can manage the employment lifecycle with clarity and every authorized user can access the information and actions they need.",
    image: "/images/about/mission.png",
  },
  {
    label: "Vision",
    text: "To become the trusted global operating foundation for human resources, connecting people, processes, policies, and workforce intelligence across every entity and jurisdiction.",
    image: "/images/about/vision.png",
  },
  {
    label: "Purpose",
    text: "To help organizations grow without allowing people operations to become fragmented, opaque, or difficult to govern.",
    image: "/images/about/purpose.png",
  },
];

export function MissionVisionPurposeSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <div className="border-l border-white/10 pl-6">
                <PlaceholderImage
                  src={pillar.image}
                  alt={`${pillar.label} illustration`}
                  label={pillar.label}
                  className="h-20 w-20 rounded-xl border border-white/10 bg-white/5"
                />
                <span
                  aria-hidden
                  className="mt-5 block font-serif text-3xl italic text-primary/60"
                >
                  &ldquo;
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                  {pillar.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
