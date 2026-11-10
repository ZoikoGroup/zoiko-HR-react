import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { BF } from "./data";

const STEPS = [
  {
    title: "Choose your plan",
    body: "Core, Advanced or Enterprise, billed annually.",
    src: "/images/black-friday/step-choose-plan.webp",
    alt: "Two people reviewing a business plan on a laptop",
  },
  {
    title: "Enter your team size",
    body: "See your first-year total before you pay.",
    src: "/images/black-friday/step-team-size.webp",
    alt: "A team joining hands in a circle outdoors",
  },
  {
    title: "Check out by Nov 30",
    body: "The discount is applied to your first year automatically, or use code BF25.",
    src: "/images/black-friday/step-checkout.webp",
    alt: "A shopper checking out at a self-service kiosk",
  },
];

const TERMS = [
  { label: "Discount", value: "25% off the first year" },
  { label: "Plans", value: "Core, Advanced, Enterprise (annual)" },
  { label: "Who", value: "New Zoiko HR customers" },
  { label: "Dates", value: "Nov 27 – Nov 30, 2026" },
  { label: "After year one", value: "Renews at the list price shown" },
  { label: "Currency & tax", value: "USD · taxes at checkout" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BF.blue }}>
      {children}
    </p>
  );
}

export function BlackFridayStepsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>How to claim</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Get 25% off in three steps
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <PlaceholderImage
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[317/187] w-full rounded-xl"
                />
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BlackFridayTermsSection() {
  return (
    <section id="offer-terms" className="scroll-mt-36 pb-20 sm:pb-24">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>Offer terms</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The sale, in plain terms
          </h2>
        </Reveal>
        <dl className="mx-auto mt-10 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TERMS.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.05}>
              <div className="h-full rounded-xl px-5 py-4" style={{ backgroundColor: BF.tint }}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/60">{t.label}</dt>
                <dd className="mt-1.5 font-semibold text-ink">{t.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
