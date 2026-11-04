import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const PRODUCTS = [
  {
    icon: "◷",
    accent: "text-primary",
    badge: "bg-primary/5 text-primary",
    name: "ZoikoTime",
    transitive: "1 transitive",
    body: "Time-context handoffs improve schedule/attendance/timesheet coordination. Not required for standalone Zoiko HR.",
    fallback: "Standalone Zoiko HR time management or approved alternative.",
  },
  {
    icon: "◎",
    accent: "text-sky-700",
    badge: "bg-sky-700/5 text-sky-700",
    name: "Zoiko Payroll",
    transitive: null,
    body: "Payroll-preparation context handoffs. Not required for standalone HR processing.",
    fallback: "Standalone payroll or approved external payroll authority.",
  },
  {
    icon: "⊞",
    accent: "text-violet-600",
    badge: "bg-violet-600/5 text-violet-600",
    name: "Zoiko Docs Pro",
    transitive: "1 transitive",
    body: "Workforce document and template relationships in HR workflows. Not required for HR core.",
    fallback:
      "Zoiko HR Documents & Policies as standalone; external document systems.",
  },
  {
    icon: "⊟",
    accent: "text-amber-700",
    badge: "bg-amber-700/5 text-amber-700",
    name: "Zoiko Comply",
    transitive: null,
    body: "Policy, control and evidence workflow cross-reference. Not required for HR core or standalone compliance approaches.",
    fallback:
      "Standalone Zoiko HR policy management or approved external compliance tooling.",
  },
  {
    icon: "⊙",
    accent: "text-green-700",
    badge: "bg-green-700/5 text-green-700",
    name: "ZoikoID",
    transitive: null,
    body: "Ecosystem identity and authentication relationship. Not mandatory for Zoiko HR — see ZoikoID optionality contract.",
    fallback: "Zoiko HR direct sign-in or approved identity approach.",
  },
];

export function DependenciesSection() {
  return (
    <section id="dependencies" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Dependencies & Optionality"
              title="Every dependency is optional — direct and transitive chains are both visible"
            >
              Expand each product to see transitive dependencies, their reasons
              and fallback paths. Hidden transitive dependencies are prohibited.
            </SectionHeading>

            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/zoiko-one/dependencies.webp"
                alt="Two colleagues talking across laptops in an open office"
                label="Dependencies and optionality"
                // 280x219 is the exported frame size from the design.
                className="mt-6 aspect-video w-full rounded-xl bg-slate-100 lg:aspect-[280/219] lg:max-w-[280px]"
              />
            </Reveal>
          </div>

          <Reveal delay={0.08} amount={0}>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold text-slate-950">
                  Zoiko One dependency tree
                </p>
                <span className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-[10px] leading-4 text-slate-600">
                  root
                </span>
              </div>

              <div className="flex flex-col gap-2 p-3">
                {PRODUCTS.map((product) => (
                  <details
                    key={product.name}
                    open
                    className="group rounded-lg border border-slate-200 bg-white"
                  >
                    {/*
                      flex-wrap: name + "Optional enhancement" + transitive
                      count + chevron need ~300px on one line, more than a
                      phone leaves inside this nested panel.
                    */}
                    <summary className="flex cursor-pointer list-none flex-wrap items-center gap-2 px-4 py-3">
                      <span
                        aria-hidden
                        className={`flex-none text-sm ${product.accent}`}
                      >
                        {product.icon}
                      </span>
                      <span className="text-sm font-bold text-slate-950">
                        {product.name}
                      </span>
                      <span
                        className={`rounded px-2 py-0.5 text-[11px] font-medium leading-4 ${product.badge}`}
                      >
                        Optional enhancement
                      </span>
                      {product.transitive && (
                        <span className="text-[11px] leading-4 text-gray-400">
                          {product.transitive}
                        </span>
                      )}
                      <span
                        aria-hidden
                        className="ml-auto flex-none text-xs text-slate-400 transition-transform group-open:rotate-180"
                      >
                        ⌄
                      </span>
                    </summary>
                    <div className="px-4 pb-3">
                      <p className="break-words text-xs leading-5 text-slate-600">
                        {product.body}
                      </p>
                      <p className="mt-1 break-words text-xs leading-5 text-gray-400">
                        Fallback: {product.fallback}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <p className="break-words border-t border-slate-200 px-4 py-3 text-[11px] leading-4 text-gray-400">
                Technical dependencies do not imply commercial bundles.
                Plan/entitlement/pricing truth comes from the Commercial
                Dependency Registry only.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
