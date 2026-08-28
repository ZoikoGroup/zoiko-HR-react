import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  "Core HR",
  "Employee Records",
  "Leave & Attendance",
  "Documents & Policies",
  "Self-Service",
  "Reporting & Insights",
];

export function ProductAreasSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Browse by product area.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Approved Zoiko HR modules only — search and Contact Support cover
            anything not listed here.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <Reveal key={area} delay={i * 0.05}>
                <div className="rounded-[10px] border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                  {area}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/help-center/product-areas.png"
              alt="An HR administrator working through employee files at a desk"
              label="Zoiko HR product areas"
              className="aspect-[16/6] w-full rounded-[10px] border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
