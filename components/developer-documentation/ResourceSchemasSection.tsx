import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const FIELDS = [
  {
    name: "id",
    type: "string",
    format: "uuid",
    required: true,
    nullable: false,
    state: "Current",
    description: "Stable unique identifier for the employee record.",
    example: "[synthetic-uuid]",
  },
  {
    name: "given_name",
    type: "string",
    format: "—",
    required: true,
    nullable: false,
    state: "Current",
    description: "Employee given name. Approved label from schema registry.",
    example: "[Synthetic Name]",
  },
  {
    name: "family_name",
    type: "string",
    format: "—",
    required: true,
    nullable: false,
    state: "Current",
    description: "Employee family name. Approved label.",
    example: "[Synthetic Name]",
  },
  {
    name: "employment_status",
    type: "enum",
    format: "—",
    required: true,
    nullable: false,
    state: "Current",
    description: "Current employment status from approved enumeration.",
    example: "[enum from registry]",
  },
  {
    name: "start_date",
    type: "string",
    format: "date",
    required: true,
    nullable: false,
    state: "Current",
    description: "Employment start date, ISO 8601.",
    example: "[YYYY-MM-DD]",
  },
  {
    name: "department_id",
    type: "string",
    format: "uuid",
    required: false,
    nullable: true,
    state: "Current",
    description: "Reference to the department resource identifier.",
    example: "[synthetic-uuid]",
  },
  {
    name: "payroll_profile_id",
    type: "string",
    format: "uuid",
    required: false,
    nullable: true,
    state: "Current",
    description: "Access-controlled; visibility governed by permission scope.",
    example: "[synthetic-uuid]",
  },
  {
    name: "legacy_ref",
    type: "string",
    format: "—",
    required: false,
    nullable: true,
    state: "Deprecated",
    description: "Deprecated. Use department_id instead.",
    example: "—",
  },
];

const COLUMNS = [
  "Field",
  "Type",
  "Format",
  "Required",
  "Nullable",
  "State",
  "Description / example",
];

export function ResourceSchemasSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 07"
          title="Resource schemas, fields and examples."
        >
          Approved schema fields, types, required/optional semantics, and
          synthetic examples. Examples are not real employee or customer data.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-6 flex max-w-2xl items-start gap-2.5 rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3">
            <span aria-hidden className="flex-none text-base leading-6">
              ℹ️
            </span>
            <p className="text-xs leading-5 text-amber-700">
              Example values are synthetic and privacy-safe. Real employee
              identifiers, names, or compensation data must not appear in
              documentation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-250 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FIELDS.map((field) => (
                    <tr
                      key={field.name}
                      className="border-b border-slate-100 last:border-b-0 odd:bg-white even:bg-slate-50/60"
                    >
                      <td className="px-5 py-4 align-top">
                        <code
                          className={`font-mono text-xs ${
                            field.state === "Deprecated"
                              ? "text-slate-400 line-through"
                              : "text-primary"
                          }`}
                        >
                          {field.name}
                        </code>
                      </td>
                      <td className="px-5 py-4 align-top text-xs text-slate-600">
                        {field.type}
                      </td>
                      <td className="px-5 py-4 align-top font-mono text-xs text-slate-400">
                        {field.format}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            field.required
                              ? "bg-emerald-400/10 text-emerald-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {field.required ? "Required" : "Optional"}
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top font-mono text-xs text-slate-400">
                        {field.nullable ? (
                          <span className="text-blue-500">true</span>
                        ) : (
                          "false"
                        )}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            field.state === "Current"
                              ? "bg-emerald-400/10 text-emerald-600"
                              : "bg-amber-400/10 text-amber-600"
                          }`}
                        >
                          {field.state}
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top">
                        <p className="text-xs leading-5 text-slate-700">
                          {field.description}
                        </p>
                        <p className="mt-0.5 font-mono text-[10px] text-slate-400">
                          ex: {field.example}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
