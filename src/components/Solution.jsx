import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MISSIONS from "../assets/images/Webp/Missions.webp";
import VISION from "../assets/images/Webp/Vision.webp";
import VALUES from "../assets/images/Webp/Values.webp";
import Dots1 from "../assets/images/Webp/Dots_one.webp";
import Dots2 from "../assets/images/Webp/Dots_Two.webp";
import Dots3 from "../assets/images/Webp/Dots_Sol.webp";
import zigzag from "../assets/images/Webp/zigzag.webp";

const Solution = () => {
  return (
    <section className="Solution_padding position-relative">
      <img className="abs_Solution_one" src={Dots1} alt="Dots1" />
      <img className="abs_Solution_Two" src={Dots2} alt="Dots2" />
      <img
        className="abs_Solution_Three d-none d-lg-block"
        src={Dots3}
        alt="Dots3"
      />
      <img className="abs_Solution_zigzag " src={zigzag} alt="zigzag" />
      <Container className="custom_container position-relative z-1 py-4 py-lg-0">
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <div className=" position-relative z-1 text-center pt-3 pt-lg-0 mt-4 mt-lg-0 text-lg-start">
             
              <div className="line_Blue"></div>
              <h2 className="text_lightblack fs_lg fw-medium ff_Raleway">
                Solution
              </h2>
              <p className="Paragraph Solution_max">
                We grasp the struggles of business finance management and the
                risks of losing control. WorkUp's AI automation solution
                restores control, automating tax payments, securing profits, and
                managing expenses with ease
              </p>
            </div>
          </Col>
          <Col lg={6} className="position-relative z-1">
            <div className="d-flex justify-content-center Mission_translatey">
              <img className="w-lg-position scale_sol" src={MISSIONS} alt="MISSIONS" />
            </div>
            <div className="d-flex Vision_translatey justify-content-lg-start justify-content-center">
              <img className="w-lg-position scale_sol" src={VISION} alt="VISION" />
              <img className="w-lg-position scale_sol" src={VALUES} alt="VALUES" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solution;
