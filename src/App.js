import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Feature from "./components/Feature";
import Solution from "./components/Solution";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Problem from "./components/Problem";
import Plans from "./components/Plans";
import Update from "./components/Update";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";
import Working from "./components/Working";
import Waitlist from "./components/Waitlist";
import zigzag from "../src/assets/images/png/waitlistimg.png";
import zigzag2 from "../src/assets/images/png/waitlistimg2.png";
function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <OurMission />
      <Solution />
      <Waitlist waitlist="d-none" translate="" />
      <Problem />
      <Working />
      <Update />
      <Waitlist waitlist="d-none" translate="" />
      <Plans />
      <Frequently />
      <Waitlist
        waitlist=""
        translate="translate"
        zigzag={zigzag}
        zigzag2={zigzag2}
      />
      <Footer />
    </div>
  );
}

export default App;
