import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const PRODUCTS = [
  {
    icon: "◷",
    accent: "text-primary",
    name: "ZoikoTime",
    tag: "Workforce time and attendance",
    body: "Connect approved schedule, attendance and timesheet information to Zoiko HR workforce records.",
  },
  {
    icon: "◈",
    accent: "text-sky-500",
    name: "Zoiko Payroll",
    tag: "Payroll administration",
    body: "Use structured HR and employment data as the authoritative source for payroll preparation workflows.",
  },
  {
    icon: "⊞",
    accent: "text-violet-400",
    name: "Integrations",
    tag: "Approved connections",
    body: "Connect Zoiko HR to approved third-party and internal systems through governed integration architecture.",
  },
];

export function EcosystemSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Workforce ecosystem"
            title="Connect HR with the workforce systems that depend on it."
            tone="dark"
            className="max-w-[965px]"
          >
            Use Zoiko HR as the structured people and organization layer, then
            connect the workforce journey to relevant Zoiko products where
            appropriate.
          </SectionHeading>

          <Reveal delay={0.1}>
            <Link
              href="/connect-hr"
              className="inline-flex min-h-11 flex-none items-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              Explore HR, Time &amp; Payroll →
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={0.06 + i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span aria-hidden className={`text-base leading-6 ${product.accent}`}>
                    {product.icon}
                  </span>
                  <span className="text-sm font-semibold leading-5 text-white">
                    {product.name}
                  </span>
                  <span
                    className={`break-words pl-1 text-xs font-medium leading-4 ${product.accent}`}
                  >
                    {product.tag}
                  </span>
                </div>
                <p className="pt-3 break-words text-xs leading-5 text-white/50">
                  {product.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-5 break-words text-xs leading-4 text-white/30">
            Product boundaries and data flows are defined by the approved
            integration architecture. Keep Zoiko Payroll and ZoikoTime as
            connected products with clear boundaries rather than collapsing them
            into Zoiko HR.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
