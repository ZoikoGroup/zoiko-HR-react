import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ARTICLES = [
  {
    type: "Guide",
    title: "Updating an employee profile after a role change",
    description: "Steps to record a role change and keep effective dates accurate.",
    meta: "HR Admin · Employee Records",
  },
  {
    type: "Article",
    title: "Submitting and tracking a leave request",
    description: "How employees submit requests and follow approval status.",
    meta: "Employee · Leave & Attendance",
  },
  {
    type: "Guide",
    title: "Setting up a new entity and jurisdiction",
    description: "Configuring structure, policies and access for a new entity.",
    meta: "HR Admin · Organization Management",
  },
  {
    type: "Reference handoff",
    title: "Connecting ZoikoTime to Zoiko HR",
    description: "Where to find the authoritative integration reference.",
    meta: "IT / Developer · Integrations",
  },
];

export function FeaturedHelpSection() {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured help.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Current, eligible articles and guides.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                      {article.type}
                    </span>
                    <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-teal-600">
                      Current
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold leading-snug text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {article.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3 text-xs text-slate-400">
                    <span>{article.meta}</span>
                    <span>Reviewed recently</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <PlaceholderImage
              src="/images/help-center/featured-help.png"
              alt="Support agents reviewing records at a shared workstation"
              label="Zoiko HR featured help"
              className="aspect-[16/10] w-full rounded-xl border border-white/10 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
