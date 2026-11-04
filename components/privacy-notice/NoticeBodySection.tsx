import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NoticeTableOfContents } from "./NoticeTableOfContents";
import { PurposesTable } from "./PurposesTable";
import {
  ArrowLink,
  Bullet,
  NoticeDivider,
  NoticeHeading,
  NoticeParagraph,
  PendingSourceBlock,
  SourceToken,
} from "./shared";

const COVERED = [
  "Website visitors",
  "Prospects and business contacts",
  "Customer account and commercial contacts",
  "Authorized users where Zoiko HR is an independent controller for the stated activity",
  "Event, media, partner, and support contacts as approved",
];

const RECIPIENTS = [
  "Service providers and subprocessors who help operate and secure our services",
  "Professional advisers such as legal, accounting, and audit professionals",
  "Affiliates where approved and consistent with this notice",
  "Legal and regulatory authorities where required by law or to establish or defend rights",
  "Business transaction parties in connection with a merger, acquisition, or restructuring, subject to confidentiality obligations",
];

/**
 * The Figma shows these panels collapsed. The summaries below describe what
 * each regional section covers; every region-specific value inside them stays
 * gated behind an approved legal record.
 */
const REGIONS = [
  {
    title: "California privacy disclosures",
    body: "Where California law applies, this section describes the categories of personal information collected, the business or commercial purposes for collecting it, the categories of recipients it is disclosed to, and the rights available to California residents — including access, deletion, correction, and choices relating to sale, sharing, or targeted advertising, together with the right not to receive discriminatory treatment for exercising them.",
    pending:
      "Category-level detail and any sale or sharing statement are populated from approved legal records.",
    token: "LEGAL SOURCE REQUIRED",
  },
  {
    title: "UK and EEA disclosures",
    body: "Where UK or EEA law applies, this section describes the lawful basis relied on for each purpose, the controller and any representative or data protection officer contact route, the safeguards used for international transfers, retention criteria, and the rights to access, rectification, erasure, restriction, portability, objection, and withdrawal of consent, as well as the right to lodge a complaint with a supervisory authority.",
    pending:
      "Entity, representative, lawful basis, and transfer details are populated from approved legal records.",
    token: "LEGAL SOURCE REQUIRED",
  },
];

function PrivacyRequestButton() {
  return (
    <Link
      href="/contact-zoiko-hr"
      className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
    >
      Submit a privacy request
    </Link>
  );
}

