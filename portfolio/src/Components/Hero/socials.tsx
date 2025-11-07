import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Socials() {
  return (
    <div className="socials-layout">
      <a
        href="https://www.linkedin.com/in/austin-winger-kailer-761170295/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/AustinFWK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
      <a href="mailto:austin.wingerkailer0701@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
}
