import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { ProhibitedIcon } from "./icons";

const EVIDENCE_FIELDS = [
  { field: "Data flow / context", value: "[From approved evidence record]" },
  { field: "State", value: "In transit / at rest / other — scope dependent" },
  { field: "System boundary", value: "[From approved evidence record]" },
  { field: "Algorithm / protocol", value: "Published only if approved for exact scope" },
  { field: "Key owner", value: "Evidence-gated; not established publicly" },
  {
    field: "Rotation / management scope",
    value: "Evidence-gated; not established publicly",
  },
  { field: "Exclusions", value: "[From approved record]" },
  { field: "Evidence source", value: "[From current approved record]" },
  { field: "Reviewed date", value: "[From record]" },
];

export function EncryptionSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 04"
          title="Encryption and key-management evidence boundary."
        >
          Encryption and key claims require current approved evidence for exact
          scope. No algorithm, HSM/KMS, customer-managed-key or
          &quot;end-to-end&quot; assertion without source.
        </SectionHeading>

        <div className="mt-9 grid gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">
          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/security-privacy/encryption.png"
              alt="A security lead presenting evidence to reviewers"
              label="Presenting evidence to reviewers"
              className="aspect-[300/426] w-full rounded-2xl border border-slate-200 bg-slate-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.14} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-150 border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100">
                      <th
                        scope="col"
                        className="w-2/5 px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                      >
                        Evidence field
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                      >
                        Current public value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {EVIDENCE_FIELDS.map((row, i) => (
                      <tr
                        key={row.field}
                        className={`border-b border-slate-100 last:border-b-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 text-left text-xs font-semibold text-slate-700"
                        >
                          {row.field}
                        </th>
                        <td className="px-4 py-3 font-mono text-xs text-slate-500">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-4 flex max-w-xl items-start gap-2 rounded-[10px] border border-rose-400/20 bg-rose-400/5 px-3.5 py-2.5">
            <ProhibitedIcon className="mt-0.5 size-4 flex-none text-rose-400" />
            <p className="text-xs leading-4 text-rose-400">
              Prohibited without source: &quot;end-to-end encrypted,&quot;
              &quot;military-grade,&quot; specific algorithm, HSM/KMS claim,
              customer-managed keys, or universal encryption assertion.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
