const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-4 top-4 z-50">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2.5 pl-3 pr-2.5">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-9 place-items-center rounded-full bg-ink text-sm text-paper">NV</span>
          <span className="hidden sm:inline">Niharika Valacha</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-sm text-slate transition-colors hover:bg-mist/60 hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85">
          Resume
        </a>
      </nav>
    </header>
  );
}
