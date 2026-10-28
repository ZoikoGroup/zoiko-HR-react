import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const OWNERS = [
  {
    title: "Integration Security",
    body: "Owns authorization, data minimization, service identity, exception handling and integration auditability.",
  },
  {
    title: "Identity & Single Sign-On",
    body: "Owns identity provider, authentication and access-control detail for every connected system.",
  },
  {
    title: "Data Import & Export",
    body: "Owns bulk transfer, mapping, transformation, migration and cutover mechanics.",
  },
];

export function OwningProductsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Detailed authorization and audit evidence live with their owning products."
          className="max-w-[700px]"
        >
          This page shows a current permission and boundary summary — it
          doesn&apos;t duplicate or anticipate a security, identity or migration
          claim owned elsewhere.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-yellow-800">
              Feature-truth gate: authorization, minimization, service identity,
              exception and audit detail is owned by Integration Security;
              identity and authentication detail is owned by Identity &amp;
              Single Sign-On; migration and cutover mechanics are owned by Data
              Import &amp; Export. Nothing here duplicates or anticipates those
              claims.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-3">
          {OWNERS.map((owner, i) => (
            <Reveal key={owner.title} delay={0.14 + i * 0.05}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
                <span aria-hidden className="w-8 border-t-2 border-primary" />
                <h3 className="pt-4 text-base font-bold text-sky-950">
                  {owner.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {owner.body}
                </p>
                <p className="mt-auto rounded-md bg-emerald-50 px-4 py-2.5 pt-2.5 text-xs font-bold uppercase tracking-wide text-teal-600">
                  Approved &amp; locked
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
