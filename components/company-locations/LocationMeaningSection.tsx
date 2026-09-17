import { Container, Reveal, PlaceholderImage } from "@/components/ui";

type Term = { title: string; body: string };

const LEFT: Term[] = [
  {
    title: "Corporate location",
    body: "A public Zoiko HR company location approved for publication. Only records in the approved Company Location Registry appear here.",
  },
  {
    title: "Customer / employee work site",
    body: "Belongs to the customer's workforce context. It does not represent a Zoiko HR corporate presence.",
  },
];

const RIGHT: Term[] = [
  {
    title: "Product Location object",
    body: "A customer-configured HR record representing an organization or work-site context inside the platform. Not a Zoiko HR corporate office.",
  },
  {
    title: "Subprocessor location",
    body: "Third-party processing context governed by the Subprocessors and DPA authority. Not a Zoiko HR office.",
  },
];

function TermCard({ term }: { term: Term }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-bold leading-5 text-ink">{term.title}</h3>
      <p className="text-xs leading-5 text-slate-500 sm:text-sm">{term.body}</p>
    </div>
  );
}

export function LocationMeaningSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
            What these locations mean — and what they do not.
          </h2>
          <p className="mt-3 max-w-[680px] text-base leading-6 text-slate-500">
            Company office locations show where Zoiko HR currently publishes a
            corporate presence. They are not a list of countries where the product
            is available, where customer data is hosted, where employees may work,
            or where a customer is considered legally compliant.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,593px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((term, i) => (
              <Reveal key={term.title} delay={i * 0.06}>
                <TermCard term={term} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/company-locations/what-locations-mean.png"
              alt="Three colleagues reviewing work on a computer screen"
              label="Colleagues reviewing work together"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>
          <div className="grid gap-4">
            {RIGHT.map((term, i) => (
              <Reveal key={term.title} delay={i * 0.06}>
                <TermCard term={term} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
