function Navbar() {
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Certificados", href: "#certificates" },
    { name: "Habilidades", href: "#skills" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-nude/50 bg-offwhite/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-base font-bold tracking-tight">
          Carlos Simbaña
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-obsidian/70 transition hover:text-obsidian"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-obsidian px-5 py-2 text-sm font-semibold text-offwhite transition hover:opacity-80 md:inline-flex"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Navbar;