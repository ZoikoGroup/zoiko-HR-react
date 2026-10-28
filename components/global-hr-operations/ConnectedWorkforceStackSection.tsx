import { Container, Reveal } from "@/components/ui";

const PRODUCTS = [
  {
    name: "Zoiko HR",
    badge: "This page",
    description:
      "System for governed HR records, people operations, workflows, employee and manager experiences and organizational structure.",
    note: "Primary product on this page.",
    highlighted: true,
  },
  {
    name: "ZoikoTime",
    description:
      "Workforce time and attendance and time intelligence capabilities according to its approved product scope.",
    note: "Connected where integration is available. Zoiko HR itself does not provide all time functionality.",
    highlighted: false,
  },
  {
    name: "Zoiko Payroll",
    description:
      "Payroll management and processing capabilities according to the approved Zoiko Payroll scope.",
    note: "A connected product. Country payroll coverage and global payroll processing are not claimed here.",
    highlighted: false,
  },
];

export function ConnectedWorkforceStackSection() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Connected Workforce Stack
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Keep workforce context connected without blurring product
            boundaries.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/50">
            This page&apos;s primary goal is demonstrating Zoiko HR.
            Connected products are shown where approved integration
            relationships exist.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={0.14 + i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-xl border bg-white p-6 ${
                  product.highlighted
                    ? "border-primary/30"
                    : "border-ink/[0.08]"
                }`}
              >
                {product.badge && (
                  <span className="mb-3 w-fit rounded bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-lg font-extrabold text-ink">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {product.description}
                </p>
                <p className="mt-4 border-t border-ink/[0.08] pt-3 text-xs text-ink/40">
                  {product.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
