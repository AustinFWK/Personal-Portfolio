import type { IconType } from "react-icons";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiXcode,
  SiTypescript,
  SiMui,
  SiSqlite,
  SiFastapi,
  SiExpress,
} from "react-icons/si";

export type SkillIcon = {
  icon: IconType;
  color?: string;
  tooltip: string;
};

export type skills = {
  category: string;
  icons: SkillIcon[];
};

export const skillsData: skills[] = [
  {
    category: "Frontend",
    icons: [
      { icon: FaReact, color: "#61dafb", tooltip: "React" },
      { icon: SiTypescript, color: "#3178c6", tooltip: "TypeScript" },
      { icon: FaHtml5, color: "#e34f26", tooltip: "HTML5" },
      { icon: FaCss3Alt, color: "#1572b6", tooltip: "CSS3" },
      { icon: SiMui, color: "#007fff", tooltip: "Material-UI" },
    ],
  },

  {
    category: "Backend",
    icons: [
      { icon: FaPython, color: "#3776ab", tooltip: "Python" },
      { icon: SiFastapi, color: "#009688", tooltip: "FastAPI" },
      { icon: SiExpress, color: "#000000", tooltip: "Express" },
      { icon: SiSqlite, color: "#0690cf", tooltip: "SQLite" },
    ],
  },

  {
    category: "Dev Tools",
    icons: [
      { icon: FaGithub, tooltip: "GitHub" },
      { icon: VscVscodeInsiders, color: "#007acc", tooltip: "VSCode" },
      { icon: SiXcode, color: "#147efb", tooltip: "Xcode" },
      { icon: FaNodeJs, color: "#339933", tooltip: "Node.js" },
    ],
  },
];
