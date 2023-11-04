import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Group from "../assets/images/webp/group_discuss.webp"
import Group_two from "../assets/images/webp/group_Two.webp"
import Three_dots from "../assets/images/webp/Three_Dots.webp"

const OurMission = () => {
  return (
    <section className="Bg-sky position-relative">
      <img className="position_Our width_group" src={Group_two} alt="#" />
      <img className="Sol_dots_abs" src={Three_dots} alt="#" />
      <Container className="custom_container position-relative z-1">
        <Row className="align-items-center justify-content-center Our_padding">
          <Col className='mb-5 mb-lg-0'
            data-aos="fade-right"
            data-aos-duration="2000"
            lg={6}
            md={10}
            sm={9}
          >
            <img className=" w-100" src={Group} alt="Group" />
          </Col>

          <Col
            lg={6}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="d-flex flex-column align-items-end"
          >
            <div className=" text-center text-lg-start">
              <div className="line_Blue"></div>
              <h2 className="text_lightblack fs_lg fw-medium ff_Raleway lineheight_normal mb-3">
                Our Mission
              </h2>
              <p className="Paragraph Ourmax mb-0">
                Our mission is to harness the power of AI-driven automation to
                empower Australian businesses. We propel all sized businesses
                towards success by automating financial tasks, from tax payments
                to bank transfers, report building. Creating an ecosystem where
                AI acts as the autopilot for finance. Join us in building a
                future where businesses thrive effortlessly and reach new
                heights.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMission;
