import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero_linear">
      <Header />
      <Container className="custom_container py-5">
        <h1 className=" text-center">Superpower your business finance </h1>
        <p className=" text-center text-linear mt-3 pt-1">Empowering Autopilot Automation</p>
      </Container>
    </div>
  );
};

export default Hero;
