import { Typography } from "@mui/material";
import { skillsData } from "../../Data/skills";
import TechCard from "../Skills/TechCard";

export default function MySkills() {
  return (
    <section id="tech-skills">
      <Typography
        component="div"
        variant="h3"
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        Technical Skills
      </Typography>
      <div className="card-layout">
        {skillsData.map((skill) => (
          <TechCard skill={skill} key={skill.category} />
        ))}
      </div>
    </section>
  );
}
