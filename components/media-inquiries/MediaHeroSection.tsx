import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_50%,rgba(49,94,251,0.05)_0%,rgba(49,94,251,0)_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,682px)_minmax(0,455px)]">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-indigo-400">
                Media Inquiries
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[48px] lg:leading-[56.16px]">
                Media inquiries
                <br />
                <span className="text-primary">for Zoiko HR.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[520px] leading-7 text-slate-400">
                For press questions, company comment, interview requests, fact
                checks, and media-resource questions, submit a media inquiry
                below. For published announcements and current media materials,
                use the Zoiko HR Newsroom.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-2.5 max-w-[682px] text-xs leading-5 text-slate-500">
                Submission confirms receipt only when the system accepts your
                request. It does not guarantee response time, interview
                availability, comment, event participation, or embargo
                acceptance.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#media-inquiry-form"
                  className="rounded-[10px] bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit a media inquiry
                </Link>
                <Link
                  href="/newsroom"
                  className="rounded-[10px] border border-blue-950 px-5 py-3 text-sm text-indigo-400 transition-colors hover:border-indigo-400"
                >
                  Browse Newsroom →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <Link
                href="/newsroom"
                className="mt-4 inline-block text-xs leading-5 text-slate-500 transition-colors hover:text-indigo-400"
              >
                View approved media resources →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/media-inquiries/hero.png"
              alt="A group discussing work together around a table"
              label="Media inquiries"
              className="aspect-[455/424] w-full rounded-2xl bg-white lg:ml-auto lg:max-w-[455px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
