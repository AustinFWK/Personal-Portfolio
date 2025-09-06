import "./index.css";
import AboutMe from "./Components/AboutMe/aboutMe.tsx";
import MyExperience from "./Components/Experience/myExperience.tsx";
import MyProjects from "./Components/Projects/myProjects.tsx";
import ContactMe from "./Components/Contact/myContact.tsx";

function App() {
  return (
    <div>
      <AboutMe />
      <MyExperience />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
