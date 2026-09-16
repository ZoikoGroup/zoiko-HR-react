import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SourceToken, CurrentPill, CookieSettingsButton } from "./shared";

const CARDS = [
  {
    title: "What's covered",
    body: "HTTP cookies, local storage, pixels, SDKs, device identifiers, embedded content, and other storage/access technologies used on Zoiko HR public websites.",
  },
  {
    title: "Cookie categories",
    body: "Strictly necessary, functional/preferences, analytics/measurement, and advertising/targeting — only when the registry contains those categories.",
  },
];

export function CookieHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-14 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,662px)_minmax(0,509px)]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-indigo-400">
                Privacy
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Cookie Notice
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[600px] text-base leading-7 text-slate-400">
                Zoiko HR uses cookies and similar technologies to operate our
                public website and, where enabled, support preferences,
                measurement and other approved purposes. Your available choices
                depend on the technology, purpose and applicable privacy rules.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-4 max-w-[580px] text-sm leading-6 text-slate-500">
                This notice covers Zoiko HR public web properties. It does not
                replace the privacy terms that govern customer-controlled HR
                data inside the Zoiko HR service.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <CookieSettingsButton className="w-full sm:w-auto" />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center gap-2 text-xs leading-4 text-slate-500">
                    Last updated: <SourceToken>REGISTRY DATE</SourceToken>
                  </span>
                  <span aria-hidden className="hidden text-white/20 sm:inline">
                    ·
                  </span>
                  <span className="flex items-center gap-2 text-xs leading-4 text-slate-500">
                    Version: <SourceToken>VERSION ID</SourceToken>
                  </span>
                  <CurrentPill />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <h2 className="text-sm font-semibold leading-5 text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2.5 text-xs leading-5 text-slate-400">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/cookie-notice/hero.png"
              alt="A team working together around laptops in a bright office"
              label="Team working together"
              className="aspect-[509/619] w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
