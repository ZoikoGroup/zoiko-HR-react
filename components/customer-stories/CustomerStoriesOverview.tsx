import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CustomerStoriesOverview() {
  return (
    <section className="bg-white py-20 text-[#040D18] sm:py-24">
      <Container>
        {/* Introduction / Information Box */}
        <Reveal>
          <div className="rounded-2xl border-l-[3px] border-[#315EFB] bg-[#F5F8FF] p-8">
            <h2 className="font-[Manrope] text-2xl font-bold leading-8 text-slate-950">
              What are Zoiko HR Customer Stories?
            </h2>

            <p className="mt-3 font-[IBM_Plex_Sans] text-base font-normal leading-6 text-gray-700">
              Zoiko HR Customer Stories are structured records of how real
              organizations have configured and used Zoiko HR in their
              operating environments. Each story is published only with
              customer permission, after evidence review, with explicit
              context and scope — and is date-stamped so readers can assess
              currency. Stories describe what a specific customer did and what
              the evidence shows; they do not assert universal results or make
              certification claims.
            </p>
          </div>
        </Reveal>

        {/* Cards + Image */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Card 01 */}
            <Reveal delay={0.08}>
              <div className="h-40 rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315EFB]">
                  <span className="font-[IBM_Plex_Sans] text-sm font-bold leading-5 text-white">
                    01
                  </span>
                </div>

                <h3 className="mt-4 font-[IBM_Plex_Sans] text-base font-bold leading-6 text-slate-950">
                  Context before outcome
                </h3>

                <p className="mt-1 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-gray-500">
                  Organization context always precedes any reported outcome.
                </p>
              </div>
            </Reveal>

            {/* Card 02 */}
            <Reveal delay={0.16}>
              <div className="h-40 rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34D399]">
                  <span className="font-[IBM_Plex_Sans] text-sm font-bold leading-5 text-white">
                    02
                  </span>
                </div>

                <h3 className="mt-4 font-[IBM_Plex_Sans] text-base font-bold leading-6 text-slate-950">
                  Permission and currentness before publication
                </h3>

                <p className="mt-1 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-gray-500">
                  Stories require active consent and are dated.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Image */}
          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/customer-stories/what-are-stories.png"
              alt="Customer using Zoiko HR during a video meeting"
              label="Customer Stories"
              fit="cover"
              className="h-83 w-full rounded-2xl border border-black/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}