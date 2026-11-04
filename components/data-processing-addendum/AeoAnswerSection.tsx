import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NonControllingBanner } from "./shared";

const COVERAGE = [
  {
    icon: "📋",
    title: "Current DPA version",
    description: "Package status and version lineage.",
  },
  {
    icon: "🔗",
    title: "Annex navigation",
    description: "Jurisdiction modules and document annexes.",
  },
  {
    icon: "🔒",
    title: "Access class",
    description: "Public or request-controlled artifact route.",
  },
  {
    icon: "↗",
    title: "Authority routes",
    description: "Privacy, Security, Subprocessors cross-links.",
  },
  {
    icon: "✍",
    title: "Execution path",
    description: "Legal review request where supported.",
  },
];

export function AeoAnswerSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <NonControllingBanner />

        <Reveal delay={0.06}>
          <div className="mt-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
              AEO Direct Answer — Section 2
            </p>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-slate-500">
              This page is the public route for approved DPA terms or the
              controlled request path. It does not determine account-specific
              applicability, invent obligations, or assert compliance.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
            ✓ What this page covers
          </p>
        </Reveal>

        <div className="mt-2.5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COVERAGE.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
              {/* border-emerald-400/20 is #34D39933; the fill is a pale mint
                  rather than a neutral gray. */}
              <div className="flex h-full flex-col gap-1.5 rounded-xl border border-emerald-400/20 bg-[#F6FEF9] px-3.5 py-3">
                <span aria-hidden className="text-lg leading-7">
                  {item.icon}
                </span>
                <h3 className="text-xs font-semibold text-ink">{item.title}</h3>
                <p className="text-xs leading-4 text-slate-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <PlaceholderImage
            src="/images/data-processing-addendum/what-page-covers.png"
            alt="A reviewer working through contract documents at a desk"
            label="Working through contract documents"
            className="mt-6 aspect-video w-full rounded-2xl sm:aspect-[1201/225]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
