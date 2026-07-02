import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <section id="about" className="bg-ivory px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Construyo soluciones digitales con enfoque práctico y profesional."
          description="Mi enfoque no se limita a crear interfaces: busco entender necesidades reales, proponer soluciones claras y desarrollar productos que ayuden a optimizar procesos."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-nude bg-offwhite p-7">
            <h3 className="text-xl font-bold">Software útil</h3>
            <p className="mt-4 leading-7 text-obsidian/70">
              Desarrollo herramientas digitales pensadas para resolver problemas
              reales en empresas, emprendimientos y proyectos SaaS.
            </p>
          </div>

          <div className="rounded-3xl border border-nude bg-offwhite p-7">
            <h3 className="text-xl font-bold">Adaptabilidad</h3>
            <p className="mt-4 leading-7 text-obsidian/70">
              Me adapto a nuevas tecnologías, metodologías y retos, manteniendo
              siempre una mentalidad de aprendizaje continuo.
            </p>
          </div>

          <div className="rounded-3xl border border-nude bg-offwhite p-7">
            <h3 className="text-xl font-bold">Visión de producto</h3>
            <p className="mt-4 leading-7 text-obsidian/70">
              Busco que cada proyecto sea funcional, ordenado, escalable y
              alineado con los objetivos reales del usuario o negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;