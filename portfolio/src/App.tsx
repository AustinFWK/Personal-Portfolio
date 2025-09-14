import "./index.css";
import MyExperience from "./Components/Experience/myExperience.tsx";
import MyProjects from "./Components/Projects/myProjects.tsx";
import MyHero from "./Components/Hero/myHero.tsx";
import NavBar from "./Components/Nav/navBar.tsx";

function App() {
  return (
    <div>
      <NavBar />
      <MyHero />
      <MyExperience />
      <MyProjects />
    </div>
  );
}

export default App;
