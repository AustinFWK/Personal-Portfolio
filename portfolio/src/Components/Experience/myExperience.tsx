import DevYoungstown from "./devYoungstown";
import SWEYSU from "./sweYSU";
import UndergraduateResearch from "./undergradResearch";

export default function MyExperience() {
  return (
    <div id="experience">
      <h1 style={{ textAlign: "center" }}>Experience</h1>
      <div className="card-layout">
        <DevYoungstown />
        <SWEYSU />
        <UndergraduateResearch />
      </div>
    </div>
  );
}
