import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Welcome section</p>
      </div>
      <div className="card">
        <p>Experience section</p>
      </div>
      <div>
        <p>Projects section</p>
      </div>
      <div>
        <p>Contact section</p>
      </div>
    </>
  );
}

export default App;
