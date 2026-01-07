import DiscordBot from "./discordBot";
import EclipseProject from "./eclipseProject";
import HabitTracker from "./habitTracker";

export default function MyProjects() {
  return (
    <div id="projects">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Projects</h1>
      <div className="card-layout">
        <HabitTracker />
        <EclipseProject />
        <DiscordBot />
      </div>
    </div>
  );
}
