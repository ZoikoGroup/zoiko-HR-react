import { Container, Reveal } from "@/components/ui";

const GUIDES = [
  {
    title: "Submitting a leave request",
    role: "Employee",
    before: "Confirm your leave balance and eligible leave type.",
    steps:
      "Open the request, select dates and type, add context, and submit for approval.",
    verify: "Request status shows Pending, then Approved or Returned with a reason.",
  },
  {
    title: "Approving a request",
    role: "Manager",
    before: "Confirm the request is assigned to you and still within its window.",
    steps: "Review the request detail, then approve or return it with a reason.",
    verify: "The request leaves your queue and its status reflects your decision.",
  },
  {
    title: "Updating an employee profile",
    role: "HR Administrator",
    before: "Confirm the effective date the change should apply from.",
    steps:
      "Open the record, edit the approved fields, set the effective date, and save.",
    verify: "The record shows the new values from the effective date, with prior history intact.",
  },
  {
    title: "Configuring an approval workflow",
    role: "HR Administrator",
    before: "Confirm you hold workflow-configuration permission for this scope.",
    steps:
      "Open the workflow, adjust routing and approvers, then validate before publishing.",
    verify: "A newly submitted request routes to the expected approver.",
  },
];

export function WorkflowGuidesSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Workflow &amp; task guides.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Prerequisites, permissions, and expected result — surfaced before
            you commit to a step.
          </p>
        </Reveal>

        <div className="mt-10 space-y-2.5">
          {GUIDES.map((guide, i) => (
            <Reveal key={guide.title} delay={Math.min(i * 0.05, 0.3)}>
              <details
                open={i === 0}
                className="group overflow-hidden rounded-[10px] border border-slate-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-slate-100 px-4 py-4 sm:gap-6 sm:px-5">
                  <span className="font-semibold text-ink">
                    {guide.title}{" "}
                    <span className="text-xs font-medium text-slate-400">
                      · {guide.role}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="flex-none font-semibold text-ink group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden
                    className="hidden flex-none font-semibold text-ink group-open:block"
                  >
                    −
                  </span>
                </summary>

                <div className="space-y-3.5 bg-white p-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Before you begin
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {guide.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Steps
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {guide.steps}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Done / verify
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {guide.verify}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
