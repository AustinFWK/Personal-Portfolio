import "./index.css";
import MyExperience from "./Components/Experience/myExperience.tsx";
import MyProjects from "./Components/Projects/myProjects.tsx";
import MyHero from "./Components/Hero/myHero.tsx";

function App() {
  return (
    <div>
      <MyHero />
      <MyExperience />
      <MyProjects />
    </div>
  );
}

export default App;
