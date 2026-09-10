import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, MarkedItem } from "./shared";

const POINTS = [
  "Permitted metrics and workforce signals by role and scope",
  "Time period, entity, business unit and team filters where authorized",
  "Workflow exceptions and approval status without HR administration overhead",
  "Organizational structure and headcount that reflects your operating reality",
];

export function WorkforceVisibilitySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,604px)_minmax(0,580px)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Workforce visibility"
              title="See the workforce picture without living inside HR administration."
            >
              Zoiko HR can surface a concise, permission-aware executive view
              that helps leaders understand workforce structure, activity and
              exceptions—without exposing information they are not authorized to
              access.
            </SectionHeading>

            <Reveal delay={0.1}>
              <ul className="mt-5 flex flex-col gap-3">
                {POINTS.map((point) => (
                  <MarkedItem key={point} mark="✓" markClass="text-primary">
                    {point}
                  </MarkedItem>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-[400px] break-words text-xs font-medium leading-4 text-gray-400">
                Access to workforce information is governed by role, business
                scope and configured policy. Senior role does not equal
                unrestricted visibility.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/book-a-demo"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                See Zoiko HR in action
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/business-leaders/workforce-visibility.webp"
              alt="Colleagues greeting each other in an office lobby"
              label="Workforce visibility"
              className="aspect-[580/449] w-full rounded-2xl border border-slate-200 bg-white shadow-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
