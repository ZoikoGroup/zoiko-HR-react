import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * These cards carry the accent colour on all four edges with a thicker rule
 * along the top — unlike the exception cards, which keep a neutral outline.
 */
const CONTROLS = [
  {
    eyebrow: "Evidence minimization",
    eyebrowClass: "text-red-500",
    borderClass: "border-red-500",
    title: "Minimum necessary",
    body: "Only data required for the stated evidence purpose is accessible or collected.",
  },
  {
    eyebrow: "Sensitive classes",
    eyebrowClass: "text-primary",
    borderClass: "border-primary",
    title: "Reduced visibility",
    body: "Sensitive evidence reduces search, count, facet, preview, export, notification, audit and support visibility.",
  },
  {
    eyebrow: "Notifications",
    eyebrowClass: "text-teal-600",
    borderClass: "border-teal-600",
    title: "Minimized previews",
    body: "Previews minimize policy, control, evidence and exception detail; sensitive material stays in a secure in-product context.",
  },
];

export function EvidenceMinimizationSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Minimum evidence. Restricted access. No session replay by default."
          className="max-w-[660px]"
        >
          Sensitive evidence and case detail are filtered before search, counts,
          facets, previews, notifications, exports, audit and support — never
          after.
        </SectionHeading>

        <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTROLS.map((control, i) => (
            <Reveal key={control.title} delay={0.06 + i * 0.05}>
              <div
                className={`flex h-full flex-col rounded-xl border border-t-[2.4px] bg-white px-5 pb-6 pt-6 ${control.borderClass}`}
              >
                <p
                  className={`text-xs font-extrabold uppercase tracking-wide ${control.eyebrowClass}`}
                >
                  {control.eyebrow}
                </p>
                <p className="pt-2.5 text-sm font-bold text-sky-950">
                  {control.title}
                </p>
                <p className="pt-2 text-xs leading-5 text-slate-500">
                  {control.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.21} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-comply/evidence-minimization.webp"
              alt="Colleagues taking notes during a boardroom review"
              label="Minimum evidence controls"
              className="aspect-video w-full rounded-xl bg-slate-100 sm:aspect-auto sm:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-yellow-800">
              Feature-truth gate: authorization, minimization and secure
              diagnostics are owned by Integration Security; current legal,
              privacy and compliance assurance statements are owned by Trust
              &amp; Legal. Nothing here duplicates or anticipates those claims.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
