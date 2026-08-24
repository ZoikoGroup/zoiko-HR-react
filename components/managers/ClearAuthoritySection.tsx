import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHALLENGES = [
  { label: "Scattered requests", tagClass: "bg-red-400/10 text-red-400" },
  { label: "Unclear authority", tagClass: "bg-amber-500/10 text-amber-500" },
  {
    label: "Approvals without context",
    tagClass: "bg-red-400/10 text-red-400",
  },
  {
    label: "Absence and delegation ambiguity",
    tagClass: "bg-amber-500/10 text-amber-500",
  },
  {
    label: "Team dashboard surveillance risk",
    tagClass: "bg-violet-400/10 text-violet-400",
  },
];

export function ClearAuthoritySection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Why Manager Work Needs Clear Authority
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Manager work is easier when responsibility, context and authority
            are explicit.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            Administrative coordination only. Employment, legal, payroll, tax
            and compliance determinations remain with authorized people and
            qualified professionals where required.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="space-y-2">
            {CHALLENGES.map((challenge, i) => (
              <Reveal key={challenge.label} delay={0.08 + i * 0.05}>
                <div className="rounded-xl border border-white/5 border-r-[3px] border-r-white/20 bg-white/5 px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-[3px] px-1.5 py-px text-[10px] font-semibold ${challenge.tagClass}`}
                    >
                      Challenge
                    </span>
                    <span className="text-xs font-medium leading-5">
                      {challenge.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30} className="h-full">
            <PlaceholderImage
              src="/images/managers/why-authority.png"
              alt="Colleagues reviewing a document together at a desk"
              label="Explicit responsibility and authority"
              className="h-full min-h-72 w-full rounded-xl border border-emerald-400/10 border-r-[3px] border-r-emerald-400/40 bg-emerald-400/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
