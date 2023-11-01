import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Solution from "./components/Solution";
import Feature from "./components/Feature";

function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <OurMission />
      <Solution />
    </div>
  );
}

export default App;
