import React from "react";
import { Bluesvg } from "./Iconsvg";
import { Col, Container, Row } from "react-bootstrap";
import Workings from "../assets/images/png2/Working.png"

const Working = () => {
  return (
    <section className="Bg-sky">
      <Container className="custom_container py-5">
        <div className="d-flex justify-content-center mb-2">
          <Bluesvg />
        </div>
        <h2 className="ff_outfit fw-medium fs_lg text-lightblack text-center">
          How it’s working
        </h2>
        <Row className="align-items-center mt-4">
          <Col lg={6}>
            <img className="w-75" src={Workings} alt="workings" />
          </Col>
          <Col lg={6}>
            <div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Working;
