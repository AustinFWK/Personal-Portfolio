import "./index.css";
import MyExperience from "./Components/Experience/myExperience.tsx";
import MyProjects from "./Components/Projects/myProjects.tsx";
import MyHero from "./Components/Hero/myHero.tsx";
import NavBar from "./Components/Nav/navBar.tsx";
import { Fade } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Fade in={loaded} timeout={600} style={{ transitionDelay: loaded ? "0ms" : "0ms" }}>
        <div>
          <NavBar />
        </div>
      </Fade>
      <Fade in={loaded} timeout={600} style={{ transitionDelay: loaded ? "200ms" : "0ms" }}>
        <div>
          <MyHero />
        </div>
      </Fade>
      <Fade in={loaded} timeout={600} style={{ transitionDelay: loaded ? "400ms" : "0ms" }}>
        <div>
          <MyExperience />
        </div>
      </Fade>
      <Fade in={loaded} timeout={600} style={{ transitionDelay: loaded ? "600ms" : "0ms" }}>
        <div>
          <MyProjects />
        </div>
      </Fade>
    </div>
  );
}

export default App;
