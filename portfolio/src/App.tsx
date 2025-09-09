import "./index.css";
import MyExperience from "./Components/Experience/myExperience.tsx";
import MyProjects from "./Components/Projects/myProjects.tsx";
import ContactMe from "./Components/Contact/myContact.tsx";
import MyHero from "./Components/Hero/myHero.tsx";

function App() {
  return (
    <div>
      <MyHero />
      <MyExperience />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
