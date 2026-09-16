import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NoticeTableOfContents } from "./NoticeTableOfContents";
import { TechnologyInventory } from "./TechnologyInventory";
import {
  ArrowLink,
  CookieSettingsButton,
  COOKIE_SETTINGS_HREF,
  CurrentPill,
  InfoNote,
  NoticeDivider,
  NoticeHeading,
  NoticeParagraph,
  ReferenceTable,
  SourceToken,
} from "./shared";

const TECHNOLOGY_CHIPS = [
  "HTTP cookie",
  "Local / session storage",
  "Pixel / tag / beacon",
  "SDK / library",
  "Device identifier",
  "Embedded content",
];

const CATEGORY_CARDS = [
  {
    icon: "🔒",
    title: "Strictly Necessary",
    state: "Always on",
    stateClass: "text-green-800",
    cardClass: "border-green-300 bg-green-50",
    body: "Security, session continuity, load balancing, and storing your privacy choices. Reviewed against an approved necessity rule and cannot be switched off.",
  },
  {
    icon: "📊",
    title: "Analytics / Measurement",
    state: "Off",
    stateClass: "text-slate-500",
    cardClass: "border-indigo-200 bg-violet-50",
    body: "Understand aggregate site usage, page performance, and journey effectiveness to improve the Zoiko HR website.",
  },
];

const CHOICE_ROWS: { label: string; value: string }[] = [
  {
    label: "Accept all",
    value:
      "All available optional categories are activated. Your choice is stored for the approved period.",
  },
  {
    label: "Reject non-essential",
    value:
      "Only strictly necessary technologies remain active. Optional categories are blocked.",
  },
  {
    label: "Save choices",
    value:
      "Your granular category selections are stored and applied. Optional tags not permitted by your choice remain blocked.",
  },
  {
    label: "Withdraw / change preferences",
    value:
      "Open cookie settings at any time and save new choices. Changes take effect immediately for future loading. Some already-written browser-side storage may require manual clearing.",
  },
  {
    label: "Choice record expires",
    value:
      "You will be prompted again according to the approved re-prompt policy. Optional technologies remain off until a new choice is made.",
  },
  {
    label: "You clear browser cookies",
    value:
      "Stored preference record is removed. The next visit will treat your state as undetermined and block optional technologies until you choose again.",
  },
];

const CONTACT_CARDS = [
  {
    title: "Change your cookie choices",
    body: "Use Manage cookie settings — not a contact form.",
    cta: "Manage cookie settings",
    href: COOKIE_SETTINGS_HREF,
  },
  {
    title: "Security vulnerability",
    body: "Use the dedicated Security Reporting route — not this privacy route.",
    cta: "Security Reporting",
    href: "/security-reporting",
  },
];

const RELATED_RESOURCES = [
  {
    title: "Privacy Notice",
    body: "Full public privacy practices, rights, controller/processor boundaries, and data categories.",
    href: "/privacy-notice",
  },
  {
    title: "Subprocessors",
    body: "Current approved subprocessor registry and published change governance.",
    href: "/subprocessors",
  },
  {
    title: "Trust Center",
    body: "Enterprise trust documentation and governance resources.",
    href: "/trust-center",
  },
  {
    title: "Terms of Service",
    body: "Terms governing use of Zoiko HR services and the public website.",
    href: "/terms-of-service",
  },
];

