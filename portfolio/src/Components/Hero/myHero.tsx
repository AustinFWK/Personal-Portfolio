import { Typography, Button } from "@mui/material";
import Socials from "./socials";

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
      <Typography variant="h1" sx={{ marginBottom: "2rem", marginTop: "1rem" }}>
        Welcome to My Portfolio
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          padding: ".5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Hero Image"
          className="responsive-image"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p>
            Austin Winger-Kailer
            <br /> Full Stack Web Developer <br /> Full time coffee shop enjoyer
          </p>
          <Button
            href="SWE_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            Resume
          </Button>
          <Socials />
        </div>
      </div>
    </div>
  );
}
