import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiBun,
  SiCanva,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}
s;

export const frontendSkills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap 5", icon: FaBootstrap },
];

export const toolsSkills: Skill[] = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vite", icon: SiVite },
  { name: "Bun", icon: SiBun },
  { name: "API Integration", icon: TbApi },
  { name: "Figma", icon: FaFigma },
  { name: "Canva", icon: SiCanva },
];
