"use client";

import { useMemo, useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const METHOD_STYLES: Record<string, string> = {
  GET: "bg-emerald-400/10 text-emerald-400",
  POST: "bg-blue-400/10 text-blue-400",
  PATCH: "bg-violet-400/10 text-violet-400",
  DELETE: "bg-rose-400/10 text-rose-400",
};

const METHOD_FILTERS = ["All", "GET", "POST", "PATCH", "DELETE"];

// Values the approved Operation Registry has not established are rendered as
// registry placeholders rather than guessed.
const FROM_REGISTRY = "[From Operation Registry]";

type Operation = {
  method: string;
  path: string;
  summary: string;
  group: string;
  state: string;
  auth?: string;
  operationId?: string;
};

const OPERATIONS: Operation[] = [
  {
    method: "GET",
    path: "/employees/{id}",
    summary: "Read an employee record",
    group: "Employees",
    auth: "Required",
    operationId: "e-get",
    state: "Current",
  },
  {
    method: "GET",
    path: "/employees",
    summary: "List employee records",
    group: "Employees",
    state: "Current",
  },
  {
    method: "POST",
    path: "/employees",
    summary: "Create employee record",
    group: "Employees",
    state: "Current",
  },
  {
    method: "PATCH",
    path: "/employees/{id}",
    summary: "Update employee fields",
    group: "Employees",
    state: "Current",
  },
  {
    method: "GET",
    path: "/payroll/runs",
    summary: "List payroll runs",
    group: "Payroll",
    state: "Current",
  },
  {
    method: "GET",
    path: "/payroll/runs/{id}",
    summary: "Read a payroll run",
    group: "Payroll",
    state: "Current",
  },
  {
    method: "GET",
    path: "/time/entries",
    summary: "List time entries",
    group: "Time & Attendance",
    state: "Current",
  },
  {
    method: "GET",
    path: "/documents",
    summary: "List documents",
    group: "Documents",
    state: "Preview / Beta",
  },
];

function MethodTag({ method }: { method: string }) {
  return (
    <span
      className={`inline-flex flex-none rounded-[5px] px-1.5 py-0.5 font-mono text-[10px] leading-4 ${METHOD_STYLES[method]}`}
    >
      {method}
    </span>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] bg-slate-50 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 font-mono text-sm text-ink">{value}</p>
    </div>
  );
}

export function ReferenceExplorerSection() {
  const [query, setQuery] = useState("");
  const [method, setMethod] = useState("All");
  const [activePath, setActivePath] = useState(
    `${OPERATIONS[0].method} ${OPERATIONS[0].path}`,
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return OPERATIONS.filter((operation) => {
      const matchesQuery =
        needle === "" ||
        operation.path.toLowerCase().includes(needle) ||
        operation.summary.toLowerCase().includes(needle);
      const matchesMethod = method === "All" || operation.method === method;
      return matchesQuery && matchesMethod;
    });
  }, [query, method]);

  const active =
    OPERATIONS.find((o) => `${o.method} ${o.path}` === activePath) ??
    OPERATIONS[0];

  return (
    <section
      id="reference-explorer"
      className="border-b border-slate-200 bg-white py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Section 06"
          title="Reference explorer / operations catalog."
        >
          Source-driven operation index. Method, path, version, auth, and state
          rendered only where the approved Operation Registry establishes them.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-9 flex flex-wrap items-center gap-2">
            <div className="relative">
              <label htmlFor="operation-filter" className="sr-only">
                Filter by resource or path
              </label>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400"
              >
                ⌕
              </span>
              <input
                id="operation-filter"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter by resource or path…"
                className="w-full sm:w-56 rounded-[10px] border border-slate-200 bg-gray-50 py-2 pl-8 pr-3 text-xs text-ink outline-none transition-colors focus:border-primary"
              />
            </div>
            {METHOD_FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMethod(option)}
                aria-pressed={method === option}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  method === option
                    ? "border-primary bg-primary text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.05)] lg:grid lg:grid-cols-[290px_minmax(0,1fr)]">
            <div className="border-b border-slate-200 bg-gray-50 lg:max-h-[540px] lg:overflow-y-auto lg:border-b-0 lg:border-r">
              {results.map((operation) => {
                const key = `${operation.method} ${operation.path}`;
                const isActive = key === activePath;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActivePath(key)}
                    aria-pressed={isActive}
                    className={`flex w-full items-start gap-2.5 border-b border-gray-100 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-white shadow-[inset_3px_0_0_0_var(--color-primary)]"
                        : "hover:bg-white"
                    }`}
                  >
                    <MethodTag method={operation.method} />
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate font-mono text-xs leading-4 ${
                          isActive ? "text-primary" : "text-slate-700"
                        }`}
                      >
                        {operation.path}
                      </span>
                      <span className="mt-0.5 block truncate text-xs leading-4 text-slate-400">
                        {operation.summary}
                      </span>
                    </span>
                    {operation.state === "Preview / Beta" && (
                      <span className="flex-none rounded-full border border-blue-400/30 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                        Preview / Beta
                      </span>
                    )}
                  </button>
                );
              })}

              {results.length === 0 && (
                <p className="px-4 py-8 text-center text-xs text-slate-400">
                  No operations match this filter.
                </p>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <MethodTag method={active.method} />
                <code className="font-mono text-lg font-semibold text-ink sm:text-xl">
                  {active.path}
                </code>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(active.path)}
                  className="text-xs font-semibold text-slate-500 hover:text-primary"
                >
                  Copy
                </button>
                <span
                  className={`ml-auto flex-none rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                    active.state === "Current"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                      : "border-blue-400/30 bg-blue-400/10 text-blue-400"
                  }`}
                >
                  {active.state}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MetaCell label="Authentication" value={active.auth ?? FROM_REGISTRY} />
                <MetaCell label="Group" value={active.group} />
                <MetaCell label="Version" value="[v from registry]" />
                <MetaCell
                  label="Operation ID"
                  value={active.operationId ?? FROM_REGISTRY}
                />
              </div>

              <PlaceholderImage
                src="/images/developer-documentation/reference-explorer.png"
                alt="A team celebrating a successful integration"
                label="Team celebrating an integration"
                className="mt-5 w-full rounded-[10px] bg-gray-50"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
