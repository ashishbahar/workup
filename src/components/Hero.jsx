import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { ArrowIcon } from "./Icon";

const Hero = () => {
  return (
    <div className="hero_linear">
      <Header />
      <Container className="custom_container py-5">
        <h1 className=" text-center">Superpower your business finance </h1>
        <p className=" text-center text-linear mt-3 pt-1">
          Empowering Autopilot Automation
        </p>
        <div className="hero_input mx-auto py-2 ps-4 pe-2">
          <form action="">
            <input
              required
              type="email"
              className="border-0 w-85 "
              placeholder="Enter email to join waitlist"
            />
            <button className="hero_btn border-0">
              <ArrowIcon />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
