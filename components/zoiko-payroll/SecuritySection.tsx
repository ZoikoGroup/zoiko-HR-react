import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, RuledCard } from "./shared";

const CONTROLS = [
  {
    eyebrow: "Sensitive values",
    eyebrowClass: "text-red-500",
    borderClass: "border-t-red-500",
    title: "Hidden by default",
    body: "Compensation, tax, bank, national IDs, payroll IDs and restricted payroll result detail hidden unless exact purpose/permission requires.",
  },
  {
    eyebrow: "Counts / facets",
    eyebrowClass: "text-primary",
    borderClass: "border-t-primary",
    title: "Filtered before derivation",
    body: "Permission/privacy filtered before derivation; restricted populations not inferable.",
  },
  {
    eyebrow: "Notifications",
    eyebrowClass: "text-teal-600",
    borderClass: "border-t-teal-600",
    title: "Minimum necessary",
    body: "Minimum necessary state/next action; no sensitive value or reason in preview by default.",
  },
];

export function SecuritySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Minimum data. Restricted access. No session replay by default."
          className="max-w-[700px]"
        >
          Sensitive payroll-preparation values are filtered before counts,
          search, facets, exports, notifications and support context — never
          after.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTROLS.map((control, i) => (
            <Reveal key={control.title} delay={0.06 + i * 0.05}>
              <RuledCard {...control}>{control.body}</RuledCard>
            </Reveal>
          ))}

          <Reveal delay={0.21} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-payroll/security.webp"
              alt="Colleagues working at an accounting dashboard"
              label="Minimum data controls"
              className="aspect-video w-full rounded-xl bg-slate-100 sm:aspect-auto sm:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-yellow-800">
              Feature-truth gate: detailed authorization, minimization and secure
              diagnostics are owned by Integration Security; identity and
              authentication detail is owned by Identity &amp; Single Sign-On.
              Nothing here duplicates or anticipates those claims.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
