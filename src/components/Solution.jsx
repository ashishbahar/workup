import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MISSIONS from "../assets/images/png2/Missions.png";
import VISION from "../assets/images/png2/Vision.png";
import VALUES from "../assets/images/png2/Values.png";

const Solution = () => {
  return (
    <section className="Solution_padding">
      <Container className="custom_container">
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <div className="line_Blue"></div>
            <h2 className="text_lightblack fs_lg fw-medium ff_Raleway">
              Solution
            </h2>
            <p className="Paragraph Solution_max">
              We grasp the struggles of business finance management and the
              risks of losing control. WorkUp's AI automation solution restores
              control, automating tax payments, securing profits, and managing
              expenses with ease
            </p>
          </Col>
          <Col lg={6} className="position-relative">
            <div className="d-flex justify-content-center Mission_translatey">
              <img className="w-lg-position" src={MISSIONS} alt="MISSIONS" />
            </div>
            <div className="d-flex Vision_translatey justify-content-lg-start justify-content-center">
              <img className="w-lg-position" src={VISION} alt="VISION" />
              <img className="w-lg-position" src={VALUES} alt="VALUES" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solution;
