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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Hero Image"
          className="responsive-image"
        />
        <p>
          Hi! I'm Austin Winger-Kailer, a full stack web developer with a
          passion for innovation and solving problems through the means of
          software.
        </p>
      </div>
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
