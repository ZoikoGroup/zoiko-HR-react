import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const storyFields = [
  "Story title",
  "Identity / anonymity status",
  "Organization context",
  "Product / process tags",
  "Implementation stage",
  "Outcome summary (evidence label)",
  "Evidence strength",
  "Measured / observed period",
  "Last verified date",
  "Limitation",
];

export function CustomerStoriesCardFields() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] py-20 text-white sm:py-24">
      <Container>
        {/* Section Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-white">
            Every story card shows this before you click.
          </h2>
        </Reveal>

        {/* Section Description */}
        <Reveal delay={0.08}>
          <p className="mt-3 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-white/50">
            Required fields on every story card — not just the full story view.
          </p>
        </Reveal>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Story Card */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl bg-white p-6">
              {/* Label */}
              <p className="font-[IBM_Plex_Sans] text-xs font-normal uppercase leading-4 tracking-tight text-gray-400">
                Annotated story card (all fields required)
              </p>

              {/* Fields */}
              <div className="mt-4">
                {storyFields.map((field, index) => {
                  const number = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={field}
                      className="flex min-h-[49px] items-center gap-3 border-b border-black/10 py-2"
                    >
                      {/* Number */}
                      <span className="inline-flex shrink-0 rounded-sm bg-[#315EFB] px-2 py-0.5 font-[JetBrains_Mono] text-xs font-bold leading-4 text-white">
                        {number}
                      </span>

                      {/* Field */}
                      <span className="font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-slate-950">
                        {field}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={0.2} y={36}>
            <div className="h-full min-h-[400px] overflow-hidden rounded-[20px] lg:min-h-[558px]">
              <PlaceholderImage
                src="/images/customer-stories/story-card.png"
                alt="Customer story card illustration"
                label="Story card fields"
                fit="cover"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}