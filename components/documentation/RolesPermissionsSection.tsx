import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    title: "Employee",
    canView: "Own records, documents, and requests.",
    canPerform: "Submit requests and complete assigned tasks.",
    limitation: "Cannot view or act on another employee's record.",
  },
  {
    title: "HR Administrator",
    canView: "Records and configuration within assigned scope.",
    canPerform: "Configure workflows, policies, and permissions.",
    limitation: "Broader governance detail is owned by the Administrator Guide.",
  },
];

export function RolesPermissionsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Roles, permissions &amp; access.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Only source-approved limitations are shown — unknown is never
            converted into &quot;cannot.&quot;
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.08}>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-bold text-ink">{role.title}</h3>
                  <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                    <div>
                      <dt className="inline font-bold text-teal-600">
                        Can view:{" "}
                      </dt>
                      <dd className="inline font-bold text-slate-600">
                        {role.canView}
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
              src="/images/documentation/roles-access.png"
              alt="Someone sorting through tabbed paper files"
              label="Roles and access"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
