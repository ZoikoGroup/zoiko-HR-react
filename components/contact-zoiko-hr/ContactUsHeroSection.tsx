import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { EmojiIcon } from "./shared";

export function ContactUsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] bg-[radial-gradient(120%_100%_at_65%_-10%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,692px)_minmax(0,460px)]">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-indigo-400">
                Contact Zoiko HR
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-3.5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[48px] lg:leading-[56.16px]">
                How can we
                <br />
                help?
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[460px] leading-7 text-slate-400">
                Choose the reason you&apos;re contacting Zoiko HR and we&apos;ll
                direct you to the right path. For general questions that
                don&apos;t fit a specialized route, you can send us a message
                below.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#intent-router"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Choose a contact reason ↓
                </Link>
                <Link
                  href="/contact-sales"
                  className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  Contact Sales
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-7 flex max-w-[480px] items-start gap-2.5 rounded-[10px] border border-cyan-900 bg-slate-900/60 px-4 py-3">
                <EmojiIcon
                  glyph="⚠"
                  className="pt-px text-sm leading-5 text-amber-500"
                />
                <p className="text-xs leading-5 text-slate-400">
                  Please do not include passwords, payment card details,
                  government identifiers, payroll files, or other sensitive
                  records in a general inquiry.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/contact-zoiko-hr/hero.png"
              alt="Two colleagues talking across a desk in a meeting room"
              label="Contacting Zoiko HR"
              className="aspect-[460/536] w-full rounded-2xl border border-cyan-900 bg-slate-900 lg:ml-auto lg:max-w-[460px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
