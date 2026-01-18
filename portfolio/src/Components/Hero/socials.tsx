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
        aria-label="LinkedIn"
        sx={{
          color: "text.primary",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.main",
          },
          transform: "scale(2.0)",
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/AustinFWK"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        sx={{
          color: "text.primary",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.main",
          },
          transform: "scale(2.0)",
        }}
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
}
