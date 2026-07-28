import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TAGS = [
  "Human review required",
  "Source-linked",
  "Permission-aware",
  "No automatic high-impact action",
  "Logged where required",
];

export function AIGovernanceSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                AI assistance designed to support HR work — not replace
                accountable judgment.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Find authorized information, summarize process status,
                prepare drafts for review and surface incomplete actions
                within the user&apos;s permitted access.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/ai-governance"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore AI governance
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={36}>
            <PlaceholderImage
              src="/images/home/ai-governance.png"
              alt="Illustration of AI assistance supporting an HR professional"
              label="AI assistance, human oversight"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
