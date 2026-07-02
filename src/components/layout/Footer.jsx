import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-obsidian px-6 py-20 text-offwhite">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-offwhite/50">
              Contacto
            </p>

            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              ¿Tienes una idea o necesitas una solución digital?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-offwhite/70">
              Estoy abierto a colaborar en proyectos de software, aplicaciones
              web, soluciones para negocios y productos SaaS.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="mailto:carlos.simbana.dev@gmail.com"
              className="rounded-full bg-offwhite px-6 py-3 text-sm font-bold text-obsidian transition hover:opacity-80"
            >
              Enviar correo
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/carlossimbana2024"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-offwhite/20 p-3 text-xl transition hover:bg-offwhite hover:text-obsidian"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/carlos-gabriel-simba%C3%B1a-amagua%C3%B1a-08793a408/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-offwhite/20 p-3 text-xl transition hover:bg-offwhite hover:text-obsidian"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-offwhite/10 pt-6 text-sm text-offwhite/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Carlos Simbaña. Todos los derechos reservados.</p>
          <p>Desarrollo soluciones digitales.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;