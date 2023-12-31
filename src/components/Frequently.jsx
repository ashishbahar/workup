import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Frequently_img from "../assets/images/webp/Awesome.webp";
import vectorFreq from "../assets/images/png/Vector_FreQ.png";
import { Bluesvg } from "./Iconsvg";

const Frequently = () => {
  return (
    <section className=" position-relative">
      <img
        className="vectorFreq d-none d-sm-block"
        src={vectorFreq}
        alt="vectorFreq"
      />
      <Container className="custom_container  mt-4 mt-md-5">
        <div className="d-flex justify-content-center mb-2">
          <Bluesvg />
        </div>
        <h2 className="text-center text_lightblack fs_lg fw-medium ff_outfit lineheight_normal mb-2">
          Frequently Awesome Questions
        </h2>
        <Row className="align-items-center py-xl-5 py-4 ">
          <Col
            data-aos-duration="2000"
            data-aos="zoom-out-right"
            lg={5}
            md={10}
            className="d-flex mx-auto justify-content-center"
          >
            <img className="w-100" src={Frequently_img} alt="Frequently_img" />
          </Col>
          <Col data-aos-duration="2000" data-aos="zoom-out-left" lg={7}>
            <div className="ps-md-4 ">
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
                    Q3 How does WorkUp's real-times automation on set it apart
                    in the realm of finance?
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
                  <Accordion.Header className="">
                    Q6 How does WorkUp showcase on its genuineon commitment to
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
