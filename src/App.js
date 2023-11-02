import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Feature from "./components/Feature";
import Solution from "./components/Solution";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";
import Working from "./components/Working";

function App() {
  return (
    <div>
      <Hero />
      <Feature/>
      <OurMission/>
      <Solution/>
      <Working/>
      <Frequently/>
      <Footer/>
    </div>
  );
}

export default App;
