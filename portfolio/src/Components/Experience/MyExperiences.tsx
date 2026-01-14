import ExperienceCard from "./ExperienceCard";
import { Typography } from "@mui/material";
import { experiences } from "../../Data/experience";

export default function MyExperiences() {
  <section id="experience">
    <Typography
      component="div"
      variant="h3"
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      Experience
    </Typography>
    <div className="card-layout">
      {experiences.map((exp) => (
        <ExperienceCard experience={exp} />
      ))}
    </div>
  </section>;
}
