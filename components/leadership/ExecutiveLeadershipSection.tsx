import { Container, Reveal } from "@/components/ui";

const EXECUTIVES = [
  {
    code: "E1",
    title: "[Chief Executive Officer (or approved equivalent)]",
  },
  {
    code: "E2",
    title: "[Chief Product Officer (or approved equivalent)]",
  },
  {
    code: "E3",
    title: "[Chief Technology Officer (or approved equivalent)]",
  },
];

export function ExecutiveLeadershipSection() {
  return (
    <section id="executive-leadership" className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Executive leadership.
            </h2>
            <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
              Illustrative — source-governed
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2 text-sm text-ink/50">
            Current approved executive roster — rendered from eligible Role
            Mapping records.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXECUTIVES.map((exec, i) => (
            <Reveal key={exec.code} delay={0.12 + i * 0.06}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-lg font-bold text-primary">
                    {exec.code}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                    Current ✓
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/40">
                  [Name from Leadership Registry]
                </p>
                <p className="mt-3 text-base font-bold text-ink">{exec.title}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/50">
                  [Source-governed accountability summary — from approved Role
                  Registry record]
                </p>
                <p className="mt-3 text-sm font-medium text-primary">
                  View profile details ▾
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
            Card order follows Role Registry display_order. No design-inferred
            hierarchy is applied. Acting/Interim labels are preserved in full at
            all breakpoints.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
