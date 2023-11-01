import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Feature from "./components/Feature";
import Solution from "./components/Solution";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Problem from "./components/Problem";

function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <OurMission />
      <Solution />
      <Problem />
    </div>
  );
}

export default App;
