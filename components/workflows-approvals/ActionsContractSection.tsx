import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  { title: "Triggers/events", description: "Use provider-neutral event contracts and source references; no connector list is published unless approved." },
  { title: "Outbound actions", description: "Each action declares target domain, idempotency strategy, timeout/retry policy, compensation owner and evidence event." },
  { title: "Source availability", description: "A stale or unavailable external source cannot silently produce a business decision." },
  { title: "Data minimization", description: "Only fields required for the approved action are sent; sensitive HR fields require stricter access rules." },
];

export function ActionsContractSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Actions declare their target, timeout and recovery owner.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every outbound action, trigger and event follows the same
              minimization and recovery contract — no undocumented
              connector claims.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.06}>
                <div className="h-full rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="font-semibold text-ink">{card.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/workflows-approvals/actions-contract.png"
              alt="Support team working at headset stations"
              label="Declared targets and recovery"
              className="h-full min-h-[220px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
