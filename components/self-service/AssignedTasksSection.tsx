import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const COLUMNS = ["Task", "Source module", "Due", "Status", "Next action"];

const TASKS = [
  {
    task: "Acknowledge Code of Conduct v3",
    source: "Documents & Policies",
    due: "Sep 10",
    status: "Assigned",
    statusClass: "text-yellow-600",
    action: "Review & acknowledge",
  },
  {
    task: "Approve L. Chen's leave request",
    source: "Leave & Attendance",
    due: "Today",
    status: "Attention",
    statusClass: "text-yellow-600",
    action: "Decide",
  },
  {
    task: "Upload work authorization",
    source: "Employee Records",
    due: "Sep 15",
    status: "Assigned",
    statusClass: "text-blue-900",
    action: "Upload document",
  },
  {
    task: "Complete onboarding survey",
    source: "Onboarding & Lifecycle",
    due: "Overdue",
    status: "Attention",
    statusClass: "text-orange-700",
    action: "Complete task",
  },
];

export function AssignedTasksSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Assigned work, with an explicit source, due date and completion rule."
          className="max-w-[700px]"
        >
          Finishing a task never implies the downstream business process is
          complete unless the owning module confirms it.
        </SectionHeading>

        {/* Below lg each row becomes a labelled card so no column is dropped. */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 lg:hidden">
            {TASKS.map((row) => (
              <div
                key={row.task}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-sky-950">
                    {row.task}
                  </p>
                  <span className={`text-xs font-semibold ${row.statusClass}`}>
                    {row.status}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Source module
                    </dt>
                    <dd className="mt-0.5 text-xs text-slate-500">
                      {row.source}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Due
                    </dt>
                    <dd className="mt-0.5 text-xs text-slate-500">{row.due}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs font-semibold text-primary">
                  {row.action}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden overflow-hidden rounded-xl border border-slate-200 lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {COLUMNS.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TASKS.map((row) => (
                  <tr key={row.task} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm font-semibold text-sky-950">
                      {row.task}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {row.source}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {row.due}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-xs font-semibold ${row.statusClass}`}
                    >
                      {row.status}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold text-primary">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
