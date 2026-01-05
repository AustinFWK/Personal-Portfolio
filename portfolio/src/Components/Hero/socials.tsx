import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export default function Socials() {
  return (
    <div className="socials-layout">
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/austin-winger-kailer-761170295/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/AustinFWK/HabitTracker"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
}
