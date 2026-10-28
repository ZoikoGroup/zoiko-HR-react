import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <circle cx="7.33" cy="7.33" r="5.33" stroke="currentColor" strokeWidth="1.33" />
      <path
        d="M11.33 11.33 14 14"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SitemapHero({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-14 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,540px)_minmax(0,592px)] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-indigo-400">
                Explore Zoiko HR
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Sitemap
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[520px] text-base leading-7 text-slate-400">
                Find product, solution, resource, company, support, privacy, and
                legal pages across Zoiko HR.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 w-full max-w-[540px]">
                <label
                  htmlFor="sitemap-search"
                  className="block text-xs font-semibold leading-5 text-indigo-400"
                >
                  Find a page
                </label>
                <div className="relative mt-2">
                  <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                  <input
                    id="sitemap-search"
                    type="search"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Search pages and topics"
                    className="h-12 w-full rounded-xl bg-white/95 pl-11 pr-4 text-sm text-ink shadow-lg shadow-black/20 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="mt-2.5 text-xs leading-5 text-slate-500">
                  Filter this sitemap by page name or topic.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/sitemap/hero.png"
              alt="Someone working at a monitor showing the Zoiko HR workspace"
              label="Working in the Zoiko HR workspace"
              className="aspect-[592/350] w-full rounded-xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
