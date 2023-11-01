import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Solution from "./components/Solution";

function App() {
  return (
    <div>
      <Hero />
      <OurMission/>
      <Solution/>
    </div>
  );
}

export default App;
