import DevYoungstown from "./devYoungstown";
import SWEYSU from "./sweYSU";
import UndergraduateResearch from "./undergradResearch";
import { Typography, Box, Card, CardContent } from "@mui/material";

export default function ExperienceCard() {
  return (
    <section id="experience">
      <Typography
        component="div"
        variant="h3"
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        Experience
      </Typography>
      <div className="card-layout">
        <DevYoungstown />
        <SWEYSU />
        <UndergraduateResearch />
      </div>
    </section>
  );
}
