import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_CATEGORIES = [
  { title: "Identity & access", description: "Worker identity, attributes, account lifecycle, and approved access signals.", color: "border-primary" },
  { title: "Benefits & employee services", description: "Approved eligibility inputs and enrollment/status handoffs.", color: "border-emerald-400" },
  { title: "Communications", description: "Approved notifications and delivery status.", color: "border-violet-400" },
];

const RIGHT_CATEGORIES = [
  { title: "Recruiting", description: "Candidate-to-worker handoff and duplicate prevention.", color: "border-amber-400" },
  { title: "Documents & e-signature", description: "Templates, sign/acknowledgment status, retention.", color: "border-sky-400" },
  { title: "Zoiko ecosystem", description: "Only currently validated Zoiko product connections.", color: "border-rose-400" },
];

export function CategoryExplorerSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Category explorer
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Route by system, process, or technical need.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Every category is generic and qualified until provider and
              object capability is verified.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {LEFT_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={0.1 + i * 0.06}>
                <div className={`rounded-r-xl border-l-4 ${cat.color} bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]`}>
                  <p className="font-semibold">{cat.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/integrations/category-explorer.png"
              alt="Two colleagues reviewing a laptop together"
              label="Route by need"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={0.16 + i * 0.06}>
                <div className={`rounded-r-xl border-l-4 ${cat.color} bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]`}>
                  <p className="font-semibold">{cat.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
