import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-offwhite px-6 pt-32 md:pt-40"
    >
      <div className="absolute left-0 top-28 h-72 w-72 rounded-full bg-nude/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-ivory blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-nude bg-ivory px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-obsidian/60">
            Software Developer · SaaS · Web Solutions
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-obsidian md:text-7xl">
            Diseño y desarrollo soluciones de software para negocios modernos.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-obsidian/70">
            Ayudo a empresas y emprendimientos a transformar ideas y procesos
            en productos digitales funcionales, escalables y bien estructurados.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects">Ver proyectos</Button>
            <Button href="#about" variant="secondary">
              Sobre mí
            </Button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-nude pt-6">
            <div>
              <p className="text-2xl font-extrabold">React</p>
              <p className="mt-1 text-sm text-obsidian/60">Frontend</p>
            </div>

            <div>
              <p className="text-2xl font-extrabold">SaaS</p>
              <p className="mt-1 text-sm text-obsidian/60">Producto</p>
            </div>

            <div>
              <p className="text-2xl font-extrabold">UI/UX</p>
              <p className="mt-1 text-sm text-obsidian/60">Experiencia</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[3rem] bg-nude/40" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-nude bg-ivory p-3 shadow-sm">
            <img
              src="/assets/images/hero.jpeg"
              alt="Foto profesional"
              className="h-[540px] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-7 -left-5 rounded-3xl border border-nude bg-offwhite px-6 py-5 shadow-sm">
            <p className="text-sm font-bold text-obsidian">
              Desarrollo orientado a resultados
            </p>
            <p className="mt-1 text-xs text-obsidian/60">
              Software · Automatización · Optimización
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;