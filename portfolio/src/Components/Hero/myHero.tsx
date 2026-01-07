import { Typography } from "@mui/material";
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
      <Typography variant="h1">Welcome to My Portfolio</Typography>
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
          <Socials />
        </div>
      </div>
    </div>
  );
}
