import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NoticeTableOfContents } from "./NoticeTableOfContents";
import { LegalContactForm } from "./LegalContactForm";
import {
  ArrowLink,
  CurrentPill,
  InfoNote,
  CautionNote,
  NoticeDivider,
  NoticeHeading,
  NoticeParagraph,
  ReferenceTable,
  SourceToken,
  SubHeading,
} from "./shared";

const POLICY_CARDS = [
  {
    title: "Terms of Service",
    body: "Terms governing use of the Zoiko HR service and public website where applicable.",
    cta: "Review Terms of Service",
    href: "/terms-of-service",
  },
  {
    title: "Acceptable Use Policy",
    body: "Rules for prohibited and restricted use of the platform and services.",
    cta: "Review Acceptable Use Policy",
    href: "/acceptable-use-policy",
  },
  {
    title: "Privacy Notice",
    body: "Public-facing personal-data practices where Zoiko HR determines the purposes of processing.",
    cta: "Review Privacy Notice",
    href: "/privacy-notice",
  },
  {
    title: "Cookie Notice",
    body: "Cookie and online-technology disclosure and preference controls.",
    cta: "Review Cookie Notice",
    href: "/cookie-notice",
  },
];

const PRODUCT_NOTICES: { type: string; notice: string }[] = [
  {
    type: "General product descriptions",
    notice:
      "Capabilities and availability may depend on plan, configuration, region, contract, implementation, or release state.",
  },
  {
    type: "Screenshots and mockups",
    notice:
      "Illustrative UI may not reflect a committed interface or exact feature set for every plan or region.",
  },
  {
    type: "Beta / preview / early access",
    notice:
      "Explicitly labeled at the originating page and governed by applicable preview terms. This page routes to those terms.",
  },
  {
    type: "Future-looking content",
    notice:
      "Planned concepts are separated from present capability. Roadmap content does not constitute a commitment unless expressly approved.",
  },
  {
    type: "Third-party integrations",
    notice:
      "Availability depends on the approved integration relationship and configuration. Appearance does not imply endorsement or uninterrupted availability.",
  },
  {
    type: "Service levels and uptime",
    notice:
      "Route to the executed agreement or status authority where applicable. Not stated on this page.",
  },
];

const INQUIRY_ROUTES: { type: string; route: string; href?: string }[] = [
  { type: "General legal inquiry / formal business legal inquiry", route: "Legal contact form below" },
  { type: "Privacy rights", route: "Privacy Notice — submit a privacy request", href: "/privacy-notice" },
  {
    type: "Security vulnerability or security issue",
    route: "Security Reporting — do not send vulnerability details through this page",
    href: "/security-reporting",
  },
  { type: "Copyright or trademark permission / complaint", route: "Legal contact form below (select IP inquiry type)" },
  {
    type: "Customer contract interpretation",
    route: "Authenticated account or legal/procurement route — not the public page",
  },
  { type: "Press and media", route: "Media Inquiries", href: "/media-inquiries" },
  { type: "Accessibility feedback", route: "Accessibility route or Contact Support", href: "/accessibility" },
  { type: "Product support", route: "Contact Support", href: "/contact-support" },
];

const RELATED_RESOURCES = [
  {
    title: "Privacy Notice",
    body: "Public privacy practices and rights requests.",
    href: "/privacy-notice",
  },
  {
    title: "Terms of Service",
    body: "Terms governing use of the Zoiko HR service and website.",
    href: "/terms-of-service",
  },
  {
    title: "Data Processing Addendum",
    body: "Customer data-processing contract terms.",
    href: "/data-processing-addendum",
  },
  {
    title: "Security & Privacy",
    body: "Security program overview and documentation.",
    href: "/security-privacy",
  },
  {
    title: "Security Reporting",
    body: "Report vulnerabilities or security issues.",
    href: "/security-reporting",
  },
  {
    title: "AI Governance",
    body: "Scope, oversight, and data-use boundaries for AI features.",
    href: "/ai-governance",
  },
];

