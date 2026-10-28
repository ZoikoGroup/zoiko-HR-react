import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const CLASSES = [
  {
    glyph: "◷",
    title: "Schedule",
    accent: "text-primary",
    headerBg: "bg-blue-50",
    border: "border-indigo-200",
    footerBg: "bg-blue-50",
    footerBorder: "border-indigo-200",
    summary:
      "Approved scheduling context used for an authorized HR or time workflow.",
    purposes: [
      "Shift assignment context",
      "Scheduled hours reference",
      "Roster context for leave coordination",
    ],
    excludes: [
      "Actual attendance or hours worked",
      "Payroll calculation inputs",
      "Performance or reliability score",
    ],
    authority:
      "ZoikoTime — scheduling authority. Exact objects, directions and timing are source-governed.",
    footer:
      "→ Planned or assigned time is not proof of attendance, worked time or hours claimed.",
  },
  {
    glyph: "◎",
    title: "Attendance",
    accent: "text-sky-700",
    headerBg: "bg-sky-50",
    border: "border-blue-200",
    footerBg: "bg-sky-50",
    footerBorder: "border-blue-200",
    summary:
      "Approved attendance-related information authorized for HR purposes.",
    purposes: [
      "Presence/absence context for leave administration",
      "Exception and exception-reason reference",
      "Approved attendance status for workflow context",
    ],
    excludes: [
      "Productivity or reliability score",
      "Behavioral or engagement signal",
      "Health/disability inference",
      "Disciplinary evidence",
    ],
    authority:
      "ZoikoTime — attendance authority. Effective period and timezone visible when material.",
    footer:
      "→ Attendance context is not productivity, performance, reliability, discipline or misconduct truth.",
  },
  {
    glyph: "◈",
    title: "Timesheet",
    accent: "text-violet-600",
    headerBg: "bg-violet-50",
    border: "border-violet-200",
    footerBg: "bg-violet-50",
    footerBorder: "border-violet-200",
    summary:
      "Approved timesheet information authorized for configured downstream workflows.",
    purposes: [
      "Time-entry reference for approved handoff",
      "Timesheet status context for authorized consumers",
      "Effective period and review state",
    ],
    excludes: [
      "Payroll calculation result",
      "Payment instruction",
      "Tax filing status",
      "Payslip authority",
    ],
    authority:
      "ZoikoTime — timesheet authority. Approval state and payability/payment are separate.",
    footer:
      "→ Timesheet or time-entry state does not equal payability, payroll calculation, payment or filing truth.",
  },
];

export function InformationClassesSection() {
  return (
    <section
      id="information-classes"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Information classes"
          title="Three screenshot-authoritative classes — exact objects remain registry-backed"
        >
          Schedule, attendance and timesheet are the public high-level
          relationship classes. No class automatically implies any other class.
          No class implies payroll calculation, payment or behavioral scoring.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((klass, i) => (
            <Reveal key={klass.title} delay={0.06 + i * 0.06} className="h-full">
              <div
                className={`flex h-full flex-col overflow-hidden rounded-xl border ${klass.border}`}
              >
                <div className={`px-5 pb-4 pt-5 ${klass.headerBg}`}>
                  <div className="flex items-center gap-3">
                    <span aria-hidden className={`text-2xl leading-9 ${klass.accent}`}>
                      {klass.glyph}
                    </span>
                    <p
                      className={`text-xl font-extrabold leading-8 ${klass.accent}`}
                    >
                      {klass.title}
                    </p>
                  </div>
                  <p className="pt-2 text-xs leading-5 text-slate-600">
                    {klass.summary}
                  </p>
                </div>

                <div className="flex flex-1 flex-col bg-white px-5 py-4">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                    Approved purpose examples
                  </p>
                  <ul className="pt-2">
                    {klass.purposes.map((purpose) => (
                      <li key={purpose} className="flex gap-2 pt-1 first:pt-0">
                        <span aria-hidden className={`text-xs leading-4 ${klass.accent}`}>
                          ·
                        </span>
                        <span className="text-xs leading-4 text-slate-600">
                          {purpose}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-4 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                    This class does not establish
                  </p>
                  <ul className="pt-2">
                    {klass.excludes.map((exclude) => (
                      <li key={exclude} className="flex gap-2 pt-1 first:pt-0">
                        <span aria-hidden className="text-xs leading-4 text-red-600">
                          ✗
                        </span>
                        <span className="text-xs leading-4 text-red-600">
                          {exclude}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto border-t border-slate-100 pt-3 text-xs font-medium leading-4 text-gray-500">
                    {klass.authority}
                  </p>
                </div>

                <p
                  className={`border-t px-5 py-3 text-xs font-medium leading-4 ${klass.footerBg} ${klass.footerBorder} ${klass.accent}`}
                >
                  {klass.footer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
