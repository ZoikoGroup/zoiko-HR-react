import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Component",
  "State",
  "Impact",
  "Affected scope",
  "Last changed",
];

export function ComponentStatusSection() {
  return (
    <section id="component-status" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Service &amp; component status.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            Approved components list current state, impact, affected scope, and
            last-changed time. An unknown state is shown as unknown — never
            defaulted to operational.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-7 overflow-hidden rounded-xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-left md:min-w-180">
                {/* The column head only makes sense once rows exist, so below md
                    it is hidden rather than forcing a horizontal scroll to read
                    the empty state. */}
                <thead className="hidden md:table-header-group">
                  <tr className="border-b border-slate-200 bg-slate-100">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* No public Service Component Registry is approved yet, so the
                      board renders an explicit empty state instead of rows. */}
                  <tr>
                    <td colSpan={COLUMNS.length} className="px-5 py-9 text-center">
                      <p className="text-base font-bold text-ink">
                        Component registry not yet established
                      </p>
                      <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                        A public Service Component Registry has not been
                        approved. This board will list each approved component
                        with state, impact, affected public scope, and
                        last-changed time once one exists. No component name or
                        state is invented in the meantime.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
