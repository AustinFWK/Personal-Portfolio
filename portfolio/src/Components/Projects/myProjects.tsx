import DiscordBot from "./discordBot";
import EclipseProject from "./eclipseProject";
import HabitTracker from "./habitTracker";
import { Typography } from "@mui/material";

export default function MyProjects() {
  return (
    <div id="projects">
      <Typography
        component="div"
        variant="h3"
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        Projects
      </Typography>
      <div className="card-layout">
        <HabitTracker />
        <EclipseProject />
        <DiscordBot />
      </div>
    </div>
  );
}
