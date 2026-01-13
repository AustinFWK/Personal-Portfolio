import DevYoungstown from "./devYoungstown";
import SWEYSU from "./sweYSU";
import UndergraduateResearch from "./undergradResearch";
import { Typography } from "@mui/material";

export default function MyExperience() {
  return (
    <section id="experience">
      <Typography
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
