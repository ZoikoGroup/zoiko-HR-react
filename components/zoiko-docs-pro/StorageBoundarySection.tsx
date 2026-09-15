import { Container, Reveal } from "@/components/ui";
import { SectionHeading, ClaimTable } from "./shared";

const CLAIMS = [
  {
    claim: "Storage provider or vendor",
    treatment:
      "Not named on this page. Source from current approved Repository Authority Registry.",
  },
  {
    claim: "Storage region / data residency",
    treatment:
      "Not stated unless approved and materially relevant. No inferred residency.",
  },
  {
    claim: "Storage capacity / unlimited storage",
    treatment: "Not claimed. Capacity from current product contract only.",
  },
  {
    claim: "Backup / recovery / RPO / RTO",
    treatment: "Not claimed without approved repository capability statement.",
  },
  {
    claim: "Repository availability",
    treatment:
      "Source/repository availability is separate from Zoiko HR relationship state. Shown separately.",
  },
  {
    claim: "Encryption / security claim",
    treatment:
      "Only from current Storage/Security Claims Registry. No generic 'encrypted' claim.",
  },
  {
    claim: "Malware scan / DLP / antivirus",
    treatment: "Only if approved security capability exists and is source-registered.",
  },
  {
    claim: "Relationship removal = source deletion",
    treatment:
      "Explicitly distinct. Removing HR relationship does not delete source content.",
  },
  {
    claim: "HR artifact deletion = source deletion",
    treatment:
      "Source deletion only by source authority. HR action affects HR artifact only.",
  },
  {
    claim: "Archive / retrieval semantics",
    treatment: "Source-governed. No claim made without registry definition.",
  },
];

export function StorageBoundarySection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Storage & repository boundary"
              title="Repository context is explicit — no storage provider, region or capacity is invented"
              tone="dark"
            >
              Repository authority, availability and storage details come from
              the approved Repository Authority Registry and current product
              contract — not from this public page.
            </SectionHeading>

            <Reveal delay={0.12}>
              <div className="mt-6 rounded-xl border-l-2 border-primary bg-white/5 px-5 py-4">
                <p className="text-sm font-semibold text-primary">Optionality</p>
                <p className="mt-2 text-xs leading-5 text-white/60">
                  Zoiko Docs Pro and Zoiko One are not implied prerequisites for
                  Zoiko HR. Controlled Interoperability allows heterogeneous
                  environments where supported.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <ClaimTable
              columns={["Claim or question", "Required treatment"]}
              rows={CLAIMS}
              tone="dark"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
