import Brightness4Icon from "@mui/icons-material/Brightness4";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PsychologyIcon from "@mui/icons-material/Psychology";
import type { SvgIconComponent } from "@mui/icons-material";

export type project = {
  svgIcon?: SvgIconComponent;
  title: string;
  description: string;
  technologies: string[];
  repo_link: string;
  repo_owner: string;
  repo_name: string;
  demo_video?: string;
};

export const projects: project[] = [
  {
    svgIcon: PsychologyIcon,
    title: "Habit Tracker",
    description:
      "I developed a habit tracking web application that allows users to enter a journal entry about what they did during the day and also log how their mood was that day (very bad, neutral, very good, etc.). The user's entry is then sent to the backend where I use an anthropic AI model to analyze the entry and provide feedback on the user's habits and ways they can improve their habits through small daily changes.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Node.js",
      "FastAPI",
      "Anthropic API",
      "SQLite",
    ],
    repo_link: "https://github.com/AustinFWK/HabitTracker",
    repo_owner: "AustinFWK",
    repo_name: "HabitTracker",
  },

  {
    svgIcon: Brightness4Icon,
    title: "Ohio Eclipse Web App",
    description:
      "During my first ever hackathon in 2024, I developed a web application centralized around backend functionality that obtained the user's location, and provided routes to cities based in Ohio that had the best viewing experience for the 2024 solar eclipse.",
    technologies: ["React(JS)", "Node.js", "Python", "Flask", "GoogleMaps API"],
    repo_link: "https://github.com/AustinFWK/hackysu-2024",
    repo_owner: "AustinFWK",
    repo_name: "hackysu-2024",
  },

  {
    svgIcon: SmartToyIcon,
    title: "Valorant Patch Notes Discord Bot",
    description:
      "I developed a discord bot that automatically scrapes the Valorant patchnotes page and posts them in a designated discord channel whenever a new patch is released.",
    technologies: ["Python", "Discord.py", "BeautifulSoup4", "Selenium"],
    repo_link: "https://github.com/AustinFWK/valorant-news-bot",
    repo_owner: "AustinFWK",
    repo_name: "valorant-news-bot",
  },
];
