function Button({ children, href = "#", variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "border-obsidian bg-obsidian text-offwhite hover:bg-transparent hover:text-obsidian",
    secondary:
      "border-obsidian/20 bg-transparent text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-offwhite",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}

export default Button;