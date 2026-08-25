import { Reveal, Button, PlaceholderImage } from "@/components/ui";

const HERO_PHOTOS = [
  { src: "/images/home/hero-1.png", alt: "HR manager reviewing records with a colleague", offset: "translate-y-6" },
  { src: "/images/home/hero-2.png", alt: "Employee reviewing an onboarding document", offset: "translate-y-0" },
  { src: "/images/home/hero-3.png", alt: "Team discussing workforce data around a laptop", offset: "translate-y-8" },
  { src: "/images/home/hero-4.png", alt: "Manager presenting workforce reporting to a team", offset: "translate-y-0" },
  { src: "/images/home/hero-5.png", alt: "HR administrator walking through approvals", offset: "translate-y-6" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-0 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_50%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Global HR Management Platform
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Run global HR,
            <br />
            <span className="text-emerald-400">not fragmented spreadsheets.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            One governed platform for employee records, onboarding, leave,
            documents, approvals and performance — configured for every
            entity, location and jurisdiction you operate in.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/product-tour"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Take the Product Tour
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/50">
            <span>Global structure</span>
            <span aria-hidden>·</span>
            <span>Role-based access</span>
            <span aria-hidden>·</span>
            <span>Auditable lifecycle</span>
          </div>
        </Reveal>
      </div>

      {/* Photo strip */}
      <Reveal delay={0.4} y={36}>
        <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-5 lg:px-8">
          {HERO_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`group ${photo.offset} ${i === 4 ? "hidden sm:block" : ""}`}
            >
              <PlaceholderImage
                src={photo.src}
                alt={photo.alt}
                label={photo.alt}
                className="aspect-[4/5] w-full rounded-t-2xl  shadow-2xl shadow-black/40 transition-transform duration-300 ease-out group-hover:-translate-y-2"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
