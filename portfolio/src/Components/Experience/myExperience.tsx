import DevYoungstown from "./devYoungstown";
import SWEYSU from "./sweYSU";
import UndergraduateResearch from "./undergradResearch";

export default function MyExperience() {
  return (
    <section id="experience">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Experience</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "2rem",
          justifyItems: "center",
        }}
      >
        {/*<div className="card-layout">*/}
        <DevYoungstown />
        <SWEYSU />
        <UndergraduateResearch />
        {/*</div>*/}
      </div>
    </section>
  );
}
