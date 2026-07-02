import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-offwhite px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías que uso para construir soluciones digitales."
          description="Trabajo con herramientas modernas para desarrollar interfaces, conectar servicios, manejar datos y desplegar productos web."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-[2rem] border border-nude bg-ivory p-7"
            >
              <h3 className="mb-6 text-2xl font-extrabold text-obsidian">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="group rounded-2xl border border-nude bg-offwhite p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <Icon className="text-3xl text-obsidian transition duration-300 group-hover:scale-110" />
                      <p className="mt-4 text-sm font-bold text-obsidian">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;