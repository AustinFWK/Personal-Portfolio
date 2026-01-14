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
};

export type skills = {
  category: string;
  icons: SkillIcon[];
};

export const skillsData: skills[] = [
  {
    category: "Frontend",
    icons: [
      { icon: FaReact, color: "#61dafb" },
      { icon: SiTypescript, color: "#3178c6" },
      { icon: FaHtml5, color: "#e34f26" },
      { icon: FaCss3Alt, color: "#1572b6" },
      { icon: SiMui, color: "#007fff" },
    ],
  },

  {
    category: "Backend",
    icons: [
      { icon: FaPython, color: "#3776ab" },
      { icon: SiFastapi, color: "#009688" },
      { icon: SiExpress, color: "#000000" },
      { icon: SiSqlite, color: "#0690cf" },
    ],
  },

  {
    category: "Dev Tools",
    icons: [
      { icon: FaGithub },
      { icon: VscVscodeInsiders, color: "#007acc" },
      { icon: SiXcode, color: "#147efb" },
      { icon: FaNodeJs, color: "#339933" },
    ],
  },
];
