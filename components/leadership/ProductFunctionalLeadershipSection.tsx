import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEADERS = [
  {
    code: "F1",
    title: "[Head of Product (or approved title)]",
    scope: "Product direction and roadmap governance",
  },
  {
    code: "F2",
    title: "[Head of Engineering (or approved title)]",
    scope: "Technical delivery and platform reliability",
  },
  {
    code: "F4",
    title: "[Head of Security & Trust (or approved title)]",
    scope: "Security-by-design and privacy boundary governance",
  },
  {
    code: "F5",
    title: "[Head of People & Culture (or approved title)]",
    scope: "People systems and employer accountability",
  },
];

export function ProductFunctionalLeadershipSection() {
  return (
    <section className="bg-[#0A1B2E] py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Product &amp; functional leadership.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2 text-sm text-white/50">
            Approved product and functional leaders — categories render only
            when eligible records exist.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {LEADERS.map((leader, i) => (
              <Reveal key={leader.code} delay={0.1 + i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#1E3450] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base font-bold">
                      {leader.code}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      Current ✓
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/40">
                    [Name from registry]
                  </p>
                  <p className="mt-3 text-sm font-bold">{leader.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                    {leader.scope}
                  </p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    View profile details ▾
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/leadership/product-functional-leadership.png"
              alt="A leader presenting results to a seated team"
              label="Product and functional leadership"
              className="h-full min-h-64 w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            Additional functional categories render only when eligible registry
            records exist. Dual-role cards follow Person-to-Role Mapping rules.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