export function NoticeBodySection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mx-auto grid max-w-[1140px] gap-10 lg:grid-cols-[240px_minmax(0,820px)] lg:gap-16">
          <aside className="lg:h-full">
            <NoticeTableOfContents />
          </aside>

          <div className="min-w-0">
            {/* 1 — What we mean by cookies */}
            <Reveal>
              <NoticeHeading id="what-we-mean">
                What we mean by cookies and similar technologies
              </NoticeHeading>
              <NoticeParagraph>
                Cookies are small data files that a website can store or read on
                your device. Similar technologies include browser storage (such
                as localStorage and sessionStorage), pixels and tags, software
                development kits (SDKs), device identifiers, embedded-content
                mechanisms, and other techniques that store information on or
                access information from a device. This notice uses
                &quot;cookies and similar technologies&quot; as a practical
                label for all of these mechanisms.
              </NoticeParagraph>
              <NoticeParagraph>
                Different technologies behave differently. Deleting browser
                cookies may remove some stored choices or preferences but does
                not necessarily clear server-side records, SDK identifiers, or
                all other types of storage. Where a technology stores or
                accesses information without a cookie file — such as a device
                identifier or a browser-based storage key — it is still covered
                by this notice if it is used on Zoiko HR public web properties.
              </NoticeParagraph>
              <ul className="mt-5 flex flex-wrap gap-2">
                {TECHNOLOGY_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-indigo-200 bg-blue-50 px-3 py-1 text-xs font-medium leading-4 text-primary"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>

            <NoticeDivider />

            {/* 2 — Cookie categories */}
            <Reveal amount={0.1}>
              <NoticeHeading id="cookie-categories">Cookie categories</NoticeHeading>
              <NoticeParagraph>
                Technologies are classified into the following categories.
                Category assignments come from the approved Cookie/Tracker
                Registry and are reviewed when a technology&apos;s purpose,
                vendor, or classification changes.
              </NoticeParagraph>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  {CATEGORY_CARDS.map((card) => (
                    <div
                      key={card.title}
                      className={`flex flex-col gap-3 rounded-xl border p-5 ${card.cardClass}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex items-center gap-2">
                          <span aria-hidden className="text-lg leading-7">
                            {card.icon}
                          </span>
                          <span className="text-sm font-semibold leading-5 text-ink">
                            {card.title}
                          </span>
                        </span>
                        <span
                          className={`text-xs font-semibold leading-4 ${card.stateClass}`}
                        >
                          {card.state}
                        </span>
                      </div>
                      <p className="text-xs leading-5 text-slate-600">{card.body}</p>
                      <Link
                        href={COOKIE_SETTINGS_HREF}
                        className="text-xs font-semibold leading-4 text-primary transition-colors hover:text-primary-dark"
                      >
                        Manage settings →
                      </Link>
                    </div>
                  ))}
                </div>

                <PlaceholderImage
                  src="/images/cookie-notice/cookie-categories.png"
                  alt="Colleagues in discussion around a shared desk"
                  label="Colleagues in discussion"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl border border-indigo-200 bg-slate-50 lg:aspect-auto lg:h-full"
                />
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 3 — Technology inventory */}
            <Reveal amount={0.1}>
              <NoticeHeading id="technology-inventory">
                Technology inventory
              </NoticeHeading>
              <NoticeParagraph>
                The table below is driven by the approved Cookie/Tracker
                Registry. Vendor names, domains, and durations are sourced from
                that registry and must be verified before publication. Search
                and filter to find technologies by category, type, or provider.
              </NoticeParagraph>
              <TechnologyInventory />
            </Reveal>

            <NoticeDivider />

            {/* 4 — How your choices work */}
            <Reveal amount={0.1}>
              <NoticeHeading id="how-choices-work">
                How your choices work
              </NoticeHeading>
              <NoticeParagraph>
                When you first visit a Zoiko HR public web property, your
                applicable consent state is determined by a combination of any
                previously stored choice, recognized browser privacy signals,
                and the privacy rules that apply to your interaction. Where
                prior consent is required, optional technologies are blocked
                until you make a valid choice.
              </NoticeParagraph>
              <ReferenceTable columns={["Action", "What happens"]} rows={CHOICE_ROWS} />
              <div className="mt-6">
                <CookieSettingsButton className="w-full sm:w-auto" />
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 5 — Third-party technologies */}
            <Reveal>
              <NoticeHeading id="third-party">
                Third-party technologies
              </NoticeHeading>
              <NoticeParagraph>
                Some technologies on the Zoiko HR website are provided by
                third-party vendors. These technologies are identified by
                provider and category in the inventory above. When a third-party
                technology is active, the provider may collect information under
                its own privacy and cookie policies, which are linked in the
                registry where available.
              </NoticeParagraph>
              <NoticeParagraph>
                Vendor names and relationship labels are sourced from the
                Cookie/Tracker Registry. Appearance of a third-party vendor in
                this notice does not imply endorsement, partnership, or
                uninterrupted availability.
              </NoticeParagraph>
              <NoticeParagraph>
                Where embedded content (such as video players or interactive
                maps) would activate a third-party non-essential technology
                before permission is given, a first-party placeholder is shown
                instead. The placeholder names the provider and explains the
                loading behavior. Content only loads after an applicable
                category choice or a one-time load action.
              </NoticeParagraph>
              <InfoNote>
                <span className="font-semibold">Vendor policy links</span> in the
                inventory are validated on a scheduled basis. If you find a
                broken or outdated link, please report it through the privacy
                contact route.
              </InfoNote>
            </Reveal>

            <NoticeDivider />

            {/* 6 — Browser and privacy signals */}
            <Reveal>
              <NoticeHeading id="privacy-signals">
                Browser and privacy signals
              </NoticeHeading>
              <NoticeParagraph>
                Some browsers or extensions can send privacy preference signals.
                Where applicable law and our approved privacy rules require us
                to recognize a supported signal, we apply it to the available
                categories and choices for that browser or device.
              </NoticeParagraph>
              <NoticeParagraph>
                If a Global Privacy Control (GPC) signal is detected and
                applicable, your privacy-choice interface reflects the resulting
                state. If your manual preference conflicts with a
                higher-precedence signal, the interface explains the conflict
                rather than silently overriding either state. The &quot;Do Not
                Sell or Share My Personal Information&quot; and similar opt-out
                routes are rendered only where required by the approved Privacy
                Rules Registry.
              </NoticeParagraph>
              <InfoNote>
                <span className="font-semibold">Do Not Track (DNT)</span> is not
                treated as legally equivalent to GPC. Signal handling is
                governed by the approved Privacy Rules Registry, not by
                individual browser headers alone.
              </InfoNote>
            </Reveal>

            <NoticeDivider />

            {/* 7 — Browser controls */}
            <Reveal>
              <NoticeHeading id="browser-controls">
                How can I change or delete cookies?
              </NoticeHeading>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The most reliable way to change your Zoiko HR public-site cookie
                choices is through{" "}
                <Link
                  href={COOKIE_SETTINGS_HREF}
                  className="font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Manage cookie settings
                </Link>
                .
              </p>
              <NoticeParagraph>
                Browsers also provide controls for deleting, blocking, or
                restricting cookies and site data. Blocking all cookies may
                affect strictly necessary functionality, such as maintaining a
                session or storing your preference choices. Deleting cookies
                through your browser removes the stored Zoiko HR preference
                record, so the site will treat your state as undetermined and
                block optional technologies on your next visit.
              </NoticeParagraph>
              <NoticeParagraph>
                Deleting browser cookies does not necessarily remove
                server-side identifiers, SDK storage, or other related records.
                Refer to the technology inventory and vendor policy links for
                details on specific technologies.
              </NoticeParagraph>
            </Reveal>

            <NoticeDivider />

            {/* 8 — Updates and versioning */}
            <Reveal>
              <NoticeHeading id="updates">Updates and versioning</NoticeHeading>
              <NoticeParagraph>
                This Cookie Notice may be updated when technologies, vendors,
                purposes, categories, or applicable legal rules change. The
                version and last-updated date shown in the page header identify
                the current approved document. The technology inventory may
                update more frequently than the legal prose — the registry
                &quot;last verified&quot; timestamp indicates how current the
                inventory is.
              </NoticeParagraph>

              {/* Below sm the single change row stacks instead of scrolling. */}
              <dl className="mt-6 rounded-xl border border-slate-200 px-4 py-3 sm:hidden">
                {[
                  { label: "Date", value: <SourceToken>EFFECTIVE DATE</SourceToken> },
                  { label: "Version", value: <SourceToken>VERSION</SourceToken> },
                  { label: "Change summary", value: "Initial publication" },
                  { label: "Type", value: "Full notice" },
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
                      {["Date", "Version", "Change summary", "Type", "State"].map(
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
                        Full notice
                      </td>
                      <td className="px-4 py-3 align-top">
                        <CurrentPill />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 9 — Contact and rights */}
            <Reveal amount={0.1}>
              <NoticeHeading id="contact">Contact and rights</NoticeHeading>
              <NoticeParagraph>
                For questions about cookies or your privacy choices, use the
                routes below. Do not include passwords, employee records,
                government identifiers, or other sensitive personal data in a
                general privacy inquiry.
              </NoticeParagraph>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <PlaceholderImage
                  src="/images/cookie-notice/contact-and-rights.png"
                  alt="Colleagues reviewing a document together at a desk"
                  label="Colleagues reviewing a document"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl border border-slate-200 lg:aspect-auto lg:h-full"
                />

                <div className="flex flex-col gap-4">
                  {CONTACT_CARDS.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                    >
                      <p className="text-sm font-semibold leading-5 text-ink">
                        {card.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {card.body}
                      </p>
                      <div className="mt-2.5">
                        <ArrowLink href={card.href} className="!text-xs">
                          {card.cta}
                        </ArrowLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <NoticeDivider />

            {/* 10 — Related resources */}
            <Reveal amount={0.1}>
              <NoticeHeading id="related-resources">Related resources</NoticeHeading>

              <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,404px)]">
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
                  src="/images/cookie-notice/related-resources.png"
                  alt="A presenter taking a team through governance material"
                  label="Reviewing governance material"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl border border-slate-200 lg:aspect-auto lg:h-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
