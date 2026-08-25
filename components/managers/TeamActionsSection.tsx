import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function TeamActionsSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Authorized Team Actions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Propose and request — not directly edit source-controlled records.
          </h2>
          <p className="mt-4 max-w-[600px] leading-6 text-slate-500">
            Each team action shows permission, workflow, effective-date and
            evidence requirements before any input is accepted. Source-controlled
            fields require a request rather than an overwrite.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-primary/10 bg-primary/5 px-3.5 py-2">
            <p className="text-xs leading-4 text-slate-500">
              Unavailable actions are not presented as enabled shortcuts.
              Changing effective date reruns validation. Submission never
              silently overwrites source-controlled fields.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <PlaceholderImage
            src="/images/managers/team-actions.png"
            alt="A manager working across a tablet and laptop"
            label="Authorized team actions"
            className="mt-8 h-80 w-full rounded-xl border border-black/5 border-r-4 border-r-black/10 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
          />
        </Reveal>

        <Reveal delay={0.24}>
          <Link
            href="/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View Team Actions
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
