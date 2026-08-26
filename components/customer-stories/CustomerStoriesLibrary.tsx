import { Container, Reveal } from "@/components/ui";

const filters = [
  "Challenge",
  "Product",
  "Context",
  "Evidence Strength",
  "Format",
  "Status",
];

const pendingStories = Array.from({ length: 3 });

export function CustomerStoriesLibrary() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            Story library.
          </h2>
        </Reveal>

        {/* Search */}
        <Reveal delay={0.06}>
          <div className="mt-8">
            <div className="flex h-11 items-center rounded-xl border border-black/10 bg-slate-100 px-4">
              <span className="font-[IBM_Plex_Sans] text-sm font-normal text-slate-950/50">
                Search customer stories…
              </span>
            </div>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="rounded-lg border border-black/10 bg-white px-3 py-1.5 font-[IBM_Plex_Sans] text-xs font-medium leading-4 text-gray-700 transition-colors hover:border-[#315EFB]/30 hover:text-[#315EFB]"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="ml-auto">
              <select
                aria-label="Sort stories"
                defaultValue="recommended"
                className="h-7 w-36 appearance-none rounded-lg border border-black/10 bg-white px-3 font-[IBM_Plex_Sans] text-xs font-normal text-gray-700 outline-none"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </Reveal>

        {/* Results Count */}
        <Reveal delay={0.14}>
          <p className="mt-4 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-gray-500">
            0 stories match current filters.
          </p>
        </Reveal>

        {/* Pending Stories */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pendingStories.map((_, index) => (
            <Reveal key={index} delay={0.18 + index * 0.06}>
              <div className="min-h-[158px] rounded-2xl border border-dashed border-gray-300 bg-slate-100 p-6">
                <p className="font-[IBM_Plex_Sans] text-xs font-semibold uppercase leading-4 tracking-tight text-gray-400">
                  Evidence pending · No approved story
                </p>

                <p className="mt-3 max-w-[320px] font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-gray-500">
                  Customer evidence will appear here once permission, source
                  review, and approval are complete. No story has been
                  substituted or invented.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Information Box */}
        <Reveal delay={0.36}>
          <div className="mt-8 rounded-xl border border-black/10 bg-[#F5F8FF] p-5">
            <p className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-slate-950">
              Core stories publish when permission, evidence, and approval are
              complete. Meanwhile:
            </p>

            <div className="mt-3 flex flex-col gap-1">
              <a
                href="/implementation-guide"
                className="font-[IBM_Plex_Sans] text-sm font-medium leading-5 text-[#315EFB] hover:underline"
              >
                Browse the Implementation Guide →
              </a>

              <a
                href="/product"
                className="font-[IBM_Plex_Sans] text-sm font-medium leading-5 text-[#315EFB] hover:underline"
              >
                Review product documentation →
              </a>

              <a
                href="/product-tour"
                className="font-[IBM_Plex_Sans] text-sm font-medium leading-5 text-[#315EFB] hover:underline"
              >
                Take the Product Tour →
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}