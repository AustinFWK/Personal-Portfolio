import DiscordBot from "./discordBot";
import EclipseProject from "./eclipseProject";
import HabitTracker from "./habitTracker";

export default function MyProjects() {
  return (
    <div>
      <h1>Projects</h1>
      <HabitTracker />
      <EclipseProject />
      <DiscordBot />
    </div>
  );
}
