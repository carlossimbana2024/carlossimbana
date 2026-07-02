function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-obsidian/50">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight text-obsidian md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-obsidian/70">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;