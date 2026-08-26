import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TASK_CHIPS = [
  "Understand Zoiko HR",
  "Evaluate fit",
  "Implement",
  "Administer",
  "Connect systems",
  "Review trust",
  "Get help",
];

export function ResourceCenterHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#0e4a5c_0%,#0b2a44_55%,#0f172a_100%)] py-20 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Resource Center
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[520px] font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Find the Zoiko HR guidance you need — and the right source for
                what comes next.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[480px] leading-7 text-slate-300">
                Explore approved guides, research, explainers and product
                education for evaluating, implementing, administering and
                supporting Zoiko HR.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-2 rounded-xl border border-primary/30 bg-[#0b2a44] px-4 py-3">
                <span aria-hidden className="text-lg leading-7 text-indigo-400">
                  ⌕
                </span>
                <input
                  type="search"
                  placeholder="Search by question, task or topic…"
                  aria-label="Search by question, task or topic"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
                <Link
                  href="#search-discover"
                  className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold leading-5 text-white transition-colors hover:bg-primary-dark"
                >
                  Explore Resources
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-2 text-xs leading-4 text-slate-500">
                Use business questions only — do not enter employee records,
                credentials or payroll data.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {TASK_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium leading-4 text-slate-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30}>
            <PlaceholderImage
              src="/images/resource-center/hero-workshop.png"
              alt="A workspace with people preparing materials at benches"
              label="Resource Center"
              className="aspect-[616/520] w-full rounded-2xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