export function NoticeBodySection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mx-auto grid max-w-[1140px] gap-10 lg:grid-cols-[256px_minmax(0,820px)] lg:gap-16">
          <aside className="lg:h-full">
            <NoticeTableOfContents />
          </aside>

          <div className="min-w-0">
            {/* 1 — Who this notice covers */}
            <Reveal>
              <NoticeHeading id="who-this-covers">
                Who this Privacy Notice covers
              </NoticeHeading>
              <NoticeParagraph>
                This notice applies to personal information handled by Zoiko HR
                in the contexts described below, except where a more specific
                notice applies.
              </NoticeParagraph>
              <ul className="mt-4 flex flex-col gap-2">
                {COVERED.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ArrowLink href="/careers">Candidate privacy notice</ArrowLink>
                <ArrowLink href="/cookie-notice">Cookie Notice</ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 2 — Who we are */}
            <Reveal>
              <NoticeHeading id="who-we-are">
                Who is responsible for your information?
              </NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The Zoiko HR entity responsible for the processing described in
                this notice is{" "}
                <SourceToken>LEGAL ENTITY / CONTROLLER MAPPING</SourceToken>.
                For privacy questions or rights requests, use the dedicated
                privacy route below.
              </p>
              <PrivacyRequestButton />
            </Reveal>

            <NoticeDivider />

            {/* 3 — Personal information we collect */}
            <Reveal amount={0.1}>
              <NoticeHeading id="data-we-collect">
                Personal information we collect
              </NoticeHeading>
              <NoticeParagraph>
                We collect personal information in the following categories,
                depending on how you interact with us.
              </NoticeParagraph>
              <PlaceholderImage
                src="/images/privacy-notice/information-we-collect.png"
                alt="Someone at a desk surrounded by paperwork while working on a laptop"
                label="Working through paperwork at a laptop"
                className="mt-6 aspect-[820/551] w-full rounded-xl border border-slate-200"
              />
            </Reveal>

            <NoticeDivider />

            {/* 4 — Purposes */}
            <Reveal amount={0.1}>
              <NoticeHeading id="purposes">
                How and why we use personal information
              </NoticeHeading>
              <NoticeParagraph>
                We use personal information for the purposes below. Lawful basis
                and retention source fields are populated from approved legal
                records only.
              </NoticeParagraph>
              <PurposesTable />
            </Reveal>

            <NoticeDivider />

            {/* 5 — Disclosures */}
            <Reveal amount={0.1}>
              <NoticeHeading id="disclosures">
                How we disclose personal information
              </NoticeHeading>
              <NoticeParagraph>
                We may disclose personal information to the following recipient
                categories for the business purposes described in this notice.
              </NoticeParagraph>
              <ul className="mt-4 flex flex-col gap-3">
                {RECIPIENTS.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <div className="mt-5">
                <ArrowLink href="/subprocessors">
                  View current subprocessors
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 6 — Cookies */}
            <Reveal>
              <NoticeHeading id="cookies">
                Cookies and similar technologies
              </NoticeHeading>
              <NoticeParagraph>
                Zoiko HR uses cookies and similar technologies for functions
                described in the Cookie Notice. Where required, non-essential
                technologies are controlled through the consent and preference
                experience.
              </NoticeParagraph>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ArrowLink href="/cookie-notice">Read Cookie Notice</ArrowLink>
                <ArrowLink href="/cookie-notice">
                  Manage cookie preferences
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 7 — Customer HR data */}
            <Reveal amount={0.1}>
              <NoticeHeading id="customer-hr-data">
                Customer HR data
              </NoticeHeading>
              <PlaceholderImage
                src="/images/privacy-notice/customer-hr-data.png"
                alt="Someone working at a desk beside a lamp in a quiet office"
                label="Working at a desk"
                className="mt-6 aspect-[820/144] w-full rounded-xl border border-amber-200"
              />
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <ArrowLink href="/data-processing-addendum">
                  Data Processing Addendum
                </ArrowLink>
                <ArrowLink href="/trust-center">Trust Center</ArrowLink>
                <ArrowLink href="/security-privacy">
                  Security &amp; Privacy
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 8 — AI and automated processing */}
            <Reveal>
              <NoticeHeading id="ai-automated-processing">
                AI and automated processing
              </NoticeHeading>
              <NoticeParagraph>
                Some Zoiko HR experiences may use AI or automated processing
                where approved. Scope, data use, human-review requirements, and
                availability are governed by the applicable product
                documentation and AI Governance materials.
              </NoticeParagraph>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ArrowLink href="/ai-governance">AI Governance</ArrowLink>
                <ArrowLink href="/ai-assistance">AI Assistance</ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 9 — International transfers */}
            <Reveal>
              <NoticeHeading id="international-transfers">
                International data transfers
              </NoticeHeading>
              <NoticeParagraph>
                Transfer details and safeguards are published only from the
                current approved legal and contractual sources. See the Data
                Processing Addendum for customer processing terms.
              </NoticeParagraph>
              <PendingSourceBlock
                title="Transfer mechanism table"
                token="LEGAL SOURCE REQUIRED"
              >
                Region/mechanism details populated from approved legal sources.
              </PendingSourceBlock>
              <div className="mt-4">
                <ArrowLink href="/data-processing-addendum">
                  Data Processing Addendum
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 10 — Retention */}
            <Reveal>
              <NoticeHeading id="retention">
                How long we keep personal information
              </NoticeHeading>
              <NoticeParagraph>
                We retain personal information for the period required for the
                purpose described, then delete or de-identify it in accordance
                with approved retention rules, subject to legal, security,
                dispute, and contractual requirements.
              </NoticeParagraph>
              <PendingSourceBlock token="RETENTION SOURCE REQUIRED">
                Specific retention periods or criteria are populated from
                approved retention records.
              </PendingSourceBlock>
            </Reveal>

            <NoticeDivider />

            {/* 11 — Your privacy rights */}
            <Reveal>
              <NoticeHeading id="your-privacy-rights">
                Your privacy rights
              </NoticeHeading>
              <NoticeParagraph>
                Depending on where you live and the processing involved, you may
                have rights relating to access, correction, deletion,
                restriction, portability, consent withdrawal, automated
                processing, or other choices. Available rights and how to
                exercise them depend on your location and the processing
                context.
              </NoticeParagraph>
              <PrivacyRequestButton />
              <NoticeParagraph>
                Zoiko HR may need to verify a request using an approved,
                proportionate process. Identity verification will not require
                passwords, government identifiers, or other unnecessary
                information beyond what is needed to locate the relevant
                records.
              </NoticeParagraph>
            </Reveal>

            <NoticeDivider />

            {/* 12 — Regional disclosures */}
            <Reveal>
              <NoticeHeading id="regional-disclosures">
                Regional disclosures
              </NoticeHeading>
              <NoticeParagraph>
                Region-specific disclosures are published only where an approved
                legal source has been confirmed. Select the applicable region
                below.
              </NoticeParagraph>
              <div className="mt-6 flex flex-col gap-3">
                {REGIONS.map((region) => (
                  <details
                    key={region.title}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                      <span className="text-sm font-semibold text-ink">
                        {region.title}
                      </span>
                      <span
                        aria-hidden
                        className="flex-none text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-6 text-slate-600">
                        {region.body}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
                        <span className="text-xs leading-5 text-slate-400">
                          {region.pending}
                        </span>
                        <SourceToken>{region.token}</SourceToken>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 13 — Children's privacy */}
            <Reveal>
              <NoticeHeading id="childrens-privacy">
                Children&apos;s privacy
              </NoticeHeading>
              <NoticeParagraph>
                The scope of Zoiko HR services with respect to children and any
                applicable age-related rules are determined by approved legal
                records.
              </NoticeParagraph>
              <PendingSourceBlock token="LEGAL REVIEW REQUIRED BEFORE PUBLICATION">
                Child-specific processing scope and any minimum age
                requirements.
              </PendingSourceBlock>
            </Reveal>

            <NoticeDivider />

            {/* 14 — Security */}
            <Reveal>
              <NoticeHeading id="security">
                How we protect personal information
              </NoticeHeading>
              <NoticeParagraph>
                Zoiko HR uses administrative, technical, and organizational
                safeguards appropriate to the approved security program and
                processing context. No method of storage or transmission can be
                guaranteed absolutely secure.
              </NoticeParagraph>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ArrowLink href="/security-privacy">
                  Security &amp; Privacy
                </ArrowLink>
                <ArrowLink href="/trust-center">Trust Center</ArrowLink>
                <ArrowLink href="/security-reporting">
                  Report a security issue
                </ArrowLink>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 15 — Changes */}
            <Reveal>
              <NoticeHeading id="changes">
                Changes to this Privacy Notice
              </NoticeHeading>
              <NoticeParagraph>
                We may update this notice when our practices, services, or legal
                requirements change. The effective and last-updated dates
                identify the current version. Where required, we provide
                additional notice before a material change takes effect.
              </NoticeParagraph>
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      {[
                        "Date",
                        "Version",
                        "Summary of change",
                        "Affected section",
                      ].map((heading) => (
                        <th
                          key={heading}
                          scope="col"
                          className="border-b border-slate-200 px-4 py-3 text-xs font-semibold leading-5 text-slate-700"
                        >
                          {heading}
                        </th>
                      ))}
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 16 — Contact */}
            <Reveal>
              <NoticeHeading id="contact">Contact us about privacy</NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                For privacy questions or rights requests, use the dedicated
                privacy route below. For privacy contact details, see{" "}
                <SourceToken>LEGAL-APPROVED PRIVACY CONTACT</SourceToken>
              </p>
              <PrivacyRequestButton />
              <p className="mt-6 text-xs leading-5 text-slate-600">
                <span className="font-semibold">Security issues:</span> To
                report a vulnerability or security issue, use{" "}
                <Link
                  href="/security-reporting"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  Security Reporting
                </Link>{" "}
                rather than this privacy route.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
