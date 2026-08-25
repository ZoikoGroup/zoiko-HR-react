import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TASK_CHIPS = [
  "Organize records",
  "Plan onboarding",
  "Route approvals",
  "Manage global context",
  "Support managers",
  "Review operations",
  "Connect systems",
  "Prepare implementation",
];

export function HrGuidesHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#0e4a5c_0%,#0b2a44_55%,#0f172a_100%)] py-20 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-indigo-400">
                HR Guides
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[585px] font-heading text-4xl font-extrabold leading-10">
                Practical HR guidance for structured, accountable people
                operations.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex h-14 max-w-[584px] items-center rounded-full border border-white/10 bg-[#0b2a44] px-4">
                <input
                  type="search"
                  placeholder="Search guides by task, topic, or audience…"
                  aria-label="Search guides by task, topic, or audience"
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-200/50"
                />
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-6 flex max-w-[584px] flex-wrap gap-3">
                {TASK_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-[20px] border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-medium leading-5 text-indigo-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-6 text-xs leading-5 text-slate-500">
                Core guides are public — no signup required.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30}>
            <PlaceholderImage
              src="/images/hr-guides/hero.png"
              alt="Two colleagues reviewing work on a laptop"
              label="HR Guides"
              className="aspect-[584/485] w-full rounded-[20px] border border-white/10 bg-[#0b2a44] shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
