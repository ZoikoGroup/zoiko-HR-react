"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

interface Operation {
  id: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  category: "Employees" | "Organization" | "Leave" | "Documents" | "Reporting";
  title: string;
  description: string;
  scope: string;
  idempotency: string;
  pagination: string;
  state: "Current" | "Preview" | "Deprecated";
  dotColor: string;
  exampleSnippet: string;
}

const OPERATIONS: Operation[] = [
  {
    id: "get-employee-by-id",
    method: "GET",
    path: "/employees/{id}",
    category: "Employees",
    title: "Get an employee",
    description: "Returns one employee record. Fields outside your granted scopes are withheld.",
    scope: "employees.read",
    idempotency: "Not applicable (read)",
    pagination: "Not applicable",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nGET /employees/E-20417\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "list-employees",
    method: "GET",
    path: "/employees",
    category: "Employees",
    title: "List employees",
    description: "Returns paginated list of active and inactive employee records within organization.",
    scope: "employees.read",
    idempotency: "Not applicable (read)",
    pagination: "Cursor-based (next_token)",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nGET /employees\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "patch-employee",
    method: "PATCH",
    path: "/employees/{id}",
    category: "Employees",
    title: "Update employee record",
    description: "Updates specific fields on an employee profile. Requires elevated scope.",
    scope: "employees.write",
    idempotency: "Supported via Idempotency-Key",
    pagination: "Not applicable",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nPATCH /employees/E-20417\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "search-employees",
    method: "GET",
    path: "/employees/search",
    category: "Employees",
    title: "Search employees",
    description: "Query employee directory with multi-attribute filter criteria.",
    scope: "employees.read",
    idempotency: "Not applicable (read)",
    pagination: "Cursor-based",
    state: "Deprecated",
    dotColor: "#EA580C",
    exampleSnippet: `# Illustrative · synthetic\nGET /employees/search?q=Engineering\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "get-org-units",
    method: "GET",
    path: "/org-units",
    category: "Organization",
    title: "List organization units",
    description: "Returns list of departments, branches and physical office locations.",
    scope: "org.read",
    idempotency: "Not applicable (read)",
    pagination: "Offset-based",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nGET /org-units\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "post-leave-requests",
    method: "POST",
    path: "/leave-requests",
    category: "Leave",
    title: "Create leave request",
    description: "Submit new time-off application on behalf of an authenticated employee.",
    scope: "leave.write",
    idempotency: "Required (Idempotency-Key)",
    pagination: "Not applicable",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nPOST /leave-requests\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "get-leave-requests-by-id",
    method: "GET",
    path: "/leave-requests/{id}",
    category: "Leave",
    title: "Get leave request by ID",
    description: "Retrieve status, dates and approver notes for a specific leave application.",
    scope: "leave.read",
    idempotency: "Not applicable (read)",
    pagination: "Not applicable",
    state: "Current",
    dotColor: "#10B981",
    exampleSnippet: `# Illustrative · synthetic\nGET /leave-requests/LR-9021\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "get-documents",
    method: "GET",
    path: "/documents",
    category: "Documents",
    title: "List documents metadata",
    description: "Browse metadata for policies, contracts and employee uploads.",
    scope: "documents.read",
    idempotency: "Not applicable (read)",
    pagination: "Cursor-based",
    state: "Preview",
    dotColor: "#7C3AED",
    exampleSnippet: `# Illustrative · synthetic\nGET /documents\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "post-report-exports",
    method: "POST",
    path: "/report-exports",
    category: "Reporting",
    title: "Request async report export",
    description: "Initiates governed asynchronous batch file export for authorized reporting.",
    scope: "reporting.export",
    idempotency: "Supported",
    pagination: "Not applicable",
    state: "Current",
    dotColor: "#94A3B8",
    exampleSnippet: `# Illustrative · synthetic\nPOST /report-exports\nAuthorization: Bearer <token from your secret store>`,
  },
  {
    id: "get-reports-raw",
    method: "GET",
    path: "/reports/raw",
    category: "Reporting",
    title: "Raw report data stream",
    description: "Stream governed report metrics directly for enterprise ETL pipelines.",
    scope: "reporting.read",
    idempotency: "Not applicable (read)",
    pagination: "Chunked stream",
    state: "Current",
    dotColor: "#CBD5E1",
    exampleSnippet: `# Illustrative · synthetic\nGET /reports/raw\nAuthorization: Bearer <token from your secret store>`,
  },
];

