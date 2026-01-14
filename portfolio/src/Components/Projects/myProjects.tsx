import { Typography } from "@mui/material";
import { projects } from "../../Data/project";
import ProjectCard from "./ProjectCard";

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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
