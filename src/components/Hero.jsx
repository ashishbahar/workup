import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { ArrowIcon } from "./Icon";
import mainimg from "../assets/images/png/heroimg.png";
import positionimg1 from "../assets/images/png/heroposition1.png";
import positionimg2 from "../assets/images/png/heroposition2.png";
import positionimg3 from "../assets/images/png/heroposition3.png";
const Hero = () => {
  return (
    <div className="hero_linear position-relative ">
      <Header />
      <img
        className=" position-absolute top-0 end-0 positionimg1 "
        src={positionimg1}
        alt="positionimg1"
      />
      <img
        className=" position-absolute  end-0 positionimg2  "
        src={positionimg2}
        alt="positionimg2"
      />
      <img
        className=" position-absolute bottom-0  start-0 positionimg3  "
        src={positionimg3}
        alt="positionimg3"
      />
      <img
        className=" position-absolute  start-0 positionimg4  "
        src={positionimg2}
        alt="positionimg4"
      />
      <img
        className=" position-absolute bottom-0  end-0 positionimg5  "
        src={positionimg2}
        alt="positionimg5"
      />
      <Container
        data-aos-duration="2000"
        data-aos-delay="3000"
        data-aos="fade-up"
        className="custom_container position-relative z-1 py-4 py-lg-5"
      >
        <h1 className=" text-center mb-0 ff_outfit text_black leading_120 fw-semibold fs_xl">
          Superpower your business finance
        </h1>
        <p className=" ff_outfit fw-normal mx-auto hero_max_pera mb-0 pb-2 fs_xlg text-center text-linear mt-3 pt-1">
          Empowering Autopilot Automation
        </p>
        <div className="hero_input position-relative mt-4 mt-lg-5   mx-auto py-2  sm:ps-4 pe-2">
          <div className="hero_shadow z-n1 position-absolute "></div>
          <form action="">
            <input
              required
              type="email"
              className="border-0  w_75 w-85"
              placeholder="Enter email to join waitlist"
            />
            <button className="hero_btn w_25  border-0">
              <ArrowIcon />
            </button>
          </form>
        </div>
        <img className=" w-100 pt-4 mt-3" src={mainimg} alt="mainimg" />
      </Container>
    </div>
  );
};

export default Hero;
