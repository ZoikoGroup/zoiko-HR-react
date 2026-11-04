import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const LAYERS = [
  {
    layer: "Role / relationship",
    check: "Employee, manager, admin, reviewer, delegated actor or other approved relation.",
    fail: "Exclude ineligible context.",
  },
  {
    layer: "Organization scope",
    check: "Entity, team, location or assigned object scope.",
    fail: "No cross-scope retrieval.",
  },
  {
    layer: "Purpose",
    check: "The user's approved work purpose for the request.",
    fail: "Prompt or use case blocked or narrowed.",
  },
  {
    layer: "Object / action",
    check: "Specific record, workflow, document, report or task eligibility.",
    fail: "Return restricted / not available — not a guessed answer.",
  },
  {
    layer: "Sensitivity",
    check: "Field and data classification policy.",
    fail: "Sensitive fields excluded or masked before generation.",
  },
  {
    layer: "State / policy deny",
    check: "Prohibited, paused, stale, legal-hold or other governing state.",
    fail: "Deny wins over grant.",
  },
];

const HEADERS = ["Auth layer", "Required check", "Fail behavior"];

export function PermissionAwareSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(40%_50%_at_100%_0%,rgba(49,94,251,0.2)_0%,transparent_100%)] py-16 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Permission-aware by design"
          title="Authorization happens before retrieval — not after generation."
          className="max-w-[640px]"
        >
          AI Assistance never creates new access. It can only operate on context
          the user and approved use case are already authorized to use for the
          stated purpose. Restricted fields are excluded before content reaches
          the assistance layer.
        </SectionHeading>

        <Reveal amount={0.1}>
          {/* Stacked rows on phones; a real table from md up. */}
          <ul className="mt-12 flex flex-col gap-3 md:hidden">
            {LAYERS.map((row) => (
              <li key={row.layer} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{row.layer}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
                  {HEADERS[1]}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{row.check}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
                  {HEADERS[2]}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{row.fail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/5">
                  {HEADERS.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="border-b border-white/10 px-5 py-3.5 text-xs font-semibold uppercase leading-4 tracking-wide text-indigo-400"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((row, i) => (
                  <tr key={row.layer} className={i % 2 === 0 ? "bg-white/5" : ""}>
                    <th
                      scope="row"
                      className="border-b border-white/10 px-5 py-3 align-top text-xs font-semibold leading-5 text-white"
                    >
                      {row.layer}
                    </th>
                    <td className="border-b border-white/10 px-5 py-3 align-top text-xs leading-5 text-slate-400">
                      {row.check}
                    </td>
                    <td className="border-b border-white/10 px-5 py-3 align-top text-xs leading-5 text-slate-400">
                      {row.fail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-[680px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm leading-6 text-white">
            <span className="font-semibold text-indigo-400">Safe restriction message: </span>
            &quot;This information is outside your permitted scope.&quot; — without
            leaking the existence or details of restricted records.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
