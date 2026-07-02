function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-nude bg-ivory transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden bg-nude">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-obsidian/50">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-obsidian">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-obsidian/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-nude bg-offwhite px-3 py-1 text-xs font-semibold text-obsidian/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="mt-6 inline-flex text-sm font-bold text-obsidian transition hover:opacity-60"
        >
          Ver proyecto →
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;