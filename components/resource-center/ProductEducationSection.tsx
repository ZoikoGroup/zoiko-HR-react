import { Fragment } from "react";
import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const LEVELS = [
  {
    number: "01",
    title: "Understand",
    body: "Resource Center explainers: concepts, roles, operating models and use cases. Educational, not authoritative product documentation.",
    links: [
      ["Platform overview", "/platform"],
      ["Employee Records", "/employee-records"],
      ["Global HR", "/global-hr-management"],
    ],
    action: "Browse explainers",
    href: "/platform",
    dark: false,
  },
  {
    number: "02",
    title: "See",
    body: "Product Tour at /product-tour/ — no signup, self-guided. Exact current tour behavior belongs to its child page.",
    links: [
      ["People Operations", "/product-tour#chapter-01"],
      ["Workflows", "/product-tour#chapter-05"],
      ["Integrations", "/product-tour#chapter-08"],
    ],
    action: "Take the Product Tour",
    href: "/product-tour",
    dark: true,
  },
  {
    number: "03",
    title: "Verify current behavior",
    body: "Documentation and product detail are authoritative for configuration, field behavior, states and current product truth.",
    links: [
      ["Product documentation", "/developer-documentation"],
      ["Help Center", "/help-center"],
      ["Administrator Guide", "/hr-guides"],
    ],
    action: "Open Documentation",
    href: "/developer-documentation",
    dark: false,
  },
];

export function ProductEducationSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Product Education &amp; Tour
          </span>
          <h2 className="mt-3 max-w-[620px] font-heading text-3xl font-bold leading-10 text-slate-900">
            Three levels of product learning — from concept to verified current
            behavior.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {LEVELS.map((level, i) => (
            <Fragment key={level.number}>
              <Reveal
                delay={0.06 + i * 0.06}
                className="h-full flex-1"
              >
                <div
                  className={`flex h-full flex-col rounded-2xl p-6 ${
                    level.dark
                      ? "bg-[#0e1b2e] text-white"
                      : "border border-black/10 bg-slate-50"
                  }`}
                >
                  <p
                    className={`font-heading text-2xl font-black ${
                      level.dark ? "text-white/30" : "text-slate-300"
                    }`}
                  >
                    {level.number}
                  </p>
                  <p
                    className={`mt-3 font-heading font-bold ${
                      level.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {level.title}
                  </p>
                  <p
                    className={`mt-2 text-xs leading-5 ${
                      level.dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {level.body}
                  </p>
                  <ul className="mt-4 flex-1 space-y-1.5">
                    {level.links.map(([label, linkHref]) => (
                      <li key={label}>
                        <Link
                          href={linkHref}
                          className="text-xs leading-5 text-primary hover:text-primary-dark"
                        >
                          → {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button href={level.href} className="mt-5 self-start px-5 py-2.5">
                    {level.action}
                  </Button>
                </div>
              </Reveal>

              {i < LEVELS.length - 1 ? (
                <span
                  aria-hidden
                  className="hidden shrink-0 text-primary lg:block"
                >
                  →
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
