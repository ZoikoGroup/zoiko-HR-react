import { Container, Reveal } from "@/components/ui";
import { SectionHeading, Dot } from "./shared";

const OK = { dot: "bg-green-600", text: "bg-green-700/5 text-green-700" };
const WARN = { dot: "bg-amber-600", text: "bg-amber-700/5 text-amber-700" };
const NEUTRAL = { dot: "bg-gray-400", text: "bg-slate-100 text-slate-600" };

const PRODUCTS = [
  {
    icon: "◷",
    accent: "text-primary",
    header: "bg-primary/5",
    name: "ZoikoTime",
    states: [
      { label: "Participation", value: "Active", tone: OK },
      { label: "Access", value: "Role-scoped — current", tone: OK },
      { label: "Runtime", value: "Product / Status authority", tone: NEUTRAL },
      { label: "Handoff", value: "Current — 2 active", tone: OK },
    ],
  },
  {
    icon: "◈",
    accent: "text-sky-700",
    header: "bg-sky-700/5",
    name: "Zoiko Payroll",
    states: [
      { label: "Participation", value: "Active", tone: OK },
      { label: "Access", value: "Permission-filtered — current", tone: OK },
      { label: "Runtime", value: "Product / Status authority", tone: NEUTRAL },
      { label: "Handoff", value: "Pending review", tone: WARN },
    ],
  },
  {
    icon: "⊞",
    accent: "text-violet-600",
    header: "bg-violet-600/5",
    name: "Zoiko Docs Pro",
    states: [
      { label: "Participation", value: "Active", tone: OK },
      { label: "Access", value: "Sensitivity-governed — current", tone: OK },
      { label: "Runtime", value: "Product / Status authority", tone: NEUTRAL },
      { label: "Handoff", value: "Current — 1 active", tone: OK },
    ],
  },
  {
    icon: "⊟",
    accent: "text-amber-700",
    header: "bg-amber-700/5",
    name: "Zoiko Comply",
    states: [
      { label: "Participation", value: "Active", tone: OK },
      { label: "Access", value: "Purpose-checked — review due", tone: WARN },
      { label: "Runtime", value: "Product / Status authority", tone: NEUTRAL },
      { label: "Handoff", value: "Stale — review required", tone: WARN },
    ],
  },
  {
    icon: "⊙",
    accent: "text-green-700",
    header: "bg-green-700/5",
    name: "ZoikoID",
    states: [
      { label: "Participation", value: "Active", tone: OK },
      { label: "Access", value: "Per-product reauth — current", tone: OK },
      { label: "Runtime", value: "Product / Status authority", tone: NEUTRAL },
      { label: "Handoff", value: "Current — auth boundary", tone: OK },
    ],
  },
];

const RULES = [
  {
    title: "Claim currentness",
    body: "Public suite wording is invalidated when underlying product or claim source changes. No cached approval for outdated capabilities.",
  },
  {
    title: "Suite summary rule",
    body: "Suite summary may aggregate with transparent constituent states. A single 'all systems healthy' badge that hides a degraded product is prohibited.",
  },
  {
    title: "Runtime / availability",
    body: "Product runtime and availability are owned by the product and Status authority. Zoiko One must not collapse or fake live product status.",
  },
];

export function ProductHealthSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product Health & Currentness"
          title="Five independent product states — no single suite badge that hides a degraded product"
        >
          Each product owns its participation, access, runtime/availability and
          handoff states independently. A degraded product is shown transparently
          — the suite summary cannot collapse constituent states into a single
          green indicator.
        </SectionHeading>

        <div className="mt-9 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.name}
              delay={Math.min(0.04 + i * 0.04, 0.2)}
              className="h-full"
              amount={0}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div
                  className={`flex items-center gap-2 border-b border-slate-200 px-4 py-3.5 ${product.header}`}
                >
                  <span aria-hidden className={`text-sm ${product.accent}`}>
                    {product.icon}
                  </span>
                  <p className="break-words text-sm font-bold text-slate-950">
                    {product.name}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  {product.states.map((state) => (
                    <div key={state.label}>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                        {state.label}
                      </p>
                      <span
                        className={`mt-1 inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-medium leading-4 ${state.tone.text}`}
                      >
                        <Dot className={`size-1.5 ${state.tone.dot}`} />
                        <span className="break-words">{state.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid items-stretch gap-4 md:grid-cols-3">
          {RULES.map((rule, i) => (
            <Reveal key={rule.title} delay={0.06 + i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-bold text-slate-950">{rule.title}</p>
                <p className="mt-2 break-words text-xs leading-5 text-slate-600">
                  {rule.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
