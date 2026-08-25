import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const FILTERS = [
  "All",
  "Guides",
  "Explainers",
  "FAQ",
  "Product Tour",
  "Implementation",
];

type Resource = {
  type: string;
  state: "Current" | "Review due";
  title: string;
  tags: string[];
  reviewed: string;
  href: string;
};

const RESOURCES: Resource[] = [
  {
    type: "Guide",
    state: "Current",
    title: "How onboarding plans are structured in Zoiko HR",
    tags: ["Implement", "HR Admin", "Lifecycle"],
    reviewed: "Reviewed Aug 2024",
    href: "/onboarding-lifecycle",
  },
  {
    type: "Explainer",
    state: "Current",
    title: "Global organization structure concepts and hierarchy",
    tags: ["Understand", "HR Leader", "Global HR"],
    reviewed: "Reviewed Jul 2024",
    href: "/global-hr-management",
  },
  {
    type: "FAQ",
    state: "Current",
    title: "How do approval workflows route and escalate requests?",
    tags: ["Administer", "HR Admin", "Workflows"],
    reviewed: "Reviewed Aug 2024",
    href: "/faq",
  },
  {
    type: "Guide",
    state: "Current",
    title: "Role-based access and permission boundaries explained",
    tags: ["Review trust", "IT / Security", "Trust"],
    reviewed: "Reviewed Jun 2024",
    href: "/trust-center",
  },
  {
    type: "Explainer",
    state: "Review due",
    title: "Connected HR, time and payroll data flows",
    tags: ["Connect systems", "Finance / Payroll", "Integrations"],
    reviewed: "Review due Sep 2024",
    href: "/integrations",
  },
  {
    type: "Guide",
    state: "Current",
    title: "Implementation discovery and stakeholder alignment",
    tags: ["Implement", "Implementation", "Implementation"],
    reviewed: "Reviewed Aug 2024",
    href: "/implementation-guide",
  },
];

export function SearchDiscoverSection() {
  return (
    <section id="search-discover" className="bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Search &amp; Discover
          </span>
          <h2 className="mt-3 max-w-[560px] font-heading text-3xl font-bold leading-10 text-slate-900">
            Find the right resource by question, task or topic.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-xl border border-primary/30 bg-slate-50 px-4 sm:max-w-[620px]">
              <span aria-hidden className="text-base leading-6 text-primary">
                ⌕
              </span>
              <input
                type="search"
                placeholder="Example: How do approvals work?"
                aria-label="Search resources"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-900/50"
              />
            </div>
            <span className="flex h-12 items-center rounded-xl bg-primary px-6 text-xs font-semibold leading-5 text-white">
              Search
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <span
                key={filter}
                className={`rounded-full border px-3.5 py-[5px] text-xs font-semibold leading-4 ${
                  filter === "All"
                    ? "border-primary bg-primary text-white"
                    : "border-black/10 text-slate-500"
                }`}
              >
                {filter}
              </span>
            ))}
            <span className="pl-2 text-xs leading-8 text-slate-400">
              Showing 6 resources
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal
              key={resource.title}
              delay={0.06 + i * 0.04}
              className="h-full"
            >
              <Link
                href={resource.href}
                className="flex h-full flex-col rounded-xl border border-black/10 bg-white transition-colors hover:border-primary/40"
              >
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-[9px] font-semibold leading-3 text-primary">
                      {resource.type}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-semibold leading-3 ${
                        resource.state === "Current"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-orange-300/10 text-amber-500"
                      }`}
                    >
                      {resource.state}
                    </span>
                  </div>

                  <p className="mt-3 font-heading text-sm font-bold leading-5 text-slate-900">
                    {resource.title}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`}
                        className="rounded-full border border-black/10 px-2 py-0.5 text-[10px] leading-4 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-black/10 px-5 py-3">
                  <span className="text-xs leading-4 text-slate-400">
                    {resource.reviewed}
                  </span>
                  <span className="text-xs font-semibold leading-4 text-primary">
                    Open →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Not finding what you need?{" "}
            <span className="text-primary">Clear filters</span> ·{" "}
            <span className="text-primary">Browse by task</span> ·{" "}
            <Link href="/help-center" className="text-primary">
              Visit Help Center
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
