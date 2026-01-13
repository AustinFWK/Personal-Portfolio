import { Typography } from "@mui/material";

export default function MySkills() {
  return (
    <section id="tech-skills">
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        Technical Skills
      </Typography>
      <div className="card-layout">{/* Skill cards would go here */}</div>
    </section>
  );
}
