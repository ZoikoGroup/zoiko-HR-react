import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function NewsroomHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,485px)] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase leading-4 tracking-[0.12em] text-indigo-400/70">
                Official Press / Newsroom
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
                News and announcements from Zoiko HR.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[580px] text-base leading-7 text-slate-400">
                Official company announcements, press releases, curated external
                coverage, and approved media resources. Published content is
                dated, attributed, and source-governed.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href="#latest-news"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Browse latest news
                </a>
                <Link
                  href="/media-inquiries"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-colors hover:border-white/60"
                >
                  Media inquiries
                </Link>
              </div>
              <p className="mt-8 text-xs leading-5 text-slate-500">
                Official source. Content types labeled. Corrections published where
                material.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/press-newsrooms/hero.png"
              alt="A team discussing charts on a tablet in an office"
              label="Team discussing results on a tablet"
              className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-white/5 sm:aspect-video lg:aspect-[485/484]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
