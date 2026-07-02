import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRender,
  SiVercel,
  SiVite,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Base de datos",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firestore", icon: SiFirebase },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];