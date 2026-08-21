import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function MidMarketSection() {
  return (
    <section className="border-t border-white/10 bg-[#040D18] py-16 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={36} className="lg:order-1">
            <PlaceholderImage
              src="/images/solutions-overview/mid-market.png"
              alt="A manager leading a standardized operations review with her team"
              label="Standardized HR operations"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>

          <div className="lg:order-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Mid-Market Organizations
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Standardize HR operations as complexity increases.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 leading-relaxed text-white/70">
                Standardized HR operations for increased complexity.
                Evaluate more consistent data structures, role-aware
                workflows and approvals, operational reporting,
                integrations, and administration across teams and
                locations.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="my-7 border-l border-white/10 pl-3 text-xs leading-relaxed text-white/40">
                No revenue, employee count, geography, or
                &quot;mid-market&quot; qualification thresholds apply on
                this page.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/solutions/mid-market"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                Explore Mid-Market Organizations
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
