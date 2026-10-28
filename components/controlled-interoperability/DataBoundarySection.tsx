import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const BOUNDARIES = [
  {
    eyebrow: "Authorization",
    border: "border-t-primary",
    text: "text-primary",
    title: "Permission",
    body: "Integration Security owns detailed authorization and effective-access rules. This page shows a current summary only.",
  },
  {
    eyebrow: "Minimization",
    border: "border-t-teal-600",
    text: "text-teal-600",
    title: "Data minimization",
    body: "Purpose and approved high-level data boundary are shown here; field-level minimization follows the owning security and data authorities.",
  },
  {
    eyebrow: "Cross-product",
    border: "border-t-violet-600",
    text: "text-violet-600",
    title: "Cross-product permissions",
    body: "Access is re-evaluated at every product or system boundary — a suite-level admin role never implies downstream rights.",
  },
];

export function DataBoundarySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="This page shows the boundary, not the field list."
          className="max-w-[700px]"
        >
          High-level data categories and sensitivity are visible here;
          field-level minimization and access follow the owning security and
          data authorities.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOUNDARIES.map((item, i) => (
            <Reveal key={item.title} delay={0.06 + i * 0.05}>
              <div
                className={`h-full rounded-xl border border-slate-200 border-t-[2.4px] bg-white px-5 pb-6 pt-6 ${item.border}`}
              >
                <p
                  className={`text-xs font-extrabold uppercase tracking-wide ${item.text}`}
                >
                  {item.eyebrow}
                </p>
                <h3 className="pt-1 text-sm font-bold text-sky-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.21} className="h-full">
            <PlaceholderImage
              src="/images/controlled-interoperability/data-boundary.webp"
              alt="Colleagues reviewing access rules at a workstation"
              label="Data boundary"
              className="aspect-video w-full rounded-xl border border-slate-200 border-t-[2.4px] border-t-yellow-600 bg-slate-100 sm:h-full sm:aspect-auto"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
