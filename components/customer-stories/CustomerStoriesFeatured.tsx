import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const requirements = [
  {
    title: "Identity with consent",
    description:
      "Customer identity or approved anonymization level confirmed.",
  },
  {
    title: "Context at approved granularity",
    description:
      "Size, structure, and jurisdiction at the scope the customer approved.",
  },
  {
    title: "Implementation scope",
    description:
      "Which products, processes, and configuration decisions are described.",
  },
  {
    title: "Verified outcome with evidence label, period, and limitation",
    description:
      "Outcome stated with evidence type, observation window, and what the story cannot support.",
  },
];

export function CustomerStoriesFeatured() {
  return (
    <section className="bg-[#F5F8FF] py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-black/10">
            {/* Featured Story Label */}
            <div className="bg-[#102A43] px-6 py-4">
              <span className="font-[IBM_Plex_Sans] text-xs font-semibold uppercase leading-4 tracking-wider text-[#7FA6FF]">
                Featured Customer Story
              </span>
            </div>

            {/* Main Content */}
            <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* Left Content */}
              <div className="min-w-0 bg-[#0A1B2E] p-8">
                <h2 className="font-[Manrope] text-xl font-bold leading-7 text-white">
                  Methodology-first view
                </h2>

                <p className="mt-4 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-white/60">
                  Approved customer evidence publishes here. A featured story
                  requires all four elements below before publication.
                </p>

                {/* Requirements */}
                <div className="mt-5 space-y-4">
                  {requirements.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      {/* Bullet */}
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#7FA6FF]" />

                      {/* Text */}
                      <div className="min-w-0">
                        <h3 className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-white">
                          {item.title}
                        </h3>

                        <p className="font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-white/40">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disabled Button */}
                <button
                  type="button"
                  disabled
                  className="mt-7 h-10 rounded-lg bg-gray-700 px-5 font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-gray-400"
                >
                  Read story (no approved story)
                </button>
              </div>

              {/* Right Image */}
              <div className="relative min-h-[320px] overflow-hidden border-l border-black/10 bg-white lg:min-h-[442px]">
                <PlaceholderImage
                  src="/images/customer-stories/featured-story.png"
                  alt="Featured customer story"
                  label="Featured Customer Story"
                  fit="cover"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}