"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SourceDependencyNotice, StatePill } from "./shared";

/**
 * Synthetic rows only. Every value is a placeholder label — real provider
 * records are a release-blocking source dependency (see SourceDependencyNotice).
 */
const RECORDS = [
  {
    id: "SP-001",
    legalEntity: "[Legal Entity A — Source Required]",
    displayName: "[Display Name]",
    classification: "[Classification — Legal/Privacy Required]",
    purpose: "[Approved processing purpose — source required]",
    scope: "[Product/service scope — source required]",
    location: "[Approved location — source required]",
    state: "Under Review",
    reviewed: "Pending",
  },
  {
    id: "SP-002",
    legalEntity: "[Legal Entity B — Source Required]",
    displayName: "[Display Name]",
    classification: "[Classification — Legal/Privacy Required]",
    purpose: "[Approved processing purpose — source required]",
    scope: "[Product/service scope — source required]",
    location: "[Approved location — source required]",
    state: "Under Review",
    reviewed: "Pending",
  },
  {
    id: "SP-003",
    legalEntity: "[Legal Entity C — Source Required]",
    displayName: "[Display Name]",
    classification: "[Classification — Legal/Privacy Required]",
    purpose: "[Approved processing purpose — source required]",
    scope: "[Product/service scope — source required]",
    location: "[Approved location — source required]",
    state: "Under Review",
    reviewed: "Pending",
  },
];

const COLUMNS = [
  "Record ID",
  "Legal Entity (Primary)",
  "Classification",
  "Processing Purpose",
  "Zoiko HR Scope",
  "Location",
  "State",
  "Reviewed",
];

const selectClass =
  "h-9 rounded-lg border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:border-primary";

function uniqueValues(key: "classification" | "location" | "state") {
  return Array.from(new Set(RECORDS.map((record) => record[key])));
}

export function RegistrySection() {
  const [query, setQuery] = useState("");
  const [classification, setClassification] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return RECORDS.filter((record) => {
      const matchesQuery =
        !needle ||
        record.legalEntity.toLowerCase().includes(needle) ||
        record.displayName.toLowerCase().includes(needle);
      return (
        matchesQuery &&
        (!classification || record.classification === classification) &&
        (!location || record.location === location) &&
        (!state || record.state === state)
      );
    });
  }, [query, classification, location, state]);

  return (
    <section id="current-registry" className="scroll-mt-24 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="03 / Current Subprocessors Registry"
          title="Source-controlled legal registry."
        >
          Each record identifies only approved facts from the governed registry.
          Legal entity is primary. Relationship classification requires Legal
          and Privacy approval. Processing location does not imply transfer
          mechanism.
        </SectionHeading>

        <SourceDependencyNotice className="mt-10" />

        <Reveal delay={0.06}>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <label className="min-w-56 flex-1">
              <span className="sr-only">Search legal or display name</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search legal or display name…"
                className="h-10 w-full rounded-lg border border-slate-300 px-3.5 text-xs text-slate-900 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </label>

            <select
              aria-label="Filter by classification"
              value={classification}
              onChange={(event) => setClassification(event.target.value)}
              className={selectClass}
            >
              <option value="">All classifications</option>
              {uniqueValues("classification").map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter by location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className={selectClass}
            >
              <option value="">All locations</option>
              {uniqueValues("location").map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter by state"
              value={state}
              onChange={(event) => setState(event.target.value)}
              className={selectClass}
            >
              <option value="">All states</option>
              {uniqueValues("state").map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        {/* Below lg the eight governed columns become a stacked record card —
            every field keeps its label, so nothing is dropped on small screens. */}
        <Reveal delay={0.12}>
          <div className="mt-4 flex flex-col gap-3 lg:hidden">
            {rows.map((record) => (
              <div
                key={record.id}
                className="rounded-xl border border-slate-200 px-5 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-600">
                    {record.id}
                  </span>
                  <StatePill state={record.state} />
                </div>

                <p className="mt-3 text-xs font-semibold leading-4 text-slate-900">
                  {record.legalEntity}
                </p>
                <p className="mt-1 text-xs leading-4 text-slate-400">
                  {record.displayName}
                </p>

                <dl className="mt-4 space-y-3">
                  {[
                    { label: "Classification", value: record.classification },
                    { label: "Processing Purpose", value: record.purpose },
                    { label: "Zoiko HR Scope", value: record.scope },
                    { label: "Location", value: record.location },
                    { label: "Reviewed", value: record.reviewed },
                  ].map((field) => (
                    <div key={field.label}>
                      <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                        {field.label}
                      </dt>
                      <dd className="mt-0.5 text-xs leading-4 text-slate-500">
                        {field.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            {rows.length === 0 && (
              <p className="rounded-xl border border-slate-200 px-5 py-8 text-center text-xs text-slate-500">
                No records match the current filters. An empty result here is a
                filter state — it is not a statement that the approved registry
                is empty.
              </p>
            )}
          </div>

          <div className="mt-4 hidden overflow-x-auto rounded-xl border border-slate-200 lg:block">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  {COLUMNS.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 text-[11px] font-medium uppercase tracking-wide text-slate-600"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <td className="px-4 py-5 align-middle font-mono text-xs text-slate-600">
                      {record.id}
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <p className="text-xs font-semibold leading-4 text-slate-900">
                        {record.legalEntity}
                      </p>
                      <p className="mt-2 text-xs leading-4 text-slate-400">
                        {record.displayName}
                      </p>
                    </td>
                    <td className="px-4 py-5 align-middle text-xs leading-4 text-slate-500">
                      {record.classification}
                    </td>
                    <td className="px-4 py-5 align-middle text-xs leading-4 text-slate-500">
                      {record.purpose}
                    </td>
                    <td className="px-4 py-5 align-middle text-xs leading-4 text-slate-500">
                      {record.scope}
                    </td>
                    <td className="px-4 py-5 align-middle text-xs leading-4 text-slate-500">
                      {record.location}
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <StatePill state={record.state} />
                    </td>
                    <td className="px-4 py-5 align-middle text-xs leading-4 text-slate-400">
                      {record.reviewed}
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={COLUMNS.length}
                      className="px-4 py-8 text-center text-xs text-slate-500"
                    >
                      No records match the current filters. An empty result here
                      is a filter state — it is not a statement that the approved
                      registry is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-3 text-xs leading-4 text-slate-400">
            Rows above use synthetic placeholder labels only. Real provider
            records require Legal/Privacy-approved source before publication.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
