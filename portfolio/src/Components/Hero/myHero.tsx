import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function MyHero() {
  return (
    <div
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Welcome to My Portfolio</h1>
      <img src="placeholder.jpg" alt="Hero Image" />
      <p>
        Hi! I'm Austin Winger-Kailer, a full stack web developer with a passion
        for innovation and solving problems through the means of software.
      </p>
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
