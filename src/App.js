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
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Preloader from "./components/Preloader";
import Topbutton from "./components/Topbutton";
function App() {
  // preloader-start
  const [loading, setLoading] = useState(true);
  
  // Aos-start

  useEffect(() => {
    Aos.init({ once: true });
    // Aos-end
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 3000);
    document.body.classList.add("overflow-hidden");
  }, []);

  //  preloader-end
  return (
    <div className=" overflow-hidden">
      {loading && <Preloader />}
      <Hero />
      <Feature />
      <OurMission />
      <Solution />
      <Waitlist
        maxwidth=""
        text="our waitlist"
        waitlist="d-none"
        translate=""
      />
      <Problem />
      <Working />
      <Update />
      <Waitlist
        maxwidth=""
        text="our waitlist"
        waitlist="d-none"
        translate=""
      />
      <Plans />
      <Frequently />
      <Waitlist
        maxwidth="max_width"
        waitlist=""
        text="Free Demo"
        translate="translate"
        zigzag={zigzag}
        zigzag2={zigzag2}
      />
      <Footer />
      <Topbutton />
    </div>
  );
}

export default App;
