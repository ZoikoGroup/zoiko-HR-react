import { Container, Reveal } from "@/components/ui";
import { GUIDES, GuideCard } from "./guides";

const FILTERS = [
  "All Tasks",
  "Organize records",
  "Plan onboarding",
  "Route approvals",
  "All Audiences",
  "HR Leader",
  "HR Admin",
  "Manager",
  "All Product Areas",
  "Current Only",
];

export function BrowseAllGuidesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Browse All Guides
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex h-14 items-center rounded-xl border border-black/10 bg-white px-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <input
              type="search"
              placeholder="Search by topic, task, or keyword…"
              aria-label="Search by topic, task, or keyword"
              className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-[#082f49]/50"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {FILTERS.map((filter) => (
              <span
                key={filter}
                className="rounded-[20px] border border-black/10 bg-white px-4 py-1.5 text-xs font-medium leading-5 text-slate-600"
              >
                {filter}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide, i) => (
            <Reveal key={guide.title} delay={0.06 + i * 0.04} className="h-full">
              <GuideCard guide={guide} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Not finding what you need? Try different keywords or browse by task
            below.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
