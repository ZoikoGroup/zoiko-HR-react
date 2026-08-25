import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  {
    title: "Platform Overview",
    body: "Understand Zoiko's scope and operating model.",
    count: "12 guides",
    border: "border-l-primary",
    link: "text-primary",
  },
  {
    title: "Workflows & Approvals",
    body: "Approval routing, request types, and audit.",
    count: "11 guides",
    border: "border-l-violet-400",
    link: "text-violet-400",
  },
  {
    title: "Onboarding & Lifecycle",
    body: "Hire-to-active, transfers, and separation.",
    count: "14 guides",
    border: "border-l-amber-500",
    link: "text-amber-500",
  },
  {
    title: "Trust / Implementation",
    body: "Security, privacy, and implementation guidance.",
    count: "7 guides",
    border: "border-l-red-400",
    link: "text-red-400",
  },
];

export function ProductAreaSection() {
  return (
    <section className="bg-white py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Browse by Product Area
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Platform coverage by area
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            {AREAS.slice(0, 2).map((area, i) => (
              <Reveal key={area.title} delay={0.06 + i * 0.05} className="h-full">
                <AreaCard {...area} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="h-full lg:order-none">
            <PlaceholderImage
              src="/images/hr-guides/product-area.png"
              alt="A person reviewing printed documents"
              label="Platform coverage"
              className="h-full min-h-64 w-full rounded-xl border border-l-2 border-emerald-400 bg-white"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {AREAS.slice(2).map((area, i) => (
              <Reveal key={area.title} delay={0.18 + i * 0.05} className="h-full">
                <AreaCard {...area} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AreaCard({
  title,
  body,
  count,
  border,
  link,
}: {
  title: string;
  body: string;
  count: string;
  border: string;
  link: string;
}) {
  return (
    <div
      className={`h-full rounded-xl border border-black/10 border-l-2 bg-white p-5 ${border}`}
    >
      <p className="font-heading font-bold leading-6 text-slate-900">{title}</p>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{body}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-[20px] bg-slate-100 px-2.5 py-[3px] text-xs font-semibold leading-4 text-slate-600">
          {count}
        </span>
        <span className={`text-xs font-semibold leading-5 ${link}`}>
          Browse →
        </span>
      </div>
    </div>
  );
}
