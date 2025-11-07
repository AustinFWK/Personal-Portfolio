import DevYoungstown from "./devYoungstown";
import SWEYSU from "./sweYSU";
import UndergraduateResearch from "./undergradResearch";

export default function MyExperience() {
  return (
    <div
      id="experience"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <h1>Experience</h1>
      <DevYoungstown />
      <SWEYSU />
      <UndergraduateResearch />
    </div>
  );
}
