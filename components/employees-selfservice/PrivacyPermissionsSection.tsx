import { Container, Reveal } from "@/components/ui";
import { SectionHeading, NotePanel } from "./shared";

const PRINCIPLES = [
  {
    principle: "Least-necessary access",
    requirement:
      "Employees see their own information and other content explicitly permitted by role and organizational scope.",
  },
  {
    principle: "Sensitive data protection",
    requirement:
      "Sensitive fields require appropriate authorization and are not exposed merely because they exist in the employee record.",
  },
  {
    principle: "Clear boundaries",
    requirement:
      "The UI distinguishes personal information, organization information and restricted administrative information.",
  },
  {
    principle: "Session security",
    requirement:
      "Authentication, session, MFA/SSO and device-security requirements are defined by the approved security architecture.",
  },
  {
    principle: "Auditability",
    requirement:
      "Audit and review capabilities are represented factually and only to the extent implemented in the product.",
  },
  {
    principle: "Transparency",
    requirement:
      "Employees are told when an action is submitted, when information is shared with an approver and when a change takes effect where supported.",
  },
];

export function PrivacyPermissionsSection() {
  return (
    <section className="bg-[#0C2036] py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Privacy & permissions"
              title="Personal by design. Governed by role."
              tone="dark"
            >
              Employee self-service should make access easier without weakening
              control. Zoiko HR is designed to expose only the information and
              actions each user is authorized to access, with clear status and
              governed record changes.
            </SectionHeading>

            <Reveal delay={0.12}>
              <div className="mt-6">
                <NotePanel title="Trust message" tone="dark">
                  Employees should never have to guess who can see a request,
                  whether a change was submitted, or whether a record has
                  updated. Clear system status and permission-aware design are
                  core parts of the employee experience.
                </NotePanel>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} amount={0}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="hidden border-b border-white/10 bg-white/5 lg:grid lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                <p className="px-5 py-3 text-[10px] font-medium uppercase leading-4 tracking-wide text-white/40">
                  Principle
                </p>
                <p className="px-5 py-3 text-[10px] font-medium uppercase leading-4 tracking-wide text-white/40">
                  Page requirement
                </p>
              </div>

              {PRINCIPLES.map((row) => (
                <div
                  key={row.principle}
                  className="border-b border-white/10 last:border-b-0 lg:grid lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)]"
                >
                  <div className="flex items-start gap-2.5 bg-white/[0.03] px-5 pb-3 pt-4 lg:py-4">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 flex-none rounded-full bg-primary"
                    />
                    <p className="break-words text-xs font-semibold leading-5 text-white">
                      {row.principle}
                    </p>
                  </div>
                  <div className="px-5 pb-4 pt-2 lg:py-4">
                    <p className="break-words text-xs leading-5 text-white/50">
                      {row.requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
