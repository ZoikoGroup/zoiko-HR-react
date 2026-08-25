import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ChangeHistorySection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              No value is overwritten without attributable history.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Current, proposed, approved-future, corrected, superseded,
              and archived states remain visible and explainable — never
              silently replaced.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.14} y={30}>
            <PlaceholderImage
              src="/images/employee-records/change-history-1.png"
              alt="Person presenting notes on a whiteboard to colleagues"
              label="Visible and explainable"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/employee-records/change-history-2.png"
              alt="Person organizing sticky notes on a whiteboard"
              label="Never silently replaced"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            See change workflow
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
