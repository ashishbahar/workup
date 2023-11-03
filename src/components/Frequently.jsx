import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Frequently_img from "../assets/images/png2/Awesome.png";
import { Bluesvg } from "./Iconsvg";

const Frequently = () => {
  return (
    <section>
      <Container className="custom_container mt-5">
        <div className="d-flex justify-content-center mb-2"><Bluesvg/></div>
        <h2 className="text-center text_lightblack fs_lg fw-medium ff_outfit">
          Frequently Awesome Questions
        </h2>
        <Row className="align-items-center  py-4">
          <Col lg={5} className="d-flex justify-content-center">
            <img className="w-100" src={Frequently_img} alt="Frequently_img" />
          </Col>
          <Col lg={7}>
            <div className="ps-4 pt-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="w-100 bg-transparent">
                  <Accordion.Header>
                    Q1 What is WorkUp's visionary approach?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="w-100 bg-transparent">
                  <Accordion.Header>
                    Q2 How does WorkUp tackle financial control challenges using
                    AI?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="w-100 bg-transparent">
                  <Accordion.Header>
                    Q3 How does WorkUp's real-time automation set it apart in
                    the realm of finance?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="w-100 bg-transparent">
                  <Accordion.Header>
                    Q4 How does WorkUp redefine the role of accounting
                    professionals with automation?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="w-100 bg-transparent ">
                  <Accordion.Header>
                    Q5 Why is WorkUp the perfect choice for businesses seeking
                    financial empowerment?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="w-100 bg-transparent ">
                  <Accordion.Header>
                    Q6 How does WorkUp showcase its genuine commitment to
                    businesses' success?
                  </Accordion.Header>
                  <Accordion.Body className="width_FreQ">
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Frequently;
