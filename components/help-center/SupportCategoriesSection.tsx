import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CATEGORIES = [
  {
    title: "Employee Records",
    description: "Profiles, documents and effective-dated changes.",
    audience: "Employees, HR Admins",
  },
  {
    title: "Onboarding & Lifecycle",
    description: "Tasks, documents and transitions.",
    audience: "Employees, Managers",
  },
  {
    title: "Workflows & Approvals",
    description: "Routing, approvals and audit evidence.",
    audience: "Managers, HR Admins",
  },
  {
    title: "Organization Management",
    description: "Entities, teams and reporting structures.",
    audience: "HR Admins",
  },
];

export function SupportCategoriesSection() {
  return (
    <section id="support-categories" className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Top support categories.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Browse by the area your question sits in.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {CATEGORIES.map((category, i) => (
              <Reveal key={category.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                  <span className="block h-9 w-9 rounded-lg bg-indigo-50" />
                  <h3 className="mt-3 text-sm font-bold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {category.description}
                  </p>
                  <p className="mt-3 text-xs text-slate-400">
                    For: {category.audience}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/help-center/support-categories.png"
              alt="A support floor of specialists taking calls at their desks"
              label="Zoiko HR support categories"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