export function ReferenceExplorerSection() {
  const [selectedOp, setSelectedOp] = useState<Operation>(OPERATIONS[0]);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredOps = OPERATIONS.filter(
    (op) =>
      op.path.toLowerCase().includes(filterQuery.toLowerCase()) ||
      op.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      op.category.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const categories = ["Employees", "Organization", "Leave", "Documents", "Reporting"] as const;

  return (
    <section id="reference-explorer" className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
              Explore operations with their state and<br className="hidden sm:inline" /> scope up front.
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-[26px] text-[#64748B]">
              Search or pick an operation to see what it does, the scope it needs, its lifecycle state<br className="hidden md:inline" /> and what to use instead when it&apos;s deprecated.
            </p>
          </div>
        </Reveal>

        {/* Interactive Explorer Container */}
        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)]">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column: Search & Operation List */}
              <div className="w-full border-b border-[#EEF1F5] bg-[#FAFBFD] p-3.5 sm:p-4 lg:w-[320px] lg:shrink-0 lg:border-b-0 lg:border-r">
                {/* Search input with search icon */}
                <div className="relative flex items-center rounded-[10px] border border-[#E3E8EF] bg-white px-3 py-2">
                  <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                    placeholder="Filter operations"
                    className="w-full bg-transparent pl-2 text-sm text-[#0C1234] outline-none placeholder:text-[#757575]"
                  />
                </div>

                {/* Operations tree */}
                <div className="mt-3 max-h-[520px] space-y-3 overflow-y-auto pr-1">
                  {categories.map((cat) => {
                    const opsInCat = filteredOps.filter((op) => op.category === cat);
                    if (opsInCat.length === 0) return null;

                    return (
                      <div key={cat}>
                        <div className="px-2 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#64748B]">
                          {cat}
                        </div>
                        <div className="space-y-1">
                          {opsInCat.map((op) => {
                            const isSelected = selectedOp.id === op.id;
                            return (
                              <button
                                key={op.id}
                                onClick={() => setSelectedOp(op)}
                                className={`flex w-full items-center justify-between rounded-[10px] px-2.5 py-2 text-left transition-colors ${
                                  isSelected
                                    ? "bg-white ring-1 ring-[#305CF8] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                                    : "hover:bg-slate-200/50"
                                }`}
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <span
                                    className={`rounded-[6px] px-1.5 py-0.5 font-mono text-[11px] font-bold ${
                                      op.method === "GET"
                                        ? "bg-[#DCFCE7] text-[#166534]"
                                        : op.method === "POST"
                                        ? "bg-[#DBEAFE] text-[#1E40AF]"
                                        : "bg-[#FEF3C7] text-[#92400E]"
                                    }`}
                                  >
                                    {op.method}
                                  </span>
                                  <span className="truncate font-mono text-[12.5px] text-[#0C1234]">
                                    {op.path}
                                  </span>
                                </div>
                                <span
                                  className="h-2 w-2 shrink-0 rounded-full"
                                  style={{ backgroundColor: op.dotColor }}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Operation Detail Pane */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Top Bar with Method, Path, and Status */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`rounded-[6px] px-1.5 py-0.5 font-mono text-[11px] font-bold ${
                        selectedOp.method === "GET"
                          ? "bg-[#DCFCE7] text-[#166534]"
                          : selectedOp.method === "POST"
                          ? "bg-[#DBEAFE] text-[#1E40AF]"
                          : "bg-[#FEF3C7] text-[#92400E]"
                      }`}
                    >
                      {selectedOp.method}
                    </span>
                    <span className="font-mono text-[15px] font-bold text-[#0C1234]">
                      {selectedOp.path}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-[12px] font-semibold text-[#2147C9]">
                      <span className="h-[6px] w-[6px] rounded-full bg-[#2147C9]" />
                      {selectedOp.state}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="mt-3 text-[19px] font-bold text-[#0C1234]">
                    {selectedOp.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#475569]">
                    {selectedOp.description}
                  </p>

                  {/* Meta Specs Grid */}
                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    <div className="rounded-xl border border-[#EEF1F5] bg-white p-3">
                      <div className="text-[12px] text-[#64748B]">
                        Required scope
                      </div>
                      <div className="mt-1 font-mono text-[13px] font-bold text-[#1E3A8A]">
                        {selectedOp.scope}
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#EEF1F5] bg-white p-3">
                      <div className="text-[12px] text-[#64748B]">
                        Idempotency
                      </div>
                      <div className="mt-1 text-[13px] font-semibold text-[#0C1234]">
                        {selectedOp.idempotency}
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#EEF1F5] bg-white p-3">
                      <div className="text-[12px] text-[#64748B]">
                        Pagination
                      </div>
                      <div className="mt-1 text-[13px] font-semibold text-[#0C1234]">
                        {selectedOp.pagination}
                      </div>
                    </div>
                  </div>

                  {/* Snippet terminal box */}
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F2C] p-5">
                    {selectedOp.id === "get-employee-by-id" ? (
                      <div className="font-mono text-[13px] leading-[22px]">
                        <div className="text-[#6E7AA8]"># Illustrative · synthetic</div>
                        <div>
                          <span className="text-[#8EA6FF]">GET</span>
                          <span className="text-[#D6DEFF]"> /employees/E-20417</span>
                        </div>
                        <div>
                          <span className="text-[#F0A6FF]">Authorization:</span>
                          <span className="text-[#D6DEFF]"> Bearer </span>
                          <span className="text-[#FDA4AF]">&lt;token from your secret store&gt;</span>
                        </div>
                      </div>
                    ) : (
                      <pre className="overflow-x-auto font-mono text-[13px] leading-[22px] text-[#D6DEFF]">
                        {selectedOp.exampleSnippet}
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="mt-3.5 text-[12px] text-[#64748B]">
            Illustrative operations and paths. Developer Documentation holds the current contract, versions and availability.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
