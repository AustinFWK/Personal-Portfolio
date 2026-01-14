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

export type skills = {
  category: string;
  icons: IconType[];
};

export const skillsData: skills[] = [
  {
    category: "Frontend",
    icons: [FaReact, SiTypescript, FaHtml5, FaCss3Alt, SiMui],
  },

  {
    category: "Backend",
    icons: [FaPython, SiFastapi, SiExpress, SiSqlite],
  },

  {
    category: "Dev Tools",
    icons: [FaGithub, VscVscodeInsiders, SiXcode, FaNodeJs],
  },
];
