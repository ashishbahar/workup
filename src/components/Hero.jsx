import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { ArrowIcon } from "./Icon";
import mainimg from "../assets/images/png/heroimg.png";
const Hero = () => {
  return (
    <div className="hero_linear">
      <Header />
      <Container className="custom_container py-4 sm:py-5">
        <h1 className=" text-center ff_outfit text_black leading_120 fw-semibold fs_xl">
          Superpower your business finance
        </h1>
        <p className=" ff_outfit fw-normal pb-2 fs_xlg text-center text-linear mt-3 pt-1">
          Empowering Autopilot Automation
        </p>
        <div className="hero_input position-relative mt-4   sm:mt-5  mx-auto py-2 ps-3 sm:ps-4 pe-2">
          <div className="hero_shadow z-n1 position-absolute "></div>
          <form action="">
            <input
              required
              type="email"
              className="border-0 w-85 w_75 w-85"
              placeholder="Enter email to join waitlist"
            />
            <button className="hero_btn w_25  border-0">
              <ArrowIcon />
            </button>
          </form>
        </div>
        <img className=" w-100 py-4 my-3" src={mainimg} alt="mainimg" />
      </Container>
    </div>
  );
};

export default Hero;
