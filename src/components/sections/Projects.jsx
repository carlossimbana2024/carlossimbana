import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-offwhite px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Proyectos"
          title="Trabajos enfocados en resolver necesidades reales."
          description="Una selección de proyectos donde combino desarrollo frontend, lógica de negocio y enfoque de producto."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;    