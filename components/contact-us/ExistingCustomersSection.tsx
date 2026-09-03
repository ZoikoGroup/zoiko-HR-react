import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { InfoIcon } from "./shared";

export function ExistingCustomersSection() {
  return (
    <section className="border-t border-slate-800 bg-sky-950 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-800">
            {/* Icon rail — a filled column down the full height of the card's
                left edge, with the icon centred in it. */}
            <div className="flex w-12 min-w-12 items-center justify-center self-stretch border-r border-slate-800 bg-slate-800 sm:w-16 sm:min-w-16">
              <InfoIcon className="size-5 text-primary" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">
              <div className="max-w-[480px]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-primary">
                  Existing customers
                </p>
                <h2 className="mt-2 text-xl font-extrabold leading-8 text-white">
                  Need help with your account?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  For account, product, or administrator support — including
                  billing, access, configuration, and product questions — use
                  the Customer Help path. It reaches the right team directly.
                </p>
              </div>

              <Link
                href="/contact-support"
                className="shrink-0 self-start rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white lg:self-auto"
              >
                Go to Customer Help →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