export function NoticeBodySection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mx-auto grid max-w-[1140px] gap-10 lg:grid-cols-[240px_minmax(0,860px)] lg:gap-16">
          <aside className="lg:h-full">
            <NoticeTableOfContents />
          </aside>

          <div className="min-w-0">
            {/* 1 — Operator and company information */}
            <Reveal>
              <NoticeHeading id="operator-company">
                Operator and company information
              </NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The Zoiko HR website and platform are owned and operated by{" "}
                <SourceToken>LEGAL ENTITY — CORPORATE REGISTRY REQUIRED</SourceToken>
                . Zoiko Tech Inc. is publicly described as a Zoiko Group company;
                exact corporate relationship and display wording require Legal
                confirmation before publication.
              </p>
              <ReferenceTable
                rows={[
                  { label: "Product / site name", value: "Zoiko HR" },
                  {
                    label: "Operator legal name",
                    value: (
                      <SourceToken>
                        LEGAL ENTITY / CORPORATE REGISTRY REQUIRED
                      </SourceToken>
                    ),
                  },
                  {
                    label: "Corporate relationship",
                    value: "Zoiko Group company (confirm exact wording with Legal)",
                  },
                  {
                    label: "Headquarters",
                    value: (
                      <SourceToken>
                        APPROVED HEADQUARTERS ADDRESS — CORPORATE LOCATION RECORD
                        REQUIRED
                      </SourceToken>
                    ),
                  },
                  {
                    label: "European office",
                    value: (
                      <SourceToken>
                        APPROVED EUROPEAN OFFICE ADDRESS — DO NOT LABEL AS
                        REGISTERED OFFICE WITHOUT LEGAL CONFIRMATION
                      </SourceToken>
                    ),
                  },
                  {
                    label: "Company / registration number",
                    value: (
                      <SourceToken>
                        STATUTORY SOURCE REQUIRED — DO NOT INVENT
                      </SourceToken>
                    ),
                  },
                  {
                    label: "Legal contact route",
                    value: (
                      <ArrowLink href="#legal-communications">
                        Use the specialist legal contact route below
                      </ArrowLink>
                    ),
                  },
                ]}
              />
              <InfoNote>
                <span className="font-semibold">Note:</span> Office locations do
                not imply registered office, service-of-process address, or
                contracting entity unless explicitly confirmed by the approved
                Legal Entity Registry. Do not interpret company addresses as
                legal conclusions about jurisdiction, tax establishment, or
                governing law.
              </InfoNote>
            </Reveal>

            <NoticeDivider />

            {/* 2 — Terms and policies */}
            <Reveal amount={0.1}>
              <NoticeHeading id="terms-policies">Terms and policies</NoticeHeading>
              <NoticeParagraph>
                The following documents govern use of Zoiko HR services,
                data-processing relationships, and public website interactions.
                Binding obligations, definitions, liability terms, and dispute
                clauses remain solely in each authoritative document — this page
                routes to them, it does not substitute for them.
              </NoticeParagraph>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {POLICY_CARDS.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="flex h-full flex-col gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-primary"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-sm font-semibold leading-5 text-ink">
                        {card.title}
                      </span>
                      <CurrentPill />
                    </span>
                    <span className="text-xs leading-5 text-slate-500">
                      {card.body}
                    </span>
                    <span className="mt-auto pt-2 text-xs font-semibold leading-4 text-primary">
                      {card.cta} →
                    </span>
                  </Link>
                ))}
              </div>

              <PlaceholderImage
                src="/images/legal-notices/terms-and-policies.png"
                alt="A presenter walking a team through policy documents"
                label="Walking a team through the policies"
                loading="lazy"
                className="mt-6 aspect-[860/273] w-full rounded-xl border border-slate-200"
              />

              <InfoNote>
                These documents govern different relationships and subjects. Your
                executed order form, subscription agreement, or data processing
                agreement may contain customer-specific terms that take priority
                where applicable. Contract-specific questions require a
                controlled account or legal route.
              </InfoNote>
            </Reveal>

            <NoticeDivider />

            {/* 3 — Copyright and website content */}
            <Reveal>
              <NoticeHeading id="copyright">
                Copyright and website content
              </NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                ©{" "}
                <SourceToken>
                  YEAR — APPROVED RIGHTS HOLDER — LEGAL-APPROVED COPYRIGHT FORMAT
                  REQUIRED
                </SourceToken>
                . All rights reserved, except where expressly permitted below or
                in the applicable terms.
              </p>
              <NoticeParagraph>
                Public-site text, visual design, product documentation, media,
                and other materials on the Zoiko HR website may be protected by
                copyright owned or licensed by the operator entity or its
                affiliates. The scope of this notice covers materials for which
                Zoiko HR holds rights; it does not assert ownership of
                third-party or open-source content.
              </NoticeParagraph>

              <SubHeading>Permitted use</SubHeading>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ordinary personal or business viewing, linking to canonical
                public pages, and quotation within fair-use or equivalent limits
                are generally permitted. Other reproduction, adaptation, public
                display, or distribution of Zoiko HR materials requires prior
                written permission from an authorized route.
              </p>

              <SubHeading>Product screenshots and UI</SubHeading>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Product screenshots, interface examples, workflow diagrams, and
                sample data may contain Zoiko or third-party intellectual
                property and may reflect a specific product version,
                configuration, or region. Illustrative UI is not a commitment to
                a specific interface, feature, or data format. Refer to the
                approved brand and media resources for guidance on use.
              </p>
              <NoticeParagraph>
                Open-source and third-party materials included in or referenced
                by Zoiko HR products and documentation carry their own
                applicable licenses. Required notices and license terms are
                preserved separately.
              </NoticeParagraph>

              <div className="mt-4">
                <ArrowLink href="#legal-communications">
                  Request permission to use Zoiko HR materials
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 4 — Trademarks and brand references */}
            <Reveal>
              <NoticeHeading id="trademarks">
                Trademarks and brand references
              </NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                &quot;Zoiko HR,&quot; &quot;Zoiko Group,&quot; and associated
                logos and marks are{" "}
                <SourceToken>TRADEMARK STATUS — IP REGISTRY REQUIRED</SourceToken>
                . Mark usage, required symbols (® or ™), and attribution wording
                are determined by the approved Brand and Intellectual Property
                Registry and must be confirmed by Legal before publication.
              </p>
              <NoticeParagraph>
                Third-party company names, product names, and marks that appear
                in integration, comparison, or reference content on the Zoiko HR
                website are the property of their respective owners. Appearance
                on this site does not imply endorsement, partnership,
                certification, or ownership by Zoiko HR unless separately
                established.
              </NoticeParagraph>
              <NoticeParagraph>
                Where third-party trademark attribution is legally or
                contractually required, exact wording is sourced from the IP
                Registry. Requests about specific mark usage or attribution
                should be directed to the approved legal or IP route.
              </NoticeParagraph>

              <div className="mt-5">
                <ArrowLink href="#legal-communications">
                  IP or brand permissions inquiry
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 5 — Information and professional-advice boundary */}
            <Reveal>
              <NoticeHeading id="advice-boundary">
                Information and professional-advice boundary
              </NoticeHeading>
              <CautionNote>
                <span className="font-semibold">No professional advice.</span>{" "}
                Zoiko HR and the information on this website are provided for
                product and general informational purposes only. Zoiko HR does
                not provide legal, tax, payroll, employment, immigration,
                accounting, medical, compliance, or other regulated professional
                advice. You remain responsible for obtaining qualified
                professional advice and making accountable decisions where
                required by your circumstances, jurisdiction, or applicable law.
              </CautionNote>
              <NoticeParagraph>
                References to laws, regulations, standards, or compliance
                frameworks on the Zoiko HR website are informational and
                identify the source and date where material. They do not
                constitute monitoring of every applicable legal development,
                jurisdiction-specific legal conclusions, or guidance that
                substitutes for qualified legal or compliance advice.
              </NoticeParagraph>
              <NoticeParagraph>
                HR workflow examples, glossary definitions, and guides are
                educational. They do not override statutory, contractual,
                collective-bargaining, or local definitions, and should not be
                relied upon as a substitute for professional employment, legal,
                or HR advice appropriate to your situation.
              </NoticeParagraph>
              <NoticeParagraph>
                Zoiko HR does not guarantee that its product or this website
                will satisfy every legal, regulatory, policy, collective
                agreement, or contractual obligation applicable to your
                organization. This statement does not disclaim or modify express
                product commitments made in an executed agreement.
              </NoticeParagraph>
            </Reveal>

            <NoticeDivider />

            {/* 6 — Product and service information */}
            <Reveal amount={0.1}>
              <NoticeHeading id="product-service">
                Product and service information
              </NoticeHeading>
              <NoticeParagraph>
                Zoiko HR publishes product descriptions, capability
                documentation, screenshots, and workflow examples to support
                product evaluation and ongoing use. The following applies to how
                that information should be interpreted.
              </NoticeParagraph>
              <ReferenceTable
                columns={["Content type", "Notice"]}
                rows={PRODUCT_NOTICES.map((row) => ({
                  label: row.type,
                  value: row.notice,
                }))}
              />
            </Reveal>

            <NoticeDivider />

            {/* 7 — Third-party sites, services, and references */}
            <Reveal>
              <NoticeHeading id="third-party">
                Third-party sites, services, and references
              </NoticeHeading>
              <NoticeParagraph>
                The Zoiko HR website may link to or reference external websites,
                integration partners, regulatory authorities, and third-party
                content. External destinations are operated under their own
                terms, privacy practices, and content policies. Zoiko HR does
                not endorse, vouch for, or accept responsibility for the
                content, accuracy, or practices of third-party destinations.
              </NoticeParagraph>
              <NoticeParagraph>
                Integration providers and marketplace listings are identified
                using approved relationship labels. Availability, configuration,
                and terms of any integration are governed by the applicable
                provider relationship and Zoiko HR&apos;s published integration
                documentation; appearance in Zoiko HR materials does not imply an
                uninterrupted, universal, or endorsed relationship.
              </NoticeParagraph>
              <NoticeParagraph>
                Third-party company names, price coverage, and external
                references are clearly attributed to their sources. Required
                trademark attribution for third-party marks is sourced from the
                IP Registry. References to laws or standards cite the
                authoritative sources and are not presented as official legal
                text.
              </NoticeParagraph>
            </Reveal>

            <NoticeDivider />

            {/* 8 — Legal and rights communications */}
            <Reveal amount={0.1}>
              <NoticeHeading id="legal-communications">
                Legal and rights communications
              </NoticeHeading>
              <NoticeParagraph>
                Use the specialist routes below to ensure your inquiry reaches
                the correct owner without unnecessary exposure of sensitive
                information. Do not use a general sales or marketing form for
                legal, privacy, security, or IP matters.
              </NoticeParagraph>
              <ReferenceTable
                columns={["Inquiry type", "Use this route"]}
                rows={INQUIRY_ROUTES.map((row) => ({
                  label: row.type,
                  value: row.href ? (
                    <Link
                      href={row.href}
                      className="font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      {row.route}
                    </Link>
                  ) : (
                    row.route
                  ),
                }))}
              />
              <LegalContactForm />
            </Reveal>

            <NoticeDivider />

            {/* 9 — Regional legal disclosures */}
            <Reveal>
              <NoticeHeading id="regional-disclosures">
                Regional legal disclosures
              </NoticeHeading>
              <NoticeParagraph>
                Regional legal disclosure modules are published only where the
                approved Legal Publication Registry confirms applicability.
                Regional notices are not selected by automatic internal
                geolocation — scope labels identify each module&apos;s
                jurisdiction explicitly.
              </NoticeParagraph>
              <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-5">
                <p className="text-xs leading-5 text-slate-400">
                  Applicable regional disclosure modules (statutory imprint,
                  company registration, regulated-service, or regional provider
                  information) will appear here when confirmed and approved by
                  Legal. No regional module is published without an explicit
                  approved source record.
                </p>
                <div className="mt-3">
                  <SourceToken>
                    REGIONAL DISCLOSURE MODULES — LEGAL PUBLICATION REGISTRY
                    REQUIRED
                  </SourceToken>
                </div>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 10 — Changes to these notices */}
            <Reveal>
              <NoticeHeading id="changes">Changes to these notices</NoticeHeading>
              <NoticeParagraph>
                Zoiko HR may update these Legal Notices when legal requirements,
                entity information, intellectual-property registrations, or
                public-site policies change. The effective date and version
                above identify the current approved version.
              </NoticeParagraph>

              {/* Below sm the single change row stacks, matching the reference
                  tables above rather than forcing a sideways drag. */}
              <dl className="mt-6 rounded-xl border border-slate-200 px-4 py-3 sm:hidden">
                {[
                  { label: "Date", value: <SourceToken>EFFECTIVE DATE</SourceToken> },
                  { label: "Version", value: <SourceToken>VERSION</SourceToken> },
                  { label: "Summary of change", value: "Initial publication" },
                  { label: "Affected section", value: "All" },
                  { label: "State", value: <CurrentPill /> },
                ].map((field, i, all) => (
                  <div
                    key={field.label}
                    className={`py-2.5 ${
                      i === all.length - 1 ? "" : "border-b border-slate-100"
                    }`}
                  >
                    <dt className="text-xs font-semibold leading-5 text-slate-700">
                      {field.label}
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-slate-600">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 hidden overflow-x-auto rounded-xl border border-slate-200 sm:block">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      {["Date", "Version", "Summary of change", "Affected section", "State"].map(
                        (heading) => (
                          <th
                            key={heading}
                            scope="col"
                            className="border-b border-slate-200 px-4 py-3 text-xs font-semibold leading-5 text-slate-700"
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-3 align-top">
                        <SourceToken>EFFECTIVE DATE</SourceToken>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <SourceToken>VERSION</SourceToken>
                      </td>
                      <td className="px-4 py-3 align-top text-xs leading-5 text-slate-600">
                        Initial publication
                      </td>
                      <td className="px-4 py-3 align-top text-xs leading-5 text-slate-600">
                        All
                      </td>
                      <td className="px-4 py-3 align-top">
                        <CurrentPill />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <NoticeParagraph>
                Changes are governed by Legal. Where Terms, DPA, Cookie Notice,
                or subprocessor processes define notice obligations for material
                changes, those documents remain authoritative.
              </NoticeParagraph>
            </Reveal>

            <NoticeDivider />

            {/* 11 — Related legal and trust resources */}
            <Reveal amount={0.1}>
              <NoticeHeading id="related-resources">
                Related legal and trust resources
              </NoticeHeading>

              <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,424px)]">
                <div className="flex flex-col gap-3">
                  {RELATED_RESOURCES.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-primary hover:bg-slate-50"
                    >
                      <p className="text-sm font-semibold leading-5 text-ink">
                        {resource.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {resource.body}
                      </p>
                    </Link>
                  ))}
                </div>

                <PlaceholderImage
                  src="/images/legal-notices/related-resources.png"
                  alt="A presenter taking a team through trust and compliance material"
                  label="Reviewing trust resources"
                  loading="lazy"
                  className="aspect-[424/547] w-full rounded-xl border border-slate-200 sm:aspect-[16/9] lg:aspect-auto lg:h-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
