import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const AUDIENCES = [
  {
    title: "Existing Customer",
    description:
      "Understand adjacent approved capabilities and how the broader group provides governance consistency. No assumption of access to other products; each product operates independently.",
    linkLabel: "Explore portfolio",
    href: "#portfolio-map",
  },
  {
    title: "Enterprise Evaluator",
    description:
      "Review group-level governance, ownership model, and operating principles as part of due diligence. Product-specific trust and security evidence belongs to the owning product destination.",
    linkLabel: "Zoiko HR Trust & Security",
    href: "/trust-center",
  },
  {
    title: "Prospective Buyer",
    description:
      "Explore the relevant portfolio category before initiating a product conversation. This page provides group context; product capability details are on the owning product page.",
    linkLabel: "About Zoiko HR",
    href: "/about",
  },
];

export function ForCustomersSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            For customers and buyers — how group context is relevant to
            you.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.title} delay={0.08 + i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-semibold text-ink">{audience.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {audience.description}
                </p>
                <Link
                  href={audience.href}
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {audience.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.34}>
          <p className="mt-6 text-xs text-ink/40">
            Do not interpret group-level governance consistency as a
            guarantee of equivalent capability across all products.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
