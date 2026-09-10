import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PROOF = [
  "Role-aware access",
  "Clear request status",
  "Governed employee records",
];

export function EmployeeHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,493px)_minmax(0,691px)] lg:gap-14">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase leading-4 tracking-[0.1em] text-indigo-400">
                Zoiko HR for Employees
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[57px]">
                Give employees one clear place to manage everyday HR.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[480px] leading-7 text-white/60">
                Give people secure access to their own information, documents,
                requests and assigned HR actions—so they can find what they need,
                complete what is required and see what happens next without
                chasing HR.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Book a Demo
                </Link>
                <Link
                  href="#employee-home"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  See the Employee Experience
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
                {PROOF.map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="text-xs font-medium leading-4 text-white/40">
                      {item}
                    </span>
                    {i < PROOF.length - 1 && (
                      <span aria-hidden className="text-xs leading-4 text-white/20">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/employees-selfservice/hero.webp"
              alt="Three colleagues talking in an office lobby"
              label="Zoiko HR for employees"
              className="aspect-[691/551] w-full rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(49,94,251,0.08)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
