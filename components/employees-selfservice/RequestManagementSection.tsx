import { Container, Reveal } from "@/components/ui";
import { SectionHeading, DetailItem } from "./shared";

const CAPABILITIES = [
  {
    title: "Contextual request catalog",
    body: "Configured request types relevant to the employee's role, entity and permissions.",
  },
  {
    title: "Persistent form guidance",
    body: "Clear labels, required field indicators and inline validation before submission.",
  },
  {
    title: "Submission confirmation",
    body: "Exactly what was submitted, to whom and the expected next step.",
  },
  {
    title: "Status history",
    body: "Prior requests and outcomes visible within retention and access rules.",
  },
];

const STATUSES = [
  {
    dot: "bg-slate-300",
    label: "Draft",
    body: "Started but not submitted. Only visible to the employee.",
  },
  {
    dot: "bg-primary",
    label: "Submitted",
    body: "Received by Zoiko HR. Awaiting review or routing.",
  },
  {
    dot: "bg-sky-600",
    label: "In Review",
    body: "Being assessed by HR or the designated approver.",
  },
  {
    dot: "bg-amber-600",
    label: "Action Required",
    body: "The employee must provide further information or confirm a step.",
  },
  {
    dot: "bg-green-600",
    label: "Approved",
    body: "The request was accepted. The outcome is recorded.",
  },
  {
    dot: "bg-red-600",
    label: "Declined",
    body: "The request was not approved. The reason is provided where permitted.",
  },
  {
    dot: "bg-gray-500",
    label: "Completed",
    body: "The request is fully resolved and archived in request history.",
  },
];

export function RequestManagementSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,664px)_minmax(0,520px)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Request management"
              title="Make requests without losing them in email."
              tone="dark"
            >
              Submit configured HR requests through a structured workflow, see
              what has been received, understand the current status and know when
              another action is required.
            </SectionHeading>

            <Reveal delay={0.1} amount={0}>
              <ul className="mt-7 flex flex-col gap-3">
                {CAPABILITIES.map((item) => (
                  <DetailItem
                    key={item.title}
                    title={item.title}
                    body={item.body}
                    tone="dark"
                    marker={
                      <span
                        aria-hidden
                        className="mt-0.5 flex-none text-base leading-6 text-primary"
                      >
                        →
                      </span>
                    }
                  />
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-[400px] break-words text-xs font-medium leading-4 text-white/30">
                Request types and workflow steps depend on the organization&apos;s
                configuration. Not all request types are available universally.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} amount={0}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <p className="border-b border-white/10 bg-white/5 px-5 py-3 text-[10px] font-medium uppercase leading-4 tracking-wide text-white/40">
                Request status model
              </p>

              {STATUSES.map((status) => (
                <div
                  key={status.label}
                  className="flex items-start gap-4 border-b border-white/10 px-5 py-3.5"
                >
                  <span
                    aria-hidden
                    className={`mt-1.5 size-2 flex-none rounded-full ${status.dot}`}
                  />
                  <div>
                    <p className="text-xs font-semibold leading-4 text-white">
                      {status.label}
                    </p>
                    <p className="break-words text-xs leading-4 text-white/40">
                      {status.body}
                    </p>
                  </div>
                </div>
              ))}

              <p className="break-words bg-white/5 px-5 py-3 text-[10px] font-medium leading-4 text-white/25">
                Status labels reflect configured workflow behavior. Exact labels
                may vary by organization and request type.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
