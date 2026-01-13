import { Typography } from "@mui/material";
import FrontEnd from "./SpecificSection/frontEnd";
import DevTools from "./SpecificSection/devTools";
import BackEnd from "./SpecificSection/backEnd";

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
        <FrontEnd />
        <BackEnd />
        <DevTools />
      </div>
    </section>
  );
}
