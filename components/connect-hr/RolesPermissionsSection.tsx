import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function RolesPermissionsSection() {
  return (
    <section className="bg-[#F0F5F9] py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 23 — Roles, Permissions and Delegation
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Role title alone never grants access — effective access is
            condition-evaluated at action time.
          </h2>
          <p className="mt-4 max-w-[700px] leading-6 text-slate-500">
            ALLOW only when: identity active, role/delegation grant covers scope
            and action, sensitivity/purpose conditions pass, no higher-priority
            deny applies, grant not expired.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-[780px] rounded-lg border border-sky-500/20 bg-sky-500/5 px-4 py-3">
            <p className="text-xs font-semibold leading-4 text-sky-500">
              Effective-access formula
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              Identity active AND (Role grant OR Delegation) covers scope AND
              action permitted AND sensitivity/purpose pass AND no deny/SOD AND
              not expired/review-blocked → ALLOW. All other cases → DENY.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/connect-hr/roles-permissions.png"
            alt="A facilitator mapping permissions on a whiteboard with sticky notes"
            label="Roles, permissions and delegation"
            className="mt-8 aspect-[1280/613] min-h-56 w-full rounded-xl border border-black/5 bg-slate-100"
          />
        </Reveal>
      </Container>
    </section>
  );
}
