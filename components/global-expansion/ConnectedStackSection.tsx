import { Container, Reveal } from "@/components/ui";

const PRODUCTS = [
  {
    tag: "This page",
    title: "Zoiko HR",
    description: "System for governed HR records, people operations, workflows, employee and manager experiences and organizational structure.",
    note: "Primary product on this page.",
    highlighted: true,
    href: undefined,
  },
  {
    tag: null,
    title: "ZoikoTime",
    description: "Workforce time and attendance and time intelligence capabilities according to its approved product scope.",
    note: "Connected where integration is available. Zoiko HR itself does not provide all time functionality.",
    highlighted: false,
    href: "/zoikotime",
  },
  {
    tag: null,
    title: "Zoiko Payroll",
    description: "Payroll management and processing capabilities according to the approved Zoiko Payroll scope.",
    note: "A connected product. Country payroll coverage and global payroll processing are not claimed here.",
    highlighted: false,
    href: "/zoiko-payroll",
  },
];

export function ConnectedStackSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Connected workforce stack
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Keep workforce context connected without blurring product
              boundaries.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              This page&apos;s primary goal is demonstrating Zoiko HR.
              Connected products are shown where approved integration
              relationships exist.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {PRODUCTS.map((product, i) => {
            const Card = (
              <div
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  product.highlighted ? "border-primary/30" : "border-slate-200"
                }`}
              >
                {product.tag && (
                  <span className="inline-flex w-fit rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                    {product.tag}
                  </span>
                )}
                <p className={`font-semibold text-ink ${product.tag ? "mt-3" : ""}`}>{product.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{product.description}</p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-relaxed text-ink/40">
                  {product.note}
                </p>
              </div>
            );

            return (
              <Reveal key={product.title} delay={0.06 + i * 0.06} className="flex">
                {product.href ? (
                  <a href={product.href} className="flex w-full">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
