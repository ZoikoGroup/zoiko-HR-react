import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowLink, CtaButtons, Eyebrow } from "./shared";

const PRINCIPLES = [
  "Human review required",
  "Source-linked",
  "Permission-aware",
  "No automatic high-impact action",
  "Logged where required",
];

export function AiHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow tone="dark">Governed AI Assistance</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                Get help with HR work — without handing over human judgment.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-7 text-slate-400">
                Find authorized information, summarize process status, prepare
                drafts for review and surface incomplete actions within your
                permitted Zoiko HR scope. Sources, permissions and human review
                stay visible.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {PRINCIPLES.map((principle) => (
                  <li
                    key={principle}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium leading-4 text-white/80"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <CtaButtons variant="dark" className="mt-8" />
              <ArrowLink href="/ai-governance" tone="dark" className="mt-5">
                Review AI Governance
              </ArrowLink>
              <p className="mt-5 max-w-[500px] text-xs leading-5 text-slate-500">
                Capabilities and availability depend on approved use-case
                records, plan, contract, configuration and jurisdiction.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/ai-assistance/hero.png"
              alt="A team working through papers and a laptop around a shared table"
              label="Team working together at a table"
              className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-black/15 sm:aspect-video lg:aspect-[572/632]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
