import DiscordBot from "./discordBot";
import EclipseProject from "./eclipseProject";
import HabitTracker from "./habitTracker";

export default function MyProjects() {
  return (
    <div
      id="projects"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <h1>Projects</h1>
      <HabitTracker />
      <EclipseProject />
      <DiscordBot />
    </div>
  );
}
