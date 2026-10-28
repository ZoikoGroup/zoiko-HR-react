import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, RefTable } from "./shared";

const ROWS = [
  {
    attribute: "Authentication identifier",
    allowed: "May support approved matching/routing",
    prohibited: "Does not prove employment status",
    prohibitedClass: "text-green-700",
    risk: "low",
    riskClass: "bg-green-700/10 text-green-700",
  },
  {
    attribute: "Display / profile claim",
    allowed: "Identity/UI convenience unless separately governed",
    prohibited: "Does not overwrite legal/HR name",
    prohibitedClass: "text-amber-700",
    risk: "medium",
    riskClass: "bg-amber-700/10 text-amber-700",
  },
  {
    attribute: "Group / role-like claim",
    allowed: "Mapping input if policy supports",
    prohibited: "Does not auto-become HR role",
    prohibitedClass: "text-red-600",
    risk: "high",
    riskClass: "bg-red-600/10 text-red-600",
  },
  {
    attribute: "Organization claim",
    allowed: "Reference only unless Org Management permits",
    prohibited: "Cannot silently change entity/location/team",
    prohibitedClass: "text-red-600",
    risk: "high",
    riskClass: "bg-red-600/10 text-red-600",
  },
  {
    attribute: "Manager claim",
    allowed: "Reference only",
    prohibited: "Cannot create manager authority",
    prohibitedClass: "text-red-600",
    risk: "high",
    riskClass: "bg-red-600/10 text-red-600",
  },
  {
    attribute: "Employment / work status",
    allowed: "Not authoritative by default",
    prohibited: "Employee Records owns truth",
    prohibitedClass: "text-violet-600",
    risk: "critical",
    riskClass: "bg-violet-600/10 text-violet-600",
  },
  {
    attribute: "Security / assurance signal",
    allowed: "May constrain auth/session if supported",
    prohibited: "Does not grant broader business access",
    prohibitedClass: "text-amber-700",
    risk: "medium",
    riskClass: "bg-amber-700/10 text-amber-700",
  },
];

export function IdentityMappingSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Identity Mapping"
          title="Deterministic approved identifiers only — no fuzzy name/email/domain auto-link"
        >
          External attributes are identity signals by default — not HR facts.
          Mapping creates an identity link; it does not create employment,
          manager or payroll authority.
        </SectionHeading>

        {/*
          The table needs its full four columns before it can share the row, so
          the split waits until xl — between lg and xl the table runs full width
          with the photo beneath it.
        */}
        <div className="mt-9 grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <Reveal amount={0}>
            <RefTable
              columns={[
                "Attribute / claim",
                "Allowed identity use",
                "Prohibited HR use",
                "Risk",
              ]}
              gridClass="lg:grid-cols-[minmax(0,160px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,90px)]"
              rows={ROWS.map((row) => [
                row.attribute,
                row.allowed,
                <span
                  key={row.attribute}
                  className={`font-medium ${row.prohibitedClass}`}
                >
                  <span aria-hidden>✗</span> {row.prohibited}
                </span>,
                <span
                  key={row.risk}
                  className={`inline-flex rounded-sm px-2 py-0.5 font-mono text-xs leading-4 ${row.riskClass}`}
                >
                  {row.risk}
                </span>,
              ])}
              footnote="Default: identity signal, not HR fact. Explicit separate approval required to elevate any attribute to HR-truth status."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/zoiko-id/identity-mapping.webp"
              alt="Colleagues meeting at a round table beside a window"
              label="Identity mapping"
              className="aspect-video w-full rounded-xl bg-slate-100 xl:aspect-[503/573]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
