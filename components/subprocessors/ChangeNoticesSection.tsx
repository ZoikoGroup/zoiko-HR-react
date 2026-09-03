import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function ChangeNoticesSection() {
  return (
    <section id="change-notices" className="scroll-mt-24 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="10 / How Change Notices Work"
          title="Only approved mechanisms are presented."
        >
          Notice period, subscription, email delivery, RSS/webhook, in-product
          alert, cadence, objection window and remedy are not promised unless an
          approved source establishes them.
        </SectionHeading>

        {/* Figma splits this row 600 / 600 with the image spanning the full
            height of both stacked state cards. */}
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-4">
            <Reveal delay={0.06} className="flex-1">
              <div className="h-full rounded-xl border border-slate-200 bg-gray-50 px-6 py-5">
                <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  <span aria-hidden className="size-1.5 rounded-full bg-slate-400" />
                  No public mechanism established
                </p>
                <h3 className="mt-2.5 text-base font-semibold text-slate-900">
                  Current state
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  No email subscription, RSS feed, webhook, in-product alert or
                  advance notice period is established for public publication.
                  Rendering a subscription CTA without approved source is a
                  publication blocker.
                </p>
                <Link
                  href="#current-registry"
                  className="mt-4 inline-block text-xs font-semibold text-primary hover:underline"
                >
                  View current registry + change history + DPA
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="flex-1">
              <div className="h-full rounded-xl border border-emerald-400/40 bg-emerald-50/60 px-6 py-5">
                <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-emerald-600">
                  <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />
                  Approved mechanism active
                </p>
                <h3 className="mt-2.5 text-base font-semibold text-slate-900">
                  If approved by source
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  If an approved public mechanism exists: show CTA, eligibility,
                  privacy notice, manage/unsubscribe route and failure/retry.
                  Contact data excluded from general analytics. Managed by
                  approved notification system only.
                </p>
                <p className="mt-4 text-xs font-semibold text-primary">
                  Subscription CTA — source-gated
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="h-full">
            <PlaceholderImage
              src="/images/subprocessors/change-notices.png"
              alt="A team reviewing reporting dashboards on a wall display"
              label="Approved notification mechanisms"
              className="h-full min-h-64 w-full rounded-xl border border-slate-200 bg-gray-50"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
