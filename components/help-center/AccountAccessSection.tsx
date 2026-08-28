import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ITEMS = [
  {
    title: "I can't sign in",
    description:
      "Route to approved account recovery guidance; we never ask for your password or one-time code here.",
  },
  {
    title: "I'm locked out or see a permission error",
    description:
      "We explain the safe next step and distinguish product permission from Help Center access.",
  },
];

export function AccountAccessSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Account &amp; access help.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We never ask for a password, one-time code, or full authentication
            secret here.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="rounded-[10px] border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/help-center/account-access.png"
              alt="A support specialist wearing a headset at a workstation"
              label="Zoiko HR account and access help"
              className="aspect-[16/7] w-full rounded-[10px] border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
