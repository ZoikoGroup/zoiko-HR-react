import { Container, Reveal } from "@/components/ui";
import { LocationCard } from "./LocationCard";
import type { Location } from "./LocationCard";

const LOCATIONS: Location[] = [
  {
    label: "Headquarters",
    city: "Sacramento, California, USA",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "USA"],
  },
  {
    label: "European Headquarters",
    city: "London, UK",
    lines: ["167-169 Great Portland Street", "5th Floor", "London W1W 5PF", "UK"],
  },
];

export function PublishedLocationsSection() {
  return (
    <section id="locations" className="scroll-mt-24 border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
            Current published corporate locations
          </h2>
          <p className="mt-3 max-w-[680px] text-base leading-6 text-slate-500">
            These are the corporate locations currently approved for public
            display. They do not define where Zoiko HR products are available,
            where customer data is hosted, or where customer or employee work
            sites are located.
          </p>
        </Reveal>

        <div className="mt-8 grid max-w-[960px] gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, i) => (
            <Reveal key={location.label} delay={i * 0.08}>
              <LocationCard location={location} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
