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
          style={{
            width: "300px",
            height: "350px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            Hello! I'm Austin Winger-Kailer
          </Typography>
          <Typography variant="h5">
            I'm a Full Stack Web Developer based out of Youngstown, Ohio. I love
            to build projects from the ground up and slowly watch them piece
            together into something special{" "}
          </Typography>
          <Typography variant="h6">
            I'm also an avid coffee shop enjoyer
          </Typography>
          <Socials />
        </div>
      </div>
    </div>
  );
}
