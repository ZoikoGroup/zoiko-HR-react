import { BF } from "./data";

const LINKS = [
  { label: "Plans & prices", href: "#plans" },
  { label: "Compare", href: "#compare" },
  { label: "Sale dates", href: "#sale-dates" },
  { label: "Offer terms", href: "#offer-terms" },
  { label: "FAQ", href: "#faq" },
];

/** In-page campaign nav; sits under the sticky site Navbar (73px tall). */
export function BlackFridaySubnav() {
  return (
    <div
      className="sticky top-[73px] z-40 border-b border-white/10"
      style={{ backgroundColor: BF.navyDeep }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-6 py-3 lg:px-8">
        <nav className="-mx-2 min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] md:flex md:justify-end">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#plans"
          className="flex-none rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: BF.mint, color: BF.mintInk }}
        >
          Claim 25% off
        </a>
      </div>
    </div>
  );
}
