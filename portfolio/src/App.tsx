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
    <Fade in={loaded} timeout={1100}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <NavBar />
        <MyHero />
        <MyExperience />
        <MyProjects />
      </div>
    </Fade>
  );
}

export default App;
