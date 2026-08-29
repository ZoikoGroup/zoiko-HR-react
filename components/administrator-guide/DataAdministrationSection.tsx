import { Container, Reveal } from "@/components/ui";

const TOPICS = [
  {
    title: "Importing employee records",
    sensitivity: "High sensitivity",
    validation:
      "Schema and record validation occur only where the product source establishes preview capability.",
    permissions: "Requires approved data-administration permission and scope.",
    recovery:
      "Correction/rollback behavior is shown only when supported — never assumed.",
  },
  {
    title: "Exporting organization data",
    sensitivity: "High sensitivity",
    validation:
      "Export scope and format are shown only where the product source establishes them.",
    permissions: "Requires approved export permission for the requested scope.",
    recovery:
      "A completed export cannot be recalled; handling follows your own data policy.",
  },
  {
    title: "Correcting a record",
    sensitivity: "Moderate sensitivity",
    validation:
      "Effective-dated correction behavior is shown only where the source supports it.",
    permissions: "Requires permission over the record and its effective period.",
    recovery:
      "Prior values are visible only where the product source establishes history.",
  },
  {
    title: "Archiving or deleting records",
    sensitivity: "High sensitivity",
    validation:
      "Archive and delete are distinct actions and are never presented interchangeably.",
    permissions: "Requires approved retention or deletion permission.",
    recovery:
      "Reversal is stated only where source-approved — never assumed or promised.",
  },
];

export function DataAdministrationSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Data administration, imports, exports &amp; records.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Examples use synthetic placeholders only — never real employee,
            health, payroll, or identity data.
          </p>
        </Reveal>

        <div className="mt-10 space-y-2.5">
          {TOPICS.map((topic, i) => (
            <Reveal key={topic.title} delay={Math.min(i * 0.05, 0.3)}>
              <details
                open={i === 0}
                className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-5">
                  <span className="font-semibold text-ink">
                    {topic.title}{" "}
                    <span className="text-xs font-medium text-slate-400">
                      · {topic.sensitivity}
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

                <div className="space-y-3.5 px-4 pb-5 sm:px-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Validation
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {topic.validation}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Permissions
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {topic.permissions}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-teal-600">
                      Recovery
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {topic.recovery}
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
