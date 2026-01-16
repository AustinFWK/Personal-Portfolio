import Brightness4Icon from "@mui/icons-material/Brightness4";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PsychologyIcon from "@mui/icons-material/Psychology";
import type { SvgIconComponent } from "@mui/icons-material";

export type Project = {
  svgIcon: SvgIconComponent;
  title: string;
  description: string;
  bullet_points: string[];
  technologies: string[];
  repo_link: string;
  repo_owner: string;
  repo_name: string;
  demo_video?: string;
};

export const projects: Project[] = [
  {
    svgIcon: PsychologyIcon,
    title: "Habit Tracker",
    description:
      "AI-powered habit tracker with journaling, mood analysis, and personalized feedback.",
    bullet_points: [
      "Implemented AI-driven habit recommendations using Anthropic's Claude API .",
      "Developed a full-stack application with React, TypeScript, FastAPI, and SQLite.",
      "Integrated mood tracking and journaling features for comprehensive habit analysis.",
    ],
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
      "Location-conscious Web App for finding the best viewing locations for the 2024 solar eclipse in Ohio.",
    bullet_points: [
      "Utilized geolocation to detect user location.",
      "Integrated Google Maps API to display optimal viewing spots along line of totality.",
      "Used Flask to serve backend API endpoints.",
    ],
    technologies: ["React(JS)", "Node.js", "Python", "Flask", "GoogleMaps API"],
    repo_link: "https://github.com/AustinFWK/hackysu-2024",
    repo_owner: "AustinFWK",
    repo_name: "hackysu-2024",
  },

  {
    svgIcon: SmartToyIcon,
    title: "Valorant Patch Notes Discord Bot",
    description:
      "Developed a discord bot that automatically tracks and scrapes the Valorant patchnotes page and posts them in a designated discord channel whenever a new patch is released.",
    bullet_points: [
      "Implemented web scraping using BeautifulSoup4 and Selenium to extract patch notes from the Valorant website.",
      "Created a Discord bot using Discord.py to post updates in real-time to a specified channel.",
    ],
    technologies: ["Python", "Discord.py", "BeautifulSoup4", "Selenium"],
    repo_link: "https://github.com/AustinFWK/valorant-news-bot",
    repo_owner: "AustinFWK",
    repo_name: "valorant-news-bot",
  },
];
