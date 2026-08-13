import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STORIES = [
  {
    title: "Multi-entity onboarding rollout",
    image: "/images/onboarding-lifecycle/evidence-onboarding-rollout.png",
    alt: "Team collaborating around a laptop with a headset",
  },
  {
    title: "Cross-border transfer program",
    image: "/images/onboarding-lifecycle/evidence-transfer-program.png",
    alt: "Business partners shaking hands in front of international flags",
  },
  {
    title: "Structured separation program",
    image: "/images/onboarding-lifecycle/evidence-separation-program.png",
    alt: "Colleagues reviewing a structured process diagram",
  },
];

export function OnboardingCustomerEvidenceSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Verified outcomes, published when approved.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Customer evidence appears here only after review and
              sign-off — no fabricated metrics.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STORIES.map((story, i) => (
            <Reveal key={story.title} delay={0.12 + i * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <PlaceholderImage
                  src={story.image}
                  alt={story.alt}
                  label={story.title}
                  fit="contain"
                  className="w-full"
                />
                <div className="p-5">
                  <p className="font-semibold text-ink">{story.title}</p>
                  <p className="mt-1 text-xs text-ink/40">
                    Pending customer approval for publication.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
