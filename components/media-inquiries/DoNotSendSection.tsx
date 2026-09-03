import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DoNotSendSection() {
  return (
    <section className="bg-[#0C2036] py-16">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-blue-950 bg-slate-950 px-7 py-6">
              <div className="flex items-center gap-2.5">
                <span aria-hidden className="text-base leading-6 text-slate-400">
                  ⊘
                </span>
                <p className="text-xs font-medium uppercase leading-5 tracking-wide text-white">
                  Do not send through this form
                </p>
              </div>

              <p className="pt-4 text-sm leading-6 text-slate-400">
                Do not send passwords, credentials, employee records, health
                information, private customer content, government identifiers,
                or other sensitive personal data. If Zoiko HR needs a secure
                exchange, the media team will provide an approved method after
                contact.
              </p>

              <p className="mt-4 border-t border-blue-950 pt-3.5 text-xs leading-5 text-slate-500">
                Confidential source material, embargoed documents, and
                unpublished third-party data should not be submitted unless an
                approved secure process is provided first.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/media-inquiries/do-not-send.png"
              alt="Two colleagues talking in a bright office"
              label="Secure exchange is arranged separately"
              className="aspect-[16/9] w-full rounded-2xl border border-yellow-950 bg-lime-950 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[10px] border border-blue-950 bg-slate-900 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-400">
              Data collected is handled per the Zoiko HR Privacy Notice. No
              retention period is stated here; link below is the approved
              authority.
            </p>
            <Link
              href="/privacy-notice"
              className="whitespace-nowrap text-xs font-semibold leading-5 text-indigo-400 hover:text-white"
            >
              Privacy Notice →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
