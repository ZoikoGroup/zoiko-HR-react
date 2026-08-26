import { Container, Reveal, PlaceholderImage } from "@/components/ui";

interface BlockerCardProps {
  category: string;
  problem: string;
  recovery: string;
}

const leftBlockers: BlockerCardProps[] = [
  {
    category: "Scope / Decision",
    problem: "Scope boundaries undefined or disputed between stakeholders.",
    recovery:
      "Convene scope authority session; produce signed manifest before proceeding.",
  },
  {
    category: "Integration",
    problem: "Third-party authentication or schema mismatch.",
    recovery:
      "Engage third-party technical contact; open formal support ticket.",
  },
];

const rightBlockers: BlockerCardProps[] = [
  {
    category: "Configuration",
    problem: "Configuration state diverges from agreed scope.",
    recovery: "Version-control config; reset to last approved state.",
  },
  {
    category: "Adoption / Support",
    problem: "Support ownership unconfirmed post go-live.",
    recovery:
      "Block handover; confirm operational owner before activation.",
  },
];

function BlockerCard({ category, problem, recovery }: BlockerCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border-l-2 border-amber-500 bg-sky-950 p-5 ring-1 ring-inset ring-amber-500/20">
      <div>
        <h3 className="text-sm font-bold text-slate-100">{category}</h3>
        <p className="mt-2 text-xs leading-5 text-slate-400">{problem}</p>
      </div>
      <div className="mt-4">
        <span className="text-xs font-bold text-amber-500">
          Recovery path:
        </span>
        <p className="mt-1 text-xs leading-4 text-slate-400">{recovery}</p>
      </div>
    </div>
  );
}

export function BlockersSection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Title */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Common blockers and recovery paths.
            </h2>
          </Reveal>

          {/* 3-Column Grid Layout */}
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              {/* Left Cards */}
              <div className="flex flex-col gap-6 lg:col-span-3">
                {leftBlockers.map((item, idx) => (
                  <BlockerCard key={idx} {...item} />
                ))}
              </div>

              {/* Center Image */}
              <div className="relative min-h-[350px] w-full overflow-hidden rounded-2xl bg-sky-950 ring-1 ring-inset ring-amber-500/20 lg:col-span-6 lg:min-h-[384px]">
                <PlaceholderImage
                  src="/images/implementation-guide/Blockers.png"
                  alt="Team discussing project blockers and resolution paths"
                  label="Blockers & Recovery"
                  className="aspect-square w-full"
                />
              </div>

              {/* Right Cards */}
              <div className="flex flex-col gap-6 lg:col-span-3">
                {rightBlockers.map((item, idx) => (
                  <BlockerCard key={idx} {...item} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
