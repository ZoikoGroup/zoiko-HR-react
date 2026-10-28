import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const PRODUCTS = [
  {
    name: "Zoiko HR",
    badge: "This page",
    dot: "bg-primary",
    accent: "text-primary",
    badgeClass: "bg-primary/10 text-primary",
    card: "border-primary/20 bg-primary/5",
    kicker: "This product",
    body: "Personal HR information, workforce records, requests, documents, lifecycle actions and relevant HR workflows.",
    note: "Primary product on this page.",
  },
  {
    name: "ZoikoTime",
    badge: null,
    dot: "bg-sky-600",
    accent: "text-sky-700",
    badgeClass: "",
    card: "border-slate-200 bg-slate-50",
    kicker: "Workforce time and attendance",
    body: "Time, attendance and related workforce-time experiences where purchased and configured.",
    note: "A separate connected product. Time functionality is not native to Zoiko HR.",
  },
  {
    name: "Zoiko Payroll",
    badge: null,
    dot: "bg-violet-600",
    accent: "text-violet-600",
    badgeClass: "",
    card: "border-slate-200 bg-slate-50",
    kicker: "Payroll administration",
    body: "Payroll-related employee experiences where purchased and configured.",
    note: "A separate connected product. Zoiko HR does not calculate or process payroll.",
  },
];

export function ConnectedStackSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Connected workforce stack"
          title="Keep HR, time and payroll connected—without blurring the products."
          className="max-w-[600px]"
        >
          Use Zoiko HR for employee records, HR requests, documents and lifecycle
          workflows, with connected routes to ZoikoTime and Zoiko Payroll where
          those products are part of the organization&apos;s workforce stack.
        </SectionHeading>

        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={0.06 + i * 0.05} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 ${product.card}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    aria-hidden
                    className={`size-2 flex-none rounded-full ${product.dot}`}
                  />
                  <p className="text-base font-bold text-slate-950">
                    {product.name}
                  </p>
                  {product.badge && (
                    <span
                      className={`rounded px-2 py-0.5 text-[11px] font-medium leading-4 ${product.badgeClass}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <p
                  className={`pt-3 break-words text-xs font-semibold uppercase leading-4 tracking-wide ${product.accent}`}
                >
                  {product.kicker}
                </p>
                <p className="pt-3 break-words text-sm leading-6 text-slate-600">
                  {product.body}
                </p>

                <p className="mt-auto break-words border-t border-slate-200 pt-4 text-xs leading-5 text-gray-400">
                  {product.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <Link
              href="/connect-hr"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Explore HR, Time &amp; Payroll →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
