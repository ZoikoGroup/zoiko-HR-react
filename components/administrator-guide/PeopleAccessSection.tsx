import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    title: "HR Administrator",
    scope: "Organization-wide, within assigned permissions.",
    canPerform: "Configure workflows, policies, roles and integrations.",
    limitation: "Broader governance detail may route to specialist authorities.",
  },
  {
    title: "Manager",
    scope: "Direct reports only, where approved.",
    canPerform: "Actions explicitly scoped to managers by source.",
    limitation: "Not assumed to be an administrator by default.",
  },
];

export function PeopleAccessSection() {
  return (
    <section id="people-access" className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            People, access, roles &amp; delegated administration.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Role/permission behavior is only shown where source-approved. No
            invented hierarchy, inheritance, or bypass paths.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.08}>
                <div className="rounded-[10px] border border-slate-200 bg-white p-6">
                  <h3 className="text-sm font-bold text-ink">{role.title}</h3>
                  <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                    <div>
                      <dt className="inline font-bold text-teal-600">Scope: </dt>
                      <dd className="inline font-bold text-slate-600">
                        {role.scope}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-bold text-teal-600">
                        Can perform:{" "}
                      </dt>
                      <dd className="inline font-bold text-slate-600">
                        {role.canPerform}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-bold text-slate-400">
                        Limitation:{" "}
                      </dt>
                      <dd className="inline font-bold text-slate-600">
                        {role.limitation}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/administrator-guide/people-access.png"
              alt="Colleagues reviewing a configuration screen together"
              label="People and access"
              className="aspect-[16/9] w-full rounded-[10px] border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
