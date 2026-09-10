import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowItem, Dot } from "./shared";

const AUTH_REQUIREMENTS = [
  "Current configuration required",
  "Version and scope explicit",
  "Test pass ≠ production activation",
  "Does not establish HR/business authority",
];

const DISTINCTIONS = [
  {
    title: "Identity link ≠ employment truth",
    body: "External identity attributes do not become HR facts by default. Employee Records and Organization Management own workforce truth.",
  },
  {
    title: "Configured ≠ activated ≠ enforced",
    body: "Configuration exists, tested, activation-pending and enforced-and-runtime are distinct states. Test success does not imply production enforcement.",
  },
  {
    title: "ZoikoID is not mandatory",
    body: "Approved ecosystem identity option. Controlled Interoperability allows heterogeneous environments. No mandatory suite adoption.",
  },
];

export function SeparationSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase leading-4 tracking-[0.1em] text-primary">
            Identity, authentication and controlled access — precisely separated
          </p>
        </Reveal>

        {/* The ≠ spine sits between the two panels at lg and turns into a
            horizontal rule once they stack. */}
        <div className="mt-7 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-0">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <Dot className="size-3 bg-primary" />
                <p className="text-xs font-medium uppercase leading-4 tracking-wide text-primary">
                  Authentication
                </p>
              </div>
              <h3 className="text-xl font-extrabold leading-7 text-slate-950">
                Proves who you are under an approved configuration.
              </h3>
              <p className="text-xs leading-5 text-slate-600">
                Authentication determines whether a sign-in attempt is valid
                under the current configured method, scope and version. A
                successful authentication means the identity has been proved —
                nothing more.
              </p>
              <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                {AUTH_REQUIREMENTS.map((requirement) => (
                  <ArrowItem key={requirement}>{requirement}</ArrowItem>
                ))}
              </ul>
            </div>
          </Reveal>

          <div
            aria-hidden
            className="flex items-center justify-center gap-2 lg:w-14 lg:flex-col"
          >
            <span className="h-px flex-1 bg-slate-200 lg:h-auto lg:w-px" />
            <span className="px-2 text-xl font-extrabold leading-8 text-red-600">
              ≠
            </span>
            <span className="h-px flex-1 bg-slate-200 lg:h-auto lg:w-px" />
          </div>

          <Reveal delay={0.08} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-id/separation-model.webp"
              alt="A large team standing together in an office courtyard"
              label="Controlled access"
              className="aspect-video w-full rounded-xl border border-violet-600/20 bg-violet-600/5 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
          {DISTINCTIONS.map((distinction, i) => (
            <Reveal
              key={distinction.title}
              delay={0.06 + i * 0.05}
              className="h-full"
            >
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold leading-5 text-slate-950">
                  {distinction.title}
                </p>
                <p className="pt-1.5 text-xs leading-5 text-slate-600">
                  {distinction.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
