"use client";

import { Container, Reveal } from "@/components/ui";

interface SchemaField {
  field: string;
  type: string;
  description: string;
  scope: string;
  sensitivity: "Standard" | "Personal" | "Highly sensitive";
}

const EMPLOYEE_FIELDS: SchemaField[] = [
  {
    field: "id",
    type: "string",
    description: "Stable identifier. Required.",
    scope: "employees.read",
    sensitivity: "Standard",
  },
  {
    field: "display_name",
    type: "string",
    description: "Name shown in the product.",
    scope: "employees.read",
    sensitivity: "Personal",
  },
  {
    field: "organization_unit",
    type: "reference",
    description: "Department the person belongs to.",
    scope: "org.read",
    sensitivity: "Standard",
  },
  {
    field: "employment_status",
    type: "enum",
    description: "Current status, effective-dated.",
    scope: "employees.read",
    sensitivity: "Personal",
  },
  {
    field: "effective_date",
    type: "date",
    description: "When this version of the record applies.",
    scope: "employees.read",
    sensitivity: "Standard",
  },
  {
    field: "compensation",
    type: "object",
    description: "Withheld unless the scope is granted.",
    scope: "compensation.read",
    sensitivity: "Highly sensitive",
  },
];

const SENSITIVITY_STYLES: Record<SchemaField["sensitivity"], string> = {
  Standard: "bg-[#F1F5F9] text-[#475569]",
  Personal: "bg-[#EAF0FF] text-[#2147C9]",
  "Highly sensitive": "bg-[#FEE2E2] text-[#991B1B]",
};

export function ResourceSchemasSection() {
  return (
    <section id="resource-schemas" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
              Schemas that label sensitivity on every
              <br className="hidden sm:inline" /> field.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#64748B] sm:text-[17px] sm:leading-[27.2px]">
              Each field lists its type, whether it&apos;s required, the scope that unlocks it and how
              <br className="hidden sm:inline" /> sensitive it is, so you can request only what you need.
            </p>
          </div>
        </Reveal>

        {/* Schema Table Card */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)]">
            {/* Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EEF1F5] px-6 py-4">
              <span className="font-mono text-base font-bold text-[#0C1234]">
                Employee
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-xs font-semibold text-[#2147C9]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#2147C9]" />
                  Current
                </span>
                <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-semibold text-[#64748B]">
                  Illustrative schema
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead>
                  <tr className="border-b border-[#EEF1F5] bg-[#FAFBFD] text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#64748B]">
                    <th className="px-6 py-3.5 font-semibold">Field</th>
                    <th className="px-6 py-3.5 font-semibold">Type</th>
                    <th className="px-6 py-3.5 font-semibold">Description</th>
                    <th className="px-6 py-3.5 font-semibold">Scope</th>
                    <th className="px-6 py-3.5 font-semibold">Sensitivity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF1F5]">
                  {EMPLOYEE_FIELDS.map((item) => (
                    <tr key={item.field} className="transition-colors hover:bg-[#FAFBFD]/70">
                      <td className="px-6 py-4 font-mono text-[13px] font-bold text-[#0C1234]">
                        {item.field}
                      </td>
                      <td className="px-6 py-4 font-mono text-[12.5px] text-[#7C3AED]">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#0C1234]">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#0C1234]">
                        {item.scope}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            SENSITIVITY_STYLES[item.sensitivity]
                          }`}
                        >
                          {item.sensitivity}
                        </span>
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
